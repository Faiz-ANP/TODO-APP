import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoApp from './component/Todo-App/TodoApp';

import { BrowserRouter , Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
     <Routes>
      <Route path="*" element ={<TodoApp />} />
   

      </Routes>
    </BrowserRouter>

);
