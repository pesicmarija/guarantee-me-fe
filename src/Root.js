import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { Loader } from './components/Loader';
import { AppErrorPage } from './pages/AppErrorPage';
import { Login } from "./pages/Auth/Login";
import { Register } from './pages/Auth/Register';

const Root = () => {
  //const arePrivilegesSet = true; // Replace with actual privilege check

  return (
    <Suspense fallback={<Loader size="l" />}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <AppErrorPage
              code={404}
              title='App Error 404'
              message='Not Authorized'
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export { Root };
