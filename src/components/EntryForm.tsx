import React, { useState, FormEvent, ChangeEvent } from "react";

// Define the type for a new entry
type Entry = {
  employee: string;
  project: string;
  task: string;
  duration: number;
  billable: boolean;
  data: string;
};

// Define props for the EntryForm component
type EntryFormProps = {
  onAdd: (entry: Entry) => void;
};

// EntryForm Component
const EntryForm: React.FC<EntryFormProps> = ({ onAdd }) => {
  const [employee, setEmployee] = useState<string>("");
  const [project, setProject] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [billable, setBillable] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!employee || !project || !task || !duration) return;

    const entry: Entry = {
      employee,
      project,
      task,
      duration: Number(duration),
      billable,
      data: Math.random().toFixed(2).replace(/^0\./, "") + "%"
    };

    onAdd(entry);

    // Reset form fields
    setEmployee("");
    setProject("");
    setTask("");
    setDuration("");
    setBillable(true);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-2xl flex gap-2 flex-wrap">
      <input
        type="text"
        placeholder="Employee Name"
        value={employee}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmployee(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Project"
        value={project}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setProject(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Hours"
        value={duration}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDuration(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={billable.toString()}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setBillable(e.target.value === "true")}
        className="border p-2 rounded"
      >
        <option value="true">Billable</option>
        <option value="false">Non-Billable</option>
      </select>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-xl">
        Add
      </button>
    </form>
  );
};

export default EntryForm;
