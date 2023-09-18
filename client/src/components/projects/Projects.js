import * as React from "react";
import axios from "axios";
import './projects.css'

const Cardlist = () => {
  const [projets, setProjets] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('http://localhost:8080/projets/recup')
      .then((res) => {
        console.log(res.data);
        setProjets(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className='projects'>
        <h2>Projet</h2>
        {projets.map((projet) => <>
          <div className="description">
            <h3>{projet.nomProjet}</h3>
            <p>{projet.textProjet}</p>
          </div>
        </>)}
      </div>
    </>
  );
};

export default Cardlist;
