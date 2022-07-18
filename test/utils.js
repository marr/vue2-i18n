import {
    mount as vtuMount,
    shallowMount as vtuShallowMount
} from '@vue/test-utils';

import i18n from '../i18n';

export function mount (component, opts = {}) {
    const wrapper = vtuMount(component, { ...opts, i18n });
    wrapper.i18n = i18n;
    return wrapper;
}

export function shallowMount (component, opts = {}) {
    return vtuShallowMount(component, { ...opts, i18n });
}