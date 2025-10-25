import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import CategoriesPage from './pages/CategoriesPage/categoriesPage';

function App() {

  return (
    <>
      <Header />
      <main>
        <div className='main-max-width'>
          <BrowserRouter>
            <Routes>
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="*" element={<Navigate to="/categories" replace />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </>
  )
}

export default App;
