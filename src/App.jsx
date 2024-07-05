
import Home from "./components/Home";
import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <>

      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;



