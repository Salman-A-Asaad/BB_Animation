import { AnimatePresence } from "framer-motion";
import { Header, Home, Actors, Actor } from "./components/index";
import { useLocation, Routes, Route } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/actor/:id" element={<Actor />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
