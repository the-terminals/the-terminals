import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Briefcase, 
  Code, 
  Layers, 
  Server, 
  Palette, 
  Cpu, 
  ChevronRight, 
  Rocket,
  Target,
  Lightbulb,
  GraduationCap,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const careerPaths = [
  {
    id: "full_stack_engineer",
    role_name: "Full Stack Engineer",
    icon: Layers,
    gradient: "from-violet-500 to-purple-600",
    role_snapshot: "A versatile developer capable of handling both the user-facing frontend and the data-processing backend. They bridge the gap between UI design and database architecture, often leading end-to-end feature development.",
    tech_stack: {
      frontend: ["React", "TypeScript", "Tailwind"],
      backend: ["Node.js", "Python", "Go"],
      databases: ["PostgreSQL", "MongoDB", "Redis"],
      devops: ["Docker", "AWS", "GitHub Actions"]
    },
    core_responsibilities: [
      "Building seamless end-to-end features from UI to database.",
      "Designing system architectures that balance client-side and server-side logic.",
      "Ensuring consistency between the frontend state and backend data models.",
      "Managing deployment pipelines for the entire application stack."
    ],
    career_roadmap: {
      beginner: "Build simple CRUD apps using a single language (like JS) for both ends.",
      intermediate: "Master state management, API design, and cloud hosting.",
      senior: "Architect complex distributed systems and optimize the full delivery lifecycle."
    },
    secret_sauce: ["Holistic systems thinking", "Adaptability", "T-shaped skills (deep in one area, broad in others)"],
    interview_focus: ["Full-stack system design", "Integration testing", "API security", "Performance optimization"],
    career_guidance: "Avoid the 'Jack of all trades, master of none' trap; pick one side (frontend or backend) to be your 'primary' strength while remaining proficient in the other."
  },
  {
    id: "sre",
    role_name: "Site Reliability Engineer (SRE)",
    icon: Server,
    gradient: "from-emerald-500 to-teal-600",
    role_snapshot: "Applies software engineering principles to infrastructure and operations to create ultra-scalable and highly reliable software systems. They treat operations as a software problem, focusing on automation and uptime.",
    tech_stack: {
      monitoring: ["Prometheus", "Grafana", "Datadog"],
      automation: ["Python", "Go", "Terraform"],
      orchestration: ["Kubernetes", "Istio"],
      incident_management: ["PagerDuty", "Sentry"]
    },
    core_responsibilities: [
      "Defining and maintaining Service Level Objectives (SLOs) and Error Budgets.",
      "Automating manual operational tasks (toil reduction).",
      "Performing root cause analysis (RCA) after system failures.",
      "Improving system observability and alerting logic."
    ],
    career_roadmap: {
      beginner: "Learn Linux internals, networking, and basic scripting.",
      intermediate: "Master K8s, SLIs/SLOs, and distributed system tracing.",
      senior: "Design self-healing systems and define organizational reliability standards."
    },
    secret_sauce: ["Obsession with automation", "Calmness during high-stakes outages", "Pragmatic approach to risk"],
    interview_focus: ["Error budget logic", "Distributed systems scaling", "Linux troubleshooting", "Scripting/Coding proficiency"],
    career_guidance: "Focus on the 'Error Budget' mindset—reliability isn't 100% uptime; it's about making sure systems are reliable *enough* to meet user expectations."
  },
  {
    id: "ml_engineer",
    role_name: "Machine Learning Engineer",
    icon: Cpu,
    gradient: "from-orange-500 to-red-600",
    role_snapshot: "Specializes in designing, building, and deploying production-ready ML models. Unlike Data Scientists who focus on research, ML Engineers focus on the engineering required to run models at scale.",
    tech_stack: {
      languages: ["Python", "C++", "Java"],
      ml_frameworks: ["PyTorch", "TensorFlow", "Scikit-learn"],
      mlops: ["MLflow", "Kubeflow", "DVC"],
      cloud: ["AWS SageMaker", "Google Vertex AI"]
    },
    core_responsibilities: [
      "Translating data science prototypes into production-level code.",
      "Designing and managing ML pipelines and feature stores.",
      "Optimizing model inference for speed and cost.",
      "Monitoring models for data drift and performance decay in production."
    ],
    career_roadmap: {
      beginner: "Master linear algebra, statistics, and basic model training.",
      intermediate: "Learn MLOps, containerization, and model deployment strategies.",
      senior: "Lead the architecture of large-scale ML systems and automated retraining loops."
    },
    secret_sauce: ["Mathematical intuition", "Experimental mindset", "Focus on data quality over algorithm hype"],
    interview_focus: ["ML theory", "System design for ML", "Data engineering patterns", "Model evaluation metrics"],
    career_guidance: "Focus on 'MLOps'—the value of a model is zero if it cannot be reliably deployed, monitored, and updated in a production environment."
  },
  {
    id: "ui_ux_engineer",
    role_name: "UI/UX Engineer",
    icon: Palette,
    gradient: "from-pink-500 to-rose-600",
    role_snapshot: "The bridge between creative design and technical implementation. They are developers who specialize in design systems, accessibility, and high-fidelity interaction animations.",
    tech_stack: {
      design_tools: ["Figma", "Adobe XD", "Storybook"],
      frontend: ["React", "CSS/SCSS", "Framer Motion"],
      standards: ["WCAG (Accessibility)", "W3C Standards"]
    },
    core_responsibilities: [
      "Building and maintaining centralized Design Systems.",
      "Ensuring the product is accessible (a11y) to all users.",
      "Implementing complex animations and transitions.",
      "Prototyping high-fidelity interactive designs in code."
    ],
    career_roadmap: {
      beginner: "Learn visual design principles and semantic HTML/CSS.",
      intermediate: "Build component libraries and master accessibility standards.",
      senior: "Drive design-to-code strategy across the entire engineering organization."
    },
    secret_sauce: ["Empathy", "Attention to visual detail", "Strong advocacy for the user experience"],
    interview_focus: ["CSS architecture", "Accessibility best practices", "Design system logic", "Interaction design"],
    career_guidance: "Specializing in 'Accessibility' is your superpower—it makes you indispensable to large companies that must comply with legal standards."
  },
  {
    id: "embedded_systems",
    role_name: "Embedded Systems Engineer",
    icon: Code,
    gradient: "from-blue-500 to-cyan-600",
    role_snapshot: "Writes software that interacts directly with hardware. They work on everything from medical devices to smart appliances, where memory and processing power are extremely limited.",
    tech_stack: {
      languages: ["C", "C++", "Rust", "Assembly"],
      protocols: ["I2C", "SPI", "UART", "CAN bus"],
      tools: ["RTOS", "Oscilloscopes", "GDB", "Make/CMake"]
    },
    core_responsibilities: [
      "Writing firmware to control hardware components.",
      "Optimizing code for extremely low memory and power consumption.",
      "Debugging hardware-level issues using logic analyzers.",
      "Interfacing with sensors, actuators, and communication modules."
    ],
    career_roadmap: {
      beginner: "Learn C and work with Arduino/Raspberry Pi/ESP32.",
      intermediate: "Master Real-Time Operating Systems (RTOS) and peripheral drivers.",
      senior: "Design complex hardware/software architectures and safety-critical systems."
    },
    secret_sauce: ["Deep patience for debugging", "Hardware intuition", "Resourcefulness"],
    interview_focus: ["Bit manipulation", "Memory management", "Interrupt handling", "Concurrency in C"],
    career_guidance: "The world is moving toward 'IoT'—learn Rust for embedded systems to position yourself as a modern, safety-conscious engineer."
  }
];

const CareerGuidance = () => {
  const [selectedCareer, setSelectedCareer] = useState<typeof careerPaths[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Career Guidance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Navigate Your <span className="text-primary">Tech Career</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore comprehensive career paths in technology. Discover skills, responsibilities, 
              and roadmaps to accelerate your professional journey.
            </p>
          </div>

          {!selectedCareer ? (
            /* Career Cards Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerPaths.map((career, index) => {
                const Icon = career.icon;
                return (
                  <Card 
                    key={career.id}
                    className="group cursor-pointer border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                    onClick={() => setSelectedCareer(career)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="relative pb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${career.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${career.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                          {career.role_name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                        {career.role_snapshot}
                      </p>
                      
                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {Object.values(career.tech_stack).flat().slice(0, 4).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {Object.values(career.tech_stack).flat().length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{Object.values(career.tech_stack).flat().length - 4} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className={`flex items-center text-sm font-semibold bg-gradient-to-r ${career.gradient} bg-clip-text text-transparent`}>
                        Explore Career Path
                        <ChevronRight className="h-4 w-4 ml-1 text-primary group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            /* Career Detail View */
            <div className="max-w-5xl mx-auto animate-fade-in">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedCareer(null)}
                className="mb-8 hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Careers
              </Button>

              {/* Hero Card */}
              <Card className={`border-0 shadow-2xl overflow-hidden mb-8`}>
                <div className={`bg-gradient-to-br ${selectedCareer.gradient} p-8`}>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <selectedCareer.icon className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-2">{selectedCareer.role_name}</h1>
                      <p className="text-white/80 max-w-2xl">{selectedCareer.role_snapshot}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Tech Stack */}
                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedCareer.gradient}`}>
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      Tech Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(selectedCareer.tech_stack).map(([category, techs]) => (
                      <div key={category}>
                        <p className="text-sm font-medium text-muted-foreground capitalize mb-2">
                          {category.replace(/_/g, ' ')}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Core Responsibilities */}
                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedCareer.gradient}`}>
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      Core Responsibilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {selectedCareer.core_responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Career Roadmap */}
                <Card className="border-0 shadow-elegant lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedCareer.gradient}`}>
                        <Rocket className="h-5 w-5 text-white" />
                      </div>
                      Career Roadmap
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(selectedCareer.career_roadmap).map(([level, description], index) => (
                        <div 
                          key={level} 
                          className={`relative p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                            index === 2 ? 'border-primary bg-primary/5' : 'border-border'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                              index === 2 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {index + 1}
                            </div>
                            <span className="font-semibold capitalize text-lg">{level}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Secret Sauce */}
                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedCareer.gradient}`}>
                        <Lightbulb className="h-5 w-5 text-white" />
                      </div>
                      Secret Sauce
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.secret_sauce.map((item, i) => (
                        <Badge 
                          key={i} 
                          className={`bg-gradient-to-r ${selectedCareer.gradient} text-white border-0 px-4 py-2`}
                        >
                          <Zap className="h-3 w-3 mr-2" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Interview Focus */}
                <Card className="border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedCareer.gradient}`}>
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      Interview Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.interview_focus.map((item, i) => (
                        <Badge key={i} variant="outline" className="px-3 py-2">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Career Guidance Tip */}
                <Card className={`border-0 shadow-elegant lg:col-span-2 bg-gradient-to-br ${selectedCareer.gradient}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur">
                        <Lightbulb className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Pro Tip</h3>
                        <p className="text-white/90 text-lg leading-relaxed">
                          {selectedCareer.career_guidance}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerGuidance;
