import React from "react";

export const DataContext = createContext({
	data: [],
	addItem: () => {},
});

export default DataContext;
