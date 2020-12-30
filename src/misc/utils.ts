const BREAK_POINT = 768

export const spLayout = () => {
  return (style: TemplateStringsArray) =>
    `@media (max-width: ${BREAK_POINT - 1}px) { ${style} }`
}
export const pcLayout = () => {
  return (style: TemplateStringsArray) =>
    `@media (min-width: ${BREAK_POINT}px) { ${style} }`
}
