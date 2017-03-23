import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from './Header';
const setup = propOverrides =>{
    const props = Object.assign({},propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<Header {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer
    }
}

describe('container',()=>{
    describe('Header',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe('header')
        })
    })
})
