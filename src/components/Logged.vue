<template>
    <ion-item>
        <ion-label>Seleziona il giorno</ion-label>
        <ion-input type="date" v-model="ricerca.giorno"></ion-input>
  </ion-item>
  <ion-button size='large' expand="full" :routerLink="link">Cerca</ion-button>
</template>

<script>
import { IonButton, IonLabel, IonItem, IonInput } from '@ionic/vue';
export default {
    components: {
        IonButton, IonLabel, IonItem, IonInput
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
        }
    }
}
</script>