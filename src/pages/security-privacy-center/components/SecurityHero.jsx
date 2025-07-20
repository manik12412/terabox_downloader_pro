import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-24 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="Shield" size={32} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Security & Privacy
            <span className="block text-gradient">Center</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
            Your trust is our foundation. Discover how we protect your files and privacy with 
            <span className="font-semibold text-primary"> military-grade security</span> and 
            <span className="font-semibold text-primary"> zero-storage policies</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
              <Icon name="CheckCircle" size={20} color="var(--color-success)" />
              <span className="text-success font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
              <Icon name="Lock" size={20} color="var(--color-success)" />
              <span className="text-success font-medium">End-to-End Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
              <Icon name="Trash2" size={20} color="var(--color-success)" />
              <span className="text-success font-medium">Auto-Delete Policy</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0 Minutes</div>
              <div className="text-sm text-text-secondary">File Storage Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
              <div className="text-sm text-text-secondary">AES Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-text-secondary">Security Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;