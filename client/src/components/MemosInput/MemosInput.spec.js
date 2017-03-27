import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemosInput from './MemosInput'
import {Input} from 'semantic-ui-react'

const setup = propOverrides =>{
    const props = Object.assign({
        onSave:jest.fn(),
        newTodo:false
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
        })
    })
})