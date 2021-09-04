import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./themes/default";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthRoute } from './context/AuthContext';
import * as ROUTES from "./routes/route";

import HomeView from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFoundView from "./pages/error/404";
import Dashboard from "./pages/dashboard/Dashboard";

import Layout from "./components/layout/Layout";
import { ToastProvider } from "react-toast-notifications";


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <ToastProvider autoDismiss={true}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Layout>
          <Routes>
              <Route path={ROUTES.Login} element={<Login />} />
              <Route path={ROUTES.Register} element={<Register />} />
              <Route path={ROUTES.Home} element={<HomeView />}  />
              <Route path={ROUTES.Error} element={<NotFoundView />} />
              <Route path='*' element={<Navigate to={ROUTES.Error} />} />

              <AuthRoute path={ROUTES.Dashboard} element={<Dashboard />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
      </ToastProvider>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
