import { expect, it } from "vitest";
import Vue from 'vue';

import Hello from "~/components/HelloI18n.vue";

import { mount } from "./utils";

it("renders default locale", () => {
    const wrapper = mount(Hello);
    expect(wrapper.text()).toContain("こんにちは、世界");
});

it('renders other locales', async () => {
    const wrapper = mount(Hello);
    wrapper.vm.$i18n.locale = 'en';
    await Vue.nextTick()
    expect(wrapper.text()).toContain("Hello, i18n!");
});

it('renders custom messages', async () => {
    const wrapper = mount(Hello);
    wrapper.vm.$i18n.locale = 'en';
    wrapper.vm.$i18n.messages.en['message.hello'] = "Hi, test!";
    await Vue.nextTick();
    expect(wrapper.text()).toContain("Hi, test!");
});
