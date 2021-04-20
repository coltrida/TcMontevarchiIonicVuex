<template>
    <ion-item>
        <ion-col><h2>{{dati.nome}}</h2></ion-col>
        <ion-col><ion-button @click="cambia(dati.id)" size="large" :color="coloreBtn">{{etichetta}}</ion-button></ion-col>
    </ion-item>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonItem, IonCol, IonButton } from '@ionic/vue';
export default {
    props: ['dati'],

    computed:{
        ...mapGetters('users', {
            getUser:'getUser',
        }),

        etichetta(){
            if (this.dati.disponibile == 1){
                return 'disattiva';
            } else {
                return 'attiva';
            }
        },

        coloreBtn(){
            if (this.dati.disponibile == 1){
                return 'primary';
            } else {
                return 'danger';
            }
        }
    },

    components: { IonItem, IonCol, IonButton },

    methods:{
        ...mapActions('bookings', {
            disabilitaCampo:'disabilitaCampo',
        }),

        cambia(id){
            this.disabilitaCampo({'id':id, 'user':this.getUser.id})
        }
    }
}
</script>