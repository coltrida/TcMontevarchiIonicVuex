<template>
    <master-layout pageTitle="Cancellazione Particolare">
        <ion-list>
            <ion-list-header>
                <h2>Cancellazioni Particolari</h2> 
            </ion-list-header>
            <ion-item>
                <ion-label position="floating">Campo</ion-label>
                <ion-select placeholder="Seleziona"
                    :value="ricerca.campo"
                    @ionChange="ricerca.campo = $event.target.value">
                    <ion-select-option 
                        v-for="field in getFields" 
                        :key="field.id" 
                        :value="'Campo'+field.id">
                            {{field.nome}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
            <ion-label>Dal</ion-label>
            <ion-input type="date" v-model="ricerca.giornoPartenza"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Dalle ore</ion-label>
                <ion-select placeholder="Seleziona"
                    :value="ricerca.orePartenza"
                    @ionChange="ricerca.orePartenza = $event.target.value">
                    <ion-select-option 
                        v-for="i in 14" 
                        :key="i" 
                        :value="i+8">
                            {{i+8}}:{{minuti}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
            <ion-label>Al</ion-label>
            <ion-input type="date" v-model="ricerca.giornoFine"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Alle ore</ion-label>
                <ion-select placeholder="Seleziona"
                    :value="ricerca.oreFine"
                    @ionChange="ricerca.oreFine = $event.target.value">
                    <ion-select-option 
                        v-for="i in 14" 
                        :key="i" 
                        :value="i+8">
                            {{i+8}}:{{minuti}}
                    </ion-select-option>
                </ion-select>
            </ion-item>
            <ion-item>
            <ion-button size='large' expand="full" @click="elimina()">Elimina</ion-button>
            </ion-item>
        </ion-list>
    </master-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { 
    IonList, IonItem, IonButton, IonLabel, IonInput, IonListHeader, IonSelect, IonSelectOption, toastController 
} from '@ionic/vue';
export default {
    data(){
        return{
            ricerca:{}
        }
    },

    components: {
        IonList, IonItem, IonButton, IonLabel, IonInput, IonListHeader, IonSelect, IonSelectOption
    },

    computed:{
        ...mapGetters('bookings', {
            getFields:'getFields',
            getMessage:'getMessage',
        }),

        ...mapGetters('users', {
            getUser:'getUser',
        }),

        tipocampo(){
            return 'Campo'+this.ricerca.campo;
        },

        minuti(){
            if (this.ricerca.campo == 'Campo1' || this.ricerca.campo == 'Campo2'){
                return '00'
            } else {
                return '30'
            }
        }
    },

    methods:{
        ...mapActions('bookings', {
            fetchFields:'fetchFields',
            eliminazioneParticolare:'eliminazioneParticolare',
        }),

        async elimina(){
            this.ricerca.user = this.getUser.id;
            this.eliminazioneParticolare(this.ricerca);
            this.ricerca = {};
            //this.$router.push({ name: 'Bookings', params: { 'campo' : this.ricerca.campo, 'giorno' : this.ricerca.giornoPartenza } })
            const toast = await toastController
                .create({
                position: 'top',    
                message: "eliminazione effettuate",
                duration: 2000
                })
            return toast.present();
            
        }
    },

    mounted(){
            this.fetchFields(); 
    }
    
}
</script>