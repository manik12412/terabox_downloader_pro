import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import QuickStartGuide from './components/QuickStartGuide';
import EndpointExplorer from './components/EndpointExplorer';
import CodeExamples from './components/CodeExamples';
import RateLimitsSection from './components/RateLimitsSection';
import WebhookGuide from './components/WebhookGuide';
import SDKSection from './components/SDKSection';

const APIDocumentation = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationSections = [
    { id: 'overview', name: 'Overview', icon: 'BookOpen' },
    { id: 'quickstart', name: 'Quick Start', icon: 'Zap' },
    { id: 'explorer', name: 'API Explorer', icon: 'Code' },
    { id: 'examples', name: 'Code Examples', icon: 'FileCode' },
    { id: 'webhooks', name: 'Webhooks', icon: 'Webhook' },
    { id: 'sdks', name: 'SDKs & Libraries', icon: 'Package' },
    { id: 'ratelimits', name: 'Rate Limits', icon: 'Gauge' },
    { id: 'support', name: 'Developer Support', icon: 'MessageCircle' }
  ];

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/v1/download',
      description: 'Download a single file from TeraBox URL',
      status: 'stable'
    },
    {
      method: 'POST',
      endpoint: '/v1/batch-download',
      description: 'Download multiple files in batch',
      status: 'stable'
    },
    {
      method: 'GET',
      endpoint: '/v1/download/{id}/status',
      description: 'Check download progress and status',
      status: 'stable'
    },
    {
      method: 'GET',
      endpoint: '/v1/downloads',
      description: 'Retrieve download history',
      status: 'stable'
    },
    {
      method: 'DELETE',
      endpoint: '/v1/download/{id}',
      description: 'Delete download record',
      status: 'stable'
    },
    {
      method: 'GET',
      endpoint: '/v1/account/usage',
      description: 'Get API usage statistics',
      status: 'beta'
    }
  ];

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'text-success bg-success/10 border-success/20';
      case 'POST': return 'text-primary bg-primary/10 border-primary/20';
      case 'PUT': return 'text-warning bg-warning/10 border-warning/20';
      case 'DELETE': return 'text-destructive bg-destructive/10 border-destructive/20';
      default: return 'text-text-secondary bg-muted border-border';
    }
  };

  const renderOverviewSection = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
          <Icon name="Code" size={32} color="white" strokeWidth={2} />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
          TeraBox API Documentation
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
          Integrate TeraBox downloading capabilities into your applications with our powerful REST API. 
          Built for developers who need reliable, fast, and scalable file access solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            iconName="Play"
            iconPosition="left"
            onClick={() => setActiveSection('quickstart')}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Code"
            iconPosition="left"
            onClick={() => setActiveSection('explorer')}
          >
            Try API Explorer
          </Button>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-border rounded-xl">
          <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
            <Icon name="Zap" size={24} color="var(--color-success)" />
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2">Lightning Fast</h3>
          <p className="text-text-secondary">
            Average response time under 200ms with global CDN distribution for optimal performance.
          </p>
        </div>

        <div className="p-6 bg-white border border-border rounded-xl">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Icon name="Shield" size={24} color="var(--color-primary)" />
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2">Enterprise Security</h3>
          <p className="text-text-secondary">
            End-to-end encryption, HMAC signature verification, and SOC 2 Type II compliance.
          </p>
        </div>

        <div className="p-6 bg-white border border-border rounded-xl">
          <div className="w-12 h-12 bg-trust-builder/10 rounded-lg flex items-center justify-center mb-4">
            <Icon name="Layers" size={24} color="var(--color-trust-builder)" />
          </div>
          <h3 className="text-lg font-bold text-text-primary mb-2">Scalable Architecture</h3>
          <p className="text-text-secondary">
            Auto-scaling infrastructure handles millions of requests with 99.9% uptime guarantee.
          </p>
        </div>
      </div>

      {/* API Endpoints Overview */}
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-6">API Endpoints</h2>
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-border">
            <div className="bg-gray-50 px-4 py-3 font-semibold text-text-primary">Method</div>
            <div className="bg-gray-50 px-4 py-3 font-semibold text-text-primary lg:col-span-2">Endpoint</div>
            <div className="bg-gray-50 px-4 py-3 font-semibold text-text-primary">Status</div>
          </div>
          {apiEndpoints.map((endpoint, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-border hover:bg-primary/5 transition-colors duration-200">
              <div className="bg-white px-4 py-4">
                <span className={`px-2 py-1 rounded text-xs font-bold border ${getMethodColor(endpoint.method)}`}>
                  {endpoint.method}
                </span>
              </div>
              <div className="bg-white px-4 py-4 lg:col-span-2">
                <div>
                  <code className="text-sm font-mono text-text-primary">{endpoint.endpoint}</code>
                  <p className="text-xs text-text-secondary mt-1">{endpoint.description}</p>
                </div>
              </div>
              <div className="bg-white px-4 py-4">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  endpoint.status === 'stable' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                }`}>
                  {endpoint.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started CTA */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Join thousands of developers who trust TeraBox API for their file downloading needs. 
          Get your API key and start building in minutes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="secondary"
            size="lg"
            iconName="Key"
            iconPosition="left"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get API Key
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="MessageCircle"
            iconPosition="left"
            className="border-white text-white hover:bg-white/10"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );

  const renderDeveloperSupport = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Developer Support</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Get help from our developer community and support team. We're here to help you succeed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Community Support */}
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Community Support</h3>
              <p className="text-sm text-text-secondary">Connect with other developers</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="MessageSquare" size={20} color="var(--color-trust-builder)" />
                <div>
                  <div className="font-medium text-text-primary">Discord Community</div>
                  <div className="text-xs text-text-secondary">2,847 developers online</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" iconName="ExternalLink">Join</Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Github" size={20} color="var(--color-text-primary)" />
                <div>
                  <div className="font-medium text-text-primary">GitHub Discussions</div>
                  <div className="text-xs text-text-secondary">Open source examples</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" iconName="ExternalLink">View</Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="BookOpen" size={20} color="var(--color-conversion-accent)" />
                <div>
                  <div className="font-medium text-text-primary">Stack Overflow</div>
                  <div className="text-xs text-text-secondary">Tag: terabox-api</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" iconName="ExternalLink">Ask</Button>
            </div>
          </div>
        </div>

        {/* Direct Support */}
        <div className="bg-white border border-border rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="Headphones" size={20} color="var(--color-success)" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Direct Support</h3>
              <p className="text-sm text-text-secondary">Get help from our team</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} color="var(--color-primary)" />
                <div>
                  <div className="font-medium text-text-primary">Email Support</div>
                  <div className="text-xs text-text-secondary">Response within 24h</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" iconName="ExternalLink">Contact</Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="MessageCircle" size={20} color="var(--color-success)" />
                <div>
                  <div className="font-medium text-text-primary">Live Chat</div>
                  <div className="text-xs text-text-secondary">Available 9 AM - 6 PM EST</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" iconName="ExternalLink">Chat</Button>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} color="var(--color-warning)" />
                <div>
                  <div className="font-medium text-text-primary">Phone Support</div>
                  <div className="text-xs text-text-secondary">Enterprise plans only</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" iconName="ExternalLink">Call</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Status & Updates */}
      <div className="bg-white border border-border rounded-xl p-6">
        <h3 className="text-lg font-bold text-text-primary mb-4">Service Status & Updates</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Activity" size={24} color="var(--color-success)" />
            </div>
            <h4 className="font-semibold text-text-primary mb-1">System Status</h4>
            <p className="text-sm text-success">All systems operational</p>
            <Button variant="ghost" size="sm" className="mt-2">View Status Page</Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Bell" size={24} color="var(--color-primary)" />
            </div>
            <h4 className="font-semibold text-text-primary mb-1">API Updates</h4>
            <p className="text-sm text-text-secondary">Subscribe to changelog</p>
            <Button variant="ghost" size="sm" className="mt-2">Subscribe</Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-trust-builder/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Calendar" size={24} color="var(--color-trust-builder)" />
            </div>
            <h4 className="font-semibold text-text-primary mb-1">Maintenance</h4>
            <p className="text-sm text-text-secondary">Next: July 25, 2025</p>
            <Button variant="ghost" size="sm" className="mt-2">View Schedule</Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverviewSection();
      case 'quickstart':
        return <QuickStartGuide />;
      case 'explorer':
        return <EndpointExplorer />;
      case 'examples':
        return <CodeExamples />;
      case 'webhooks':
        return <WebhookGuide />;
      case 'sdks':
        return <SDKSection />;
      case 'ratelimits':
        return <RateLimitsSection />;
      case 'support':
        return renderDeveloperSupport();
      default:
        return renderOverviewSection();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-28">
                <div className="bg-white border border-border rounded-xl p-4">
                  <h3 className="font-semibold text-text-primary mb-4">Documentation</h3>
                  <nav className="space-y-1">
                    {navigationSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeSection === section.id
                            ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-primary hover:bg-muted'
                        }`}
                      >
                        <Icon name={section.icon} size={16} />
                        <span>{section.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Quick Links */}
                <div className="bg-white border border-border rounded-xl p-4 mt-4">
                  <h3 className="font-semibold text-text-primary mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Key"
                      iconPosition="left"
                      fullWidth
                      className="justify-start"
                    >
                      Get API Key
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Activity"
                      iconPosition="left"
                      fullWidth
                      className="justify-start"
                    >
                      API Status
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="MessageCircle"
                      iconPosition="left"
                      fullWidth
                      className="justify-start"
                    >
                      Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} TeraBox Downloader Pro. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <Button variant="ghost" size="sm">Privacy Policy</Button>
              <Button variant="ghost" size="sm">Terms of Service</Button>
              <Button variant="ghost" size="sm">API Terms</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default APIDocumentation;