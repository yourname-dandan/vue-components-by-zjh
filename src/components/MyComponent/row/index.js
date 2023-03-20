import Vue from "vue"
import row from "./src/row.js"

row.install = (vue) => {
    vue.component(row.name,row)
} 

export default  row