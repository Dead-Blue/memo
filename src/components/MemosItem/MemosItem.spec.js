import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemosItem from './MemosItem'
import {List} from 'semantic-ui-react';

const setup = propOverrides =>{
    const props = Object.assign({
        memo: {
                title:"TEST",
                id:0,
                completed:false,
                list:"默认",
                priority:"none",
                remark:"",
                show:true
        },
        toggleComplete: jest.fn(),
        editMemo: jest.fn(),
        deleteMemo:jest.fn(),
        editMemoDetail:jest.fn(),
    },propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MemosItem {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer,
    }
}


describe('components',()=>{
    describe('MemosItem',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe(List.Item)
        })
    })
})