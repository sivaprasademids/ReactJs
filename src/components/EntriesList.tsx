import React from 'react';
import Entry from '../modals/entry.modal';


// Define the props for EntriesList
type EntriesListProps = {
  entries: Entry[];
  onRemove: (index: number) => void;
};

// Entries List Component
const EntriesList: React.FC<EntriesListProps> = ({ entries, onRemove }) => {
  return (
    <div className="mt-4 min-h-[200px] max-h-[300px] overflow-auto border rounded">
      <table className="w-full border table-auto">
        <thead className="sticky top-0 bg-gray-200 z-10">
          <tr>
            <th className="border border-gray-300 px-4 p-2">Employee Name</th>
            <th className="border border-gray-300 px-4 p-2">Project Name</th>
            <th className="border border-gray-300 px-4 p-2">Task Name</th>
            <th className="border border-gray-300 px-4 p-2">Hours Worked</th>
            <th className="border border-gray-300 px-4 p-2">Billable</th>
            <th className="border border-gray-300 px-4 p-2">Project Progress</th>
            <th className="border border-gray-300 px-4 p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr key={i} className="border-b text-center odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 p-2">{entry.employee}</td>
              <td className="border border-gray-300 px-4 p-2">{entry.project}</td>
              <td className="border border-gray-300 px-4 p-2">{entry.task}</td>
              <td className="border border-gray-300 px-4 p-2">{entry.duration}</td>
              <td className="border border-gray-300 px-4 p-2">{entry.billable ? "Yes" : "No"}</td>
              <td className="border border-gray-300 px-4 p-2">{entry.data}</td>
              <td>
                <button
                  onClick={() => onRemove(i)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntriesList;
