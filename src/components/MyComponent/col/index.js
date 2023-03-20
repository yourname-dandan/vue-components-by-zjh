import Vue from "vue"
import col from "./src/col.js"

col.install = (vue) => {
    vue.component(col.name,col)
} 

export default  col