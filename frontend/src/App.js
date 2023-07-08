import { BrowserRouter as Router, Route, Routes }  from 'react-router-dom';
import './App.css';
import Header from './componenets/Header'
import BarListPage from './pages/BarListPage'
import BarDetailPage from './pages/BarDetailPage'


function App() {
  let routes;

  routes = (
    <Routes>
      <Route path="/" exact element={<BarListPage/>}/>
      <Route path="/bar/:id" element={<BarDetailPage/>}/>

    </Routes>
  )

  return (
    <Router>
    <div className="App">
      <Header />
      {routes}
    </div>
    </Router>
  );
}

export default App;
