/* src/sections/Projects.jsx */
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "GYM BRO – AI Fitness Assistant",
    description:
      "An AI-powered web application that provides personalized workout and nutrition recommendations. Integrated machine learning models including Random Forest, MobileNetV2 image classification, and a fine-tuned chatbot model.",
    image: "/GymbroPreview.png",
    tags: [
      "React.js",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "HuggingFace",
      "Railway",
    ],
    link: "https://capstone-project-gymbro.vercel.app/",
    github: "https://github.com/andrsginting/Gym-Bro-Capstone-Project-Coding-Camp",
  },
  {
    title: "Dashboard Monitoring System (DASH)",
    description:
      "A web-based IT monitoring dashboard developed during my internship at WOM Finance. Built to centralize data from ManageEngine OpManager and visualize system conditions for internal IT teams.",
    image: "/DashPreview.png",
    tags: ["React.js", "Node.js", "SQLite", "Docker", "REST API"],
    link: "https://github.com/andrsginting/Dashboard-Monitoring-Project-Internship",
    github: "https://github.com/andrsginting/Dashboard-Monitoring-Project-Internship",
  },
  {
    title: "Eco Solve – SDG 12 Awareness App",
    description:
      "An Android application designed to promote responsible consumption and environmental awareness. Includes educational content, donation features, and chatbot interaction built with Firebase services.",
    image: "/EcoSolvePreview.png",
    tags: ["Kotlin", "Firebase", "Realtime Database", "Cloud Messaging"],
    link: "https://github.com/andrsginting/Eco-Solve-SDG-12-",
    github: "https://github.com/andrsginting/Eco-Solve-SDG-12-",
  },
  {
    title: "Tour Rohani App",
    description:
      "An Android application developed to support religious tour management and communication. Provides itinerary access, participant management, and real-time information features for both users and administrators.",
    image: "/tourrohani_preview.png",
    tags: ["Kotlin", "Firebase", "Authentication", "Realtime Database"],
    link: "https://github.com/andrsginting/Religion-Tour-App",
    github: "https://github.com/andrsginting/Religion-Tour-App",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-17 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Selected Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that reflect
            <span className="font-serif italic font-normal text-white">
              {" "}
              my technical journey.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of web and mobile applications developed through
            academic projects, independent study, and professional internship
            experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <ArrowUpRight className="w-5 h-5" />
            <a href="https://github.com/andrsginting?tab=repositories">View More Details</a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
