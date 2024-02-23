import axios from 'axios';
import { useAtom } from "jotai";
import React, { useState } from 'react';
import { guildLogged } from '../../App';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';


export default function Login() {
    
    const [name, setName] = useState([]);
    const [authentication_seal, setAuthenticationseal] = useState([]);
    const [Gilda, setGilda] = useAtom(guildLogged);
    const navigate = useNavigate();
   
    function Accedi() {   

        const loginGuild = {
            "name": name,
            "authentication_seal": authentication_seal
        };
        
        axios.post("/guilds/login", loginGuild)
            .then(response => { 
                if (response.data && response.status === 200) {
                    setGilda(response.data)
                    navigate("/");
                }
            })
            .catch(error => {
                console.error('Errore durante il login:', error);
                alert('Credenziali errate. Riprova.');
            });
    };

    return (
        <>
            <div className="loginForm container border border-success rounded text-center p-4">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Guild Name</span>
                    <input className="form-control mt-3"
                            type="text"
                            placeholder=""
                            onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Authentication Seal</span>
                    <input className="form-control mt-3"
                            type="password"
                            placeholder=""
                            onChange={(e) => setAuthenticationseal(e.target.value)}
                    />
                </div>
                <button className="btn btn-dark mt-3" onClick={Accedi}>Login</button>
            </div>
        </>
    )
}