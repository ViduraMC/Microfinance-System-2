import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [fine, setFine] = useState('');
  const [date, setDate] = useState('');
  const [history, setHistory] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editAmount, setEditAmount] = useState('');
  const [editFine, setEditFine] = useState('');
  const [editDate, setEditDate] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/customers').then((res) => {
      setCustomers(res.data);
    });
  }, []);

  const handleAddPayment = () => {
    axios
      .post('http://localhost:5000/api/payments', {
        customerId,
        amount: parseFloat(amount),
        fine: parseFloat(fine) || 0,
        date,
      })
      .then(() => {
        fetchHistory();
        setAmount('');
        setFine('');
      });
  };

const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this payment?")) {
    axios
      .delete(`http://localhost:5000/api/payments/${id}`)
      .then(() => {
        // ❌ Remove this:
        // setHistory((prev) => prev.filter((h) => h._id !== id));

        // ✅ Use this instead:
        fetchHistory(); // This will reload from backend with updated totals
      })
      .catch((err) => {
        console.error("Error deleting payment:", err);
        alert("Failed to delete payment.");
      });
  }
};


  const handleEdit = (h) => {
    setEditingId(h._id);
    setEditAmount(h.amount);
    setEditFine(h.fine === '-' ? 0 : h.fine);
    setEditDate(h.date);
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/api/payments/${editingId}`, {
        amount: parseFloat(editAmount),
        fine: parseFloat(editFine) || 0,
        date: editDate,
      })
      .then(() => {
        setEditingId(null);
        fetchHistory(customerId);
      })
      .catch(() => alert('Failed to update payment'));
  };

  const fetchHistory = () => {
    if (!customerId) return;
    axios
      .get(`http://localhost:5000/api/payments/${customerId}`)
      .then((res) => setHistory(res.data));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl mb-4 font-semibold text-center">
        Share Payment Dashboard
      </h1>

      <select
        value={customerId}
        onChange={(e) => {
          setCustomerId(e.target.value);
          setHistory([]); // reset before fetch
          setTimeout(fetchHistory, 100); // slight delay
        }}
        className="mb-4 p-2 border rounded"
      >
        <option value="">Select Customer</option>
        {customers.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Fine (optional)"
          value={fine}
          onChange={(e) => setFine(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleAddPayment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Payment
        </button>
      </div>

      <div className="overflow-x-auto mt-6 rounded-lg shadow border border-gray-300">
        <table className="min-w-full text-sm text-left table-fixed border border-gray-300">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-5 border border-gray-300">Date</th>
              <th className="py-3 px-5 border border-gray-300">Name</th>
              <th className="py-3 px-5 border border-gray-300">
                Monthly Payment
              </th>
              <th className="py-3 px-5 border border-gray-300">Total Shares</th>
              <th className="py-3 px-5 border border-gray-300">Fine</th>
              <th className="py-3 px-5 border border-gray-300">Total Fine</th>
              <th className="py-3 px-5 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 italic text-gray-500"
                >
                  No payments found
                </td>
              </tr>
            ) : (
              history.map((h, idx) => (
                <tr
                  key={h._id}
                  className={`${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gray-100`}
                >
                  <td className="py-2 px-5 border">
                    {editingId === h._id ? (
                      <input
                        type="date"
                        value={editDate}
                        onChange={(e) => setEditDate(e.target.value)}
                        className="border p-1 rounded"
                      />
                    ) : (
                      h.date
                    )}
                  </td>
                  <td className="py-2 px-5 border">{h.name}</td>
                  <td className="py-2 px-5 border">
                    {editingId === h._id ? (
                      <input
                        type="number"
                        value={editAmount}
                        onChange={(e) => setEditAmount(e.target.value)}
                        className="border p-1 rounded w-24"
                      />
                    ) : (
                      `Rs. ${h.amount}`
                    )}
                  </td>
                  <td className="py-2 px-5 border">Rs. {h.totalShares}</td>
                  <td className="py-2 px-5 border text-red-600 font-medium">
                    {editingId === h._id ? (
                      <input
                        type="number"
                        value={editFine}
                        onChange={(e) => setEditFine(e.target.value)}
                        className="border p-1 rounded w-20"
                      />
                    ) : h.fine === '-' ? (
                      '-'
                    ) : (
                      `Rs. ${h.fine}`
                    )}
                  </td>
                  <td className="py-2 px-5 border">Rs. {h.totalFine}</td>
                  <td className="py-2 px-5 border">
                    {editingId === h._id ? (
                      <div className="flex gap-1">
                        <button
                          onClick={handleUpdate}
                          className="bg-green-500 text-white text-xs px-2 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="bg-gray-400 text-white text-xs px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEdit(h)}
                          className="bg-yellow-500 text-white text-xs px-2 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(h._id)}
                          className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
