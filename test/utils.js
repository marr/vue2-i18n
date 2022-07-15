import {
    mount as vtuMount,
    shallowMount as vtuShallowMount
} from '@vue/test-utils';

import i18n from '../i18n';

export function mount (component, opts = {}) {
    return vtuMount(component, { ...opts, i18n });
}

export function shallowMount (component, opts = {}) {
    return vtuShallowMount(component, { ...opts, i18n });
}