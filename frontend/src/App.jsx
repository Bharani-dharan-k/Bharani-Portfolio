import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ClickSpark from "@/components/ClickSpark";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component with minimum 2 seconds display
const LoadingScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center space-y-6">
        <div className="animate-pulse">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Welcome to
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Bharanidharan Portfolio
          </h2>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <Toaster />
        <LoadingScreen />
      </>
    );
  }

  return (
    <>
      <Toaster />
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <BrowserRouter>
          {/* <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="animate-pulse text-xl">Welcome to Bharanidharan Portfolio</div>
            </div>
          }> */}
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          {/* </Suspense> */}
        </BrowserRouter>
      </ClickSpark>
    </>
  );
}

export default App;
