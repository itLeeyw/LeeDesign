import { useState, useEffect } from 'react';
function useDebounce(value: any, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDebouncedValue(value)
        }, delay);
        return () => { // return 一个清除函数，下次执行effect时会调用。
            clearTimeout(handler);
        }
    }, [value, delay])
    return debouncedValue;
}

export default useDebounce;