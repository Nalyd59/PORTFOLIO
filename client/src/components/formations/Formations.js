import * as React from 'react';
import axios from 'axios';
import './formations.css';

const Formation = () => {
    const [formations, setFormations] = React.useState([]);
    React.useEffect(() => {
        axios
            .get('http://localhost:8080/formations/recup')
            .then((res) => {
                console.log(res.data);
                setFormations(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className='formations'>
                <h2>Formations</h2>
                {formations.map((formation) => <>
                    <div className='description'>
                        <h3>{formation.nomFormation}</h3>
                        <h4>{formation.lieuFormation}</h4>
                        <p>{formation.textFormation}</p>
                    </div>
                </>)}
            </div>
        </>
    )
}

export default Formation
