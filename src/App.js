import React from "react";
import TodoApp from "./component/Todo-App/TodoApp";
import Header from "./component/Header/header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App(){
    return (
    <Router>
      <Header /> <Routes>
      <Route path="*" Component ={TodoApp} />
    

      </Routes>
    </Router>

  
  
    );
  };

