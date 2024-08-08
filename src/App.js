import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function App() {
  return (
    <Routes>
        
      <Route  path="/" element={<Layout/>}>
            
              {/* <Route 
              index element={<Home/>} />  */}

              {/* <Route path="company/:id" element={<CompanyPage/>}/> */}
                   
           
      </Route>

      
   
    
    </Routes> 
  );
}

export default App;
