import { Routes, Route, Link } from 'react-router';
import { useState } from "react";
import Home from './components/Home';
import About from './components/About';
import Attractions from './components/Attractions';
import Food from './components/Food';
import Subscribe from './components/Subscribe';
import BucketList from './components/BucketList';
import './App.css';

function App() {

 const [bucketList, setBucketList] = useState([]);

function handleAdd(item) {
    setBucketList((prev) => [...prev, item.name]); // stores the attraction name
}

function handleDeleteItem(name) {
    setBucketList((prev) => prev.filter(item => item !== name));
}

 return (
  <div className="App">
    <nav className="navbar">
       <div className="navbar-title">
          <Link to="/home">Meet Me in STL</Link>
        </div>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/attractions">Attractions</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/bucketlist">Bucket List</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/attractions" element={<Attractions handleAdd={handleAdd} />} />
      <Route path="/food" element={<Food handleAdd={handleAdd} />} />
      <Route path="/bucketlist" element={<BucketList  bucketList={bucketList} onDelete={handleDeleteItem}/>} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
  </div>
 );
}
export default App;