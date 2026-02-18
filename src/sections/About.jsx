import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Structured Problem Solving",
    description:
      "Solving programming challenges step by step with clear and maintainable logic.",
  },
  {
    icon: Rocket,
    title: "AI-Driven Exploration",
    description:
      "Exploring Artificial Intelligence concepts and applying them in real projects.",
  },
  {
    icon: Users,
    title: "Continuous Learning",
    description:
      "Using documentation and AI tools to continuously improve understanding and code quality.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "Transforming academic knowledge into practical and reliable software solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-17 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Growing through
              <span className="font-serif italic font-normal text-white">
                {" "}
                code, curiosity, and AI.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m Andreas Nicolas Ginting, a fresh graduate in Informatics
                with a strong interest in Artificial Intelligence and software
                development. My journey in programming has been shaped by
                consistent practice, experimentation, and structured problem
                solving.
              </p>

              <p>
                Over the past three years, I have worked on various academic and
                personal projects ranging from web applications to AI-based
                implementations. I focus on building solutions that are clear,
                practical, and aligned with real user needs.
              </p>

              <p>
                I regularly use modern development tools and AI assistants as
                learning companions to better understand concepts, debug
                efficiently, and refine my code. For me, technology is not just
                about writing programs — it’s about continuously improving the
                way problems are solved.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe consistent learning, practical experimentation, and
                thoughtful implementation are the foundations of becoming a
                reliable software engineer."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
