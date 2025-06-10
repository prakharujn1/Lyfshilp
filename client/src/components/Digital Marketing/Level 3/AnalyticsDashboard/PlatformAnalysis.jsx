import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, LabelList } from 'recharts';

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export function PlatformAnalysis({ platform, chartType }) {
  const unengagedViews = platform.views - platform.clicks;

  const pieData = [
    { name: "Clicks", value: platform.clicks },
    { name: "Sales", value: platform.sales },
    { name: "Unengaged Views", value: unengagedViews },
  ];

  const barData = [
    { name: "Views", value: platform.views },
    { name: "Clicks", value: platform.clicks },
    { name: "Sales", value: platform.sales },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl shadow-md">
      {chartType === "bar" ? (
        <BarChart
          width={400}
          height={300}
          data={barData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      ) : (
        <PieChart width={400} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {pieData.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
}
