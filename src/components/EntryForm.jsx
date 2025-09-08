import React, { useState } from "react";

// EntryForm Component
const EntryForm = ({ onAdd }) => {
  const [employee, setEmployee] = useState("");
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const [duration, setDuration] = useState("");
  const [billable, setBillable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee || !project || !task || !duration) return;

    onAdd({ employee, project, task, duration: Number(duration), billable, data: Math.random().toFixed(2).replace(/^0\./, '') + '%' });
    setEmployee("")
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
        onChange={(e) => setEmployee(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Project"
        value={project}
        onChange={(e) => setProject(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Hours"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={billable}
        onChange={(e) => setBillable(e.target.value === "true")}
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
}

export default EntryForm;