import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import CategoriesPage from './pages/CategoriesPage/categoriesPage';
import Spinner from './components/Spinner/Spinner'
import { createContext } from 'react';
import MealsPage from './pages/MealsPage/MealsPage';

export const LoadingContext = createContext({
  loading: false,
  setLoading: () => { }
});

function App() {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      <LoadingContext value={{ loading, setLoading }}>
        <main>
          <Spinner loading={loading} />
          <div className='app-router-container'>
            <BrowserRouter>
              <Routes>
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path='/meals' element={<MealsPage/>} />
                <Route path="*" element={<Navigate to="/categories" replace />} />
              </Routes>
            </BrowserRouter>
          </div>
        </main>
      </LoadingContext>
    </>
  )
}

export default App;
