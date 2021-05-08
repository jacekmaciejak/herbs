import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';



function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
          {/* <Route path='/o-nas' component={Home} />
          <Route path='/uslugi' component={Services} />
          <Route path='/nasze-realizacje' component={Realizations} />
          <Route path='/kontakt' component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>



    </>
  );
}

export default App;
