import PropTypes from "prop-types";
import { Form } from "react-router-dom";

function BtnDeleteARow({ method, selectedExpenses }) {
  return (
    <Form method={method}>
      {selectedExpenses.map((expenseId) => (
        <input
          key={expenseId}
          type="hidden"
          name="expenseIds[]"
          value={expenseId}
        />
      ))}
      <button type="submit">Supprimer</button>
    </Form>
  );
}

BtnDeleteARow.propTypes = {
  selectedExpenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  method: PropTypes.string.isRequired,
};

export default BtnDeleteARow;
