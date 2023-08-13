import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import { CartProvider } from './components/context/CartContext'

function App() {
  return (
    <div className="App">
      <CartProvider>
         <Header />
         <Home />
      </CartProvider>
     
    </div>
  );
}

export default App;
