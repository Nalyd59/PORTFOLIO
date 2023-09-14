import * as React from "react";

const Presentation = () => {
  return (
    <>
      <div
        className="card text-bg-dark mb-3"
        style={{ width: "80%", margin: "10px auto" }}
      >
        <div className="card-header">Presentation</div>
        <div className="card-body">
          <h5 className="card-title">Bonjour,</h5>
          <p className="card-text">
            Avant toute chose, je me présente. J'ai 26 ans et je suis
            actuellement en stage développeur web à Roubaix. Je vous
            présente mon portfolio qui retrace mon parcours professionnel. Au
            fil de mes formations et de mes expériences, je me suis spécialisé
            dans le domaine du développement web.
          </p>
        </div>
      </div>
    </>
  );
};

export default Presentation;
