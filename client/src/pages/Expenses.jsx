import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FormExpenses from "../components/FormExpenses";
import BtnDeleteARow from "../components/BtnDeleteARow";
import RechartsPieChart from "../components/RechartsPieChart";

function Expenses() {
  const allExpenses = useLoaderData();
  const [selectedExpenses, setSelectedExpenses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const totalsByCategory = allExpenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += parseFloat(amount);
    return acc;
  }, {});

  const totalAmount = allExpenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );

  return (
    <>
      <h2 className="text-center p-4 text-2xl">Mes dépenses</h2>
      <FormExpenses method="POST" />

      <RechartsPieChart allExpenses={allExpenses} />

      <section className="overflow-x-auto overflow-hidden">
        <div className="flex justify-center py-4">
          <BtnDeleteARow method="POST" selectedExpenses={selectedExpenses} />
        </div>
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
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center ">
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

      <section className="overflow-x-auto mt-8">
        <h3 className="text-center py-4 font-extrabold text-2xl">
          Somme total
        </h3>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Catégorie
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                Montant
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Object.entries(totalsByCategory).map(([category, total]) => (
              <tr key={category}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center ">
                  {category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {total.toFixed(2)}€
                </td>
              </tr>
            ))}
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center text-xl">
                Total
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-white text-center text-xl bg-[#7434db]">
                {totalAmount.toFixed(2)}€
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Expenses;
