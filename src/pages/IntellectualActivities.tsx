import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Brain, 
  Lightbulb, 
  Target, 
  Sparkles,
  ChevronRight,
  Globe,
  Cpu,
  BookOpen,
  Building2,
  Scale,
  Leaf,
  MapPin,
  Users,
  Zap,
  ExternalLink
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const intellectualActivities = [
  {
    id: 1,
    idea_title: "Ethical AI Governance Framework (Maqasid Al-Shariah Integration)",
    involved_domains: ["Science & Technology", "Islamic Studies", "Social Responsibility"],
    the_problem: "Current AI development often lacks a universal ethical compass, leading to bias, privacy violations, and social displacement without a moral framework.",
    the_details: "Developing a technical and philosophical framework that maps AI algorithmic outcomes to the five goals of Shariah (Preservation of Life, Intellect, Religion, Progeny, and Property). It creates a 'Moral API' for developers to audit system impact.",
    impact_outcome: "A globally unique standard for 'Human-Centric AI' that ensures technological progress does not come at the cost of human dignity or social fabric.",
    icon: Cpu,
    gradient: "from-violet-500 to-purple-600"
  },
  {
    id: 2,
    idea_title: "Geo-Historical Reconstruction for Post-Conflict Urban Planning",
    involved_domains: ["Geographical Research", "Reconstruction Systems", "Cultural Establishment"],
    the_problem: "Post-war or post-disaster reconstruction often ignores the historical and cultural DNA of a location, resulting in 'soulless' cities that residents don't feel connected to.",
    the_details: "Using GIS (Geographic Information Systems) and historical archives to create a 'Cultural Layer' in urban planning software. This ensures new infrastructure respects ancient trade routes, community hubs, and architectural heritage.",
    impact_outcome: "Cities that are structurally resilient yet culturally vibrant, reducing social friction and speeding up community healing after crises.",
    icon: MapPin,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    idea_title: "Decentralized Academic Research Ledger (DARL)",
    involved_domains: ["Science & Technology", "Education", "International Relations"],
    the_problem: "Academic gatekeeping and fragmented data silos prevent researchers in developing nations from accessing global scientific breakthroughs and funding.",
    the_details: "A blockchain-based platform where research findings, peer reviews, and intellectual contributions are tokenized. It allows for transparent, cross-border collaboration without reliance on expensive Western publishing houses.",
    impact_outcome: "Democratized access to knowledge, increased citations for marginalized scholars, and a faster global 'Problem Solving' cycle.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: 4,
    idea_title: "Interdisciplinary 'Problem-Solving' War Rooms",
    involved_domains: ["System Optimization", "Social Responsibility", "Education"],
    the_problem: "Academic departments operate in silos; a sociologist and a software engineer rarely meet to solve a single community problem.",
    the_details: "Establishing physical and virtual 'War Rooms' where students from different domains are assigned a real-world social challenge (e.g., local water scarcity). They must present a unified solution that covers engineering, policy, and social ethics.",
    impact_outcome: "Graduates who are 'Systems Thinkers' rather than just specialists, and tangible solutions for local community growth.",
    icon: Users,
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    idea_title: "Islamic Finance for Sustainable Social Reconstruction",
    involved_domains: ["Islamic Studies", "Reconstruction Systems", "Society"],
    the_problem: "Conventional debt-based recovery systems often lead to long-term economic dependency in reconstructed regions.",
    the_details: "Designing a 'Waqf-based' (Endowment) venture capital model for reconstruction. It uses profit-sharing (Musharakah) and asset-based financing to rebuild local businesses without interest-based debt.",
    impact_outcome: "Economically sovereign communities and a sustainable model for social development that aligns with ethical financial principles.",
    icon: Scale,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: 6,
    idea_title: "The 'Green Mosque' Energy & Education Initiative",
    involved_domains: ["Science & Technology", "Islamic Studies", "System Optimization"],
    the_problem: "Community centers and religious buildings are often energy-inefficient and underutilized for scientific education.",
    the_details: "Implementing smart-grid technology and IoT sensors in mosques to optimize energy use, while using the space as a 'Science & Tech' hub for youth to learn about sustainability and environmental stewardship.",
    impact_outcome: "Lower carbon footprints for community buildings and a shift in the perception of religious spaces as centers for scientific innovation.",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: 7,
    idea_title: "Algorithmic Diplomacy & Global Conflict Prediction",
    involved_domains: ["International Relations", "Science & Technology", "Geographical Research"],
    the_problem: "International relations are often reactive rather than proactive, responding to conflicts only after they have escalated.",
    the_details: "Using Big Data and sentiment analysis from geographical regions to build a 'Conflict Heatmap.' The system identifies shifts in resource scarcity or political tension before they turn into violence.",
    impact_outcome: "Earlier diplomatic interventions and a data-driven approach to maintaining global peace and academic understanding of international affairs.",
    icon: Globe,
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: 8,
    idea_title: "Cultural Heritage Preservation via Digital Twin Technology",
    involved_domains: ["Cultural Establishment", "Science & Technology", "Education"],
    the_problem: "Physical artifacts and heritage sites are at risk of destruction due to climate change, urbanization, or conflict.",
    the_details: "Creating high-resolution 'Digital Twins' (3D virtual models) of endangered cultural sites. These models are used for immersive VR education, allowing students worldwide to explore history without traveling.",
    impact_outcome: "Permanent preservation of human history and an enhanced, immersive methodology for teaching cultural and historical perspectives.",
    icon: Building2,
    gradient: "from-indigo-500 to-violet-600"
  },
  {
    id: 9,
    idea_title: "Ethical Supply Chain Audit for Social Responsibility",
    involved_domains: ["Social Responsibility", "System Optimization", "International Relations"],
    the_problem: "Global supply chains are opaque, often hiding child labor or environmental destruction in the production of consumer goods.",
    the_details: "Developing a cross-departmental auditing framework that uses tech (Blockchain) and social research (Field interviews) to verify the 'Ethical Score' of local and international suppliers.",
    impact_outcome: "Promoting ethical trade practices and empowering consumers to make choices that support sustainable social development.",
    icon: Scale,
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    id: 10,
    idea_title: "Linguistic Archaeology for Modern Social Cohesion",
    involved_domains: ["Geographical Research", "Society", "Education"],
    the_problem: "Lost dialects and linguistic evolution can create gaps in understanding communal history, leading to a loss of identity.",
    the_details: "A research project that maps the evolution of local languages to track migration patterns and historical interactions between different ethnic groups.",
    impact_outcome: "Stronger community bonds through a shared understanding of common roots and a richer academic archive for historical research.",
    icon: BookOpen,
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: 11,
    idea_title: "The 'Circular Campus' Waste-to-Value System",
    involved_domains: ["System Optimization", "Science & Technology", "Social Responsibility"],
    the_problem: "Educational institutions generate massive waste (paper, plastic, food) that is rarely managed as a resource.",
    the_details: "An engineering and social initiative to turn the university into a 'Zero Waste' system. It uses bio-digesters for food waste and chemical engineering for plastic repurposing, managed by a student-run digital dashboard.",
    impact_outcome: "A blueprint for 'Smart Cities' and a practical training ground for students in sustainable system optimization.",
    icon: Zap,
    gradient: "from-lime-500 to-green-600"
  },
  {
    id: 12,
    idea_title: "Cognitive Science in Islamic Pedagogy",
    involved_domains: ["Education", "Islamic Studies", "Science & Technology"],
    the_problem: "Traditional Islamic education often relies on rote memorization, which may not always foster deep critical thinking or application in modern science.",
    the_details: "Integrating modern cognitive load theory and neuro-educational techniques into the teaching of Islamic principles. This includes gamified learning and 'active recall' platforms for complex theological discourse.",
    impact_outcome: "A new generation of scholars who are both deeply rooted in tradition and highly proficient in modern analytical and scientific methods.",
    icon: Brain,
    gradient: "from-sky-500 to-blue-600"
  }
];

const IntellectualActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState<typeof intellectualActivities[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">Intellectual Activities</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Interdisciplinary <span className="text-primary">Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore groundbreaking ideas that bridge multiple domains to solve complex challenges 
              and create meaningful impact across society.
            </p>
            
            <div className="flex justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{intellectualActivities.length}</div>
                <div className="text-sm text-muted-foreground">Active Initiatives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">11</div>
                <div className="text-sm text-muted-foreground">Domains Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </div>

          {!selectedActivity ? (
            /* Activities Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intellectualActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <Card 
                    key={activity.id}
                    className="group cursor-pointer border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                    onClick={() => setSelectedActivity(activity)}
                    onMouseEnter={() => setHoveredId(activity.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader className="relative pb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <div className="relative flex items-start justify-between">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${hoveredId === activity.id ? 'scale-110 rotate-3' : ''}`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          #{activity.id.toString().padStart(2, '0')}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold mt-4 line-clamp-2 group-hover:text-primary transition-colors">
                        {activity.idea_title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {activity.involved_domains.map((domain, i) => (
                          <Badge key={i} variant="secondary" className="text-[10px] px-2 py-0.5">
                            {domain}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {activity.the_problem}
                      </p>
                      
                      <div className={`flex items-center text-sm font-semibold bg-gradient-to-r ${activity.gradient} bg-clip-text text-transparent`}>
                        Explore Idea
                        <ChevronRight className={`h-4 w-4 ml-1 transition-transform duration-300 ${hoveredId === activity.id ? 'translate-x-2' : ''}`} style={{ color: 'currentColor' }} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            /* Activity Detail View */
            <div className="max-w-4xl mx-auto animate-fade-in">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedActivity(null)}
                className="mb-8 hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Activities
              </Button>

              {/* Hero Card */}
              <Card className="border-0 shadow-2xl overflow-hidden mb-8">
                <div className={`bg-gradient-to-br ${selectedActivity.gradient} p-8`}>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
                      <selectedActivity.icon className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-0">
                        Initiative #{selectedActivity.id.toString().padStart(2, '0')}
                      </Badge>
                      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {selectedActivity.idea_title}
                      </h1>
                      <div className="flex flex-wrap gap-2">
                        {selectedActivity.involved_domains.map((domain, i) => (
                          <Badge key={i} className="bg-white/20 text-white border-0">
                            {domain}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Content Cards */}
              <div className="space-y-6">
                {/* The Problem */}
                <Card className="border-0 shadow-elegant overflow-hidden">
                  <CardHeader className="border-b border-border/50 bg-destructive/5">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-destructive/10">
                        <Target className="h-5 w-5 text-destructive" />
                      </div>
                      The Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selectedActivity.the_problem}
                    </p>
                  </CardContent>
                </Card>

                {/* The Details */}
                <Card className="border-0 shadow-elegant overflow-hidden">
                  <CardHeader className="border-b border-border/50 bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedActivity.gradient}`}>
                        <Lightbulb className="h-5 w-5 text-white" />
                      </div>
                      The Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selectedActivity.the_details}
                    </p>
                  </CardContent>
                </Card>

                {/* Impact & Outcome */}
                <Card className={`border-0 shadow-elegant overflow-hidden bg-gradient-to-br ${selectedActivity.gradient}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/20 backdrop-blur shrink-0">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Impact & Outcome</h3>
                        <p className="text-white/90 text-lg leading-relaxed">
                          {selectedActivity.impact_outcome}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="text-center pt-6">
                  <Button size="lg" className={`bg-gradient-to-r ${selectedActivity.gradient} text-white border-0 hover:opacity-90`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More About This Initiative
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IntellectualActivities;
