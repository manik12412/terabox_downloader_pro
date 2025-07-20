import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const HeroSection = () => {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!downloadUrl.trim()) return;
    
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      // Mock success - in real app would handle actual download
      alert('Download started! Check your downloads folder.');
      setDownloadUrl('');
    }, 2000);
  };

  const realTimeMetrics = [
    { label: "Success Rate", value: "99.2%", icon: "CheckCircle", color: "text-success" },
    { label: "Speed Boost", value: "5x Faster", icon: "Zap", color: "text-warning" },
    { label: "Files Today", value: "12,847", icon: "Download", color: "text-primary" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-surface-secondary to-muted min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%232563eb%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Your TeraBox Files,
              <span className="block text-gradient">Downloaded Instantly</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Transform frustrating TeraBox downloads into lightning-fast file access. 
              No limits, no waiting, no hassle - just your files when you need them.
            </p>
          </div>

          {/* Real-time Metrics */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {realTimeMetrics.map((metric, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-border">
                <Icon name={metric.icon} size={20} className={metric.color} />
                <div className="text-left">
                  <div className="text-sm font-medium text-text-secondary">{metric.label}</div>
                  <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Interface */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-brand border border-border p-8">
              <form onSubmit={handleDownload} className="space-y-6">
                <div>
                  <Input
                    type="url"
                    label="TeraBox URL"
                    placeholder="Paste your TeraBox download link here..."
                    value={downloadUrl}
                    onChange={(e) => setDownloadUrl(e.target.value)}
                    description="Supports all TeraBox file types and folder downloads"
                    className="text-lg"
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isProcessing}
                    iconName="Download"
                    iconPosition="left"
                    className="flex-1"
                    disabled={!downloadUrl.trim()}
                  >
                    {isProcessing ? 'Processing...' : 'Download Now - Free'}
                  </Button>
                  
                  <Link to="/how-it-works">
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="Play"
                      iconPosition="left"
                      className="w-full sm:w-auto"
                    >
                      See How It Works
                    </Button>
                  </Link>
                </div>
              </form>

              {/* Quick Features */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-success" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={16} className="text-warning" />
                    <span>No Speed Limits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span>2M+ Happy Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-success" />
              <span className="text-sm font-medium text-text-secondary">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={20} className="text-primary" />
              <span className="text-sm font-medium text-text-secondary">SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={20} className="text-accent" />
              <span className="text-sm font-medium text-text-secondary">Global CDN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse-slow hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse-slow hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;