// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

// 正则
const colorNameReg =
  /^(color|bg|bg-color|border)-(primary|info|success|warning|error)(-(hover|pressed|focus|disabled|[1-9]|10))?$/

// 缩写映射
const colorNameMap = {
  bg: 'background',
  border: 'border-color',
  'bg-color': 'background-color'
}

export default defineConfig({
  presets: [presetUno()],
  rules: [
    [
      colorNameReg,
      ([_, type, color, state]) => ({
        [colorNameMap[type] || type]: `rgba(var(--n-${color}-color${
          state || ''
        }), var(--un-text-opacity, 1))`
      })
    ]
  ]
})
