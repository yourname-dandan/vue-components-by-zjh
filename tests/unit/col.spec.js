import col from "@/components/MyComponent/col/components/col.vue"

import { shallowMount } from "@vue/test-utils"

describe('col.vue',() => {
    it('create', () => {
        const wrapper = shallowMount(col);
        const colEle = wrapper.vm.$el;
        expect(colEle.classList).toContain('dl-col')
    })
})
