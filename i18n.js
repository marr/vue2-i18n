import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { createI18n } from "vue-i18n-bridge";

Vue.use(VueI18n, { bridge: true });

export default new createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            'message.hello': 'Hello, i18n!',
            'message.cheers': '🍻 Cheers'
        },
        ja: {
            'message.hello': 'こんにちは、世界',
        }
    }
}, VueI18n);