import Routers from './components/Routers'
import { Reset } from 'styled-reset'
import GlobalStyle from './theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'
import './assets/style/index.css'
import chakraTheme from './theme/chakraTheme'

function App() {
    return (
        <>
            <chakraTheme theme={chakraTheme}>
                <ThemeProvider theme={theme}>
                    <Reset />
                    <GlobalStyle />
                    <Routers />
                </ThemeProvider>
            </chakraTheme>
        </>
    )
}
export default App
