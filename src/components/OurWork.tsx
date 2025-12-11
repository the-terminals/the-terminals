import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";

import logoKms from "@/assets/logo-kms.png";
import logoJamia from "@/assets/logo-jamia.png";
import logoIslamography from "@/assets/logo-islamography.png";
import logoIslamzone from "@/assets/logo-islamzone.png";
import logoMuslimminds from "@/assets/logo-muslimminds.png";
import logoBaseera from "@/assets/logo-baseera.png";

const OurWork = () => {
  const platforms = [
    {
      name: "Khilkhet Muslim Society",
      url: "https://khilkhetmuslimsociety.netlify.app/",
      logo: logoKms,
      description: "Community platform for Khilkhet Muslim Society",
    },
    {
      name: "Jamiatul Uloomil Islamia",
      url: "https://jamiatululoomilislamia.netlify.app/",
      logo: logoJamia,
      description: "Digital platform for Islamic educational institution",
    },
    {
      name: "Islamography",
      url: "https://islamography.netlify.app/",
      logo: logoIslamography,
      description: "Islamic knowledge and documentation platform",
    },
    {
      name: "Islam Zone",
      url: "https://islamzone.netlify.app/",
      logo: logoIslamzone,
      description: "Comprehensive Islamic content and resources",
    },
    {
      name: "The Muslim Minds",
      url: "https://themuslimminds.netlify.app/",
      logo: logoMuslimminds,
      description: "Intellectual discourse and Islamic perspectives",
    },
    {
      name: "Baseera",
      url: "https://baseeramedia.netlify.app/",
      logo: logoBaseera,
      description: "Islamic media and content platform",
    },
  ];

  return (
    <section id="our-work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building digital platforms for community and non-profit organizations 
            to strengthen their online presence and outreach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="interactive-card h-full border-0 shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="aspect-square relative overflow-hidden bg-muted/30">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {platform.name}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
