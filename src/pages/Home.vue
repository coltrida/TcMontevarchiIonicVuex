<template>
    <master-layout :pageTitle="title">
        <logged v-if="getLogged"></logged>
        <login v-else></login>
    </master-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '../components/Login';
import Logged from '../components/Logged';

export default {
    components: {
        Login, Logged
    },

    computed:{
        ...mapGetters('users', {
            getLogged: 'getLogged',
            getUser: 'getUser',
        }),

        title(){
            if(this.getLogged){
                return this.getUser.name
            } else {
                return 'TcMontevarchi'
        }
        },
    },
    
}
</script>