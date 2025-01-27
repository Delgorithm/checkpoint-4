import { Form, Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function ProfilForm({ user }) {
  return (
    <section>
      <h2>Modifier mes informations</h2>
      <Form method="PUT">
        <article>
          <label htmlFor="username">Pseudo</label>{" "}
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={user.username}
          />
          <label htmlFor="city">Ville</label>{" "}
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={user.city}
            className=".input"
          />
          <label htmlFor="email">E-mail</label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
          />
        </article>
        <article>
          <button type="submit">
            Enregistrer
          </button>
          <Link
            to={`/profile/${user.id}`}
          >
            Annuler
          </Link>
        </article>
      </Form>
    </section>
  );
}

ProfilForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default ProfilForm;
