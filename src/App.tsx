import React, { useReducer, useEffect, useState } from "react";
import EntryForm from "./components/EntryForm";
import EntriesList from "./components/EntriesList";
import BillableChart from "./components/BillableChart";
import useLocalStorage from "./hooks/useLocalStorage";
import entriesReducer from "./reducer/entriesReducer";
import Header from "./components/Header";
import Entry from "./modals/entry.modal";


export default function App() {
  const [activeTab, setActiveTab] = useState<string>("Time Entries");

  // Typing for handleTabChange: accepts string and returns void
  const handleTabChange = (label: string): void => {
    setActiveTab(label);
    console.log("Active Tab from child:", label);
  };

  // Sample mock entries
  const mockEntries: Entry[] = [
    { employee: "Ethan Johnson", project: "Project A", task: "Task 1", duration: 5, billable: true, data: "45%" },
    { employee: "Olivia Parker", project: "Project C", task: "Task 2", duration: 4, billable: true, data: "75%" },
    { employee: "Dylan Garcia", project: "Project B", task: "Task 3", duration: 3, billable: false, data: "85%" },
    { employee: "Ava Patel", project: "Project B", task: "Task 2", duration: 2, billable: true, data: "65%" },
    { employee: "Mason Ramirez", project: "Project C", task: "Task 1", duration: 2, billable: false, data: "55%" },
  ];


  // Custom hook for localStorage with entries typed as Entry[]
  const [savedEntries, setSavedEntries] = useLocalStorage("timeEntries", []);

  // useReducer with typed state (Entry[]) and action typed in reducer (not shown here, but assumed typed)
  const [entries, dispatch] = useReducer(entriesReducer, savedEntries);

   // Save mock entries initially — consider moving this elsewhere to avoid overwriting on every render
  // if(!savedEntries.length) {
    localStorage.setItem("timeEntries", JSON.stringify(mockEntries));
  // }
  useEffect(() => {
    setSavedEntries(entries);
  }, [entries, setSavedEntries]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header onTabChange={handleTabChange} />
      <h1 className="text-2xl font-bold mb-6">{activeTab}</h1>
      {activeTab === "Time Entries" && (
        <>
          <EntryForm onAdd={(entry: Entry) => dispatch({ type: "ADD_ENTRY", payload: entry })} />
          <EntriesList entries={entries} onRemove={(index: number) => dispatch({ type: "REMOVE_ENTRY", index })} />
          <div className="mt-6 p-4 bg-white shadow rounded-xl">
            <p>
              Total Hours: <strong>{entries.reduce((sum: any, e: any) => sum + e.duration, 0)}</strong>
            </p>
          </div>
          <BillableChart entries={entries} />
        </>
      )}
    </div>
  );
}
