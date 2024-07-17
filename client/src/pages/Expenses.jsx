import { useLoaderData } from "react-router-dom";
import FormExpenses from "../components/FormExpenses";

function Expenses() {
  const allExpenses = useLoaderData();
  // console.log("Mes données : ", allExpenses);

  return (
    <>
      <p>Expenses</p>
      <FormExpenses method="POST" />

      <h2>Liste des dépenses</h2>
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Montant</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {allExpenses.map((expense) => (
            <tr key={expense.id}>
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
