import * as React from "react";
import './aboutme.css';

const Aboutme = () => {
  return (
    <>
      <div className="aboutme">
        <h2>Presentation</h2>
        <p>
          Bonjour et bienvenue sur mon portfolio,
          En parcourant ces pages, j'espère que vous prendrez autant de plaisir que j'en ai eu à le réaliser.
          J’ai commencé à apprendre le développement web en autodidacte, puis j’ai suivi une formation de reconversion professionnelle ce qui m’a permis d’obtenir le titre professionnel de Développeur web et web mobile.
          Suite à cette formation, je continue toujours de me former, en suivant des centaines d’heures de cours en ligne, pour acquérir de nouvelles connaissances et me tenir au courant des évolutions du métier.
          Je suis quelqu’un de persévérant c’est pourquoi je suis en perpétuel recherche de nouveaux challenges. Pour relever ces défis, je développe divers projets web qui me permettent de monter en compétences.
        </p>
        <div className="atouts">
          <h3>Curieux</h3>
          <p>
            Je fais de la veille technologique et je m'intéresse au travail des autres pour m'enrichir.
          </p>
        </div>
        <div className="atouts">
          <h3>Rigoureux</h3>
          <p>
            J'ai le sens de la précision, c'est pourquoi j'assure la cohérence entre les pages codées et les maquettes graphiques.
          </p>
        </div>
        <div className="atouts">
          <h3>Autonome</h3>
          <p>
            J'ai réalisé tous les projets présentés dans ce portfolio en autonomie. Je suis quelqu'un d'indépendant.
          </p>
        </div>
        <div className="atouts">
          <h3>Capacité à travailler en équipe</h3>
          <p>
            En qualité de manager dans la restauration, j'ai collaboré avec une équipe de 12 personnes et ça s'est très bien passé.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
