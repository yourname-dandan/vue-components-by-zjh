import link from "./src/link.vue"

link.install = (vue) => {
    vue.component(link.name,link)
} 
export default  link