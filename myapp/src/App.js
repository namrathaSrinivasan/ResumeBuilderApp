
import './App.css';
import AddResume from './Components/AddResume';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewResume from './Components/ViewResume';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AddResume/>} exact/>
          <Route path='/view' element={<ViewResume/>}/>
                  </Routes>
      
      </Router>
    </div>
  );
}

export default App;
