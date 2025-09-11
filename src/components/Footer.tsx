import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Work", href: "#work" },
        { name: "Research", href: "#research" },
        { name: "Career Guidance", href: "#career" },
        { name: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Publications", href: "#publications" },
        { name: "Events", href: "#events" },
        { name: "Consultancy", href: "#consultancy" },
        { name: "Membership", href: "#membership" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Newsletter", href: "#newsletter" },
        { name: "Community Forum", href: "#forum" },
        { name: "Alumni Network", href: "#alumni" },
        { name: "Partners", href: "#partners" },
        { name: "Support", href: "#support" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-terminals-gray-900 text-terminals-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Logo className="text-terminals-white" />
            <p className="text-terminals-gray-300 text-sm leading-relaxed max-w-md">
              The Terminals is a university-oriented intellectual group dedicated to 
              empowering minds and connecting communities through knowledge sharing, 
              research, and academic excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-terminals-gray-300">info@theterminals.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-terminals-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-terminals-gray-300">University Campus, Academic District</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="p-2 text-terminals-gray-400 hover:text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-sm font-semibold text-terminals-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-terminals-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-terminals-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-terminals-gray-400">
              © {currentYear} The Terminals. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-terminals-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-terminals-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-terminals-gray-400 hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;