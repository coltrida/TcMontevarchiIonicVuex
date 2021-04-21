<template>
    <master-layout pageTitle="Log">
  <ion-app>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Log</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
          <ion-item v-for="ele in getLogs" :key="ele.id" >
                <ion-col size="3">{{ele.giorno}}</ion-col>
                <ion-col size="9" class="ion-text-justify">{{ele.description}}</ion-col>
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-app>
    
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonList, IonHeader, IonContent, IonApp, IonTitle, IonCol, IonItem, IonToolbar  } from '@ionic/vue';
export default {
    data(){
        return{
            ricerca:'',
            valori: {
                user:'',
                importo: 0,
                selezionati: []
            }
        }
    },

    components: { IonList, IonHeader, IonContent, IonApp, IonTitle, IonCol, IonItem, IonToolbar  },

    computed:{
        ...mapGetters('users', {
            getLogs:'getLogs',
        }),
    },

    methods:{
        ...mapActions('users', {
            fetchLogs:'fetchLogs',
        }),

    },

    mounted(){
            this.fetchLogs(); 
    }
    
}
</script>

<style scoped>
ion-select {
    color: rgb(0, 0, 0) !important;
    opacity: 1 !important;
}
</style>