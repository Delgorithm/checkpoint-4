import { Form } from "react-router-dom";
import PropTypes from "prop-types";

function FormExpenses({ method }) {
  return (
    <Form method={method}>
      <action className="flex flex-col justify-center items-center py-4 ">
        <section className="flex justify-center items-center gap-10">
          <section className="flex flex-col ">
            <label htmlFor="category" className="font-bold">
              Catégorie :
            </label>
            <select
              id="categoryId"
              name="categoryId"
              className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              required
            >
              <option value="1">Nourriture</option>
              <option value="2">Transport</option>
              <option value="3">🔞</option>
              <option value="4">Santé</option>
              <option value="5">Autres</option>
            </select>
          </section>

          <section className="flex flex-col">
            <label htmlFor="amount" className="font-bold">
              Montant
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="20€..."
              min="0"
              max="10000000000"
              className="w-full pl-4 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
              required
            />
            <input type="hidden" id="user_id" name="user_id" value="1" />
          </section>
        </section>
        <button
          type="submit"
          className="mt-8 px-8 py-2 text-white bg-[#7434db] rounded-lg hover:bg-[#7434db]/50 transition ease-in-out duration-150"
        >
          Enregistrer
        </button>
      </action>
    </Form>
  );
}

FormExpenses.propTypes = {
  method: PropTypes.string.isRequired,
};

export default FormExpenses;
