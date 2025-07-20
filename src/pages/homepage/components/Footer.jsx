import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Download Hub", path: "/download-hub" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "API Documentation", path: "/api-documentation" },
        { name: "Mobile App", path: "/mobile-app" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/support-center" },
        { name: "Contact Us", path: "/contact" },
        { name: "System Status", path: "/status" },
        { name: "Bug Reports", path: "/bug-reports" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "Press Kit", path: "/press" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Security Center", path: "/security-privacy-center" },
        { name: "DMCA", path: "/dmca" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/teraboxpro" },
    { name: "GitHub", icon: "Github", url: "https://github.com/teraboxpro" },
    { name: "Discord", icon: "MessageSquare", url: "https://discord.gg/teraboxpro" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/teraboxpro" }
  ];

  const features = [
    "Lightning-fast downloads",
    "No speed restrictions",
    "Batch processing",
    "Mobile app included",
    "Enterprise-grade security",
    "99.9% uptime guarantee"
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Download" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">TeraBox</span>
                <span className="text-sm font-medium text-white/80 leading-none">Downloader Pro</span>
              </div>
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Transform your TeraBox download experience with lightning-fast speeds, 
              unlimited downloads, and enterprise-grade security. Join over 2 million 
              users who've already made the switch.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.path}
                          className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-white/5 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-white/80">
                  Get the latest features, tips, and productivity insights delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-1 lg:w-64"
                />
                <Button variant="default" iconName="Send" iconPosition="right">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/80">
              <p>© {currentYear} TeraBox Downloader Pro. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors duration-200">
                  Cookies
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>Global CDN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;