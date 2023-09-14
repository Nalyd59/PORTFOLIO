import * as React from "react";
import axios from "axios"
import imgProjet from "./imgProjet.png"
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
      <div className="container" style={{ width: '80%', margin: "10px auto", backgroundColor: "grey", borderRadius: "50px"}}>
        { projets.map((projet) => <>
          <div  style={{color: '#fff', display: "flex", flexDirection: "row", alignItems: 'center'}}>
            <img src={imgProjet} alt="ok" style={{width: "200px", height: "200px", borderRadius: "300px", backgroundColor: "#fff", margin: "20px"}}></img>
            <div>
              <h5>{projet.nomProjet}</h5>
              <p>{projet.textProjet}</p>
            </div>
            
          </div> 
        </>) }
      </div>
    </>
  );
};

export default Cardlist;
