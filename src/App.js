import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation'

import About from './components/About';
import Songsaver from './components/Songsaver';
import GooglePlayStore from './components/GooglePlayStore';
import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    bluegrey: "#a6b8b9",
    nearlyblack: "#3a3a55",
    onHoverBackground: "#FFFFCC"
  },
  font: "Helvetica",
  fontSize: {
    tiny: "0.5rem",
    small: "1rem",
    medium: "1.2rem",
    default: "1.4rem",
    big: "1.9rem"
  }
};

const App = () => {
  return (
    <ThemeProvider theme = {theme}>
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Songsaver />} />
          <Route path='/about' element={<About />} />
          <Route path='/googleplaystore' element={<GooglePlayStore />}/>
        </Routes>
      </main>
    </div>
    </ThemeProvider>
  )
}

export default App
