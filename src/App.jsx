import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'
import Module from './pages/Module';
import tests from './services/data'
function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='' index exact element={<HomePage/>} />
        <Route path='test/:id' element={<Module tests={tests}/>} />
        <Route path='*'  element={<>Page Not Found</>} />
      </Routes>
    </Suspense>
  );
}

export default App;
