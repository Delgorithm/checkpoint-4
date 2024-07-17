import { Form } from "react-router-dom";
import PropTypes from "prop-types";

function FormExpenses({ method }) {
  return (
    <Form method={method}>
      <h2>Ma dépense</h2>

      <label htmlFor="category">
        Catégorie
        <select id="category" name="category" required>
          <option value="Food">Nourriture</option>
          <option value="Health">Santé</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Plaisir</option>
          <option value="Other">Autres</option>
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
      <input type="hidden" id="category_id" name="category_id" value="1" />

      <button type="submit">Enregistrer</button>
    </Form>
  );
}

FormExpenses.propTypes = {
  method: PropTypes.string.isRequired,
};

export default FormExpenses;
