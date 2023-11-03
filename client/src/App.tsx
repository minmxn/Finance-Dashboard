import { useMemo } from "react"
import { themeSettings } from "./theme"
import { createTheme } from "@mui/material/styles"
import { CssBaseline, ThemeProvider } from "@mui/material"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
  <div className="app">
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    hi
  </ThemeProvider>
  </div>
  );
}

export default App
