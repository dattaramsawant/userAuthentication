import { useDispatch } from 'react-redux';
import axios from '../API/axios';
import { setAccessToken } from '../Redux/user';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const dispatch=useDispatch()

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        dispatch(setAccessToken(response.data.accessToken))
        
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;