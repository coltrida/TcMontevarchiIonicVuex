<template>
    <ion-card>
        <ion-card-header>
            
            <div v-if="bookings[orario]">
              <div style="display:flex; justify-content: space-between; align-items: center;">
                <div>
                  <ion-card-title>Dalle {{orario}}:00 Alle {{orario+1}}:00 </ion-card-title>
                </div>
                <div>
                  <ion-chip>
                      <ion-label color="warning">{{bookings[orario].tipo}}</ion-label>
                  </ion-chip>
                </div>
              </div>
                <ion-button expand="full" size='large'>{{bookings[orario].users[0].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length > 1">{{bookings[orario].users[1].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length > 2">{{bookings[orario].users[2].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length > 3">{{bookings[orario].users[3].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 1 && bookings[orario].tipo == 'Singolare'" @click="openModal"></ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 1 && bookings[orario].tipo == 'Doppio'" @click="openModal"></ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 2 && bookings[orario].tipo == 'Doppio'" @click="openModal"></ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 3 && bookings[orario].tipo == 'Doppio'" @click="openModal"></ion-button>
                <!-- {{bookings[orario]}} -->
            </div>
            <div v-else>
                <ion-card-title>Dalle {{orario}}:00 Alle {{orario+1}}:00</ion-card-title>
                <ion-button expand="full" size='large' @click="openModal"></ion-button>
                <ion-button expand="full" size='large' @click="openModal"></ion-button>
                <ion-button expand="full" size='large' @click="openModal"></ion-button>
                <ion-button expand="full" size='large' @click="openModal"></ion-button>
            </div>
        </ion-card-header>
    </ion-card>
</template>

<script>
import PrenotazioneModal from './PrenotazioneModal.vue';
import { IonCard, IonCardHeader, IonCardTitle, IonButton, IonChip, IonLabel, modalController  } from '@ionic/vue';
export default {
    components: { IonCard, IonCardHeader, IonCardTitle, IonButton, IonChip, IonLabel },

    props:['orario', 'bookings', 'disp'],

    mounted(){
        //console.log(this.bookings);
    },

    computed:{
      tipologia(){
        if (typeof this.bookings[this.orario] !== 'undefined') {
          return this.bookings[this.orario].tipo
        } 
        return null; 
      }
    },

    methods: {
      async openModal() {
        if(this.disp){
          const modal = await modalController
          .create({
            component: PrenotazioneModal,
            cssClass: 'my-custom-class',
            componentProps: {
              campo: this.$route.params.campo,
              giorno: this.$route.params.giorno,
              tipo: this.tipologia,
              ora: this.orario
            },
          })
        return modal.present();
        }
      }
    },

}
</script>