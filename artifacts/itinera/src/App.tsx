import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ItineraryDetail from "@/pages/ItineraryDetail";
import Journal from "@/pages/Journal";
import StoryDetail from "@/pages/StoryDetail";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/itinerary/:id" component={ItineraryDetail} />
      <Route path="/journal" component={Journal} />
      <Route path="/journal/:slug" component={StoryDetail} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
