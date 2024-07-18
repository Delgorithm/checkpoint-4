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

  return (
    <>
      <p>Expenses</p>
      <FormExpenses method="POST" />
      <BtnDeleteARow method="POST" selectedExpenses={selectedExpenses} />

      <RechartsPieChart allExpenses={allExpenses} />

      <h2>Liste des dépenses</h2>
      <table>
        <thead>
          <tr>
            <th>Sélectionner</th>
            <th>Catégorie</th>
            <th>Montant</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {allExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>
                <label htmlFor="checkbox" className="hidden">
                  Test
                </label>
                <input
                  type="checkbox"
                  value={expense.id}
                  onChange={() => handleCheckboxChange(expense.id)}
                  checked={selectedExpenses.includes(expense.id)}
                />
              </td>
              <td>{expense.category}</td>
              <td>{expense.amount}€</td>
              <td>{new Date(expense.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Expenses;
