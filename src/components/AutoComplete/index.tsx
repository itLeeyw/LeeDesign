import React, { FC, useState, ChangeEvent, ReactElement,KeyboardEvent, useEffect, useRef } from 'react';
import Input, { InputProps } from '../Input/';
import classNames from 'classnames';
import Icon from '../Icon';
import useDebounce from '../hooks/useDebounce';
import useClickOutside from '../hooks/useClickOutside';
import Transition from '../Transition'
interface DataSourceObject {
    value : string;
    number: number;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item:DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        value,
        renderOption,
        ...restProps
    } = props;

    const [ inputValue, setInputValue ] = useState(value as string);
    const [ suggestions, setSuggestions ] = useState<DataSourceType[]>([]);
    const [ loading, setLoading ] = useState(false);
    const [ showDropdown, setShowDropdown] = useState(false);
    const [ highlightIndex, setHighlightIndex] = useState(-1);
    const triggerSearch = useRef(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const debouncedValue = useDebounce(inputValue, 0);
    useClickOutside(componentRef, () => { setSuggestions([])});
    useEffect(() => {
        setShowDropdown(true);
        if (debouncedValue && triggerSearch.current ) {
            const results = fetchSuggestions(debouncedValue);
            if (results instanceof Promise) {
                setLoading(true);
                setInputValue(debouncedValue);
                results.then(data => {
                    setLoading(false);
                    setSuggestions(data)
                })
            } else {
                setSuggestions(results);
            }
        } else {
            setSuggestions([]);
        }
        setHighlightIndex(-1);
    }, [debouncedValue, fetchSuggestions]);

    const hightlight = (index: number) => {
        if ( index < 0 ) index = 0;
        if ( index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch(e.keyCode) {
            case 13:
                if (suggestions[highlightIndex]) {    
                    handleSelect(suggestions[highlightIndex]);
                }
                    
                break;
            case 38:
                hightlight(highlightIndex - 1);
                break;
            case 40:
                hightlight(highlightIndex + 1);
                break;
            case 27:
                setShowDropdown(false);
                setSuggestions([]);
                break;
            default:
                break;
        }
    }

    console.log(suggestions)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    }
    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value);
        setSuggestions([]);
        if(onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    }
    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item): item
    }
    const generateDropdown = () => {
        console.log(showDropdown,loading)
        return (
            <Transition
            in={showDropdown || loading}
            timeout={300}
            animation="zoom-in-top"
            >
                <ul className='lee-suggestion-list'>
                    {suggestions.map((item, index) => {
                        const classnames = classNames('suggestion-item', {
                            'item-highlighted': index === highlightIndex
                        })
                        return (
                            <li key={index} className={classnames} onClick={() => handleSelect(item)}>
                                {renderTemplate(item)}
                            </li>
                        )
                    })}
                </ul>
            </Transition>
        )
    }
    return (
        <div className="lee-auto-complete" ref={componentRef}>
                <Input 
                    value = {inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    {...restProps}
                />
                { loading && <ul><Icon className="suggstions-loading-icon" icon="spinner" spin /></ul>}
                { (suggestions.length > 0) && generateDropdown()}
        </div>
    )
}
export default AutoComplete;
