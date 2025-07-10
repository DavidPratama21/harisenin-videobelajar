import { useState } from "react";
import Tab from "../atoms/Tab";
const Tabs = ({ TabsList }) => {
    const [activeTab, setActiveTab] = useState(TabsList[0]);

    return (
        <div className="flex overflow-x-scroll no-scrollbar transition-all duration-300 ease-in-out">
            {TabsList.map((tab, id) => (
                <Tab
                    key={id}
                    active={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </Tab>
            ))}
        </div>
    );
};

export default Tabs;
