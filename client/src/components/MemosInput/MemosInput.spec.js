import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemosInput from './MemosInput'
import {Input} from 'semantic-ui-react'

const setup = propOverrides =>{
    const props = Object.assign({
        onSave:jest.fn(),
        newTodo:false,
    },propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MemosInput {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer,
    }
}

describe('components',()=>{
    describe('MemosInput',()=>{

        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe(Input)
            expect(output.props.placeholder).toEqual('请输入...')
            expect(output.props.value).toEqual('')
        })

        it('存在text时 应当正确渲染',()=>{
            const {output} = setup({text:'test'})
            expect(output.type).toBe(Input)
            expect(output.props.placeholder).toEqual('请输入...')
            expect(output.props.value).toEqual('test')
        })

        it('输入变化时应该更新value', () => {
            const { output, renderer } = setup()
            output.props.onChange({ target: { value: 'Use Radox' } })
            const updated = renderer.getRenderOutput()
            expect(updated.props.value).toEqual('Use Radox')
        })

        it('当输入回车键时，应当调用onSave', () => {
            const { output, props } = setup()
            output.props.onKeyDown({ which: 13, target: { value: 'Use Redux' } })
            expect(props.onSave).toBeCalledWith('Use Redux')
        })

        it('当输入回车键时，如果输入为空，不应当调用onSave', () => {
            const { output, props } = setup()
            output.props.onKeyDown({ which: 13, target: { value: '' } })
            expect(props.onSave).not.toBeCalled()
        })

        it('当输入回车键时，如果是新输入，应当重置输入框', () => {
            const { output, renderer } = setup({ newTodo: true })
            output.props.onKeyDown({ which: 13, target: { value: 'Use Redux' } })
            const updated = renderer.getRenderOutput()
            expect(updated.props.value).toEqual('')
        })

        it('失去焦点时,如果不是新的记录，应该调用onSave', () => {
            const { output, props } = setup()
            output.props.onBlur({ target: { value: 'Use Redux' } })
            expect(props.onSave).toBeCalledWith('Use Redux')
        })

        it('失去焦点时,如果是新的记录，不应该调用onSave', () => {
            const { output, props } = setup({ newTodo: true })
            output.props.onBlur({ target: { value: 'Use Redux' } })
            expect(props.onSave).not.toBeCalled()
        })

    })
})