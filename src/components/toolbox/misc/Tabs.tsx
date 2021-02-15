import React, { useState } from 'react'

interface TabsProps {
    tabs: string[]
    onChange: (ind: number) => void
    activeTab: number
}
const Tabs = ({tabs, activeTab, onChange}: TabsProps) => {

    return (
        <div className="tab-component">
            {tabs.map((tab_name: string, i: number) => 
                <div 
                    onClick={() => {
                        onChange(i);
                    }}
                    className={`tab_ ${i == activeTab ? `active` : ``}`} 
                    key={i}>{tab_name}</div>)}
        </div>)
}

export default Tabs