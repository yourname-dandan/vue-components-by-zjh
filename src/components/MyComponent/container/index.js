import container from "./src/container.vue"

container.install = (vue) => {
    vue.component(container.name,container)
} 

export default  container