import React, {useRef, useEffect} from "react";

export const useDebounce = (cb = () => {}, delay = 0) => {
	const timerRef = useRef();
	
	useEffect(() => {
		timerRef.current = setTimeout(cb, delay);
		return () => clearTimeout(timerRef.current);
	}, []);
	
	return [];
}