import React from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const coreFeatures = [
    {
      icon: "Zap",
      title: "Unlimited Download Speeds",
      description: "Break free from TeraBox speed restrictions. Download at your connection\'s maximum capacity with our optimized servers.",
      highlight: "Up to 10x faster",
      color: "warning"
    },
    {
      icon: "FolderDown",
      title: "Batch Processing",
      description: "Download multiple files or entire folders simultaneously. Queue up to 50 downloads and let our system handle the rest.",
      highlight: "50 concurrent downloads",
      color: "accent"
    },
    {
      icon: "Smartphone",
      title: "Mobile App Integration",
      description: "Seamless experience across all devices. Start downloads on desktop, continue on mobile, or use our dedicated mobile app.",
      highlight: "Cross-platform sync",
      color: "primary"
    },
    {
      icon: "Shield",
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption, zero-log policy, and automatic file deletion after download. Your privacy is our priority.",
      highlight: "Bank-level encryption",
      color: "success"
    }
  ];

  const additionalFeatures = [
    { icon: "Clock", text: "Resume interrupted downloads" },
    { icon: "FileText", text: "Support for all file formats" },
    { icon: "Globe", text: "Global CDN network" },
    { icon: "Cpu", text: "Smart compression algorithms" },
    { icon: "Users", text: "Team collaboration tools" },
    { icon: "BarChart", text: "Download analytics & insights" }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      warning: "text-warning bg-warning/10 border-warning/20",
      accent: "text-accent bg-accent/10 border-accent/20",
      primary: "text-primary bg-primary/10 border-primary/20",
      success: "text-success bg-success/10 border-success/20"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Why Choose TeraBox Downloader Pro?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Experience the difference with features designed to eliminate every frustration 
            you've ever had with cloud storage downloads.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-brand transition-all duration-300 h-full">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${getColorClasses(feature.color)}`}>
                    <Icon name={feature.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {feature.title}
                      </h3>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full bg-${feature.color}/10 text-${feature.color}`}>
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-br from-muted/50 to-surface-secondary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Plus Many More Features
            </h3>
            <p className="text-text-secondary">
              Everything you need for efficient file management and downloading
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white/80 rounded-lg border border-border/50">
                <Icon name={feature.icon} size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-text-primary">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <Icon name="Sparkles" size={48} className="mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Transform Your Download Experience Today
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join over 2 million users who have already discovered the fastest, 
                most reliable way to download TeraBox files.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} />
                  <span>No registration required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} />
                  <span>Free tier available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} />
                  <span>Instant setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;