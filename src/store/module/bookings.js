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
    async fetchBookings({commit}){
        const response = await axios.get(`${help().linkvetture}`);
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
