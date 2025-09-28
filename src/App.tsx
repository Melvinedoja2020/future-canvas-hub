import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import AdminDashboard from "./pages/AdminDashboard";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import GasCompanyDashboard from "./pages/GasCompanyDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import EnterpriseDashboard from "./pages/EnterpriseDashboard";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import TechnicianDashboard from "./pages/TechnicianDashboard";
import TelemetryMonitoring from "./pages/TelemetryMonitoring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/government" element={<GovernmentDashboard />} />
          <Route path="/gas-company" element={<GasCompanyDashboard />} />
          <Route path="/delivery" element={<DeliveryDashboard />} />
          <Route path="/enterprise" element={<EnterpriseDashboard />} />
          <Route path="/consumer" element={<ConsumerDashboard />} />
          <Route path="/technician" element={<TechnicianDashboard />} />
          <Route path="/monitoring/telemetry" element={<TelemetryMonitoring />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
