import React, { useReducer, useEffect, useState } from "react";
import EntryForm from './components/EntryForm';
import EntriesList from "./components/EntriesList";
import BillableChart from "./components/BillableChart";
import useLocalStorage from "./hooks/useLocalStorage";
import entriesReducer from "./reducer/entriesReducer";
import Header from "./components/Header";

// Main App
export default function App() {
  const [activeTab, setActiveTab] = useState("Time Entries");

  const handleTabChange = (label) => {
    setActiveTab(label);
    console.log("Active Tab from child:", label);
  };

    const mockEntries = [
    {"employee":"Ethan Johnson","project":"Project A","task":"Task 1","duration":5,"billable":true,"data":"45%"},
    {"employee":"Olivia Parker","project":"Project C","task":"Task 2","duration":4,"billable":true,"data":"75%"},
    {"employee":"Dylan Garcia","project":"Project B","task":"Task 3","duration":3,"billable":false,"data":"85%"},
    {"employee":"Ava Patel","project":"Project B","task":"Task 2","duration":2,"billable":true,"data":"65%"},
    {"employee":"Mason Ramirez","project":"Project C","task":"Task 1","duration":2,"billable":false,"data":"55%"}
  ]

 localStorage.setItem('timeEntries', JSON.stringify(mockEntries));

  const [savedEntries, setSavedEntries] = useLocalStorage("timeEntries", []);
  const [entries, dispatch] = useReducer(entriesReducer, savedEntries);

  useEffect(() => {
    setSavedEntries(entries);
  }, [entries, setSavedEntries]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header onTabChange={handleTabChange}/>
      <h1 className="text-2xl font-bold mb-6">{activeTab}</h1>
          {activeTab === 'Time Entries' && (
      <>
      <EntryForm onAdd={(entry) => dispatch({ type: "ADD_ENTRY", payload: entry })} />
      <EntriesList entries={entries} onRemove={(index) => dispatch({ type: "REMOVE_ENTRY", index })} />
      <div className="mt-6 p-4 bg-white shadow rounded-xl">
        <p>Total Hours: <strong>{entries.reduce((sum, e) => sum + e.duration, 0)}</strong></p>
      </div>
      <BillableChart entries={entries} />
      </>
      )}
    </div>
  );
}