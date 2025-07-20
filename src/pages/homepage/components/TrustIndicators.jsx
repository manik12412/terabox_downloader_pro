import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const securityCertifications = [
    {
      name: "SSL Certificate",
      description: "256-bit encryption",
      icon: "Lock",
      verified: true
    },
    {
      name: "GDPR Compliant",
      description: "EU data protection",
      icon: "Shield",
      verified: true
    },
    {
      name: "SOC 2 Type II",
      description: "Security audit passed",
      icon: "Award",
      verified: true
    },
    {
      name: "ISO 27001",
      description: "Information security",
      icon: "CheckCircle",
      verified: true
    }
  ];

  const trustMetrics = [
    {
      label: "Uptime Guarantee",
      value: "99.9%",
      description: "Service availability",
      icon: "Activity",
      color: "success"
    },
    {
      label: "Files Processed",
      value: "10M+",
      description: "Successfully downloaded",
      icon: "Download",
      color: "primary"
    },
    {
      label: "Active Users",
      value: "2M+",
      description: "Worldwide community",
      icon: "Users",
      color: "accent"
    },
    {
      label: "Data Centers",
      value: "15+",
      description: "Global infrastructure",
      icon: "Globe",
      color: "warning"
    }
  ];

  const privacyFeatures = [
    {
      title: "Zero-Log Policy",
      description: "We don't store your download history or personal data",
      icon: "EyeOff"
    },
    {
      title: "Automatic Deletion",
      description: "Files are automatically deleted after download completion",
      icon: "Trash2"
    },
    {
      title: "End-to-End Encryption",
      description: "Your downloads are encrypted throughout the entire process",
      icon: "Key"
    },
    {
      title: "No Registration Required",
      description: "Use our service without creating an account or sharing personal info",
      icon: "UserX"
    }
  ];

  const getColorClass = (color) => {
    const colorMap = {
      success: "text-success",
      primary: "text-primary",
      accent: "text-accent",
      warning: "text-warning"
    };
    return colorMap[color] || "text-primary";
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Shield" size={24} className="text-success" />
            <span className="text-sm font-medium text-success uppercase tracking-wide">Trust & Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Your Security is Our Priority
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Built with enterprise-grade security and privacy protection. 
            Trusted by millions of users worldwide.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border text-center hover:shadow-brand transition-all duration-300">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-${metric.color}/10`}>
                <Icon name={metric.icon} size={24} className={getColorClass(metric.color)} />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-text-primary mb-1">{metric.label}</div>
              <div className="text-xs text-text-secondary">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Security Certifications */}
        <div className="bg-gradient-to-br from-success/5 to-primary/5 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Security Certifications & Compliance
            </h3>
            <p className="text-text-secondary">
              We maintain the highest security standards and comply with international regulations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityCertifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center border border-border">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} size={28} className="text-success" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">{cert.name}</h4>
                <p className="text-sm text-text-secondary mb-3">{cert.description}</p>
                {cert.verified && (
                  <div className="flex items-center justify-center space-x-2 text-success">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Features */}
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Privacy-First Approach
            </h3>
            <p className="text-text-secondary">
              Your privacy matters. Here's how we protect your data and ensure complete anonymity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-success" />
              <span className="text-sm font-medium text-text-secondary">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-primary" />
              <span className="text-sm font-medium text-text-secondary">Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} className="text-accent" />
              <span className="text-sm font-medium text-text-secondary">Global CDN Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-warning" />
              <span className="text-sm font-medium text-text-secondary">Industry Certified</span>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <p className="text-sm text-text-secondary">
              <Icon name="Info" size={16} className="inline mr-2" />
              We are committed to transparency. Read our detailed 
              <a href="/security-privacy-center" className="text-primary hover:underline ml-1">
                Security & Privacy Policy
              </a> 
              to learn more about how we protect your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;