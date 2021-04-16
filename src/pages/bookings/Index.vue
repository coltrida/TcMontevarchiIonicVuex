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
                            <ion-col><ion-button size='small'>
                                <ion-icon :icon="add"></ion-icon>
                                </ion-button></ion-col>
                            <ion-col size="6"><ion-chip>{{ giorno }}</ion-chip></ion-col>
                            <ion-col><ion-button size='small'>
                                <ion-icon :icon="add"></ion-icon>
                                </ion-button></ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-col>
            </ion-row>
        </ion-grid>
    </master-layout>
</template>

<script>
import { add, create, trash } from 'ionicons/icons'
import { IonGrid, IonCol, IonRow, IonButton, IonChip } from '@ionic/vue';
export default {
    components: { IonGrid, IonCol, IonRow, IonButton, IonChip },

    /* data(){
        return {
            campo: this.$route.params.campo,
            giorno: this.$route.params.giorno,
        }
    }, */

    data(){
        return{
            add,
            create,
            trash
        }
    },

    computed:{
        campo(){
            return this.$route.params.campo
        },

        giorno(){
            return this.$route.params.giorno
        },
    }
}
</script>