import row from "@/components/MyComponent/row/src/row.js"

import { shallowMount } from "@vue/test-utils"

describe('row.vue',() => {

    let wrapper,rowEle;

    beforeEach(() => {
       wrapper = shallowMount(row);
       rowEle = wrapper.vm.$el;
    //    console.log(rowEle);
    })
    it('create', () => {
        expect(rowEle.classList).toContain('dl-row')
    })
    // it('gutter', () => {
    //     wrapper.setProps({gutter: 20})
    //     console.log();
    //     // expect(rowEle.style.marginLeft).toBe('-10px')
    //     // expect(rowEle.style.marginRight).toBe('-10px')
    // })

    // it('type',()=>{
    //     wrapper.setProps({type: 'flex'})
    //     expect(rowEle.classList).toContain('el-row--flex')
        
    // })

    // it('justify',()=>{
    //     wrapper.setProps({justify: 'end'})
    //     expect(rowEle.classList).toContain('is-justify-end')
    // })
    // it('align',()=>{
    //     wrapper.setProps({align: 'bottom'})
    //     expect(rowEle.classList).toContain('is-align-bottom')
    // })
})