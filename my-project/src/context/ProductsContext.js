const { createContext } = require("react");

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Iphone',
      value: '10',
      qt: '1',
    },
    {
      id: 2,
      name: 'Samsung',
      value: '20',
      qt: '2',
    },
    {
      id: 3,
      name: 'Xiaomi',
      value: '30',
      qt: '3',
    },
  ];

  return (
    <ProductsContext.Provider 
    value={{
      cart,
      setCart,
      products
    }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

export { ProductsProvider, useProducts };