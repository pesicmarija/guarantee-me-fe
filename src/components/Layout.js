import  {Suspense} from "react";

import {Loader} from "./Loader";

function Layout({ children }) {
  return (
    <div>
      {/* Layout content goes here */}
      <h1>Layout Component</h1>
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </div>
  );
}

export { Layout };