import axios from 'axios';
import help from '../../help';

const state = () => ({
    logged: false,
    logs:{},
    user: {},
    soci: {},
    originalSoci: {},
    tipi:{},
    messaggio:'',
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

    getTipi(state){
        return state.tipi;
    },

    getMessaggio(state){
        return state.messaggio;
    },

    getLogs(state){
        return state.logs;
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

    async fetchTipi({commit}){
        const response = await axios.get(`${help().linktipi}`);
        commit('fetchTipi', response.data);
    },

    async inserisciSocio({commit}, payload){
        const response = await axios.post(`${help().linkinserisciSocio}`, {
            'nome':payload.nome,
            'cognome':payload.cognome,
            'anno':payload.anno,
            'user':payload.user.name,
            'tipo':payload.tipo,
            'certificato':payload.scadenza,
            'privilegi':payload.privilegi,
        });
        commit('inserisciSocio', response.data);
    },

    async aggiornaCertificato({commit}, payload){
        const response = await axios.post(`${help().linkaggiornaCertificato}`, {
            'id':payload.id,
            'certificato':payload.giorno,
        });
        commit('aggiornaCertificato', response.data);
    },

    async fetchLogs({commit}){
        const response = await axios.get(`${help().linklog}`);
        commit('fetchLogs', response.data);
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

     fetchTipi(state, payload){
        state.tipi = payload;
    },

    inserisciSocio(state, payload){
        state.messaggio = payload;
    },

    aggiornaCertificato(state, payload){
        state.messaggio = payload;
    },

    fetchLogs(state, payload){
        state.logs = payload;
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
