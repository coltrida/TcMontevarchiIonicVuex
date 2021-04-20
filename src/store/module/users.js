import axios from 'axios';
import help from '../../help';

const state = () => ({
    logged: false,
    user: {},
    soci: {},
    originalSoci: {},
    importi: []
});
 
const getters = {
    getLogged(state){
        return state.logged;
    },

    getUser(state){
        return state.user;
    },

    getSoci(state){
        return state.soci;
    },

    getImporti(state){
        return state.importi;
    },
};
 
const actions = {
    async loginUser({commit}, payload){
        const response = await axios.post(`${help().linklogin}`, payload);
        commit('loginUser', response.data);
    },

    async fetchSoci({commit}){
        const response = await axios.get(`${help().linksoci}`);
        commit('fetchSoci', response.data);
    },

    async filtraSoci({commit}, payload){
        commit('filtraSoci', payload);
    },

    async fetchImporti({commit}){
        const response = await axios.get(`${help().linkimporti}`);
        commit('fetchImporti', response.data);
    },

    async ricaricaSocio({commit}, payload){
        const response = await axios.post(`${help().linkricaricasocio}`, {
            'importo':payload.importo,
            'selezionati':payload.selezionati,
            'user':payload.user.name
        });
        commit('ricaricaSocio', response.data);
    },

    async stornaSocio({commit}, payload){
        const response = await axios.post(`${help().linkstornasocio}`, {
            'importo':payload.importo,
            'selezionati':payload.selezionati,
            'user':payload.user.name
        });
        commit('stornaSocio', response.data);
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

    fetchSoci(state, payload){
        state.soci = payload;
        state.originalSoci = payload;
    },

    filtraSoci(state, payload){
        //console.log(payload);
        if (payload.length < 2){
            state.soci = state.originalSoci;
        } else {
            state.soci = state.soci.filter(u => u.name.toLowerCase().includes(payload.toLowerCase()) );
        }
    },

    fetchImporti(state, payload){
        state.importi = payload;
    },

    ricaricaSocio(state, payload){
       payload.forEach(element => {
            state.soci.find(u => u.id == element.utente).credito = element.credito  
       });
    },

    stornaSocio(state, payload){
        payload.forEach(element => {
             state.soci.find(u => u.id == element.utente).credito = element.credito  
        });
     },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
