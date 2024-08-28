/// <reference types="vite/client" />

interface WidgetConfig {
    title: string
    visible: boolean
    width: number
    height: number
    x: number
    y: number
    locked: boolean
    alwaysOnTop: boolean
}
interface WidgetsConfig {
    [key: string]: WidgetConfig
}