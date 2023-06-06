import './App.css';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from './Pages/Home'
import Sudoku from './Pages/Sudoku'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/'>
      <Route index element = {<Home />}></Route>
      <Route path=':difficulty' element = {<Sudoku />}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
  );
}

export default App;
