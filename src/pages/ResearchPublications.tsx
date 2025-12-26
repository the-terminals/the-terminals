import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, Users, Calendar, ChevronDown, ChevronRight, Filter, Search, Sparkles, X, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const researchPillars = [
  {
    category: "Society",
    mission: "Building stronger communities through social research and development initiatives.",
    initiatives: [
      { title: "Urban Resilience and Social Cohesion: A Longitudinal Study of Migrant Integration", type: "Peer-Reviewed Journal", focus: "Socio-economic integration models" },
      { title: "Digital Exclusion and its Impact on Civic Participation in Developing Economies", type: "White Paper", focus: "Digital divide and governance" },
      { title: "The Evolution of Community-Led Development: Analysis of Micro-Intervention Efficacy", type: "Annual Report", focus: "Local development metrics" },
      { title: "Intergenerational Wealth Transfers and Social Mobility in Post-Industrial Societies", type: "Conference Symposium", focus: "Sociological economic dynamics" }
    ]
  },
  {
    category: "Education",
    mission: "Advancing educational methodologies and promoting academic excellence.",
    initiatives: [
      { title: "Cognitive Load Optimization in Synchronous Remote Learning Environments", type: "Peer-Reviewed Journal", focus: "Pedagogical cognitive science" },
      { title: "Redefining Assessment Paradigms: Transitioning from Standardized Testing to Competency-Based Evaluation", type: "Strategic Framework", focus: "Educational assessment reform" },
      { title: "Integrating Generative AI in Higher Education: Ethical Guidelines and Implementation Strategies", type: "White Paper", focus: "Technological pedagogy integration" },
      { title: "Global Literacy Trends 2025: A Comparative Analysis of K-12 Literacy Rates", type: "Annual Report", focus: "Global education metrics" }
    ]
  },
  {
    category: "Islamic Studies",
    mission: "Scholarly research and discourse on Islamic principles and contemporary applications.",
    initiatives: [
      { title: "Maqasid al-Shari'ah and Modern Bioethics: Addressing Genomic Research and CRISPR Technology", type: "Peer-Reviewed Journal", focus: "Islamic ethics and biotechnology" },
      { title: "The Role of Waqf in Sustainable Economic Development: A 21st Century Reimagining", type: "Strategic Framework", focus: "Islamic finance and sustainability" },
      { title: "Hermeneutics of Classical Texts in Contemporary Jurisprudence", type: "Conference Symposium", focus: "Legal textual interpretation" },
      { title: "Islamic Environmental Ethics: Philosophical Foundations for Climate Action", type: "White Paper", focus: "Theology and environmentalism" }
    ]
  },
  {
    category: "Cultural Establishment",
    mission: "Preserving and promoting cultural heritage through research and community programs.",
    initiatives: [
      { title: "Digitizing Intangible Heritage: Methods for Archiving Oral Traditions in the Middle East", type: "Peer-Reviewed Journal", focus: "Digital humanities preservation" },
      { title: "The Intersection of Cultural Diplomacy and National Identity in a Globalized Era", type: "Strategic Framework", focus: "Soft power and culture" },
      { title: "Museums as Catalysts for Social Change: An Analysis of Community Engagement Programs", type: "Annual Report", focus: "Curatorial community impact" },
      { title: "Linguistic Diversity and the Survival of Indigenous Dialects: A Global Survey", type: "White Paper", focus: "Ethnolinguistics and preservation" }
    ]
  },
  {
    category: "Science & Technology",
    mission: "Cutting-edge research in emerging technologies and scientific innovations.",
    initiatives: [
      { title: "Quantum Cryptography and the Future of Sovereign Cybersecurity", type: "Peer-Reviewed Journal", focus: "Quantum information science" },
      { title: "Application of Neural Radiance Fields (NeRF) in Archaeological Reconstruction", type: "Conference Symposium", focus: "Computational vision techniques" },
      { title: "Next-Generation Photovoltaics: Enhancing Efficiency via Perovskite-Silicon Tandems", type: "White Paper", focus: "Renewable energy engineering" },
      { title: "National AI Sovereignty: A Roadmap for Domestic Large Language Model Development", type: "Strategic Framework", focus: "Artificial intelligence policy" }
    ]
  },
  {
    category: "Problem Solving",
    mission: "Developing innovative solutions to complex academic and social challenges.",
    initiatives: [
      { title: "Systems Thinking Approaches to Mitigating Urban Food Deserts", type: "Peer-Reviewed Journal", focus: "Complex systems analysis" },
      { title: "Conflict Resolution in Multi-Ethnic Educational Settings: A New Mediation Model", type: "Strategic Framework", focus: "Social mediation strategy" },
      { title: "Iterative Problem-Solving Frameworks for Rapid Crisis Response Management", type: "White Paper", focus: "Agile crisis management" },
      { title: "Algorithmic Bias Mitigation in Automated Hiring Systems", type: "Conference Symposium", focus: "Ethics in computation" }
    ]
  },
  {
    category: "System Optimization",
    mission: "Improving efficiency in educational and organizational systems.",
    initiatives: [
      { title: "Operational Efficiency in Decentralized Academic Administrations", type: "Peer-Reviewed Journal", focus: "Organizational workflow optimization" },
      { title: "Lean Methodology Application in Higher Education Resource Allocation", type: "Strategic Framework", focus: "Resource efficiency modeling" },
      { title: "Automated Scheduling Systems and Faculty Productivity: A Comparative Impact Study", type: "Annual Report", focus: "Administrative automation efficacy" },
      { title: "Optimization of Cross-Departmental Research Collaboration Protocols", type: "White Paper", focus: "Institutional process improvement" }
    ]
  },
  {
    category: "Social Responsibility",
    mission: "Promoting ethical practices and community engagement initiatives.",
    initiatives: [
      { title: "Corporate Social Responsibility (CSR) in the Age of Stakeholder Capitalism", type: "Peer-Reviewed Journal", focus: "Ethical corporate governance" },
      { title: "Framework for Ethical AI Procurement in the Public Sector", type: "Strategic Framework", focus: "Algorithmic accountability" },
      { title: "Institutional Ethics Review: Enhancing Transparency in Human Subject Research", type: "Annual Report", focus: "Research ethics compliance" },
      { title: "Community-Based Participatory Research: Best Practices for Academic-NGO Partnerships", type: "White Paper", focus: "Ethical community engagement" }
    ]
  },
  {
    category: "Geographical Research",
    mission: "Exploring geographical and historical perspectives for academic insight.",
    initiatives: [
      { title: "Geospatial Analysis of Ancient Silk Road Trade Nodes: A GIS Perspective", type: "Peer-Reviewed Journal", focus: "Historical geospatial mapping" },
      { title: "Climate-Induced Migration Patterns in the Mediterranean Basin: 2030 Projections", type: "White Paper", focus: "Environmental human geography" },
      { title: "Topographical Evolution and Urban Development in the Hejaz Region", type: "Conference Symposium", focus: "Regional geomorphological history" },
      { title: "Cartographic Representation and the Construction of National Identity", type: "Annual Report", focus: "Political geography analysis" }
    ]
  },
  {
    category: "International Relations",
    mission: "Analyzing global affairs and diplomatic relations for academic understanding.",
    initiatives: [
      { title: "Multi-Polarity and the Shift in Middle Power Diplomatic Influence", type: "Peer-Reviewed Journal", focus: "Geopolitical power dynamics" },
      { title: "The Impact of Sovereign Wealth Funds on Global Economic Diplomacy", type: "Strategic Framework", focus: "International political economy" },
      { title: "Cyber-Diplomacy: Establishing Norms of State Behavior in Cyberspace", type: "White Paper", focus: "Digital international law" },
      { title: "Regional Security Architectures in the Indo-Pacific: A Decade in Review", type: "Annual Report", focus: "Security studies analysis" }
    ]
  },
  {
    category: "Reconstruction Systems",
    mission: "Developing frameworks for sustainable development and social reconstruction.",
    initiatives: [
      { title: "Post-Conflict Infrastructure Rehabilitation: Integrated Socio-Technical Models", type: "Peer-Reviewed Journal", focus: "Sustainable post-war reconstruction" },
      { title: "Circular Economy Frameworks for Rapid Urban Reconstruction", type: "Strategic Framework", focus: "Sustainable urban development" },
      { title: "Psychosocial Support Systems as a Pillar of Civil Society Reconstruction", type: "White Paper", focus: "Social fabric restoration" },
      { title: "Institutional Reform and Rule of Law in Transitional Economies", type: "Conference Symposium", focus: "Governance system rebuilding" }
    ]
  }
];

const typeColors: Record<string, string> = {
  "Peer-Reviewed Journal": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "White Paper": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Annual Report": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Conference Symposium": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  "Strategic Framework": "bg-rose-500/10 text-rose-600 border-rose-500/20"
};

const typeIcons: Record<string, React.ReactNode> = {
  "Peer-Reviewed Journal": <BookOpen className="w-4 h-4" />,
  "White Paper": <FileText className="w-4 h-4" />,
  "Annual Report": <Calendar className="w-4 h-4" />,
  "Conference Symposium": <Users className="w-4 h-4" />,
  "Strategic Framework": <Sparkles className="w-4 h-4" />
};

interface Initiative {
  title: string;
  type: string;
  focus: string;
}

interface InitiativeCardProps {
  initiative: Initiative;
  index: number;
  onViewDetails: (initiative: Initiative) => void;
}

const InitiativeCard = ({ initiative, index, onViewDetails }: InitiativeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        isHovered ? "scale-[1.02]" : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className={`p-2 rounded-lg ${typeColors[initiative.type]} flex items-center justify-center`}>
            {typeIcons[initiative.type]}
          </div>
          <Badge variant="outline" className={`${typeColors[initiative.type]} text-xs font-medium`}>
            {initiative.type}
          </Badge>
        </div>
        
        <h4 className="font-semibold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-3">
          {initiative.title}
        </h4>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block w-2 h-2 rounded-full bg-primary/60"></span>
          <span className="italic">{initiative.focus}</span>
        </div>
        
        <div className="mt-4 pt-3 border-t border-border/50">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-primary hover:text-primary hover:bg-primary/10"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(initiative);
            }}
          >
            View Details
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

interface PillarSectionProps {
  pillar: {
    category: string;
    mission: string;
    initiatives: Initiative[];
  };
  isExpanded: boolean;
  onToggle: () => void;
  onViewDetails: (initiative: Initiative) => void;
}

const PillarSection = ({ pillar, isExpanded, onToggle, onViewDetails }: PillarSectionProps) => {
  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle}>
      <Card className="overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-300">
        <CollapsibleTrigger className="w-full">
          <CardHeader className="p-6 cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-foreground">{pillar.category}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{pillar.mission}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {pillar.initiatives.length} Publications
                </Badge>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="px-6 pb-6 pt-0">
            <div className="border-t border-border/50 pt-6">
              <p className="text-muted-foreground mb-6">{pillar.mission}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillar.initiatives.map((initiative, index) => (
                  <InitiativeCard 
                    key={index} 
                    initiative={initiative} 
                    index={index}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

const ResearchPublications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [expandedPillars, setExpandedPillars] = useState<Set<string>>(new Set(["Society"]));
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const publicationTypes = [...new Set(researchPillars.flatMap(p => p.initiatives.map(i => i.type)))];

  const filteredPillars = researchPillars.map(pillar => ({
    ...pillar,
    initiatives: pillar.initiatives.filter(initiative => {
      const matchesSearch = initiative.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           initiative.focus.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = !selectedType || initiative.type === selectedType;
      return matchesSearch && matchesType;
    })
  })).filter(pillar => pillar.initiatives.length > 0);

  const togglePillar = (category: string) => {
    setExpandedPillars(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedPillars(new Set(filteredPillars.map(p => p.category)));
  };

  const collapseAll = () => {
    setExpandedPillars(new Set());
  };

  const totalPublications = researchPillars.reduce((acc, p) => acc + p.initiatives.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research & Publications
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Explore our comprehensive collection of peer-reviewed journals, white papers, 
              strategic frameworks, and annual reports across {researchPillars.length} research pillars.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{totalPublications}</p>
                  <p className="text-muted-foreground">Publications</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Filter className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{researchPillars.length}</p>
                  <p className="text-muted-foreground">Research Pillars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Filter by type:</span>
              <Button
                variant={selectedType === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(null)}
                className="text-xs"
              >
                All
              </Button>
              {publicationTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="text-xs"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <Button variant="ghost" size="sm" onClick={expandAll} className="text-xs">
              Expand All
            </Button>
            <Button variant="ghost" size="sm" onClick={collapseAll} className="text-xs">
              Collapse All
            </Button>
            <span className="text-sm text-muted-foreground ml-auto">
              Showing {filteredPillars.reduce((acc, p) => acc + p.initiatives.length, 0)} results
            </span>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {filteredPillars.map(pillar => (
              <PillarSection
                key={pillar.category}
                pillar={pillar}
                isExpanded={expandedPillars.has(pillar.category)}
                onToggle={() => togglePillar(pillar.category)}
                onViewDetails={setSelectedInitiative}
              />
            ))}
          </div>
          
          {filteredPillars.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search query or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Publication Types Legend */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Publication Types</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(typeColors).map(([type, colorClass]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${colorClass}`}>
                  {typeIcons[type]}
                </div>
                <span className="text-sm text-muted-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Dialog */}
      <Dialog open={!!selectedInitiative} onOpenChange={() => setSelectedInitiative(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-start gap-3 mb-4">
              <div className={`p-3 rounded-lg ${selectedInitiative ? typeColors[selectedInitiative.type] : ''}`}>
                {selectedInitiative && typeIcons[selectedInitiative.type]}
              </div>
              <Badge variant="outline" className={selectedInitiative ? typeColors[selectedInitiative.type] : ''}>
                {selectedInitiative?.type}
              </Badge>
            </div>
            <DialogTitle className="text-xl leading-tight">
              {selectedInitiative?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Research Focus</h4>
              <p className="text-foreground">{selectedInitiative?.focus}</p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="text-sm font-medium text-foreground mb-2">Abstract</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This publication explores key aspects of {selectedInitiative?.focus.toLowerCase()}, 
                providing comprehensive analysis and actionable insights for researchers and practitioners 
                in the field. The research methodology combines qualitative and quantitative approaches 
                to ensure robust findings and practical applicability.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Full Publication
              </Button>
              <Button variant="outline">
                Download PDF
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ResearchPublications;
