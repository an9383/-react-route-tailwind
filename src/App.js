import Routers from './components/Routers'
import { Reset } from 'styled-reset'
import GlobalStyle from './theme/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Reset />
                <GlobalStyle />
                <Routers />
            </ThemeProvider>
        </>
    )
}
export default App
