import { Form, Link } from "react-router-dom";

function Login() {
  return (
    <section>
      <Form method="POST">
        <h2>Connexion</h2>

        <label htmlFor="email">
          E-mail
          <input
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
            autoComplete="email"
          />
        </label>

        <label htmlFor="password">
          Mot de passe
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            autoComplete="new-password"
          />
        </label>

        <button type="submit">Se connecter</button>

        <p>
          Pas encore inscrit ?<Link to="/register">Créer un compte</Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
