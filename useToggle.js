import React, {useState, useEffect} from "react";

export const useDebounce = (defaultValue) => {
	const [value, setValue] = useState(defaultValue);
	
	const toggle = () => {
		setValue(value => !value);
	}
	
	return [value, toggle];
}