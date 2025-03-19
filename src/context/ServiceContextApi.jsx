import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
const ServiceContextApi = createContext();
export const ServiceApiProvider = ({ children }) => {
    const [serviceData, setServiceData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/all-services");
                const data = res.data;
                setServiceData(data);
            } catch (error) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <ServiceContextApi.Provider value={{ serviceData, loading, error }}>
            {children}
        </ServiceContextApi.Provider>
    );
};

// Custom Hook to Use Contact API Context
export const useApi = () => {
    return useContext(ServiceContextApi);
};
