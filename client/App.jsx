import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ChallengeDetail from "./pages/ChallengeDetail";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import SubmitChallenge from "./pages/SubmitChallenge";
import MySubmissions from "./pages/MySubmissions";
import AdminPanel from "./pages/AdminPanel";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import { AppProvider } from "./contexts/AppContext";
import { Plus, FileText, Settings } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/challenge/:id" element={<ChallengeDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit-challenge" element={<SubmitChallenge />} />
            <Route path="/my-submissions" element={<MySubmissions />} />
            <Route path="/admin" element={<AdminPanel />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")).render(<App />);
