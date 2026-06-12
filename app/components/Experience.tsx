import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  role: string;
  description: string;
  icon: string;
  duration: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "SPECTRIX",
    role: "Full Stack Developer",
    duration: "(Oct 2024 - Present)",
    description: "An industrial real-time monitoring solution for plastic injection molding processes. Built using Svelte, Node.js, and MongoDB with WebSocket-based live temperature tracking, data visualization, reusable graph components, and CSV export functionality.",
    icon: "/cards/spectrix-logo.webp",
  },
  {
    id: 2,
    title: "EXFO",
    role: "Senior Software Developer",
    duration: "(Oct 2023 - Aug 2024)",
    description: "Built a GIS-based fiber monitoring system for EXFO using Angular, Node.js, Spring Boot, and FastAPI with PostgreSQL/PostGIS. Implemented real-time tracking with WebSockets and ActiveMQ, migrated Angular versions, and worked on modular UI libraries, GIS operations, and CI/CD pipelines.",
    icon: "/cards/exfo-logo.webp",
  },
  {
    id: 3,
    title: "Calsoft",
    role: "Senior Pricipal Development Engineer",
    duration: "(Oct 2021 - Oct 2023)",
    description: "Developed a 5G orchestration portal using Angular, Spring Boot, and PostgreSQL. Built network topology visualizations with D3.js, developed modern Angular Material UIs, and contributed to network service management and wireless configuration modules.",
    icon: "/cards/calsoft-logo.webp",
  },
  {
    id: 4,
    title: "Aloha Technology",
    role: "Software Developer",
    duration: "(Aug 2016 - Spet 2021)",
    description: "Developed enterprise web applications using Angular, React.js, Node.js, PHP Zend Framework, MySQL, and MongoDB. Built fleet management, health monitoring, and building management solutions with REST APIs, GraphQL, AWS services, and real-time notifications.",
    icon: "/cards/alohatechnology-logo.webp",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="self-start shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  height={60}
                  width={60}
                  className="object-contain rounded-[7px]"
                />
              </div>
              <div className="self-start">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title} <span className="text-sm font-light text-white/50">{card.duration}</span>
                </h3>
                <h4 className="text-l font-semibold text-white/40 mb-2">
                  {card.role}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

