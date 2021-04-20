<template>
    
    <ion-page>
        <menu-laterale v-if="getLogged"></menu-laterale>
        <ion-header >
            <ion-toolbar color="success">
                <div class="ion-page" id="main-content"></div>
                <ion-grid>
                    <ion-row>
                        <ion-col v-if="getLogged" class="ion-align-self-center">
                            <ion-buttons >
                                <ion-menu-button></ion-menu-button>
                            </ion-buttons>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="full" routerLink="/" color="light">Home</ion-button>
                        </ion-col>
                    </ion-row>
                    <ion-row v-if="getLogged" class="ion-align-self-center">
                        <ion-col class="ion-align-self-center">
                            <ion-chip outline>
                                <ion-title color="dark">Cer: {{getUser.scadenzaCertificato}}</ion-title>
                            </ion-chip>
                        </ion-col>
                        <ion-col class="ion-align-self-center">
                            <ion-chip outline>
                                <ion-title color="dark">€{{getUser.credito}}</ion-title>
                            </ion-chip>
                        </ion-col>
                    </ion-row>
                </ion-grid>
                
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <slot></slot>
        </ion-content>

        <ion-footer>
            <slot name="footerdata"></slot>
        </ion-footer>
    </ion-page>
</template>

<script>
import MenuLaterale from './MenuLaterale.vue';
import { mapGetters } from 'vuex';
import {
    IonGrid,
    IonCol,
    IonRow,
    IonButton,
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonMenuButton,
    IonChip,
    IonButtons
} from '@ionic/vue';
export default {
    components: {
        IonGrid,
        IonCol,
        IonRow,
        IonButton,
        IonPage,
        IonHeader,
        IonContent,
        IonToolbar,
        IonTitle,
        IonFooter,
        IonChip,
        IonMenuButton,
        MenuLaterale,
        IonButtons
    },
    props: ["pageTitle"],

    computed:{
        ...mapGetters('users', {
            getLogged: 'getLogged',
            getUser: 'getUser',
        })
    },
};
</script>

<style scoped>
    ion-toolbar{
        --background: var(--ion-color-primary);
        --color: var(--ion-color-primary-contrast);
    }
</style>