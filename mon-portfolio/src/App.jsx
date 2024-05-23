import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/Projects" element={<Layout><Projects /></Layout>} />
      <Route path="/Skills" element={<Layout><Skills /></Layout>} />
      <Route path="*" element={<Layout><Error /></Layout>} />
    </Routes>
  )
}

export default App
