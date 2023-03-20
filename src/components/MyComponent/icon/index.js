import icon from "./src/icon.vue"

icon.install = (vue) => {
    vue.component(icon.name,icon)
} 

export default  icon