import {
  SiAngular,
  SiReact,
  SiReactrouter,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiApachekafka,
  SiKubernetes,
  SiClaude,
  SiOpenai,
  SiGithub,
} from "react-icons/si";

import { FaAws,  } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { TbMessageUser } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";


const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "Angular", icon: SiAngular },
      { name: "ReactJS", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "VueJS", icon: SiVuedotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "jQuery", icon: SiJquery },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "NodeJS", icon: SiNodedotjs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
    ],
  },
  {
    category: "Database",
    technologies: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Azure", icon: VscAzure},
      { name: "Kafka", icon: SiApachekafka },
      { name: "ActiveMQ", icon: TbMessageUser},
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    category: "AI Tools",
    technologies: [
      { name: "Claude", icon: SiClaude },
      { name: "Cursor", icon: GiArtificialIntelligence }, // fallback
      { name: "OpenAI", icon: SiOpenai },
      { name: "GitHub Copilot", icon: SiGithub },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 px-6" id="techstack">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Technical Expertise
        </h2>

        <div className="space-y-10">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="text-2xl font-semibold mb-5 text-cyan-400">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                    >
                      <Icon className="text-5xl mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-center">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


