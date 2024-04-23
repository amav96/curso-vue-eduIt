import { USUARIO_LS } from '../utils/Key';
import axios from 'axios';


export function useUsuario() {
    const setUsuario = (usuario) => {
        localStorage.setItem(USUARIO_LS, JSON.stringify(usuario))
    }

    const usuario = () => {
        return JSON.parse(localStorage.getItem(USUARIO_LS))
    }

    const getUsuario = async (params) => {
        const url = "https://661d915898427bbbef0225b3.mockapi.io/api/v1/users"
        const response = await axios.get(url,{ params });
        return response
    }

    const logout = () => {
        return localStorage.removeItem(USUARIO_LS)
    }

    return { 
        setUsuario,
        usuario,
        getUsuario,
        logout
    }
}