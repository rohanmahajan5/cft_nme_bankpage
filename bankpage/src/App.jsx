import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Team from './Team.jsx'
import Profile from './Profile.jsx'

function App() {
    return <>
        <Router>
            <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
        </Routes>
        </Router>
    
    </>


}

export default App