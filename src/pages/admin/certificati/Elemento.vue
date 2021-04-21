<template>
    <ion-item>
            <ion-col size="4">{{dati.name}}</ion-col>
            <ion-col size="5"><ion-input 
                :value='dati.scadenzaCertificato' 
                :id="dati.id" type="date"  
                @change="ricerca.giorno = $event.target.value"
            ></ion-input></ion-col>
            <ion-col size="3">
                <ion-button :disabled='canSend' @click="modifica(dati.id)">update</ion-button>
            </ion-col>
    </ion-item>
</template>

<script>
import { IonItem, IonButton, IonInput, toastController, IonCol  } from '@ionic/vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    components: { IonItem, IonButton, IonInput, IonCol },

    data(){
        return {
            ricerca:{
                id: '',
                giorno: ''
            }
        }
    },

    props:['dati'],

    computed:{
        ...mapGetters('users', {
            getMessaggio:'getMessaggio',
        }),

        canSend(){
            if (this.ricerca.giorno == ''){
                return true
            } else {
                return false
            }
        }
    },

    methods:{
        ...mapActions('users', {
            aggiornaCertificato:'aggiornaCertificato',
        }),

       async modifica(id){
            this.ricerca.id = id;
            this.aggiornaCertificato(this.ricerca);
            const toast = await toastController
                .create({
                position: 'top',    
                message: "Certificato aggiornato",
                duration: 2000
                })
            return toast.present();
        },
    }
}
</script>