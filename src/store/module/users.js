import axios from 'axios';
import help from '../../help';

const state = () => ({
    logged: false,
    user: {},
});
 
const getters = {
    getLogged(state){
        return state.logged;
    },

    getUser(state){
        return state.user;
    },
};
 
const actions = {
    async loginUser({commit}, payload){
        const response = await axios.post(`${help().linklogin}`, payload);
        commit('loginUser', response.data);
    },
};
 
const mutations = {
    loginUser(state, payload){
        if (payload)
        {
            state.user = payload;
            state.logged = true;
        }
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
