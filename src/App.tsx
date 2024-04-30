
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './context/OrderContext';
function App() {

  return (
    <OrderProvider>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </OrderProvider>
  );
}

export default App;
