import { Routes, Route } from "react-router-dom";

import {
  Dashboard,
  Settings,
  Team,
} from "./_root/pages";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "./_auth/forms/SignUpForm";
import SigninForm from "./_auth/forms/SignInForm";
import { Toaster } from "./components/ui/toaster";

import "./index.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;