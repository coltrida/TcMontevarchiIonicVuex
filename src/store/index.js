import {createStore} from 'vuex';
import UsersModule from './module/users';
import BookingsModule from './module/bookings';
 
const store = createStore({
    modules:{
        users:UsersModule,
        bookings:BookingsModule,
    }
});
 
export default store