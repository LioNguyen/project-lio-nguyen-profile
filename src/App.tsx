import {
  AboutPage,
  AppContainer,
  Footer,
  HomePage,
  Intro,
  Navbar,
} from "@/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </AppContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
