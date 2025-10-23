import { useRef,useState,useEffect, act } from "react"
import "../css/TabComponent.css"


function TabComponent(props) {

    const [activeTab,setActiveTab] = useState(props.arrayTabs[0].id)



    return (
        <div className="tab-container mb-4">
            {props.arrayTabs.map((tab) => (
                <button key={tab.id} className={`single-tab ${activeTab === tab.id ? "active" : ""}`} onClick={() => (setActiveTab(tab.id),props.returnTab(tab.id))}>{tab.label}</button>
            ))}
        </div>


    )
    
}


export default TabComponent