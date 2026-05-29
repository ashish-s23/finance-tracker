function SummaryCards({ transactions = [] }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-zinc-900 rounded-2xl p-6">
        <h3 className="text-green-400">
          Total Income
        </h3>
        <p className="text-4xl font-bold">
          ₹{income.toLocaleString()}
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-6">
        <h3 className="text-red-400">
          Total Expense
        </h3>
        <p className="text-4xl font-bold">
          ₹{expense.toLocaleString()}
        </p>
      </div>

      <div className="bg-zinc-900 rounded-2xl p-6">
        <h3 className="text-yellow-400">
          Balance
        </h3>
        <p className="text-4xl font-bold">
          ₹{balance.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default SummaryCards;