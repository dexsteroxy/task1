import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import RapidPrototyping from "./pages/services/RapidPrototyping";
import ResearchDevelopment from "./pages/services/ResearchDevelopment";
import UserResearch from "./pages/services/UserResearch";
import ProductStrategy from "./pages/services/ProductStrategy";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import MVP from "./pages/services/MVP";
import CloudStrategy from "./pages/services/CloudStrategy";
import ProductDesign from "./pages/services/ProductDesign";
import UXDesign from "./pages/services/UXDesign";
import Finance from "./pages/industries/Finance";
import ComposableCommerce from "./pages/industries/ComposableCommerce";
import Otodom from "./pages/clients/Otodom";
import Vinted from "./pages/clients/Vinted";
import AboutUs from "./pages/AboutUs";
import Sustainability from "./pages/Sustainability";
import JoinNetguru from "./pages/JoinNetguru";
import SuperAppIntegration from "./pages/blog/SuperAppIntegration";
import DataFoundationsAI from "./pages/blog/DataFoundationsAI";
import EstimateProject from "./pages/EstimateProject";
import NotFound from "./pages/NotFound";
import Services from "./pages/services";
import Industry from "./pages/Industry";
import Insights from "./pages/Insights";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/rapid-prototyping" element={<RapidPrototyping />} />
          <Route path="/services/research-development" element={<ResearchDevelopment />} />
          <Route path="/services/user-research" element={<UserResearch />} />
          <Route path="/services/product-strategy" element={<ProductStrategy />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/mvp" element={<MVP />} />
          <Route path="/services/cloud-strategy" element={<CloudStrategy />} />
          <Route path="/services/product-design" element={<ProductDesign />} />
          <Route path="/services/ux-design" element={<UXDesign />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/composable-commerce" element={<ComposableCommerce />} />
          <Route path="/clients/otodom" element={<Otodom />} />
          <Route path="/clients/vinted" element={<Vinted />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/join-netguru" element={<JoinNetguru />} />
          <Route path="/blog/superapp-integration" element={<SuperAppIntegration />} />
          <Route path="/blog/data-foundations-ai" element={<DataFoundationsAI />} />
          <Route path="/estimate-project" element={<EstimateProject />} />
             <Route path="/services" element={<Services />} />

               <Route path="/industries" element={<Industry />} />
                 <Route path="/insights" element={<Insights />} />
               
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
