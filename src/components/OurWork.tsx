import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";

import logoKms from "@/assets/logo-kms.png";
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full border-0 shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-3 hover:border-primary/20 bg-card aspect-square">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-primary/10 p-1.5 mb-4 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300 group-hover:scale-110">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-3">
                    {platform.description}
                  </p>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
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
