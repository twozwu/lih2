import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { ref } from 'vue'

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.greaterOrEqual('sm') // sm and larger
const md = breakpoints.greaterOrEqual('md') // md and larger
const lg = breakpoints.greaterOrEqual('lg') // lg and larger

export const breakpoint = ref({
    sm,
    md,
    lg
})
