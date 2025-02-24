import React, { useEffect } from "react";

export default function ApiError({ apiErrorMessage }) {
  const errorMessage = apiErrorMessage?.message || apiErrorMessage;

  function refreshPage() {
    window.location.reload();
  }

  useEffect(() => {
    document.title = "Erreur Serveur!";
  }, []);

  return (
    <section className="api-error">
      <h1 className="api-error__title">Aïe !</h1>
      <h2 className="api-error__subtitle">
        Nous avons eu une erreur inattendue de la part du serveur
        <br />
        {"(╯°□°）╯︵ ┻━┻"}
      </h2>
      <p className="api-error__message">
        <strong className="api-error__message--strong">Erreur:</strong>
        <br />"{errorMessage}"
      </p>

      <button className="api-error__refresh-page-button" onClick={refreshPage}>
        Rafraîchir la page?
      </button>
    </section>
  );
}
