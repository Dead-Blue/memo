import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MainSection from './MainSection';
import * as actions from '../../actions'
import {Loader,Dimmer,Message} from 'semantic-ui-react'
const initPropsMemos={
            loading:false,
            saving:false,
            errors:false,
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
}
const setup = propOverrides =>{
    const props = Object.assign({memos:initPropsMemos,actions:actions},propOverrides)

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
            expect(output.props.children[0].type).toBe(Dimmer)
            expect(output.props.children[1].type).toBe(Message)
            expect(output.props.children[0].props.children.type).toBe(Loader)

        })

        it('载入中时应当渲染 载入中',()=>{
            const {output,renderer} = setup({memos:Object.assign(initPropsMemos,{loading:true}),actions:actions})
            expect(output.props.children[0].props.active).toEqual(true)
            expect(output.props.children[0].props.children.props.children).toEqual("载入中")
        })

        it('保存时应当渲染 保存中',()=>{
            const {output,renderer} = setup({memos:Object.assign(initPropsMemos,{loading:false,saving:true}),actions:actions})
            expect(output.props.children[0].props.active).toEqual(true)
            expect(output.props.children[0].props.children.props.children).toEqual("保存中")
        })
    })
})
