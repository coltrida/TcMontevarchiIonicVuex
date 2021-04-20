<template>
  <ion-header>
    <ion-toolbar >
      <div style="display:flex; justify-content: space-between; align-items: center;">
        <div>
          <ion-title>Prenotazione</ion-title>
        </div>
        <div>
          <ion-button @click="closeModal()">
              X
          </ion-button>
        </div>
      </div>
    </ion-toolbar>   
  </ion-header>

  <ion-content class="ion-padding">
    <ion-list>
      <ion-item>
        <ion-label>Giorno: {{ giorno }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Nel: {{ campo }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-label v-if="campo == 'Campo1' || campo == 'Campo2'">Dalle ore: {{ ora }}:00 - Alle ore: {{ora + 1}}:00</ion-label>
        <ion-label v-else>Dalle ore: {{ ora }}:30 - Alle ore: {{ora + 1}}:30</ion-label>
      </ion-item>
      <ion-item v-if="tipo">
        <ion-button v-if="tipo == 'Singolare'" size="large" @click="prenota('s')">Singolo</ion-button>
        <ion-button v-else size="large" @click="prenota('d')">Doppio</ion-button>
      </ion-item>
      <ion-item v-else>
        <ion-button size="large" @click="prenota('s')">Singolo</ion-button>
        <ion-button size="large" @click="prenota('d')">Doppio</ion-button>
      </ion-item>
    </ion-list>
  </ion-content>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, modalController, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    campo: { type: String },
    giorno: { type: String },
    ora: { type: Number },
    tipo: { type: String },
  },

  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonLabel },

  computed:{
          ...mapGetters('users', {
              getUser:'getUser'
          })
      },

  methods:{
    ...mapActions('bookings', {
            setBooks:'setBooks',
        }),

    closeModal() {
        modalController.dismiss();
    },

    prenota(tipo){
        if(tipo == 's'){
          //console.log(this.getUser.name)
          this.setBooks({'giorno':this.giorno, 'ora':this.ora, 'campo':this.campo, 'tipo':'Singolare', 'user':this.getUser.id});
        } else {
          this.setBooks({'giorno':this.giorno, 'ora':this.ora, 'campo':this.campo, 'tipo':'Doppio', 'user':this.getUser.id});
        }
        modalController.dismiss();
    }
  }
});
</script>