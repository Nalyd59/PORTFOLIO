import * as React from 'react';
import { TextField, Button, Stack } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom';

function Inscription() {
    const {handleSubmit, register} = useForm()
    const navigate = useNavigate();
    const onSubmit = (data) => {
        if (data.password !== data.mdpUser) {
            toast.error('Les mots de passe ne correspond pas')
        }else{
            const newUser = {
                "prenom": data.prenom,
                "nom": data.nom,
                "mail": data.email,
                "password": data.password
            }
            axios
            .post('http://localhost:8080/users/register',newUser)
            .then((res) => {
                toast.success('Inscription terminé !')
                navigate('/connexion')
            })
            .catch((err) => {toast.error('ERROR !')})    
        }
    };
    return (
        <>
        <div className='container' style={{backgroundColor: "#fff", margin:  "10px auto", padding: "10px", borderRadius: "50px", width: "50%"}}>
            <h2 style={{textAlign: "center"}}>Inscription</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{width: '60%', margin: "10px auto"}}>
                        <Stack gap={1}>
                            <TextField 
                            id="filled-basic" 
                            label="Prenom" 
                            variant="filled"
                            {...register("prenom")}/>
                            <TextField 
                            id="filled-basic" 
                            label="Nom" 
                            variant="filled"
                            {...register("nom")}/>
                            <TextField 
                            id="filled-basic" 
                            label="Email" 
                            variant="filled" 
                            type="email"
                            {...register("email", { pattern: "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}" })}/>
                            <TextField 
                            id="filled-basic" 
                            label="Password" 
                            variant="filled" 
                            type="password"
                            {...register("password")}/>
                            <TextField 
                            id="filled-basic"
                            label="Confirmer votre password" variant="filled" 
                            type="password"
                            {...register("mdpUser")}/>
                            <Button variant="contained" type="submit">Enregister</Button>
                        </Stack>
            </form>
        </div>
        </>
    )
}

export default Inscription