import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickStartGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Get API Key",
      description: "Sign up and generate your authentication token",
      code: `// 1. Register at https://teraboxpro.com/api/register
// 2. Navigate to API Dashboard
// 3. Generate new API key
const API_KEY = "tbp_live_abc123def456ghi789";`,
      language: "javascript"
    },
    {
      id: 1,
      title: "Make First Request",
      description: "Test your connection with a simple download request",
      code: `curl -X POST "https://api.teraboxpro.com/v1/download"\ -H"Authorization: Bearer tbp_live_abc123def456ghi789"\ -H"Content-Type: application/json" \\
  -d '{
    "url": "https://terabox.com/s/1abc2def3ghi4jkl",
    "format": "original"
  }'`,
      language: "bash"
    },
    {
      id: 2,
      title: "Handle Response",
      description: "Process the download response and track progress",
      code: `{
  "success": true,
  "download_id": "dl_789xyz123abc",
  "download_url": "https://cdn.teraboxpro.com/files/...",
  "expires_at": "2025-07-20T08:29:17Z",
  "file_info": {
    "name": "document.pdf",
    "size": 2048576,
    "type": "application/pdf"
  }
}`,
      language: "json"
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">Quick Start Guide</h2>
          <p className="text-sm text-text-secondary">Get up and running in 3 simple steps</p>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  activeStep === index
                    ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/30 text-text-secondary hover:text-primary'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    activeStep === index
                      ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-xs opacity-70">{step.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Code Display */}
        <div className="lg:w-2/3">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {steps[activeStep].language}
              </div>
              <Button
                variant="ghost"
                size="xs"
                iconName="Copy"
                iconPosition="left"
                className="text-gray-400 hover:text-white"
              >
                Copy
              </Button>
            </div>
            <div className="p-4">
              <pre className="text-sm text-gray-100 font-mono overflow-x-auto">
                <code>{steps[activeStep].code}</code>
              </pre>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-success/10 border border-success/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} color="var(--color-success)" />
              <div>
                <h4 className="font-medium text-success mb-1">Step {activeStep + 1}: {steps[activeStep].title}</h4>
                <p className="text-sm text-text-secondary">{steps[activeStep].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 pt-6 border-t border-border">
        <Button
          variant="outline"
          iconName="ChevronLeft"
          iconPosition="left"
          disabled={activeStep === 0}
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
        >
          Previous
        </Button>
        <Button
          variant="default"
          iconName="ChevronRight"
          iconPosition="right"
          disabled={activeStep === steps.length - 1}
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default QuickStartGuide;