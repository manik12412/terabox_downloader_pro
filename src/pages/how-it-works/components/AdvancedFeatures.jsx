import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const AdvancedFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('api');

  const features = [
    {
      id: 'api',
      title: 'API Integration',
      icon: 'Code',
      description: 'Integrate TeraBox downloading into your applications',
      content: {
        overview: 'Our REST API allows developers to integrate TeraBox downloading capabilities directly into their applications, workflows, or automation scripts.',
        benefits: [
          'Programmatic file downloads',
          'Batch processing capabilities',
          'Real-time status monitoring',
          'Webhook notifications',
          'Rate limiting and quotas'
        ],
        codeExample: `// JavaScript Example
const response = await fetch('https://api.teraboxpro.com/v1/download', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://terabox.com/s/1234567890',
    format: 'direct',
    notify_webhook: 'https://yourapp.com/webhook'
  })
});

const result = await response.json();
console.log('Download URL:', result.download_url);`,
        documentation: 'Full API documentation available with authentication, endpoints, and examples'
      }
    },
    {
      id: 'batch',
      title: 'Batch Processing',
      icon: 'Layers',
      description: 'Download multiple files simultaneously with queue management',
      content: {
        overview: 'Process multiple TeraBox links at once with intelligent queue management, priority settings, and progress tracking for each file.',
        benefits: [
          'Upload CSV files with multiple URLs',
          'Set download priorities',
          'Parallel processing (Premium)',
          'Progress tracking per file',
          'Automatic retry on failures'
        ],
        codeExample: `// Batch Upload Format (CSV)
url,priority,filename
https://terabox.com/s/1234567890,high,document1.pdf
https://terabox.com/s/0987654321,normal,presentation.pptx
https://terabox.com/s/1122334455,low,archive.zip

// JavaScript Batch API
const batchJob = await fetch('/api/batch', {
  method: 'POST',
  body: formData // CSV file
});`,
        documentation: 'Supports up to 100 URLs per batch (Premium: 1000 URLs)'
      }
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      icon: 'Workflow',
      description: 'Automate downloads with triggers and conditions',
      content: {
        overview: 'Set up automated workflows that trigger downloads based on specific conditions, schedules, or external events.',
        benefits: [
          'Scheduled downloads',
          'Conditional processing',
          'Integration with Zapier/IFTTT',
          'Email notifications',
          'Cloud storage sync'
        ],
        codeExample: `// Webhook Automation Example
{
  "trigger": "schedule",
  "schedule": "0 2 * * *", // Daily at 2 AM
  "action": "download_batch",
  "source": "https://yourapp.com/api/pending-urls",
  "destination": "s3://your-bucket/downloads/",
  "notifications": {
    "email": "admin@yourcompany.com",
    "webhook": "https://yourapp.com/download-complete"
  }
}`,
        documentation: 'Supports cron expressions, webhooks, and third-party integrations'
      }
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      icon: 'Building',
      description: 'Custom solutions for large organizations',
      content: {
        overview: 'Tailored solutions for enterprises requiring high-volume processing, custom integrations, and dedicated support.',
        benefits: [
          'Dedicated servers',
          'Custom rate limits',
          'White-label solutions',
          'SSO integration',
          'Priority support'
        ],
        codeExample: `// Enterprise Configuration
{
  "organization": "your-company",
  "tier": "enterprise",
  "limits": {
    "daily_downloads": 10000,
    "concurrent_jobs": 50,
    "max_file_size": "50GB"
  },
  "features": {
    "white_label": true,
    "custom_domain": "downloads.yourcompany.com",
    "sso_provider": "okta"
  }
}`,
        documentation: 'Contact sales for custom enterprise pricing and features'
      }
    }
  ];

  const activeFeatureData = features.find(f => f.id === activeFeature);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Advanced Features</h3>
        <p className="text-text-secondary">Powerful tools for developers and power users</p>
      </div>

      {/* Feature Tabs */}
      <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className={`flex-1 min-w-0 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
              activeFeature === feature.id
                ? 'bg-white text-primary shadow-sm border border-primary/20'
                : 'text-text-secondary hover:text-primary hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name={feature.icon} size={16} />
              <span className="hidden sm:inline">{feature.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Feature Content */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={activeFeatureData.icon} size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-text-primary">{activeFeatureData.title}</h4>
              <p className="text-text-secondary">{activeFeatureData.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h5 className="font-semibold text-text-primary mb-2">Overview</h5>
            <p className="text-text-secondary">{activeFeatureData.content.overview}</p>
          </div>

          {/* Benefits */}
          <div>
            <h5 className="font-semibold text-text-primary mb-3">Key Benefits</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeFeatureData.content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span className="text-sm text-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h5 className="font-semibold text-text-primary mb-3">Code Example</h5>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{activeFeatureData.content.codeExample}</code>
              </pre>
            </div>
          </div>

          {/* Documentation Link */}
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h6 className="font-medium text-primary mb-1">Documentation</h6>
                <p className="text-sm text-text-secondary">{activeFeatureData.content.documentation}</p>
              </div>
              <a 
                href="/api-documentation"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="ExternalLink" size={16} />
                <span>View Docs</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started */}
      <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
        <h4 className="font-semibold text-text-primary mb-2">Ready to Get Started?</h4>
        <p className="text-text-secondary mb-4">Choose the plan that fits your needs</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="/api-documentation" 
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="Code" size={16} />
            <span>API Documentation</span>
          </a>
          <a 
            href="/support-center" 
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
          >
            <Icon name="MessageCircle" size={16} />
            <span>Contact Sales</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;