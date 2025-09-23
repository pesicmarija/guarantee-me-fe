import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import {Root} from "./Root";

function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);