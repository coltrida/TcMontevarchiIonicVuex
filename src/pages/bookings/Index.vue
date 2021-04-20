<template>
    <master-layout pageTitle="Prenotazioni">
        <ion-grid>
            <ion-row>
                <ion-col size="3"  class="ion-align-self-center">
                    <ion-chip>{{ campo }}</ion-chip>
                </ion-col>
                <ion-col size="9" class="ion-align-self-center">
                    <ion-grid>
                        <ion-row>
                            <ion-col><ion-button size='small' @click="link2('indietro')">
                                <ion-icon :icon="arrowBack"></ion-icon>
                                </ion-button></ion-col>
                            <ion-col size="6"><ion-chip>{{ giorno }}</ion-chip></ion-col>
                            <ion-col><ion-button size='small' @click="link2('avanti')">
                                <ion-icon :icon="arrowForward"></ion-icon>
                                </ion-button></ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-col>
            </ion-row>

            <ion-row style="display:flex; justify-content: space-around">
                <ion-col size="2"><ion-button @click="link('Campo1')" :color="campo == 'Campo1' ? 'success' : 'primary'" size='small' style="height:50px; width:60px; font-size:8px">Campo 1 <br> Terra</ion-button></ion-col>
                <ion-col size="2"><ion-button @click="link('Campo2')" :color="campo == 'Campo2' ? 'success' : 'primary'" size='small' style="height:50px; width:60px; font-size:8px">Campo 2 <br> Terra</ion-button></ion-col>
                <ion-col size="2"><ion-button @click="link('Campo3')" :color="campo == 'Campo3' ? 'success' : 'primary'" size='small' style="height:50px; width:60px; font-size:8px">Campo 3 <br> Sintetico</ion-button></ion-col>
                <ion-col size="2"><ion-button @click="link('Campo4')" :color="campo == 'Campo4' ? 'success' : 'primary'" size='small' style="height:50px; width:60px; font-size:8px">Campo 4 <br> Sintetico</ion-button></ion-col>
                <ion-col size="2"><ion-button @click="link('Campo5')" :color="campo == 'Campo5' ? 'success' : 'primary'" size='small' style="height:50px; width:60px; font-size:8px">Campo 5 <br> Erba</ion-button></ion-col>
            </ion-row>

    <div v-if="getBookings">
        <tabellone v-for="i in 14" :key="i" :orario='i+8' :bookings='getBookings' />
    </div>

        </ion-grid>
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Tabellone from './Tabellone.vue'
import { arrowBack, arrowForward } from 'ionicons/icons'
import { IonGrid, IonCol, IonRow, IonButton, IonChip, IonIcon } from '@ionic/vue';
export default {
    components: { IonGrid, IonCol, IonRow, IonButton, IonChip, IonIcon, Tabellone },

    data(){
        return{
            arrowForward,
            arrowBack,
        }
    },

    computed:{
        ...mapGetters('bookings', {
            getBookings:'getBookings',
            getMessage:'getMessage'
        }),

        campo(){
            return this.$route.params.campo
        },

        giorno(){
            return this.$route.params.giorno
        },

        messaggio(){
            return this.getMessage
        }
    },

    methods:{
        ...mapActions('bookings', {
            fetchBookings:'fetchBookings',
        }),
        
        link(campo){
            this.$router.push({ name: 'Bookings', params: { campo } })
        },

        link2(direzione){
            let today = new Date(this.giorno);
            let giorno = '';
            let mese = 0;
            let anno = '';
            let gio = '';
            if (direzione == 'avanti'){
                let newdata = new Date();
                giorno = new Date(newdata.setDate(today.getDate() + 1));
            } else {
                let newdata = new Date();
                giorno = new Date(newdata.setDate(today.getDate() - 1));
            }
            mese = giorno.getMonth() + 1;
            if (mese < 10){
                mese = '0'+mese;
            }
            anno = giorno.getFullYear();
            gio = giorno.getDate();
            giorno = anno + '-' + mese + '-' + gio;
            //console.log(giorno);
            this.$router.push({ name: 'Bookings', params: { giorno } })
        },
    },

    mounted(){
        this.fetchBookings({'campo' : this.campo, 'giorno': this.giorno} );
    },

    watch:{
        campo(){
            this.fetchBookings({'campo' : this.campo, 'giorno': this.giorno} );
        },

        giorno(){
            this.fetchBookings({'campo' : this.campo, 'giorno': this.giorno} );
        },

        messaggio(){
            this.fetchBookings({'campo' : this.campo, 'giorno': this.giorno} );

        },
    }
}
</script>