import { createContext, useEffect, useState } from "react";
import dataFile from "../data/data.json";
import PropTypes from "prop-types"

export const DataContext = createContext({ datas: [] })

export const DataProvider = ({ children }) => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await Promise.resolve(dataFile);
            setDatas(response);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => { fetchData() }, []);

    if (loading) {
        return null
    }

    return (
        <DataContext.Provider value={{ datas }}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
};