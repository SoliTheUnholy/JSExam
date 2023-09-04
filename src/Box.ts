import {BoxProps} from "./types.ts"
export function Box(props:BoxProps) {
    const elm = document.createElement(props.element)
    if (props.attr){
        Object.keys(props.attr).forEach((key:string):void => {
            elm.setAttribute(key, props.attr![key as keyof BoxProps["attr"]])
        })
    }
    if (props.children){
        if (Array.isArray(props.children)) elm.append(...props.children)
        else elm.append(props.children)
    }
    return elm
}