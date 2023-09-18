import * as React from 'react';
import './dashadmin.css'
import axios from 'axios';

const DashAdmin = () => {
    const [projets, setProjets] = React.useState([]);
    React.useEffect(() => {
        axios
            .get('http://localhost:8080/projets/recup')
            .then((res) => {
                setProjets(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className='dashadmin'>
                <h1>Dashboard Admin</h1>
                <div className='projet'>
                    <h2>Projets</h2>
                    <div className='modifier'>
                        <h3>Modifier et supprimer un projet</h3>
                        <ul>
                            {projets.map((projet) => <>
                                <li>
                                    <p>{projet.nomProjet}</p>
                                    <button>supp</button>
                                </li>
                            </>)}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashAdmin
