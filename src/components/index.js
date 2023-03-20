import col from "./MyComponent/col"
import row from "./MyComponent/row"
import container from "./MyComponent/container"
import footer from "./MyComponent/footer"
import aside from "./MyComponent/aside"
import header from "./MyComponent/header"
import main from "./MyComponent/main"
import icon from "./MyComponent/icon"
import button from "./MyComponent/button"
import buttonGroup from "./MyComponent/buttonGroup"
import link from "./MyComponent/link"
import radio from "./MyComponent/radio"

const components = [
    row,
    col,
    container,
    footer,
    aside,
    header,
    main,
    icon,
    button,
    buttonGroup,
    link,
    radio
]
const install = (vue) => {
    components.forEach(item => {
        vue.component(item.name,item)
    })
}

export default {
    install,
    col,
    row,
    container,
    footer,
    aside,
    header,
    main,
    icon,
    button,
    buttonGroup,
    link,
    radio
}

export {
    install,
    col,
    row,
    container,
    footer,
    aside,
    header,
    main,
    icon,
    button,
    buttonGroup,
    link,
    radio
}