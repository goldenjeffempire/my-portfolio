import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useEffect, useCallback } from "react";
import { ErrorBoundary } from './components/ErrorBoundary';
import { lazy, Suspense } from 'react';

// Lazy load components
const Home = lazy(() => import('@/pages/home'));
const NotFound = lazy(() => import('@/pages/not-found'));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      if (window.pageYOffset > 500) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    }
  }, []);

  useEffect(() => {
    // Function to handle scroll event for back-to-top button
    const handleScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        if (window.pageYOffset > 500) {
          backToTopButton.classList.remove('hidden');
        } else {
          backToTopButton.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <Toaster />
          <Router />
          <Footer />

          {/* Back to Top Button */}
          <button 
            id="back-to-top"
            onClick={scrollToTop}
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
