
import WithNavbarAndFooter from "./layout/WithNavbarAndFooter";
import Products from "./components/Products/Products";

function App() {
  //todo aca falta la logica de calcular
  return (
    <div>
        <WithNavbarAndFooter>
          <Products/>
        </WithNavbarAndFooter>
    </div>
  );
}

export default App;
