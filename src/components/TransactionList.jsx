import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FaTrash } from "react-icons/fa";

function TransactionList({ transactions = [] }) {

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "transactions", id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Recent Transactions
      </h2>

      <table className="w-full text-white">
        <thead>
          <tr className="border-b border-zinc-700">
            <th className="text-left p-3">Title</th>
            <th className="text-left p-3">Category</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">Amount</th>
            <th className="text-left p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr
              key={item.id}
              className="border-b border-zinc-800"
            >
              <td className="p-3">{item.title}</td>

              <td className="p-3">
                {item.category || "-"}
              </td>

              <td
                className={`p-3 ${
                  item.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {item.type}
              </td>

              <td className="p-3">
                ₹{item.amount}
              </td>

              <td className="p-3">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 p-2 rounded-lg"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;