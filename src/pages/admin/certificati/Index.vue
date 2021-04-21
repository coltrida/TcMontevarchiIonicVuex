<template>
    <master-layout pageTitle="Certificati Medici">
        <ion-app>
            <ion-header translucent>
                <ion-toolbar>
                    <ion-title>Searchbar</ion-title>
                </ion-toolbar>
                <ion-toolbar>
                    <ion-searchbar show-cancel-button="always" @ionCancel="svuota()" @ionClear='svuota()' v-model="ricerca" debounce="50" @input="filtra()"></ion-searchbar>
                </ion-toolbar>
            </ion-header>
            <ion-content fullscreen>
                <ion-list>
                    <elemento v-for="ele in getSoci" 
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
import { IonApp, IonHeader, IonToolbar, IonSearchbar, IonList, IonContent, IonTitle } from '@ionic/vue';
export default {
    components: {
         Elemento, IonApp, IonHeader, IonToolbar, IonSearchbar, IonList, IonContent, IonTitle
    },

    data(){
        return {
            ricerca:''
        }
    },

    computed:{
        ...mapGetters('users', {
            getSoci:'getSoci',
        }),
    },

    methods:{
        ...mapActions('users', {
            fetchSoci:'fetchSoci',
            filtraSoci:'filtraSoci',
        }),

        filtra(){
            this.filtraSoci(this.ricerca)
        },

        svuota(){
            this.filtraSoci(this.ricerca = '')
        },

    },

    mounted(){
            this.fetchSoci(); 
    }
}
</script>