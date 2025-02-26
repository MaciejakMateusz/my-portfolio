import { useState, useEffect } from 'react';

export const useIntersectionObserver = (ref: any, options = {}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentElement = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            options
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [ref, options]);

    return isVisible;
};