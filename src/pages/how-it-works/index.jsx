import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import StepCard from './components/StepCard';
import InteractiveDemo from './components/InteractiveDemo';
import ComparisonChart from './components/ComparisonChart';
import TroubleshootingSection from './components/TroubleshootingSection';
import AdvancedFeatures from './components/AdvancedFeatures';
import QuickFAQ from './components/QuickFAQ';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Copy TeraBox Link",
      description: "Copy the share link from TeraBox - works with any public share link",
      icon: "Copy",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop",
      duration: "5 seconds",
      estimatedTime: "Instant"
    },
    {
      number: 2,
      title: "Paste & Process",
      description: "Paste the link into our interface and let our servers analyze the file",
      icon: "Search",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      duration: "10-30 seconds",
      estimatedTime: "Processing"
    },
    {
      number: 3,
      title: "Download Instantly",
      description: "Get your direct download link and start downloading at maximum speed",
      icon: "Download",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      duration: "Varies by file size",
      estimatedTime: "Fast"
    }
  ];

  const deviceGuides = [
    {
      device: "Desktop",
      icon: "Monitor",
      steps: [
        "Right-click the TeraBox share link and select \'Copy link address'",
        "Open TeraBox Downloader Pro in your browser",
        "Paste the link in the download field",
        "Click \'Download\' and save to your preferred location"
      ]
    },
    {
      device: "Mobile",
      icon: "Smartphone",
      steps: [
        "Tap and hold the TeraBox share link, then select 'Copy'",
        "Open our mobile app or mobile website",
        "Paste the link in the download field",
        "Tap \'Download\' - file will save to your Downloads folder"
      ]
    },
    {
      device: "Tablet",
      icon: "Tablet",
      steps: [
        "Long press the TeraBox share link and copy it",
        "Switch to TeraBox Downloader Pro app or website",
        "Paste the link and tap \'Analyze'",
        "Choose download location and start download"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Icon name="PlayCircle" size={16} />
              <span>Step-by-Step Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              How It <span className="text-gradient">Works</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Transform your TeraBox download experience in just three simple steps. 
              No software installation, no account required - just fast, reliable downloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" iconName="Play" iconPosition="left">
                Watch Video Tutorial
              </Button>
              <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
                Try Demo Now
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Average Speed Boost", value: "8x faster", icon: "Zap" },
              { label: "Success Rate", value: "99.2%", icon: "CheckCircle" },
              { label: "Files Processed", value: "2.4M+", icon: "Download" },
              { label: "Happy Users", value: "150K+", icon: "Users" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our streamlined process makes downloading from TeraBox as easy as copy, paste, and download
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step) => (
              <StepCard
                key={step.number}
                step={step}
                isActive={activeStep === step.number}
                onClick={() => setActiveStep(step.number)}
              />
            ))}
          </div>

          {/* Process Flow Visualization */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
              Visual Process Flow
            </h3>
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                      activeStep >= step.number 
                        ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                    }`}>
                      <Icon name={step.icon} size={24} />
                    </div>
                    <h4 className="font-semibold text-text-primary text-sm mb-1">{step.title}</h4>
                    <p className="text-xs text-text-secondary max-w-24">{step.duration}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${
                      activeStep > step.number ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveDemo />
        </div>
      </section>

      {/* Device-Specific Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Device-Specific Instructions
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Optimized instructions for your preferred device and platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deviceGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl border border-border p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={guide.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{guide.device}</h3>
                </div>
                <ol className="space-y-3">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {stepIndex + 1}
                      </span>
                      <span className="text-sm text-text-secondary">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Speed Comparison
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See the dramatic difference in download times and success rates
            </p>
          </div>
          <ComparisonChart />
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <TroubleshootingSection />
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdvancedFeatures />
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickFAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Faster Downloads?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their TeraBox download experience. 
            Start downloading at lightning speed today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" iconName="Download" iconPosition="left">
              Start Downloading Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Download" size={20} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-none">TeraBox</span>
                  <span className="text-xs font-medium text-gray-400 leading-none">Downloader Pro</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The fastest and most reliable way to download files from TeraBox. 
                Transform your cloud storage experience with our advanced download technology.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'Github', 'Linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Icon name={social} size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/download-hub" className="hover:text-white transition-colors">Download Hub</a></li>
                <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="/api-documentation" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="/security-privacy-center" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/support-center" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/support-center" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/support-center" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="/support-center" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TeraBox Downloader Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;