import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios"

function Dashboard() {
    const navigate = useNavigate();
    const {handleSubmit, register} = useForm()
    const [commentaires, setCommentaires] = React.useState([]);
    
    React.useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate('/connexion')
        }
    })
    React.useEffect(() => {
        axios
        .get("http://localhost:8080/users/commentaires")
        .then((res) => {
            console.log(res);
            setCommentaires(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    const onSubmit = (data) => {
        const prenomUser = JSON.parse(localStorage.getItem('user')).user.prenom;
        const dateCom = new Date();
        
        const newCom = {
            "titreCommentaire": data.titre,
            "textCommentaire": data.texte,
            "auteurCommentaire": prenomUser,
            "dateCommentaire": dateCom
        }
        console.log(newCom);
        axios
        .post('http://localhost:8080/users/newCommentaire', newCom)
        .then((res) => {
            toast.success('Commentaire posté !')
            navigate(0)
        })
        .catch((err) => {toast.error('ERROR !')})
    };
    return (
        <><div className='container'>
            <h1>Dashboard User</h1>
            <div style={{ backgroundColor: "#fff", color: "#000", borderRadius: "50px", padding: "100px", margin: "0 auto" }}>
                <h2 style={{ textAlign: 'center' }}>Ajouter un commentaire</h2>
                <form onSubmit={handleSubmit(onSubmit)} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',

                }}>
                    <TextField
                        id='filled-basic'
                        label='veuilez saisir votre titre'
                        variant='outlined'
                        fullWidth
                        size='small'
                        type='text'
                        {...register("titre")}
                    />
                    <p></p>
                    <TextField
                        id='filled-basic'
                        label='veuilez saisir votre commentaire'
                        variant='outlined'
                        fullWidth
                        size='small'
                        type='text'
                        multiline
                        rows={4}
                        {...register("texte")}
                    />
                    <button type="submit" className="btn btn-dark" style={{
                        width: "200px",
                        margin: '0 auto'
                    }}>Envoyer</button>
                </form>
            </div>
            <h1>Commentaires</h1>
            <div>
                {commentaires.map((commentaire) => <>
                    <div style={{ color: '#000', display: "flex", flexDirection: "column", alignItems: 'center', backgroundColor: "#fff", borderRadius: "100px", margin:'10px'}}>
                        <h4>{commentaire.titreCommentaire} from {commentaire.auteurCommentaire}</h4>
                        <h6>{commentaire.textCommentaire}</h6>
                        <span>{commentaire.dateCommentaire}</span>
                    </div>
                </>)}
            </div>
        </div></>
    )
}

export default Dashboard