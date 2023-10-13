// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.js';
import Form from './components/Form';
import Menu from './components/Menu.js';
import Products from './components/Products.js';
import Searchbar from './components/Searchbar.js';
import './css/bootstrap.css';
function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Products/>
                <Form/>
        </div>
   </div>
   </>
  );
}
export default App;
