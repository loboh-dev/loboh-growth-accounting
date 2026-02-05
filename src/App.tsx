import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Formulario from "./pages/Formulario/Formulario";
import Obrigado from "./pages/Obrigado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/contabilidade" element={<Index />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/formulario/obrigado" element={<Obrigado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
