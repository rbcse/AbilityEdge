import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Homepage';
function App(){
     return <Router>

        <div className="app-container">
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>

    </Router>
}
export default App;