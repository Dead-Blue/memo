import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemoCard from './MemoCard';
import * as actions from '../../actions'
import {Card,Button} from 'semantic-ui-react';
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
        actions:{
            saveMemos:jest.fn(),
            fetchMemos:jest.fn(),
            uploadMemos:jest.fn(),
            addMemo:jest.fn(),
            searchMemo:jest.fn(),
            filterCompleted:jest.fn(),
            filterUncompleted:jest.fn(),
            filterAll:jest.fn(),
        }
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

        it('点击 保存备忘录 按钮时能正确调用 saveMemos',()=>{
            const {output,props,renderer} = setup()
            const buttonGroups=output.props.children[1].props.children.filter(function(child){
                if(child.type)
                    return child.type._meta.name==="ButtonGroup"
                else {
                    return false;
                }
            })
            buttonGroups[1].props.children[0].props.onClick({})
            expect(props.actions.saveMemos).toBeCalled()
        })

        it('点击 载入备忘录 按钮时能正确调用 fetchMemos',()=>{
            const {output,props,renderer} = setup()
            const buttonGroups=output.props.children[1].props.children.filter(function(child){
                if(child.type)
                    return child.type._meta.name==="ButtonGroup"
                else {
                    return false;
                }
            })
            buttonGroups[1].props.children[1].props.onClick({})
            expect(props.actions.fetchMemos).toBeCalled()
        })

        it('点击 上传备忘录 按钮时能正确调用 uploadMemos',()=>{
            const {output,props,renderer} = setup()
            const buttonGroups=output.props.children[1].props.children.filter(function(child){
                if(child.type)
                    return child.type._meta.name==="ButtonGroup"
                else {
                    return false;
                }
            })
            buttonGroups[1].props.children[2].props.onClick({})
            expect(props.actions.uploadMemos).toBeCalled()
        })
    })
})
