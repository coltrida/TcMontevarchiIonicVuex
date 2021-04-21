<template>
    <master-layout pageTitle="Elimina Ore">
        <ion-app>
            <ion-header translucent>
                <ion-toolbar>
                    <ion-title>Lista Ore Eliminabili</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content fullscreen>
                <ion-list>
                    <elemento v-for="ele in getEliminabili" 
                            :key="ele.id" 
                            :dati='ele'></elemento>
                </ion-list>
                </ion-content>
        </ion-app>
    </master-layout>
</template>

<script>
import Elemento from './Elemento.vue';
import { mapActions, mapGetters } from 'vuex';
import { IonApp, IonHeader, IonToolbar, IonList, IonContent, IonTitle } from '@ionic/vue';
export default {
    components: {
         Elemento, IonApp, IonHeader, IonToolbar, IonList, IonContent, IonTitle
    },

    computed:{
        ...mapGetters('bookings', {
            getEliminabili:'getEliminabili',
        }),
        ...mapGetters('users', {
            getUser:'getUser',
        }),
    },

    methods:{
        ...mapActions('bookings', {
            fetchEliminabili:'fetchEliminabili',
        }),

    },

    ionViewDidEnter(){
            this.fetchEliminabili(this.getUser.id); 
    }
}
</script>