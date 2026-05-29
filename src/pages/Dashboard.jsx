import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

import Header from "../components/Header";
import ExpenseChart from "../components/ExpenseChart";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "transactions"),
      where("uid", "==", auth.currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTransactions(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Header />

      <h1 className="text-4xl font-bold my-6">
        Finance Tracker Dashboard
      </h1>

      <ExpenseChart transactions={transactions} />

      <SummaryCards transactions={transactions} />

      <TransactionForm />

      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Dashboard;