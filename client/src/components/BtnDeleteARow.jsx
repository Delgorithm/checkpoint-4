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
      <button
        type="submit"
        className="px-8 py-2 bg-red-600 text-white rounded-lg shadow-lg"
      >
        Supprimer
      </button>
    </Form>
  );
}

BtnDeleteARow.propTypes = {
  selectedExpenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  method: PropTypes.string.isRequired,
};

export default BtnDeleteARow;
