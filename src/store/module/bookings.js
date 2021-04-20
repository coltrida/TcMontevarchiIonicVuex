import axios from 'axios';
import help from '../../help';

const state = () => ({
    bookings: {},
    fields: {},
    messaggio: ''
});
 
const getters = {
    getBookings(state){
        return state.bookings;
    },

    getMessage(state){
        return state.messaggio;
    },

    getFields(state){
        return state.fields;
    },
};
 
const actions = {
    async fetchBookings({commit}, payload){
        const response = await axios.get(`${help().linkbookings}`+'/'+payload.campo+'/'+payload.giorno);
        commit('fetchBookings', response.data);
    },

    async fetchFields({commit}){
        const response = await axios.get(`${help().linkgetfields}`);
        commit('fetchFields', response.data);
    },

    async setBooks({commit, rootState}, payload){
        const response = await axios.post(`${help().linkprenota}`, {
            giorno: payload.giorno,
            ora: payload.ora,
            campo: payload.campo,
            tipo: payload.tipo,
            user: payload.user
        });
        if(response.data){
            const response2 = await axios.get(`${help().linkgetuser}`+'/'+payload.user);
            rootState.users.user = response2.data;
        }
        commit('setBooks', response.data);
    },

    async prenotazioneParticolare({commit}, payload){
        const response = await axios.post(`${help().linkprenotazioneparticolare}`, {
            user_id: payload.user,
            campo: payload.campo,
            giornoPartenza: payload.giornoPartenza,
            orePartenza: parseInt(payload.orePartenza),
            giornoFine: payload.giornoFine,
            oreFine: parseInt(payload.oreFine)
        });
        commit('prenotazioneParticolare', response.data);
    },

    async eliminazioneParticolare({commit}, payload){
        const response = await axios.post(`${help().linkeliminazioneparticolare}`, {
            user_id: payload.user,
            campo: payload.campo,
            giornoPartenza: payload.giornoPartenza,
            orePartenza: parseInt(payload.orePartenza),
            giornoFine: payload.giornoFine,
            oreFine: parseInt(payload.oreFine)
        });
        commit('eliminazioneParticolare', response.data);
    },

    async disabilitaCampo({commit}, payload){
        const response = await axios.get(`${help().linkdisabilitacampo}`+'/'+payload.id+'/'+payload.user);
        commit('disabilitaCampo', response.data);
    },
};
 
const mutations = {
    fetchBookings(state, payload){
        state.bookings = payload;
    },

    fetchFields(state, payload){
        state.fields = payload;
    },

    setBooks( state, payload){
        state.messaggio = payload;
    },

    prenotazioneParticolare(state, payload){
        state.messaggio = payload;
    },

    eliminazioneParticolare(state, payload){
        state.messaggio = payload;
    },

    disabilitaCampo(state, payload){
        let selezionato = state.fields.find(u => u.id == payload);
        if(selezionato.disponibile == 0) {
            selezionato.disponibile = 1
        } else {
            selezionato.disponibile = 0
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
