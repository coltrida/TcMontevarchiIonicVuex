<template>
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <div v-if="getUser.tipo == 'admin'">
            <ion-item>
              <ion-icon name="mail" ></ion-icon>
              <ion-label routerLink="/admin/prenotazioneparticolare" @click="chiudi()">Prenotazioni Particolari</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="paper-plane" ></ion-icon>
              <ion-label routerLink="/admin/eliminazioneparticolare" @click="chiudi()">Eliminazioni Particolari</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="heart" ></ion-icon>
              <ion-label routerLink="/admin/disabilitacampo" @click="chiudi()">Disabilita Campo</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="archive" ></ion-icon>
              <ion-label routerLink="/admin/ricaricasocio" @click="chiudi()">Ricarica Socio</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="trash"></ion-icon>
              <ion-label>Storna Socio</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="archive" ></ion-icon>
              <ion-label>Inserisci Socio</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="archive" ></ion-icon>
              <ion-label>Certificati medici</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon name="archive" ></ion-icon>
              <ion-label>Log</ion-label>
            </ion-item>
          </div>
          <div v-else>
              <ion-item>
                <ion-icon :icon="trash"></ion-icon>
                <ion-label>Elimina Ora</ion-label>
            </ion-item>
          </div>
         
          <ion-item>
            <ion-icon name="accessibility-outline"></ion-icon>
            <ion-label>Logout</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import { trash } from 'ionicons/icons'
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonIcon,
  IonTitle, 
  IonToolbar,
  menuController,
  IonLabel
} from '@ionic/vue';
export default {
  data(){
        return {
            trash
        }
    },

    components: {
        IonContent, 
        IonHeader, 
        IonItem, 
        IonList, 
        IonMenu, 
        IonIcon,
        IonTitle, 
        IonToolbar,
        IonLabel
  },

  computed:{
        ...mapGetters('users', {
            getUser:'getUser',
        }),
    },

  methods: {
    async chiudi(){
      await menuController.close();
    },

    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
}
</script>