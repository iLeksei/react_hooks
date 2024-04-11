import React, {useState, useEffect} from "react";

export const useFetch = (url) => {
	const [data, setData] = useState();
	
	useEffect(() => {
		const abortController = new AbortController();
		fetch(url, {signal: abortController.signal})
			.then(res => res.json())
			.then(setData);
		
		return () => abortController.abort();
	}, [url]);
	
	return [data];
}