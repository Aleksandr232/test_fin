import {  INPUT_TEXT, INPUT_NUMBER, INPUT_CITY } from "./type";




export function inputText(text){
    return{
        type: INPUT_TEXT,
        text
    }
}



export function inputNum(num){
    return{
        type: INPUT_NUMBER,
        num
    }
}

export function inputCity(city){
    return{
        type: INPUT_CITY,
        city
    }
}