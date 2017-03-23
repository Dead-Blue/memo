var path = require('path');
var fse = require('fs-extra');

module.exports = function(componentName) {
    fse.mkdirpSync(path.resolve(__dirname,'..','src','components',componentName))

    createComponentCss(componentName);
    createComponentJS(componentName);
    createComponentTest(componentName);

}

function createComponentCss(componentName){
     fse.outputFileSync(path.resolve(__dirname,'..','src','components',componentName,componentName+'.scss'),'')
}

function createComponentJS(componentName){
    const data = `import React,{Component} from 'react'
import './${componentName}.css'
class ${componentName} extends Component {
    render(){
        return (
            <div>${componentName}</div>
        )
    }
}
export default ${componentName};
`
fse.outputFileSync(path.resolve(__dirname,'..','src','components',componentName,componentName+'.js'),data);
}

function createComponentTest(componentName){
    const data = `import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ${componentName} from './${componentName}'

const setup = propOverrides =>{
    const props = Object.assign({},propOverrides)

    const renderer = TestUtils.createRenderer()
    renderer.render(<${componentName} {...props} />)

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
    describe('${componentName}',()=>{
        it('应当正确渲染',()=>{
            const {output} = setup()
            expect(output.type).toBe('div')
        })
    })
})
`
fse.outputFileSync(path.resolve(__dirname,'..','src','components',componentName,componentName+'.spec.js'),data);
}
