import React, {useState, useEffect} from "react";

export const useDebounce = () => {
	const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
	
	
	useEffect(() => {
		const onResize = () => {
			setWindowSize({width: window.innerWidth, height: window.innerHeight});
		}
		window.addEventListener("resize", onResize);
		return () = > removeEventListener("resize", onResize);
	}, []);
	
	return windowSize;
}