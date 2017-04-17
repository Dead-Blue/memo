import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemosItem from './MemosItem'
import MemosInput from '../MemosInput/MemosInput'
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
            expect(output.props.children[0].type).toEqual(List.Content)
        })

        it('点击时应当正确渲染输入框',()=>{
            const {output, renderer} = setup()
            output.props.children[1].props.onClick({})
            const updated = renderer.getRenderOutput()
            expect(updated.props.children[0].type).toEqual(MemosInput)
        })

        it('输入框保存时应当正确调用editMemo',()=>{
            const {output, renderer,props} = setup()
            output.props.children[1].props.onClick({})
            let updated = renderer.getRenderOutput()
            expect(updated.props.children[0].type).toEqual(MemosInput)
            updated.props.children[0].props.onSave('Use Redux')
            expect(props.editMemo).toBeCalledWith('Use Redux',0)
            updated = renderer.getRenderOutput()
            expect(updated.props.children[0].type).toEqual(List.Content)
        })

        it('点击checkbox后应当正确调用toggleComplete',()=>{
            const {output,props} = setup()
            output.props.children[0].props.children.props.onChange({})
            expect(props.toggleComplete).toBeCalledWith(0);
        })

        it('详细列表删除后应当正确调用deleteMemo',()=>{
            const {output,props} = setup()
            output.props.children[2].props.children.props.handleDelete({})
            expect(props.deleteMemo).toBeCalledWith(0);
        })

        it('详细列表修改后应当正确调用deleteMemo',()=>{
            const {output,props} = setup()
            output.props.children[2].props.children.props.handleEditDetail(0,{})
            expect(props.editMemoDetail).toBeCalledWith(0,{});
        })
    })
})