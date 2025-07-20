import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSecurity = () => {
  const securityMeasures = [
    {
      category: "Infrastructure Security",
      icon: "Server",
      measures: [
        {
          name: "Distributed Architecture",
          description: "Multi-region deployment with automatic failover",
          implementation: "12 data centers across 6 continents"
        },
        {
          name: "DDoS Protection",
          description: "Advanced traffic filtering and rate limiting",
          implementation: "Cloudflare Enterprise with 100+ Tbps capacity"
        },
        {
          name: "Network Isolation",
          description: "Segmented networks with zero-trust architecture",
          implementation: "VPC with private subnets and NAT gateways"
        },
        {
          name: "Load Balancing",
          description: "Intelligent traffic distribution for reliability",
          implementation: "Auto-scaling groups with health checks"
        }
      ]
    },
    {
      category: "Application Security",
      icon: "Code",
      measures: [
        {
          name: "Secure Development",
          description: "Security-first development lifecycle",
          implementation: "SAST/DAST scanning in CI/CD pipeline"
        },
        {
          name: "Input Validation",
          description: "Comprehensive input sanitization and validation",
          implementation: "WAF rules with custom security policies"
        },
        {
          name: "API Security",
          description: "Rate limiting and authentication for all endpoints",
          implementation: "OAuth 2.0 with JWT tokens and refresh rotation"
        },
        {
          name: "Dependency Management",
          description: "Regular security updates and vulnerability scanning",
          implementation: "Automated dependency updates with Snyk monitoring"
        }
      ]
    },
    {
      category: "Data Protection",
      icon: "Shield",
      measures: [
        {
          name: "Encryption at Rest",
          description: "All stored data encrypted with AES-256",
          implementation: "AWS KMS with customer-managed keys"
        },
        {
          name: "Encryption in Transit",
          description: "TLS 1.3 for all data transmission",
          implementation: "Perfect Forward Secrecy with ECDHE key exchange"
        },
        {
          name: "Memory Protection",
          description: "Secure memory allocation and cleanup",
          implementation: "Protected memory regions with automatic zeroing"
        },
        {
          name: "Key Management",
          description: "Hardware security modules for key storage",
          implementation: "FIPS 140-2 Level 3 certified HSMs"
        }
      ]
    },
    {
      category: "Monitoring & Response",
      icon: "Eye",
      measures: [
        {
          name: "24/7 Monitoring",
          description: "Continuous security monitoring and alerting",
          implementation: "SIEM with machine learning anomaly detection"
        },
        {
          name: "Incident Response",
          description: "Automated response to security threats",
          implementation: "Sub-2-minute response time with automated mitigation"
        },
        {
          name: "Audit Logging",
          description: "Comprehensive logging of all system activities",
          implementation: "Immutable logs with cryptographic integrity"
        },
        {
          name: "Threat Intelligence",
          description: "Real-time threat feeds and indicators",
          implementation: "Integration with global threat intelligence networks"
        }
      ]
    }
  ];

  const securityStats = [
    {
      metric: "99.99%",
      label: "Security Uptime",
      description: "Continuous protection without interruption"
    },
    {
      metric: "< 2 min",
      label: "Threat Response",
      description: "Average time to detect and respond to threats"
    },
    {
      metric: "256-bit",
      label: "Encryption Strength",
      description: "Military-grade encryption for all data"
    },
    {
      metric: "0",
      label: "Data Breaches",
      description: "Perfect security record since inception"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Technical Security Measures
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Deep dive into the technical safeguards protecting your files and data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityStats.map((stat, index) => (
            <div key={index} className="text-center p-6 card-elevated hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
              <div className="font-semibold text-text-primary mb-2">{stat.label}</div>
              <div className="text-sm text-text-secondary">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="space-y-12">
          {securityMeasures.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-elevated p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name={category.icon} size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-2xl font-semibold text-text-primary">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.measures.map((measure, measureIndex) => (
                  <div key={measureIndex} className="p-6 bg-surface rounded-lg border border-border hover:shadow-md transition-all duration-300">
                    <h4 className="font-semibold text-text-primary mb-3">{measure.name}</h4>
                    <p className="text-text-secondary mb-4">{measure.description}</p>
                    <div className="flex items-center space-x-2">
                      <Icon name="Settings" size={16} color="var(--color-primary)" />
                      <span className="text-sm font-medium text-primary">{measure.implementation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 card-elevated p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Award" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Security-First Architecture
            </h3>
            <p className="text-text-secondary max-w-3xl mx-auto mb-6">
              Our entire platform is built with security as the foundation, not an add-on. 
              Every component, from the user interface to the backend infrastructure, 
              is designed with multiple layers of protection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
                <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                <span className="text-success font-medium">Penetration Tested</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
                <Icon name="Shield" size={20} color="var(--color-success)" />
                <span className="text-success font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
                <Icon name="Globe" size={20} color="var(--color-success)" />
                <span className="text-success font-medium">ISO 27001 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSecurity;