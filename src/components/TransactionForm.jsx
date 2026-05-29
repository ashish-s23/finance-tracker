import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

function TransactionForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "transactions"), {
      uid: auth.currentUser.uid,
      title,
      amount: Number(amount),
      category,
      type,
      createdAt: new Date(),
    });

    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("expense");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 rounded-3xl p-6 mb-6"
    >
      <h2 className="text-white text-2xl font-bold mb-4">
        Add Transaction
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Title"
          className="p-3 rounded-lg bg-zinc-800 text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          className="p-3 rounded-lg bg-zinc-800 text-white"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="p-3 rounded-lg bg-zinc-800 text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Salary</option>
          <option>Bills</option>
        </select>

        <select
          className="p-3 rounded-lg bg-zinc-800 text-white"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;