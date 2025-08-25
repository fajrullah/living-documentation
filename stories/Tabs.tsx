import React, { useState } from "react";
import "./tabs.css";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  /**
   * List of tabs with label + content
   */
  tabs: Tab[];
  /**
   * Default active tab index
   */
  defaultIndex?: number;
}

/**
 * UI component for tab navigation
 */
export const Tabs = ({ tabs, defaultIndex = 0 }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div>
      <div className="storybook-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={[
              "storybook-tab",
              index === activeIndex ? "storybook-tab--active" : "",
            ].join(" ")}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "16px" }}>{tabs[activeIndex].content}</div>
    </div>
  );
};
