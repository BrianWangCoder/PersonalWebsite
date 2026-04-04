import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutGrid, 
  Cpu, 
  Rocket, 
  Terminal, 
  Settings, 
  BookOpen, 
  Mail,
  ArrowRight,
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Phone,
  MapPin
} from "lucide-react";

type Page = "home" | "resume";

// ─── Sidebar ────────────────────────────────────────────────────────────────

const Sidebar = ({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (page: Page) => void }) => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-6 px-4 space-y-8 z-50 border-r border-outline-variant">
      <div className="flex items-center space-x-3 px-2">
        <div className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center">
          <Cpu className="text-primary w-6 h-6" />
        </div>
        <div>
          <h2 className="font-headline font-bold text-primary leading-none">Brian Wang</h2>
          <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider">Systems Engineering</p>
        </div>
      </div>

      <nav className="flex-grow space-y-2">
        <NavItem icon={<LayoutGrid size={20} />} label="Home" active={currentPage === "home"} onClick={() => onNavigate("home")} />
        <NavItem icon={<Cpu size={20} />} label="Work Experience" onClick={() => {}} />
        <NavItem icon={<Rocket size={20} />} label="Projects" onClick={() => {}} />
        <NavItem icon={<Terminal size={20} />} label="Skills" onClick={() => {}} />
      </nav>

      <div className="space-y-2 border-t border-outline-variant pt-4">
        <NavItem icon={<Settings size={18} />} label="Settings" small onClick={() => {}} />
        <NavItem icon={<BookOpen size={18} />} label="Documentation" small onClick={() => {}} />
        <button
          onClick={() => onNavigate("resume")}
          className="w-full mt-4 primary-gradient text-on-primary font-bold py-2.5 rounded-lg text-sm shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
          <FileText size={16} />
          Resume
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({
  icon, label, active = false, small = false, onClick
}: {
  icon: React.ReactNode; label: string; active?: boolean; small?: boolean; onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 active:translate-x-1 ${
      active
        ? "text-primary font-bold border-r-2 border-primary bg-surface-container"
        : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
    } ${small ? "py-2 text-xs" : "text-sm"}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

// ─── TopBar ──────────────────────────────────────────────────────────────────

const TopBar = ({ currentPage, onNavigate }: { currentPage: Page; onNavigate: (page: Page) => void }) => {
  return (
    <header className="w-full top-0 sticky z-40 bg-surface flex justify-between items-center px-8 h-20 shadow-[0_20px_40px_rgba(6,14,32,0.4)]">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-headline font-bold tracking-tighter text-primary">Brian Wang</h1>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <button
            onClick={() => onNavigate("home")}
            className={`transition-colors duration-300 pb-1 ${currentPage === "home" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant hover:text-tertiary"}`}
          >
            Connect
          </button>
          <button
            onClick={() => onNavigate("resume")}
            className={`transition-colors duration-300 pb-1 ${currentPage === "resume" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant hover:text-tertiary"}`}
          >
            Resume
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Mail className="text-on-surface-variant hover:text-primary cursor-pointer w-5 h-5" />
        <Terminal className="text-on-surface-variant hover:text-primary cursor-pointer w-5 h-5" />
        <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-bold text-primary active:scale-95 transition-transform">
          Contact
        </button>
      </div>
    </header>
  );
};

// ─── Home Page Components ─────────────────────────────────────────────────────

const Hero = () => (
  <div className="relative overflow-hidden rounded-xl bg-surface-container-low min-h-[450px] flex flex-col justify-end p-10 border border-outline-variant">
    <div className="absolute inset-0 z-0">
      <img
        alt="Robotics Lab"
        className="w-full h-full object-cover opacity-20"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2fpTw9tq4He1Ar29kAJmQKeWeOPYjBfxvIFgHlpkf8XTClL6CqsvDDnQJTyBItaN1RDtYq1nEfDhNo99-xvWRBzuJZpsEn0-Vhyo0wC4a2OmxHdVN4xO8lKdudSHm-J48klancLpHIBZ6sU23wOngDfLZg9fn4nXGTpbKdSMqLKXmJvFJhBhWHkKcT-GFpw1R1TXePSxingA-Ek4-wSTorDqDRdGR-oKm78YhZgEJpTMY62U9gj9QCLHR4Pfb8zd82BxYz_Fc9w"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
    </div>
    <div className="relative z-10 space-y-4 max-w-4xl">
      <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="inline-block px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase tracking-widest border border-tertiary/20">
        Computer Systems Engineer
      </motion.span>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-tight tracking-tight">
        Brian Wang <span className="text-primary"></span>
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="max-w-2xl text-on-surface-variant text-lg md:text-xl leading-relaxed">
        Computer Systems Engineering student with experience in robotics, embedded systems, and AI-driven projects. Mentoring the next generation of engineers while building autonomous robotic systems.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="flex space-x-4 pt-6">
        <button className="primary-gradient text-on-primary px-10 py-4 rounded-lg font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all">
          View Projects
        </button>
        <button className="bg-surface-container-high text-primary px-10 py-4 rounded-lg font-bold border border-outline-variant hover:bg-surface-bright active:scale-95 transition-all">
          Latest Research
        </button>
      </motion.div>
    </div>
  </div>
);

const Competencies = () => {
  const skills = [
    { name: "Embedded Systems (Microcontrollers)", value: 92 },
    { name: "Embedded C++ / Systems Programming", value: 88 },
    { name: "AI / Machine Learning Integration", value: 75 },
    { name: "3D CAD Modelling", value: 80 },
  ];
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-headline font-bold text-on-surface">Core Competencies</h3>
        <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">LOG_01: SYSTEMS_READY</span>
      </div>
      <div className="bg-surface-container-low p-10 rounded-xl border border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-on-surface-variant text-base">{skill.name}</span>
                <span className="text-tertiary font-bold">{skill.value}%</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-tertiary rounded-full shadow-[0_0_8px_#5df6e0]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI Social Robot",
      description: "Built the software and hardware for an animatronic robot that interacts in the real world using LLM technology.",
      image: "/images/winnie.jpg",
      status: "ACTIVE"
    },
    {
      title: "Biomimicry Walking Robot",
      description: "Built a robot that mimics bio movement using servo motors, controlled via IR communication.",
      image: "/images/penguin.jpg",
      status: "COMPLETED"
    },
    {
      title: "PID Balancing Robot",
      description: "Designed and built the hardware and software for a robot that self-balances using PID control systems.",
      image: "/images/PIDRobot.jpg",
      status: "COMPLETED"
    }
  ];
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-headline font-bold text-on-surface">Recent Field Operations</h3>
        <button className="text-primary text-sm font-bold flex items-center space-x-1 hover:underline">
          <span>All Projects</span>
          <ArrowRight size={14} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} whileHover={{ y: -5 }}
            className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant hover:border-primary/30 transition-all cursor-pointer">
            <div className="h-48 overflow-hidden relative">
              <img alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={project.image} referrerPolicy="no-referrer" />
              <div className={`absolute top-3 right-3 px-2 py-1 backdrop-blur rounded text-[10px] font-bold ${
                project.status === "ACTIVE" ? "bg-tertiary/20 text-tertiary" : "bg-surface/80 text-tertiary"
              }`}>
                {project.status}
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h4 className="font-bold text-primary">{project.title}</h4>
              <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─── Resume Page ──────────────────────────────────────────────────────────────

const CVSection = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-surface-container-low border border-outline-variant rounded-xl p-8 space-y-6"
  >
    <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
      <div className="text-tertiary">{icon}</div>
      <h3 className="text-lg font-headline font-bold text-on-surface uppercase tracking-widest">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const CVEntry = ({ title, subtitle, date, bullets }: { title: string; subtitle: string; date: string; bullets?: string[] }) => (
  <div className="relative pl-4 border-l border-outline-variant space-y-2">
    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
    <div className="flex flex-wrap justify-between items-start gap-2">
      <div>
        <p className="font-bold text-primary">{title}</p>
        <p className="text-sm text-on-surface-variant">{subtitle}</p>
      </div>
      <span className="text-[10px] font-mono text-tertiary border border-tertiary/30 rounded px-2 py-1 bg-tertiary/5 whitespace-nowrap">{date}</span>
    </div>
    {bullets && (
      <ul className="space-y-1 pt-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
            <ChevronRight size={14} className="text-tertiary mt-0.5 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const handleDownloadCV = () => {
  const cvContent = `BRIAN WANG
────────────────────────────────────────────────────
Phone: 021 174 9062
Address: 189C Edmonton Road
Email: wang.brian662@gmail.com

ABOUT ME
────────
Brian Wang is a Computer Systems Engineering student with experience in robotics,
embedded systems, and AI-driven robotics projects. He has mentored school students
in robotics and developed hardware and software for autonomous robotic systems.

EDUCATION
─────────
2024 – Present   Bachelor of Engineering Honours
                 Wardiere University

WORK EXPERIENCE
───────────────
2024 – Present   Research Assistant — CARES
                 Research and experiment with various robots, developing and
                 applying programming techniques.

2024 – 2025      Summer Research — CARES
                 Re-designing and building hardware and software for a new robot
                 soccer system to later be used to teach intermediate to high
                 school students coding concepts.

2024 – 2026      Staff Member + Coach for International Robotics Competition — IROC
                 Robotics coach and staff member for primary and high school
                 students for two international competitions.

2024 – 2026      Volunteer for the NZ Robot Olympiad — NZRO
                 Volunteered as a staff member for many NZRO robotics competitions
                 held for primary to high school students to compete in.

2024 – Present   Robotics Teacher — Cilab
                 Teaching robotics skills such as designing, building, coding and
                 problem solving to primary to high school students.

PROJECTS + EXTRA CURRICULARS
─────────────────────────────
• Leader for Robot Soccer Club
  Lead coach teaching university and high school students to control robots
  to play soccer autonomously.

• AI Social Robot
  Built the software and hardware for an animatronic robot that interacts
  in the real world using LLM.

• PID Balancing Robot
  Designed and built the hardware and software for a robot that balances
  using PID + control systems.

• Robot Soccer System
  Tasked with refactoring hardware and software for a new robot soccer system.

• Biomimicry Walking Robot
  Built a robot that mimics bio movement using servo motors and controlled
  via IR communication.

• JetBot AI Robot
  Researching and documenting on the NVIDIA Jetson Nano for robotics
  and machine learning.

SKILLS
──────
Coding · Communication · Electronics · Teamwork
3D CAD Modelling · Problem Solving · Innovation · Proactive Learner

REFERENCES
──────────
Ho-Seok Ahn
Senior Lecturer, Computer Systems Engineering
Phone: +6493737599
Email: hs.ahn@auckland.ac.nz
`;

  const blob = new Blob([cvContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Brian_Wang_CV.txt";
  a.click();
  URL.revokeObjectURL(url);
};

const ResumePage = () => {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-start justify-between gap-6"
      >
        <div className="space-y-3">
          <div>
            <span className="text-[10px] font-mono text-tertiary uppercase tracking-widest">CURRICULUM VITAE</span>
            <h2 className="text-4xl font-headline font-bold text-on-surface mt-1">Brian Wang</h2>
            <p className="text-on-surface-variant mt-1">Computer Systems Engineering · Robotics & AI</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5"><Phone size={13} className="text-tertiary" /> 021 174 9062</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-tertiary" /> 189C Edmonton Road</span>
            <span className="flex items-center gap-1.5"><Mail size={13} className="text-tertiary" /> wang.brian662@gmail.com</span>
          </div>
        </div>
        <button
          onClick={handleDownloadCV}
          className="primary-gradient text-on-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 self-start shrink-0"
        >
          <Download size={20} />
          Download CV
        </button>
      </motion.div>

      {/* About */}
      <CVSection icon={<FileText size={22} />} title="About Me">
        <p className="text-on-surface-variant leading-relaxed">
          Brian Wang is a Computer Systems Engineering student with experience in robotics, embedded systems, and AI-driven robotics projects. He has mentored school students in robotics and developed hardware and software for autonomous robotic systems.
        </p>
      </CVSection>

      {/* Education */}
      <CVSection icon={<GraduationCap size={22} />} title="Education">
        <CVEntry
          title="Bachelor of Engineering Honours"
          subtitle="Wardiere University"
          date="2024 – Present"
        />
      </CVSection>

      {/* Work Experience */}
      <CVSection icon={<Briefcase size={22} />} title="Work Experience">
        <div className="space-y-8">
          <CVEntry
            title="Research Assistant"
            subtitle="CARES"
            date="2024 – Present"
            bullets={["Research and experiment with various robots, developing and applying programming techniques."]}
          />
          <CVEntry
            title="Summer Research"
            subtitle="CARES"
            date="2024 – 2025"
            bullets={["Re-designing and building hardware and software for a new robot soccer system to later be used to teach intermediate to high school students coding concepts."]}
          />
          <CVEntry
            title="Staff Member + Coach for International Robotics Competition"
            subtitle="IROC"
            date="2024 – 2026"
            bullets={["Robotics coach and staff member for primary and high school students for two international competitions."]}
          />
          <CVEntry
            title="Volunteer for the NZ Robot Olympiad"
            subtitle="NZRO"
            date="2024 – 2026"
            bullets={["Volunteered as a staff member for many NZRO robotics competitions held for primary to high school students to compete in."]}
          />
          <CVEntry
            title="Robotics Teacher"
            subtitle="Cilab"
            date="2024 – Present"
            bullets={["Teaching robotics skills such as designing, building, coding and problem solving to primary to high school students."]}
          />
        </div>
      </CVSection>

      {/* Projects */}
      <CVSection icon={<Rocket size={22} />} title="Projects + Extra Curriculars">
        <div className="space-y-8">
          <CVEntry
            title="Leader for Robot Soccer Club"
            subtitle="Extra Curricular"
            date="Ongoing"
            bullets={["Lead coach teaching university and high school students to control robots to play soccer autonomously."]}
          />
          <CVEntry
            title="AI Social Robot"
            subtitle="Hardware & Software Project"
            date="Ongoing"
            bullets={["Built the software and hardware for an animatronic robot that interacts in the real world using LLM."]}
          />
          <CVEntry
            title="PID Balancing Robot"
            subtitle="Control Systems Project"
            date="Completed"
            bullets={["Designed and built the hardware and software for a robot that balances using PID + control systems."]}
          />
          <CVEntry
            title="Robot Soccer System"
            subtitle="Robotics Engineering"
            date="Completed"
            bullets={["Tasked with refactoring hardware and software for a new robot soccer system."]}
          />
          <CVEntry
            title="Biomimicry Walking Robot"
            subtitle="Servo Motors · IR Communication"
            date="Completed"
            bullets={["Built a robot that mimics bio movement using servo motors and controlled via IR communication."]}
          />
          <CVEntry
            title="JetBot AI Robot"
            subtitle="NVIDIA Jetson Nano · Machine Learning"
            date="Completed"
            bullets={["Researching and documenting on the NVIDIA Jetson Nano for robotics and machine learning."]}
          />
        </div>
      </CVSection>

      {/* Skills */}
      <CVSection icon={<Award size={22} />} title="Skills">
        <div className="flex flex-wrap gap-3">
          {["Coding", "Communication", "Electronics", "Teamwork", "3D CAD Modelling", "Problem Solving", "Innovation", "Proactive Learner"].map(skill => (
            <span key={skill} className="text-sm bg-surface-container-high text-on-surface-variant px-4 py-2 rounded-full border border-outline-variant">
              {skill}
            </span>
          ))}
        </div>
      </CVSection>

      {/* References */}
      <CVSection icon={<Mail size={22} />} title="References">
        <div className="relative pl-4 border-l border-outline-variant space-y-1">
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
          <p className="font-bold text-primary">Ho-Seok Ahn</p>
          <p className="text-sm text-on-surface-variant">Senior Lecturer, Computer Systems Engineering</p>
          <p className="text-sm text-on-surface-variant flex items-center gap-1.5 mt-2">
            <Phone size={12} className="text-tertiary" /> +6493737599
          </p>
          <p className="text-sm text-on-surface-variant flex items-center gap-1.5">
            <Mail size={12} className="text-tertiary" /> hs.ahn@auckland.ac.nz
          </p>
        </div>
      </CVSection>
    </div>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="w-full py-8 mt-auto flex flex-col md:flex-row justify-between items-center px-12 border-t border-outline-variant bg-surface">
    <p className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant/60">
      © 2025 Brian Wang | Computer Systems Engineering
    </p>
    <div className="flex space-x-8 mt-4 md:mt-0">
      <a href="#" className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant/60 hover:text-tertiary transition-colors">GitHub</a>
      <a href="#" className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant/60 hover:text-tertiary transition-colors">LinkedIn</a>
      <a href="#" className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant/60 hover:text-tertiary transition-colors">Source Code</a>
    </div>
  </footer>
);

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-surface flex">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="ml-64 flex-grow flex flex-col min-h-screen">
        <TopBar currentPage={currentPage} onNavigate={setCurrentPage} />
        <AnimatePresence mode="wait">
          {currentPage === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-8 space-y-12 max-w-7xl mx-auto w-full"
            >
              <Hero />
              <Competencies />
              <Projects />
            </motion.div>
          ) : (
            <motion.div
              key="resume"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex-grow"
            >
              <ResumePage />
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}
