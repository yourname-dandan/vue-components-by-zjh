

import buttonGroup from "./src/buttonGroup.vue"

buttonGroup.install = (vue) => {
    vue.component(buttonGroup.name,buttonGroup)
} 

export default  buttonGroup