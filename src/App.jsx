import './App.css'
import { Category } from './Component/Categories/Category'
import { Recipes } from './Component/Recipes/Recipes'
import { Recipes2 } from './Component/Recipes2/Recipes2';

const App = () => {
  return (
    <div className='container'>
      <Category />
      <Recipes />
      <Recipes2 />
    </div>
  );
}

export default App;
