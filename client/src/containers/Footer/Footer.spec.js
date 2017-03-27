import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Footer from './Footer';
const setup = propOverrides =>{
    const props = Object.assign({},propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<Footer {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
        renderer:renderer
    }
}

describe('container',()=>{
    describe('Footer',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe('footer')
        })
    })
})
