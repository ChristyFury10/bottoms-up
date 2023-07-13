import { HashRouter as Router, Route, Routes }  from 'react-router-dom';
import './App.css';
import Header from './componenets/Header'
import BarListPage from './pages/BarListPage'
import BarDetailPage from './pages/BarDetailPage'
import BarUpdatePage from './pages/BarUpdatePage'
import { useState } from 'react';
import BarCreate from './pages/BarCreate';
import WelcomePage from './pages/WelcomePage';


function App() {
  let routes;
  let [bar, setBar] = useState([])
  let [bars, setBars] = useState([])


  routes = (
    <Routes>
      <Route path="/" exact element={<WelcomePage/>}></Route>
      <Route path="/bars" exact element={<BarListPage bar={bar} setBar={setBar} bars={bars} setBars={setBars}/>}/>
      <Route path="/bars/create" exact element={<BarCreate bar={bar} setBar={setBar}/>}/>
      <Route path="/bars/:id/update" element={<BarUpdatePage bar={bar} setBar={setBar} bars={bars} setBars={setBars}/>}/>
      <Route path="/bars/:id" element={<BarDetailPage bar={bar} setBar={setBar} bars={bars} setBars={setBars}/>}/>
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
