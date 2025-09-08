import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Define the shape of an entry
type Entry = {
  billable: boolean;
  duration: number;
};

// Props for BillableChart component
type BillableChartProps = {
  entries: Entry[];
};

const BillableChart: React.FC<BillableChartProps> = ({ entries }) => {
  const billableHours = entries
    .filter((e) => e.billable)
    .reduce((sum, e) => sum + e.duration, 0);
  const nonBillableHours = entries
    .filter((e) => !e.billable)
    .reduce((sum, e) => sum + e.duration, 0);

  const data = [
    { name: "Billable", value: billableHours },
    { name: "Non-Billable", value: nonBillableHours },
  ];

  const COLORS = ["#1b8b8c", "#65c498"];

  return (
    <div className="mt-6 p-2 bg-white shadow rounded-xl w-full md:w-1/2 h-80">
      <h2 className="text-lg font-semibold mb-2">Billable vs Non-Billable</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={30}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BillableChart;
