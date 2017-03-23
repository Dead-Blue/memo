import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemoDetail from './MemoDetail'
import {Popup} from 'semantic-ui-react';
const setup = propOverrides =>{
    const props = Object.assign({
        memo:{
                title:"TEST",
                id:0,
                completed:false,
                list:"默认",
                priority:"none",
                remark:"",
                show:true
        },
        handleEditDetail:jest.fn(),
        handleDelete:jest.fn(),
    },propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MemoDetail {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer
    }
}

describe('components',()=>{
    describe('MemoDetail',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe(Popup)
        })
    })
})
