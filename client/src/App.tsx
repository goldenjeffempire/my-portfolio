// App.tsx
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { lazy, Suspense, useEffect } from "react";

// Lazy load pages
const Home = lazy(() => import('@/pages/home'));
const NotFound = lazy(() => import('@/pages/not-found'));

function App() {
  useEffect(() => {
    const scrollHandler = () => {
      const btn = document.getElementById("back-to-top");
      if (btn) btn.classList.toggle("hidden", window.scrollY < 500);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <Toaster />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component={Home} />
              <Route> <NotFound /> </Route>
            </Switch>
          </Suspense>
          <Footer />

          <button
            id="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-2 w-10 h-10 bg-blue-600 dark:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 z-50 hidden"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
