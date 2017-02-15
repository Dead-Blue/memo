import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MemoSearch from './MemoSearch'

const setup = propOverrides =>{
    const props = Object.assign({},propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<MemoSearch {...props} />)

    const output = renderer.getRenderOutput()
    return {
        props:props,
        output:output,
    }
}

const getTextContent = elem => {
    const children = Array.isArray(elem.props.children)?
    elem.props.children : [elem.props.children]

    return children.reduce((out,child)=>
    out+(child.props?getTextContent(child):child),'')
}

describe('components',()=>{
    describe('MemoSearch',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe('div')
        })
    })
})