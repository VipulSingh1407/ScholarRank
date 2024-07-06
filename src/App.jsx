import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AskAI from "./pages/AskAI"; 
import NotFound from "./pages/NotFound"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import DocumentListenerPage from "./pages/DocumentListener";
import AIQuestionGenPage from "./pages/AIQuestionGen";
import AITutorPage from "./pages/AITutor";
import OnlineTestsPage from "./pages/OnlineTests";
import ProCutPage from "./pages/ProCut";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";

const App = () => {
  
  return (
    <BrowserRouter>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/askai" element={<AskAI />} />
        <Route path="/documentlistener" element={<DocumentListenerPage/>} />
        <Route path="/aiquestiongen" element={<AIQuestionGenPage/>} />
        <Route path="/aitutor" element={<AITutorPage/>} />
        <Route path="/onlinetest" element={<OnlineTestsPage/>} />
        <Route path="/procut" element={<ProCutPage/>} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        
     
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
