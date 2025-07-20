import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SpeedComparison = () => {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('speed-comparison');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimationProgress(100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const comparisonData = [
    {
      method: "Standard TeraBox",
      speed: "1.2 MB/s",
      time: "45 minutes",
      progress: 15,
      color: "bg-red-500",
      icon: "Turtle",
      issues: ["Speed restrictions", "Download limits", "Frequent interruptions"]
    },
    {
      method: "TeraBox Downloader Pro",
      speed: "15.8 MB/s",
      time: "3.5 minutes",
      progress: 100,
      color: "bg-gradient-to-r from-primary to-secondary",
      icon: "Rocket",
      benefits: ["No speed limits", "Batch downloads", "Resume capability"]
    }
  ];

  const performanceMetrics = [
    { label: "Average Speed Increase", value: "13x", icon: "TrendingUp" },
    { label: "Time Saved Per Download", value: "41.5 min", icon: "Clock" },
    { label: "Success Rate", value: "99.2%", icon: "Target" },
    { label: "User Satisfaction", value: "4.9/5", icon: "Star" }
  ];

  return (
    <section id="speed-comparison" className="py-20 bg-gradient-to-br from-surface-secondary to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Zap" size={24} className="text-warning" />
            <span className="text-sm font-medium text-warning uppercase tracking-wide">Performance Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            See The Dramatic Speed Difference
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real performance data from downloading a 1GB file. 
            The difference speaks for itself.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {comparisonData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-red-100 text-red-600' : 'bg-primary/10 text-primary'
                  }`}>
                    <Icon name={item.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{item.method}</h3>
                    <p className="text-sm text-text-secondary">1GB File Download</p>
                  </div>
                </div>
                {index === 1 && (
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                    RECOMMENDED
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-text-secondary">Download Progress</span>
                  <span className="text-sm font-bold text-text-primary">{item.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${item.color} transition-all duration-3000 ease-out`}
                    style={{ 
                      width: isVisible ? `${item.progress}%` : '0%',
                      transitionDelay: index === 1 ? '1s' : '0s'
                    }}
                  ></div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-text-primary mb-1">{item.speed}</div>
                  <div className="text-xs text-text-secondary">Download Speed</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-text-primary mb-1">{item.time}</div>
                  <div className="text-xs text-text-secondary">Total Time</div>
                </div>
              </div>

              {/* Features/Issues */}
              <div className="space-y-2">
                {item.issues && item.issues.map((issue, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-red-600">
                    <Icon name="X" size={16} />
                    <span>{issue}</span>
                  </div>
                ))}
                {item.benefits && item.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-success">
                    <Icon name="Check" size={16} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Performance Metrics That Matter
            </h3>
            <p className="text-text-secondary">
              Based on over 10 million downloads processed through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric.icon} size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Ready to experience lightning-fast downloads?
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-success">
            <Icon name="Shield" size={16} />
            <span>No credit card required • Free tier available • Instant access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedComparison;