import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Code, Database, Palette, TestTube, TrendingUp, ChevronRight, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const careerPaths = [
  {
    id: "project_manager",
    role_title: "Project Manager",
    category: "Leadership/Business",
    icon: Users,
    focus: "Planning, executing, and closing projects; managing scope, schedule, budget, and risk to deliver a defined outcome.",
    progression: [
      "Project Coordinator",
      "Associate Project Manager",
      "Project Manager",
      "Senior Project Manager / Program Manager"
    ],
    key_skills: [
      "Scope & Risk Management",
      "Stakeholder Communication",
      "Budgeting",
      "Agile/Scrum/Waterfall Methodologies",
      "Leadership"
    ]
  },
  {
    id: "product_manager",
    role_title: "Product Manager",
    category: "Leadership/Business",
    icon: Target,
    focus: "Defining the 'why,' 'what,' and 'when' of the product that the engineering team builds. Focused on market, customer needs, and business value.",
    progression: [
      "Associate Product Manager (APM)",
      "Product Manager",
      "Senior Product Manager",
      "Group Product Manager / Director of Product"
    ],
    key_skills: [
      "Market Research",
      "User Empathy (UX/UI Knowledge)",
      "Product Strategy & Roadmap",
      "Prioritization",
      "Data Analysis (Metrics/KPIs)"
    ]
  },
  {
    id: "ui_ux_engineer",
    role_title: "UI/UX Engineer",
    category: "Design/Development",
    icon: Palette,
    focus: "Bridging the gap between design (UX/UI principles) and front-end development (coding) to build highly usable and accessible interfaces.",
    progression: [
      "Junior UX Developer",
      "UI/UX Engineer",
      "Senior Frontend Engineer (with UX focus)",
      "Design System Architect"
    ],
    key_skills: [
      "HTML, CSS, JavaScript",
      "Design Tools (Figma/Sketch)",
      "User Research & Testing",
      "Accessibility (WCAG)",
      "Responsive Design"
    ]
  },
  {
    id: "software_qa_engineer",
    role_title: "Software QA Engineer",
    category: "Testing/Quality",
    icon: TestTube,
    focus: "Defining, implementing, and executing strategies to ensure the final product meets functional and non-functional requirements.",
    progression: [
      "QA Tester (Manual)",
      "QA Analyst / Automation Engineer (SDET)",
      "Senior QA Automation Engineer",
      "QA Manager / Director of Quality"
    ],
    key_skills: [
      "Test Case Design & Execution",
      "Test Automation Frameworks (Selenium, Cypress)",
      "CI/CD Integration",
      "Performance/Security Testing",
      "Bug Tracking"
    ]
  },
  {
    id: "frontend_react",
    role_title: "Frontend Engineer (React)",
    category: "Development (Frontend)",
    icon: Code,
    focus: "Building user interfaces and single-page applications (SPAs) using the React ecosystem.",
    progression: [
      "Junior React Developer",
      "React Developer",
      "Senior React Developer / Frontend Architect"
    ],
    key_skills: [
      "React.js, Hooks, Redux/Context",
      "JavaScript (ES6+), JSX",
      "State Management",
      "Component Libraries",
      "Webpack/Vite"
    ]
  },
  {
    id: "frontend_angular",
    role_title: "Frontend Engineer (Angular)",
    category: "Development (Frontend)",
    icon: Code,
    focus: "Building large-scale enterprise applications using the Angular framework and TypeScript.",
    progression: [
      "Junior Angular Developer",
      "Angular Developer",
      "Senior Angular Developer / Enterprise Frontend Architect"
    ],
    key_skills: [
      "Angular (TypeScript-based)",
      "RxJS & Observables",
      "Angular CLI",
      "Module and Component Architecture",
      "NgRx/State Management"
    ]
  },
  {
    id: "backend_nodejs",
    role_title: "Backend Engineer (Node.js)",
    category: "Development (Backend)",
    icon: Database,
    focus: "Creating fast, scalable server-side applications, APIs, and microservices using JavaScript/TypeScript on the Node.js runtime.",
    progression: [
      "Junior Node.js Developer",
      "Node.js Developer",
      "Senior Node.js Developer / Backend Services Lead"
    ],
    key_skills: [
      "Node.js, Express/NestJS",
      "Asynchronous Programming",
      "REST/GraphQL API Design",
      "MongoDB/PostgreSQL",
      "Microservices"
    ]
  },
  {
    id: "backend_dotnet",
    role_title: "Backend Engineer (.NET)",
    category: "Development (Backend)",
    icon: Database,
    focus: "Building robust, enterprise-grade applications, often in Windows/Azure environments, using the .NET framework (C#).",
    progression: [
      "Junior .NET Developer",
      ".NET Developer",
      "Senior .NET Developer / Solutions Architect"
    ],
    key_skills: [
      ".NET Core/Framework, C#",
      "ASP.NET MVC/Web API",
      "Entity Framework (ORM)",
      "SQL Server/Database Access",
      "Azure Services"
    ]
  },
  {
    id: "backend_python",
    role_title: "Backend/Data Engineer (Python)",
    category: "Development (Backend/Data)",
    icon: Database,
    focus: "Developing server logic, scripting, data pipelines, and machine learning integration using the versatile Python language.",
    progression: [
      "Junior Python Developer",
      "Python Engineer (Django/Flask)",
      "Senior Data Engineer / ML Engineer"
    ],
    key_skills: [
      "Python (Core)",
      "Frameworks (Django/Flask)",
      "Data Libraries (Pandas, NumPy)",
      "API Development",
      "Scripting & Automation"
    ]
  },
  {
    id: "backend_go",
    role_title: "Backend Engineer (Go/Golang)",
    category: "Development (Backend)",
    icon: Database,
    focus: "Building highly performant, concurrent, and scalable systems, often for cloud infrastructure, microservices, and network programming.",
    progression: [
      "Junior Go Developer",
      "Go Engineer",
      "Senior Go Developer / Distributed Systems Engineer"
    ],
    key_skills: [
      "Go Language (Golang)",
      "Concurrency & Goroutines",
      "Microservices Architecture",
      "API Development (gRPC, REST)",
      "Performance Optimization"
    ]
  },
  {
    id: "backend_java",
    role_title: "Backend Engineer (Java)",
    category: "Development (Backend)",
    icon: Database,
    focus: "Developing large, reliable, and scalable enterprise applications, especially within the financial and big data sectors.",
    progression: [
      "Junior Java Developer",
      "Java Developer",
      "Senior Java Engineer / Enterprise Architect"
    ],
    key_skills: [
      "Java (Core & EE/Spring)",
      "Spring Framework (Boot, MVC, Security)",
      "Object-Oriented Design (OOD)",
      "JPA/Hibernate",
      "Microservices/Cloud"
    ]
  }
];

const categories = [...new Set(careerPaths.map(path => path.category))];

const CareerGuidance = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<typeof careerPaths[0] | null>(null);

  const filteredPaths = selectedCategory 
    ? careerPaths.filter(path => path.category === selectedCategory)
    : careerPaths;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl">Career Guidance</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Find Your <span className="text-primary">Career Path</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore different career paths in technology and business. Discover the skills you need 
            and understand the progression from entry-level to senior positions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            All Careers
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Career Cards Grid */}
        {!selectedCareer ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((career) => {
              const Icon = career.icon;
              return (
                <Card 
                  key={career.id}
                  className="group cursor-pointer border-0 shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  onClick={() => setSelectedCareer(career)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {career.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                      {career.role_title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {career.focus}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      View Career Path
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Career Detail View */
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCareer(null)}
              className="mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Careers
            </Button>

            <Card className="border-0 shadow-elegant overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <selectedCareer.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {selectedCareer.category}
                    </Badge>
                    <CardTitle className="text-2xl">{selectedCareer.role_title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Focus */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Role Focus
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCareer.focus}
                  </p>
                </div>

                {/* Career Progression */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Career Progression
                  </h3>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
                    <div className="space-y-4">
                      {selectedCareer.progression.map((step, index) => (
                        <div key={index} className="flex items-center gap-4 relative">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                            index === selectedCareer.progression.length - 1 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {index + 1}
                          </div>
                          <div className={`flex-1 p-3 rounded-lg ${
                            index === selectedCareer.progression.length - 1 
                              ? 'bg-primary/10 border border-primary/20' 
                              : 'bg-muted/50'
                          }`}>
                            <span className={`font-medium ${
                              index === selectedCareer.progression.length - 1 
                                ? 'text-primary' 
                                : 'text-foreground'
                            }`}>
                              {step}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Key Skills Required
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.key_skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        className="px-3 py-1.5 text-sm bg-card hover:bg-primary/10 hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default CareerGuidance;
