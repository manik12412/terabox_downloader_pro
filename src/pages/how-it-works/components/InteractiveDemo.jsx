import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InteractiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [demoUrl, setDemoUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const demoSteps = [
    {
      title: "Copy TeraBox URL",
      instruction: "Copy the share link from TeraBox",
      action: "paste-url"
    },
    {
      title: "Paste & Analyze",
      instruction: "Our system analyzes the file",
      action: "analyze"
    },
    {
      title: "Download Ready",
      instruction: "Click to start your download",
      action: "download"
    }
  ];

  useEffect(() => {
    if (isProcessing && currentStep === 1) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setCurrentStep(2);
            setIsProcessing(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isProcessing, currentStep]);

  const handleStartDemo = () => {
    setDemoUrl('https://terabox.com/s/1234567890abcdef');
    setCurrentStep(1);
    setIsProcessing(true);
    setProgress(0);
  };

  const handleDownload = () => {
    // Simulate download
    alert('Demo download started! In real usage, your file would download now.');
    setCurrentStep(0);
    setDemoUrl('');
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Try Interactive Demo</h3>
        <p className="text-text-secondary">Experience the download process without any actual files</p>
      </div>

      {/* Demo Interface */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-border p-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-6">
          {demoSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index <= currentStep 
                  ? 'bg-primary text-white' :'bg-muted text-text-secondary'
              }`}>
                {index < currentStep ? <Icon name="Check" size={16} /> : index + 1}
              </div>
              {index < demoSteps.length - 1 && (
                <div className={`w-12 h-0.5 mx-2 ${
                  index < currentStep ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Current Step Content */}
        <div className="text-center mb-6">
          <h4 className="font-semibold text-text-primary mb-1">
            {demoSteps[currentStep]?.title}
          </h4>
          <p className="text-sm text-text-secondary">
            {demoSteps[currentStep]?.instruction}
          </p>
        </div>

        {/* Demo Input */}
        {currentStep === 0 && (
          <div className="space-y-4">
            <Input
              label="TeraBox URL"
              placeholder="Paste your TeraBox share link here..."
              value={demoUrl}
              onChange={(e) => setDemoUrl(e.target.value)}
            />
            <Button 
              variant="default" 
              fullWidth 
              onClick={handleStartDemo}
              iconName="Download"
              iconPosition="left"
            >
              Start Demo Download
            </Button>
          </div>
        )}

        {/* Processing Step */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Search" size={20} color="var(--color-primary)" />
                <span className="font-medium text-text-primary">Analyzing file...</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-xs text-text-secondary mt-2">{progress}% complete</div>
            </div>
          </div>
        )}

        {/* Download Ready */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                <span className="font-medium text-success">File Ready!</span>
              </div>
              <div className="text-sm text-text-secondary">
                <div>File: sample_document.pdf</div>
                <div>Size: 2.4 MB</div>
                <div>Estimated download time: 3 seconds</div>
              </div>
            </div>
            <Button 
              variant="default" 
              fullWidth 
              onClick={handleDownload}
              iconName="Download"
              iconPosition="left"
            >
              Download Now
            </Button>
          </div>
        )}
      </div>

      {/* Demo Reset */}
      {currentStep > 0 && (
        <div className="text-center mt-6">
          <Button 
            variant="ghost" 
            onClick={() => {
              setCurrentStep(0);
              setDemoUrl('');
              setProgress(0);
              setIsProcessing(false);
            }}
          >
            Reset Demo
          </Button>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;