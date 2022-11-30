import React from 'react';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const refreshToken = localStorage.getItem("refreshToken")

    const refresh = async () => {

        const response = await axios.post('http://aleksbcg.beget.tech/api/token/refresh/',
            {
                refresh: refreshToken
            },
        );
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.access);
            return { ...prev, accessToken: response.data.access }
        });
        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;