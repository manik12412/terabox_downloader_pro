import React from 'react';
import Icon from '../../../components/AppIcon';

const PrivacyPrinciples = () => {
  const principles = [
    {
      icon: "Eye",
      title: "Zero Data Mining",
      description: "We never analyze, scan, or extract information from your files. Your content remains completely private and untouched.",
      details: [
        "No content analysis or indexing",
        "No metadata extraction beyond file type",
        "No AI training on your data",
        "No behavioral tracking of file contents"
      ]
    },
    {
      icon: "Clock",
      title: "Temporary Processing Only",
      description: "Files are processed in memory and immediately deleted. No permanent storage on our servers ever.",
      details: [
        "Maximum 5-minute processing window",
        "Automatic deletion after download",
        "No backup copies created",
        "Memory-only file handling"
      ]
    },
    {
      icon: "UserX",
      title: "No Personal Data Collection",
      description: "We don't collect, store, or share any personal information beyond what's necessary for service delivery.",
      details: [
        "No email addresses required",
        "No user profiles or accounts",
        "Anonymous usage statistics only",
        "No third-party data sharing"
      ]
    },
    {
      icon: "Shield",
      title: "Encrypted Everything",
      description: "All data transfers use military-grade encryption. Your files are protected from the moment they leave TeraBox.",
      details: [
        "TLS 1.3 for all connections",
        "256-bit AES encryption",
        "Perfect Forward Secrecy",
        "Zero-knowledge architecture"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Privacy-First Principles
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Built from the ground up with privacy as the foundation, not an afterthought.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="card-elevated p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={principle.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {principle.description}
                  </p>
                  <ul className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={16} color="var(--color-success)" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
            <Icon name="Info" size={20} color="var(--color-primary)" />
            <span className="text-primary font-medium">
              Last updated: July 20, 2025 - Always current with latest privacy standards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPrinciples;