import React, { useEffect } from 'react'
import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';


function Connexion() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("admin")) {
            navigate('/')
        }
    })
    const { handleSubmit, register} = useForm();

    const onSubmit = (data) => {
        const idConn = {
            "mail" : data.emailUser,
            "password" : data.mdpUser
        }
        console.log(idConn);
        axios.post(`http://localhost:8080/api/login`, idConn).then((res) => {
            localStorage.setItem('admin', JSON.stringify(res.data));
            toast.success('c bon !!!')
            navigate('/dashadmin')
        }).catch((err) => {
            toast.error("error")
        })
    };
    return (
        <>
            <div className='container' style={{backgroundColor: "#fff", margin:  "10px auto", padding: "10px", borderRadius: "50px", width: "50%"}}>
                <h2 style={{textAlign: "center"}}>Connexion Admin</h2>
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

                    </Stack>
                </form>
            </div>
        </>
    )
}

export default Connexion