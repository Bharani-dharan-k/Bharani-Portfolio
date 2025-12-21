import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import ClickSpark from "@/components/ClickSpark";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
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
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="animate-pulse text-xl">Loading...</div>
            </div>
          }>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ClickSpark>
    </>
  );
}

export default App;
