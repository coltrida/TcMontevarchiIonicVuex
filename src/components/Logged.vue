<template>
    <ion-item>
        <ion-label>Seleziona il giorno</ion-label>
        <ion-input type="date" v-model="ricerca.giorno"></ion-input>
    </ion-item>
    <ion-button :disabled='canSend' size='large' expand="full" :routerLink="link">Cerca</ion-button>

    <ion-card>
    <img src="https://www.tcmontevarchi-prenotazioni.it/img/campo.jpg" />
    <ion-card-header>
        <ion-card-title>Benvenuto nel nostro Circolo</ion-card-title>
        <ion-card-subtitle>Il più antico e prestigioso Circolo Sportivo per il Tennis della provincia di Arezzo</ion-card-subtitle> 
    </ion-card-header>
    <ion-card-content class="ion-text-justify">
        L'attuale Tennis Club Montevarchi vanta antiche tradizioni sportive. Sono passati più di 80 anni da quando per la prima volta nella provincia di Arezzo, due giocatori racchette in pugno, rigorosamente vestiti di bianco con pantaloni lunghi e camicia, si sfidarono su un campo di terra rossa per disputare un incontro di Tennis. L'avvenimento ebbe luogo a Montevarchi nello spazio dell'attuale Piazza della Repubblica dove nel 1928 fu costruito il primo campo da tennis adiacente al campo sportivo, intitolato al campione del mondo di automobilismo, Conte Gastone Brilli Peri.
    </ion-card-content>
    </ion-card>
    
</template>

<script>
import { IonButton, IonLabel, IonItem, IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';
export default {
    components: {
        IonButton, IonLabel, IonItem, IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
    },

    data(){
        return {
            ricerca:{
                campo: 'Campo1',
                giorno: ''
            }
        }
    },

    computed:{
        link(){
            return "/bookings/Campo1/"+this.ricerca.giorno
        },

        canSend(){
            if (this.ricerca.giorno){
                return false;
            } else {
                return true;
            }
        }
    }
}
</script>