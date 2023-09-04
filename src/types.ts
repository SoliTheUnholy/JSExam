import {HTMLElements,HTMLAttributes} from "./HTMLElements"
export type BoxProps = {
    element: typeof HTMLElements[number],
    attr?: HTMLAttributes,
    children?: string | Element | Element[]
}