import aside from "./src/aside.vue"

aside.install = (vue) => {
    vue.component(aside.name,aside)
} 

export default  aside