import { ArrowDown } from "lucide-react";
import viteImg from '../assets/vite.JPG'; // Adjust the path as needed

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        {/* Flex container for side-by-side layout */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
          
          {/* Left: Text Section */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Bharanidharan
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Kumaresan
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
              I build fast, scalable web apps with clean UIs and solid backends.
              Combining my passion for data structures with full-stack development,
              I create solutions that are both efficient and user-friendly.
            </p>

            <div className="pt-2 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={viteImg}  
              alt="Bharanidharan Kumaresan"
              loading="lazy" // <-- Lazy loading added here
              className="w-40 h-40 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-primary opacity-0 animate-fade-in-delay-2"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
