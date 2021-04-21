import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../pages/Home.vue';
import Bookings from '../pages/bookings/Index.vue';
import PrenotazioneParticolare from '../pages/admin/prenotazioneParticolare/Index.vue';
import EliminazioneParticolare from '../pages/admin/cancellazioneParticolare/Index.vue';
import DisabilitaCampo from '../pages/admin/disabilitaCampo/Index.vue';
import RicaricaSocio from '../pages/admin/ricaricaSoci/Index.vue';
import StornaSocio from '../pages/admin/stornaSoci/Index.vue';
import InserisciSocio from '../pages/admin/inserisciSocio/Index.vue';
import Certificati from '../pages/admin/certificati/Index.vue';
import Log from '../pages/admin/log/Index.vue';
import EliminaOra from '../pages/bookings/EliminaOra.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/bookings/:campo/:giorno', name: 'Bookings', component: Bookings },
  { path: '/admin/prenotazioneparticolare', name: 'PrenotazioneParticolare', component: PrenotazioneParticolare },
  { path: '/admin/eliminazioneparticolare', name: 'EliminazioneParticolare', component: EliminazioneParticolare },
  { path: '/admin/disabilitacampo', name: 'DisabilitaCampo', component: DisabilitaCampo },
  { path: '/admin/ricaricasocio', name: 'RicaricaSocio', component: RicaricaSocio },
  { path: '/admin/stornasocio', name: 'StornaSocio', component: StornaSocio },
  { path: '/admin/inseriscisocio', name: 'InserisciSocio', component: InserisciSocio },
  { path: '/admin/certificati', name: 'Certificati', component: Certificati },
  { path: '/admin/log', name: 'Log', component: Log },
  { path: '/bookings/eliminaOra', name: 'EliminaOra', component: EliminaOra },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
