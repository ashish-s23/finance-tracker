import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#facc15",
  "#3b82f6",
  "#a855f7",
];

function ExpenseChart({ transactions = [] }) {
  const expenseData = transactions.filter(
    (t) => t.type === "expense"
  );

  const categoryTotals = {};

  expenseData.forEach((item) => {
    const category = item.category || "Other";

    categoryTotals[category] =
      (categoryTotals[category] || 0) +
      Number(item.amount);
  });

  const data = Object.keys(categoryTotals).map(
    (key) => ({
      name: key,
      value: categoryTotals[key],
    })
  );

  const totalExpense = data.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 mb-8">
      <h2 className="text-center text-3xl font-bold mb-6">
        Monthly Expenses
      </h2>

      <div className="relative h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={100}
              outerRadius={140}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400">
              Total Expense
            </p>

            <h3 className="text-3xl font-bold text-white">
              ₹{totalExpense.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex justify-between bg-zinc-800 p-3 rounded-lg"
          >
            <span>{item.name}</span>
            <span
              style={{
                color:
                  COLORS[index % COLORS.length],
              }}
            >
              ₹{item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseChart;