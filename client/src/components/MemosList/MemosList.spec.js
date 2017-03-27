import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemosList from './MemosList'
import {List} from 'semantic-ui-react'
const setup = propOverrides =>{
    const props = Object.assign({
        memos:[
            {
                title:"TEST",
                id:0,
                completed:false,
                list:"默认",
                priority:"none",
                remark:"",
                show:true
            }
        ],
        actions:{
            editMemo:jest.fn(),
            editMemoDetail:jest.fn(),
            deleteMemo:jest.fn(),
            toggleComplete:jest.fn(),
        }
    },propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MemosList {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
    }
}



describe('components',()=>{
    describe('MemosList',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe(List)
        })
    })
})