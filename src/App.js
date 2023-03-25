import './App.css';
import { ProductContent } from './Components/ProductContent/ProductContent';
import Card from './Components/Cards/Card';
import jsonData from './products.json'

function App() {

  return (
    <div className="App">
      <ProductContent>
        {jsonData.map( pro => {
          return (
            <Card key={pro.id} name={pro.name} oldPrice={pro.oldPrice} newPrice={pro.newPrice} img ={pro.img} />
          )
        })}
      </ProductContent>
    </div>
  );
}

export default App;
