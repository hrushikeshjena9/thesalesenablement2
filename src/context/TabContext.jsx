import { createContext, useContext, useState } from "react";
const TabContext = createContext();
export const TabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("Sign Up")
    const handleSetActiveTab = (tabName) => {
        setActiveTab(tabName)
        const newPath = `/${tabName.toLowerCase().replace(/\s+/g, "-")}`;
        window.history.pushState(null, "", newPath);
    }
    return (
        <TabContext.Provider value={{ activeTab, setActiveTab: handleSetActiveTab  }}>
            {children}
        </TabContext.Provider>
    )
}
export const useTab = () => useContext(TabContext)