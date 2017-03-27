import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MainSection from './MainSection';
import * as actions from '../../actions'

const setup = propOverrides =>{
    const props = Object.assign({
        memos:{
            loading:false,
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
            filter:'FILTER_ALL',
        },
        actions:actions
    },propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MainSection {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer
    }
}

describe('container',()=>{
    describe('MainSection',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe('section')
            expect(output.props.className).toBe('memo-mainsection')
        })
    })
})
