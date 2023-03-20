import radio from "./src/radio.vue"

radio.install = (vue) => {
    vue.component(radio.name,radio)
} 

export default  radio