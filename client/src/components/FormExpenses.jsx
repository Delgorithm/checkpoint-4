import { Form } from "react-router-dom";
import PropTypes from "prop-types";

function FormExpenses({ method }) {
  return (
    <Form method={method}>
      <h2>Ma dépense</h2>

      <label htmlFor="category">
        Catégorie
        <select id="categoryId" name="categoryId" required>
          <option value="1">Nourriture</option>
          <option value="4">Santé</option>
          <option value="2">Transport</option>
          <option value="3">Plaisir</option>
          <option value="5">Autres</option>
        </select>
      </label>

      <label htmlFor="amount">
        Montant
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="20€..."
          min="0"
          max="10000000000"
          required
        />
      </label>

      <input type="hidden" id="user_id" name="user_id" value="1" />

      <button type="submit">Enregistrer</button>
    </Form>
  );
}

FormExpenses.propTypes = {
  method: PropTypes.string.isRequired,
};

export default FormExpenses;
