import Vue from 'vue';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'ja',
    messages: {
        en: {
            'message.hello': 'Hello, i18n!'
        },
        ja: {
            'message.hello': 'こんにちは、世界',
            'message.other': 'x'
        }
    }
})