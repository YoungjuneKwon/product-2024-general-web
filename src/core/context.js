import { reactive } from 'vue';
import API from './api';

let api = new API('invalid');

const context = reactive({
    authToken: '',
    data: {}
})

export const loadAuthToken = () => {
    context.authToken = localStorage.getItem('authToken') || '';
    api.updateAuthToken(context.authToken);
    return context.authToken;
}

export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token);
    return loadAuthToken();
}

export const clearAuthToken = () => {
    return setAuthToken('');
}

export const hasAuthToken = () => {
    return (context.authToken || '').length > 0;
}

export { context, api };