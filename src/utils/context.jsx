import { createContext, useMemo } from "react";
import dataFile from "../data/data.json";
import PropTypes from "prop-types";

export const DataContext = createContext({ datas: [] });

export const DataProvider = ({ children }) => {
    const datas = useMemo(() => dataFile, []);

    return (
        <DataContext.Provider value={{ datas }}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
};
