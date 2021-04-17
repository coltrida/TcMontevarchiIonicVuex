<template>
    <ion-card>
        <ion-card-header>
            
            <div v-if="bookings[orario]">
                <ion-card-title>Dalle {{orario}}:00 Alle {{orario+1}}:00 
                    <ion-chip>
                        <ion-label color="warning">{{bookings[orario].tipo}}</ion-label>
                    </ion-chip>
                </ion-card-title>
                <ion-button expand="full" size='large'>{{bookings[orario].users[0].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length > 1">{{bookings[orario].users[1].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length > 2">{{bookings[orario].users[2].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length > 3">{{bookings[orario].users[3].name}}</ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 1 && bookings[orario].tipo == 'Singolare'"></ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 1 && bookings[orario].tipo == 'Doppio'"></ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 2 && bookings[orario].tipo == 'Doppio'"></ion-button>
                <ion-button expand="full" size='large' v-if="bookings[orario].users.length == 3 && bookings[orario].tipo == 'Doppio'"></ion-button>
                <!-- {{bookings[orario]}} -->
            </div>
            <div v-else>
                <ion-card-title>Dalle {{orario}}:00 Alle {{orario+1}}:00</ion-card-title>
                <ion-button expand="full" size='large'></ion-button>
                <ion-button expand="full" size='large'></ion-button>
                <ion-button expand="full" size='large'></ion-button>
                <ion-button expand="full" size='large'></ion-button>
            </div>
        </ion-card-header>
    </ion-card>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonButton, IonChip, IonLabel } from '@ionic/vue';
export default {
    components: { IonCard, IonCardHeader, IonCardTitle, IonButton, IonChip, IonLabel },

    props:['orario', 'bookings'],

    mounted(){
        //console.log(this.bookings);
    }
}
</script>