
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Plan from './components/Plan';
// import NewPlan from './components/NewPlan';
// import MenuCard from './components/MenuForm';
import Footer from './components/Footer';
// import Menu from './components/Menu';

function App() {
  return (
    <div className="min-h-screen bg-cream font-Barlow">
      <Nav />

      <Routes>
        <Route
          path="/"
          element={<Home />}
          exact
        />
        <Route
          path="/about-us"
          element={<About />}
        />
        <Route
          path="/create-your-plan"
          element={<Plan />}
        />
        {/* <Redirect to="/" /> */}

      </Routes>


      <Footer />
      {/* <NewPlan /> */}
    </div>
  );
}

export default App;
