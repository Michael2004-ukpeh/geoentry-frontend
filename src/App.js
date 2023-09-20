import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Layout from './pages/Layout';
import Entries from './pages/Entries';
import { ToastContainer } from 'react-toastify';
import Entry from './components/Entry';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/entry/:id" element={<Entry />} />
      </Routes>
    </Layout>
  );
}

export default App;
