import { useThemeContext } from "../context/theme-context"


const BackgroundColor = (className) => {
  const {themeHandler} = useThemeContext()
  return (
    <button clasName={className} onClick={() => themeHandler(className)}></button>
  )
}

export default BackgroundColor
