import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DataHandlingPolicy = () => {
  const [activeTab, setActiveTab] = useState('processing');

  const tabs = [
    { id: 'processing', label: 'File Processing', icon: 'FileText' },
    { id: 'deletion', label: 'Auto-Deletion', icon: 'Trash2' },
    { id: 'encryption', label: 'Encryption', icon: 'Lock' },
    { id: 'controls', label: 'User Controls', icon: 'Settings' }
  ];

  const processingSteps = [
    {
      step: 1,
      title: "Secure Connection",
      description: "File URL received via encrypted HTTPS connection",
      duration: "< 1 second",
      icon: "Link"
    },
    {
      step: 2,
      title: "Memory Processing",
      description: "File processed directly in server memory, never written to disk",
      duration: "1-3 minutes",
      icon: "Cpu"
    },
    {
      step: 3,
      title: "Secure Transfer",
      description: "Processed file sent to user via encrypted connection",
      duration: "< 30 seconds",
      icon: "Download"
    },
    {
      step: 4,
      title: "Immediate Cleanup",
      description: "All memory cleared and connections terminated",
      duration: "< 1 second",
      icon: "Trash2"
    }
  ];

  const deletionPolicies = [
    {
      trigger: "Download Complete",
      action: "Immediate memory cleanup",
      timeline: "< 1 second",
      guarantee: "100% removal"
    },
    {
      trigger: "Processing Timeout",
      action: "Automatic session termination",
      timeline: "5 minutes max",
      guarantee: "Forced cleanup"
    },
    {
      trigger: "User Cancellation",
      action: "Instant process termination",
      timeline: "< 1 second",
      guarantee: "Complete removal"
    },
    {
      trigger: "System Restart",
      action: "Memory purge on reboot",
      timeline: "Immediate",
      guarantee: "Hardware-level clear"
    }
  ];

  const encryptionDetails = [
    {
      layer: "Transport Layer",
      method: "TLS 1.3",
      strength: "256-bit",
      description: "All data in transit protected with latest encryption standards"
    },
    {
      layer: "Application Layer",
      method: "AES-256-GCM",
      strength: "256-bit",
      description: "Additional encryption layer for sensitive operations"
    },
    {
      layer: "Memory Protection",
      method: "Secure Memory",
      strength: "Hardware",
      description: "Protected memory regions prevent unauthorized access"
    },
    {
      layer: "Key Management",
      method: "Perfect Forward Secrecy",
      strength: "Ephemeral",
      description: "Unique session keys that cannot be recovered"
    }
  ];

  const userControls = [
    {
      control: "Immediate Deletion",
      description: "Cancel any active download and force immediate cleanup",
      availability: "Always available",
      icon: "X"
    },
    {
      control: "Privacy Mode",
      description: "Extra security measures for sensitive files",
      availability: "Premium feature",
      icon: "EyeOff"
    },
    {
      control: "Download History",
      description: "View and manage your download history (URLs only)",
      availability: "Optional feature",
      icon: "History"
    },
    {
      control: "Data Export",
      description: "Export your usage data in machine-readable format",
      availability: "GDPR right",
      icon: "Download"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'processing':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Zero-Storage File Processing
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Your files are processed entirely in memory and never stored on our servers. 
                Here's exactly what happens during the download process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Step {step.step}</div>
                  <h4 className="font-semibold text-text-primary mb-2">{step.title}</h4>
                  <p className="text-sm text-text-secondary mb-2">{step.description}</p>
                  <div className="text-xs font-medium text-success">{step.duration}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-surface-secondary p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Info" size={20} color="var(--color-primary)" />
                <h4 className="font-semibold text-text-primary">Memory-Only Processing</h4>
              </div>
              <p className="text-text-secondary">
                Unlike traditional download services that store files temporarily on disk, our system processes 
                everything in RAM. This means your files never touch permanent storage and are completely 
                inaccessible once the process completes.
              </p>
            </div>
          </div>
        );
        
      case 'deletion':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Automatic Deletion Policies
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Multiple safeguards ensure your files are completely removed from our systems 
                under all circumstances.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deletionPolicies.map((policy, index) => (
                <div key={index} className="card-elevated p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-text-primary">{policy.trigger}</h4>
                    <div className="text-xs font-medium text-success px-2 py-1 bg-success/10 rounded-full">
                      {policy.timeline}
                    </div>
                  </div>
                  <p className="text-text-secondary mb-3">{policy.action}</p>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} color="var(--color-success)" />
                    <span className="text-sm font-medium text-success">{policy.guarantee}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-success/5 to-accent/5 p-6 rounded-lg border border-success/20">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                <h4 className="font-semibold text-text-primary">Deletion Guarantee</h4>
              </div>
              <p className="text-text-secondary">
                We guarantee that no file data remains on our servers beyond the processing window. 
                Our systems are designed with automatic cleanup mechanisms that activate regardless 
                of how the session ends.
              </p>
            </div>
          </div>
        );
        
      case 'encryption':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Multi-Layer Encryption
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Your files are protected by multiple layers of military-grade encryption 
                throughout the entire process.
              </p>
            </div>
            
            <div className="space-y-6">
              {encryptionDetails.map((layer, index) => (
                <div key={index} className="card-elevated p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{layer.layer}</h4>
                      <p className="text-text-secondary">{layer.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{layer.method}</div>
                      <div className="text-xs text-success">{layer.strength}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-surface rounded-lg">
                <Icon name="Lock" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
                <h4 className="font-semibold text-text-primary mb-2">256-bit AES</h4>
                <p className="text-sm text-text-secondary">Same encryption used by banks and governments</p>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg">
                <Icon name="Key" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
                <h4 className="font-semibold text-text-primary mb-2">Perfect Forward Secrecy</h4>
                <p className="text-sm text-text-secondary">Unique keys for every session</p>
              </div>
              <div className="text-center p-6 bg-surface rounded-lg">
                <Icon name="Shield" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
                <h4 className="font-semibold text-text-primary mb-2">Zero Knowledge</h4>
                <p className="text-sm text-text-secondary">We cannot access your file contents</p>
              </div>
            </div>
          </div>
        );
        
      case 'controls':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                User Privacy Controls
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                You have complete control over your data and privacy settings. 
                Exercise your rights with simple, one-click actions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userControls.map((control, index) => (
                <div key={index} className="card-elevated p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={control.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-text-primary">{control.control}</h4>
                        <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                          {control.availability}
                        </span>
                      </div>
                      <p className="text-text-secondary">{control.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card-elevated p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="UserCheck" size={24} color="var(--color-primary)" />
                <h4 className="text-xl font-semibold text-text-primary">Your Rights Under GDPR & CCPA</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-text-primary mb-3">Data Subject Rights:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="text-sm text-text-secondary">Right to access your data</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="text-sm text-text-secondary">Right to data portability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="text-sm text-text-secondary">Right to be forgotten</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-success)" />
                      <span className="text-sm text-text-secondary">Right to rectification</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-text-primary mb-3">How to Exercise Rights:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Icon name="Mail" size={16} color="var(--color-primary)" />
                      <span className="text-sm text-text-secondary">Email: privacy@teraboxpro.com</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="MessageCircle" size={16} color="var(--color-primary)" />
                      <span className="text-sm text-text-secondary">Live chat support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} color="var(--color-primary)" />
                      <span className="text-sm text-text-secondary">Response within 30 days</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={16} color="var(--color-primary)" />
                      <span className="text-sm text-text-secondary">No fees for requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Data Handling & Privacy Policy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Complete transparency about how we handle your files and protect your privacy.
          </p>
        </div>
        
        <div className="card-elevated overflow-hidden">
          <div className="border-b border-border">
            <nav className="flex space-x-8 px-8 py-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary text-white' :'text-text-secondary hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataHandlingPolicy;