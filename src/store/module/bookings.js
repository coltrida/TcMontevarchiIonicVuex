import axios from 'axios';
import help from '../../help';

const state = () => ({
    bookings: {},
});
 
const getters = {
    getBookings(state){
        return state.bookings;
    },
};
 
const actions = {
    async fetchBookings({commit}, payload){
        //console.log(`${help().linkbookings}`+'/'+payload.campo+'/'+payload.giorno)
        const response = await axios.get(`${help().linkbookings}`+'/'+payload.campo+'/'+payload.giorno);
        //console.log('res'+response.data);
        commit('fetchBookings', response.data);
    },
};
 
const mutations = {
    fetchBookings(state, payload){
        state.bookings = payload;
    },
};
 
export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
