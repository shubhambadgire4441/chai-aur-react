function customRender(reactElement , container){                               //04
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

const reactElement = {                                                         //02
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'    
}

const mainContainer = document.querySelector('#root')                          //01  

customRender(reactElement,mainContainer)                                       //03