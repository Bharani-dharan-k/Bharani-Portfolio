import { ExternalLink, ArrowRight } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Winner - Hackbuzz 2025",
    description:
      "Secured 2nd place in the Hackbuzz 2025 Conducted by KEC  CSE Coding Club.",
    image: "/achievements/hackbuzz.png",
    tags: ["Hackathon", "Team Project"],
    
  },
  {
    id: 2,
    title: "MongoDB Associate Developer Node.js",
    description:
      "Achieved MongoDB Associate Developer certification focusing on Node.js development.",
    image: "/achievements/mongodb.png",
    tags: ["Node.js", "MongoDB", "Certification"],
  },
  {
    id: 3,
    title: "Oracle APEX Cloud Developer Certified Associate",
    description:
      "Earned the Oracle APEX Cloud Developer Certified Associate certification, demonstrating expertise in Oracle APEX development.",
    image: "/achievements/apex.png",
    tags: ["Oracle APEX", "Certification"],
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Achievements</span> & Certificates
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the milestones, competitions, and certifications I’ve earned during my learning journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://www.linkedin.com/in/bharanidharan-k-a7b63a322/"
          >
            View More Certificates <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
