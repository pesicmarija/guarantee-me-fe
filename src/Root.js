import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import { Loader } from './components/Loader';
import { AppErrorPage } from './pages/AppErrorPage';
import { Login } from "./pages/Auth/Login";
import { Register } from './pages/Auth/Register';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Warranties } from "./pages/Warranties/Warranties";

const Root = () => {

  return (
    <Suspense fallback={<Loader size="l" />}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/warranties" element={<Warranties />} />
        <Route
          path="*"
          element={
            <AppErrorPage
              code={404}
              descriptionTitle='App Error 404'
              description='Not Authorized'
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export { Root };
