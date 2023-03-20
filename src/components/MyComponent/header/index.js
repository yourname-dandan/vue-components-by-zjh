import header from "./src/header.vue"

header.install = (vue) => {
    vue.component(header.name,header)
} 

export default  header