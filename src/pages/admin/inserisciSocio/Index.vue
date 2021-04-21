<template>
    <master-layout pageTitle="Inserisci Socio">
        <ion-card>
            <ion-card-header>
            <ion-card-title>Inserisci Socio</ion-card-title>
            </ion-card-header>
                <ion-list>
                    <ion-item>
                        <ion-label position="floating">Nome</ion-label>
                        <ion-input v-model="valori.nome"></ion-input>
                    </ion-item>
                    <ion-item>
                    <ion-label position="floating">Cognome</ion-label>
                        <ion-input v-model="valori.cognome"></ion-input>
                    </ion-item>
                    <ion-item>
                    <ion-label position="floating">Anno di nascita</ion-label>
                        <ion-input v-model="valori.anno"></ion-input>
                    </ion-item>
                    <ion-item>
                    <ion-select placeholder="tipologia"
                        :value="valori.tipo"
                        @ionChange="valori.tipo = $event.target.value">
                        <ion-select-option 
                            v-for="imp in getTipi" 
                            :key="imp" 
                            :value="imp">
                                {{imp}}
                        </ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Scadenza Certificato</ion-label>
                        <ion-input type="date" v-model="valori.scadenza"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Privilegi</ion-label>
                        <ion-input v-model="valori.privilegi"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-button expand="full" @click="inserisci()">Inserisci</ion-button>
                    </ion-item>
                </ion-list>
        </ion-card>
    </master-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonButton, IonInput, IonLabel, IonSelect, IonSelectOption, IonList, toastController  } from '@ionic/vue';
export default {
    components: { IonCard, IonCardHeader, IonCardTitle, IonItem, IonButton, IonInput, IonLabel, IonSelect, IonSelectOption, IonList },

    data(){
        return{
            valori: {
                nome:'',
                user:'',
                cognome: '',
                anno: '',
                tipo: '',
                scadenza: '',
                privilegi: 0
            }
        }
    },

    computed:{
        ...mapGetters('users', {
            getTipi:'getTipi',
            getUser:'getUser',
            getMessaggio:'getMessaggio',
        }),
    },

    methods:{
        ...mapActions('users', {
            fetchTipi:'fetchTipi',
            inserisciSocio:'inserisciSocio'
        }),

        async inserisci(){
            this.valori.user = this.getUser;
            this.inserisciSocio(this.valori);
            this.valori = {
                nome:'',
                user:'',
                cognome: '',
                anno: '',
                tipo: '',
                scadenza: '',
                privilegi: 0
            }
            const toast = await toastController
                .create({
                position: 'top',    
                message: "inserimento effettuato",
                duration: 2000
                })
            return toast.present();
        }

    },

    mounted(){
            this.fetchTipi(); 
    }
}
</script>
