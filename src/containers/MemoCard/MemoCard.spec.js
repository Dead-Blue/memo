import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemoCard from './MemoCard';
import * as actions from '../../actions'
import {Card} from 'semantic-ui-react';
const setup = propOverrides =>{
    const props = Object.assign({
        memos:[{
                 title:"TEST",
                 id:0,
                 completed:false,
                 list:"默认",
                 priority:"none",
                 remark:"",
                 show:true
        }],
        actions:actions
    },propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MemoCard {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer
    }
}

describe('container',()=>{
    describe('MemoCard',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe(Card)
        })
    })
})
