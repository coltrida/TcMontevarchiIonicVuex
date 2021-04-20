<template>
    <master-layout pageTitle="Lista Campi">
        <ion-list>
            <ion-list-header>
                <h2>Lista Campi</h2> 
            </ion-list-header>
           
           <ion-list>
               <elemento v-for="ele in getFields" :key="ele.id" :dati='ele' />
           </ion-list>
            
        </ion-list>
    </master-layout>
</template>

<script>
import Elemento from './Elemento.vue';
import { mapActions, mapGetters } from 'vuex';
import { IonList, IonListHeader } from '@ionic/vue';
export default {
    data(){
        return{
            ricerca:{}
        }
    },

    components: { IonList, IonListHeader, Elemento },

    computed:{
        ...mapGetters('bookings', {
            getFields:'getFields',
        }),
    },

    methods:{
        ...mapActions('bookings', {
            fetchFields:'fetchFields',
            eliminazioneParticolare:'eliminazioneParticolare',
        }),

    },

    mounted(){
            this.fetchFields(); 
    }
    
}
</script>