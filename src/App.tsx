import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageContextProvider from "./contexts/LanguageContext";
function App() {
  return (
    <BrowserRouter>
      <LanguageContextProvider>
        <AppRoutes />
      </LanguageContextProvider>
    </BrowserRouter>
  );
}

export default App;
