import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemoSearch from './MemoSearch'
import {Input} from 'semantic-ui-react'

const setup = propOverrides =>{
    const props = Object.assign({
        onSearch:jest.fn()
    },propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MemoSearch {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer,
    }
}


describe('components',()=>{
    describe('MemoSearch',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe(Input)
        })
    })
})
