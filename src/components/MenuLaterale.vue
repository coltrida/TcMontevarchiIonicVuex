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
              <ion-icon :icon="albums" ></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/prenotazioneparticolare" @click="chiudi()">Prenotazioni Particolari</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="closeCircle" ></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/eliminazioneparticolare" @click="chiudi()">Eliminazioni Particolari</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="rainy" ></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/disabilitacampo" @click="chiudi()">Disabilita Campo</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="wallet" ></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/ricaricasocio" @click="chiudi()">Ricarica Socio</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="cash"></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/stornasocio" @click="chiudi()">Storna Socio</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="personAdd" ></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/inseriscisocio" @click="chiudi()">Inserisci Socio</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="reader" ></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/certificati" @click="chiudi()">Certificati medici</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="server" ></ion-icon>
              <ion-label style="margin-left:10px" routerLink="/admin/log" @click="chiudi()">Log</ion-label>
            </ion-item>
          </div>
          <div v-else>
              <ion-item>
                <ion-icon :icon="trash"></ion-icon>
                <ion-label style="margin-left:10px" routerLink="/bookings/eliminaOra" @click="chiudi()">Elimina Ora</ion-label>
            </ion-item>
          </div>
         
          <!-- <ion-item>
            <ion-icon name="accessibility-outline"></ion-icon>
            <ion-label>Logout</ion-label>
          </ion-item> -->
        </ion-list>
      </ion-content>
    </ion-menu>
</template>

<script>
import { mapGetters } from 'vuex';
import { albums, closeCircle, rainy, wallet, personAdd, server, cash, reader, trash } from 'ionicons/icons'
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
            albums, closeCircle, rainy, wallet, personAdd, server, cash, reader, trash
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