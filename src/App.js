import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// components
import { Navbar } from './components/index';
// styles 
import './App.css';
//routes
import { routes } from './routes/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          {routes.map((route) => 
            <Route key={route.id} exact={route.isExact} path={route.path} element={route.component}></Route>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
