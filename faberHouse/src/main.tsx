import ReactDOM from "react-dom/client";
import { App } from "app/App";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { StoreProvier } from "app/providers/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PrimeReactProvider>
      <StoreProvier>
        <App />
      </StoreProvier>
    </PrimeReactProvider>
  </BrowserRouter>
);
