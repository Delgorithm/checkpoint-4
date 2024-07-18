import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FormExpenses from "../components/FormExpenses";
import BtnDeleteARow from "../components/BtnDeleteARow";
import RechartsPieChart from "../components/RechartsPieChart";

function Expenses() {
  const allExpenses = useLoaderData();
  const [selectedExpenses, setSelectedExpenses] = useState([]);

  const handleCheckboxChange = (expenseId) => {
    setSelectedExpenses((prevSelected) =>
      prevSelected.includes(expenseId)
        ? prevSelected.filter((id) => id !== expenseId)
        : [...prevSelected, expenseId]
    );
  };

  const handleSelectAll = () => {
    if (selectedExpenses.length === allExpenses.length) {
      setSelectedExpenses([]);
    } else {
      setSelectedExpenses(allExpenses.map((expense) => expense.id));
    }
  };

  return (
    <>
      <h2 className="text-center p-4 text-2xl">Mes dépenses</h2>
      <FormExpenses method="POST" />
      <BtnDeleteARow method="POST" selectedExpenses={selectedExpenses} />

      <RechartsPieChart allExpenses={allExpenses} />

      <section className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                <label htmlFor="SelectAll" className="sr-only">
                  Select All
                </label>
                <input
                  type="checkbox"
                  id="SelectAll"
                  className="size-5 rounded border-gray-300"
                  checked={selectedExpenses.length === allExpenses.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Catégorie
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Montant
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allExpenses.map((expense) => (
              <tr key={expense.id}>
                <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                  <label className="sr-only" htmlFor={`Row${expense.id}`}>
                    Row {expense.id}
                  </label>
                  <input
                    className="size-5 rounded border-gray-300"
                    type="checkbox"
                    id={`Row${expense.id}`}
                    checked={selectedExpenses.includes(expense.id)}
                    onChange={() => handleCheckboxChange(expense.id)}
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {expense.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {expense.amount}€
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {new Date(expense.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Expenses;
