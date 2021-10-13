export const generateClassNames = (baseClass, otherClasses) => {
  const list = [baseClass]
  if(!otherClasses) return list.join(" ");
  Object.entries(otherClasses).map(([key, value]) => {
    if(value) list.push(`${baseClass}${key}`)
  })
  return list.join(" ")
}