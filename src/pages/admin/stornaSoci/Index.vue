<template>
    <master-layout pageTitle="Storna Soci">
  <ion-app>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Searchbar</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar show-cancel-button="always" @ionCancel="svuota()" @ionClear='svuota()' v-model="ricerca" debounce="50" @input="filtra()"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
          <ion-item v-for="ele in getSoci" :key="ele.id" >
                <ion-col size="6">{{ele.name}}</ion-col>
                <ion-col size="3">{{ele.credito}}</ion-col>
                <ion-col size="4">
                    <input style="height:40px; width:30px" type="checkbox" :id="ele.id" :value="ele.id" v-model="valori.selezionati">
                </ion-col>
          </ion-item>
      </ion-list>
    </ion-content>
                <ion-toolbar color="primary">
                    <ion-row>
                    <ion-col>
                        <ion-select placeholder="importo"
                        :value="valori.importo"
                        @ionChange="valori.importo = $event.target.value">
                        <ion-select-option 
                            v-for="imp in getImporti" 
                            :key="imp" 
                            :value="imp">
                                € {{imp}}
                        </ion-select-option>
                        </ion-select>
                    </ion-col>
                    <ion-col>
                        <ion-button @click="storna()" color='white'>Storna</ion-button>
                    </ion-col>
                    </ion-row>
                </ion-toolbar>
  </ion-app>
    
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IonList, IonToolbar, IonHeader, IonContent, IonApp, IonTitle, IonSearchbar, IonButton, IonCol, IonSelect, IonSelectOption, IonItem, IonRow  } from '@ionic/vue';
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

    components: { IonList, IonToolbar, IonHeader, IonContent, IonApp, IonTitle, IonSearchbar, IonButton, IonCol, IonSelect, IonSelectOption, IonItem, IonRow  },

    computed:{
        ...mapGetters('users', {
            getSoci:'getSoci',
            getImporti:'getImporti',
            getUser:'getUser'
        }),
    },

    methods:{
        ...mapActions('users', {
            fetchSoci:'fetchSoci',
            fetchImporti:'fetchImporti',
            filtraSoci:'filtraSoci',
            stornaSocio:'stornaSocio'
        }),

        filtra(){
            this.filtraSoci(this.ricerca)
        },

        svuota(){
            this.filtraSoci(this.ricerca = '')
        },

        storna(){
            this.valori.user = this.getUser;
            this.stornaSocio(this.valori);
            this.valori = {
                user:'',
                importo: 0,
                selezionati: []
            }
        },

    },

    mounted(){
            this.fetchSoci(); 
            this.fetchImporti();
    }
    
}
</script>

<style scoped>
ion-select {
    color: rgb(0, 0, 0) !important;
    opacity: 1 !important;
}
</style>