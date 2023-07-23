import Home from './components/pages/home/Home';
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
 <div>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </HashRouter> 
  </div>
    </>
  )
}

export default App