import PropTypes from "prop-types";

function TrackExpenses({ method, action }) {
  return (
    <form method={method} action={action}>
      <h2>Ma dépense</h2>

      <label htmlFor="category">
        Catégorie
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Café..."
          required
          autoComplete="category"
        />
      </label>

      <label htmlFor="amount">
        Montant
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="20€..."
          required
          autoComplete="amount"
          min="0"
          max="10000000000"
        />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
}

TrackExpenses.propTypes = {
  method: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default TrackExpenses;
