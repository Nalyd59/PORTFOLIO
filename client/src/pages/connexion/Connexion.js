import React, { useEffect } from 'react'
import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';


function Connexion() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate('/')
        }
    })
    const { handleSubmit, register} = useForm();

    const onSubmit = (data) => {
        const idConn = {
            "email" : data.emailUser,
            "password" : data.mdpUser
        }
        axios.post(`http://localhost:8080/users/signup`, idConn).then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data));
            toast.success('c bon !!!')
            navigate(0)
        }).catch((err) => {
            toast.error("error")
        })
    };
    return (
        <>
            <div className='container' style={{backgroundColor: "#fff", margin:  "10px auto", padding: "10px", borderRadius: "50px", width: "50%"}}>
                <h2 style={{textAlign: "center"}}>Connexion</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap={1} justifyContent={"center"} alignItems={'center'}>

                        <TextField 
                        id="filled-basic" 
                        label="Email" 
                        variant="filled" 
                        type="email" 
                        {...register("emailUser", { required: "Veuillez entrez votre email"})}/>

                        <TextField 
                        id="filled-basic" 
                        label="Password" 
                        variant="filled" 
                        type="password" 
                        {...register("mdpUser", { required: "Veuillez entrez votre mot de passe"})}/>

                        <Button variant="contained" type='submit'>Connexion</Button>
                        <Link to="/inscription">Inscrit-toi !</Link>

                    </Stack>
                </form>
            </div>
        </>
    )
}

export default Connexion