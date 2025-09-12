import { ArrowRight, FileText, Mail, BookOpen, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const QuickLinks = () => {
  const links = [
    {
      icon: FileText,
      title: "Research & Publications",
      description: "Explore our latest research papers and academic publications.",
      action: "Browse Research",
      href: "#research",
    },
    {
      icon: BookOpen,
      title: "Knowledge Sharing",
      description: "Share insights, ideas, and educational resources with our community.",
      action: "Explore Knowledge",
      href: "#knowledge",
    },
    {
      icon: Brain,
      title: "Intellectual Activities",
      description: "Engage in thought-provoking discussions and intellectual pursuits.",
      action: "Join Activities",
      href: "#activities",
    },
    {
      icon: Mail,
      title: "Career Guidance",
      description: "Access personalized consultancy and career development resources.",
      action: "Get Guidance",
      href: "#career",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Quick <span className="text-primary">Access</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate directly to our key resources and services designed to support 
            your academic and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <Card
              key={index}
              className="interactive-card group border-0 shadow-elegant"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={link.href} className="inline-flex items-center">
                    {link.action}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;