import { Layout } from './components/Layout';
import { Home } from './pages/Home';

import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
    <Layout>
    <Home/>
    </Layout>
    }
    />
      
    </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;
