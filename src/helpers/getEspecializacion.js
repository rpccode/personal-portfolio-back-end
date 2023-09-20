import { memo } from "react";
import { useSelector } from "react-redux"

const getEspecializacion = (esp) => {
    // console.log(esp.map(item => item.name))
    return esp.map(item => item.name);
}








export {
    getEspecializacion
}