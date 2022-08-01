import Vue from 'vue'
Vue.config.devtools = false
Vue.config.productionTip = false
import VueCompositionAPI from '@vue/composition-api'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueCompositionAPI)

// mock window.matchMedia which not implemented by jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
