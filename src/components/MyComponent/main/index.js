import main from "./src/main.vue"

main.install = (vue) => {
    vue.component(main.name,main)
}

export default  main