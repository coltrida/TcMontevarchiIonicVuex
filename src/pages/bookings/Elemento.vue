<template>
    <ion-item>
        <ion-label>
            <h2>Giorno: {{dati.giorno}}</h2>
            <h3>alle ore: {{dati.id}} {{dati.orainizio}}</h3>
            <h3>nel: {{dati.campo}} - {{dati.tipo}}</h3>
        </ion-label>
        <ion-button size="large" @click="elimina(dati.id)">Elimina</ion-button>
    </ion-item>
</template>

<script>
import { IonItem, IonButton, toastController  } from '@ionic/vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    components: { IonItem, IonButton },

    data(){
        return {
            ricerca:{
                id: '',
                id_user: ''
            }
        }
    },

    props:['dati'],

    computed:{
        ...mapGetters('users', {
            getMessaggio:'getMessaggio',
        }),
        ...mapGetters('users', {
            getUser:'getUser',
        }),
    },

    methods:{
        ...mapActions('bookings', {
            eliminaOra:'eliminaOra',
        }),

       async elimina(id){
            this.ricerca.id = id;
            this.ricerca.id_user = this.getUser.id;
            this.eliminaOra(this.ricerca);
            const toast = await toastController
                .create({
                position: 'top',    
                message: "Ora eliminata",
                duration: 2000
                })
            return toast.present();
        },
    }
}
</script>