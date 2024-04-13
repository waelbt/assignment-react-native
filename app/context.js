import React from "react";

export const DataContext = React.createContext({
	data: [],
	addItem: () => {},
});

export default DataContext;
