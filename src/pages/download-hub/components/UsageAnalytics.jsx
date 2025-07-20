import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UsageAnalytics = () => {
  const [userPlan] = useState('free'); // 'free' or 'premium'
  const [usageData] = useState({
    downloadsThisMonth: 47,
    downloadLimit: 100,
    dataUsedGB: 12.4,
    dataLimitGB: 50,
    speedMBps: 8.5,
    maxSpeedMBps: 15.0,
    filesDownloaded: 47,
    successRate: 98.5
  });

  const getUsagePercentage = (used, limit) => {
    return Math.min((used / limit) * 100, 100);
  };

  const getUsageColor = (percentage) => {
    if (percentage >= 90) return 'text-destructive';
    if (percentage >= 75) return 'text-warning';
    return 'text-success';
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 90) return 'bg-destructive';
    if (percentage >= 75) return 'bg-warning';
    return 'bg-success';
  };

  const downloadPercentage = getUsagePercentage(usageData.downloadsThisMonth, usageData.downloadLimit);
  const dataPercentage = getUsagePercentage(usageData.dataUsedGB, usageData.dataLimitGB);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text-primary">Usage Analytics</h2>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            userPlan === 'premium' ?'bg-primary/10 text-primary' :'bg-muted text-text-secondary'
          }`}>
            {userPlan === 'premium' ? 'Premium' : 'Free Plan'}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Downloads Usage */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Icon name="Download" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">Downloads This Month</span>
            </div>
            <span className={`text-sm font-semibold ${getUsageColor(downloadPercentage)}`}>
              {usageData.downloadsThisMonth} / {usageData.downloadLimit}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-1">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(downloadPercentage)}`}
              style={{ width: `${downloadPercentage}%` }}
            />
          </div>
          <p className="text-xs text-text-secondary">
            {usageData.downloadLimit - usageData.downloadsThisMonth} downloads remaining
          </p>
        </div>

        {/* Data Usage */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Icon name="HardDrive" size={16} className="text-secondary" />
              <span className="text-sm font-medium text-text-primary">Data Transfer</span>
            </div>
            <span className={`text-sm font-semibold ${getUsageColor(dataPercentage)}`}>
              {usageData.dataUsedGB} GB / {usageData.dataLimitGB} GB
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-1">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(dataPercentage)}`}
              style={{ width: `${dataPercentage}%` }}
            />
          </div>
          <p className="text-xs text-text-secondary">
            {(usageData.dataLimitGB - usageData.dataUsedGB).toFixed(1)} GB remaining
          </p>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Zap" size={16} className="text-warning" />
              <span className="text-xs font-medium text-text-secondary">Avg Speed</span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-lg font-bold text-text-primary">{usageData.speedMBps}</span>
              <span className="text-xs text-text-secondary">MB/s</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1 mt-2">
              <div 
                className="h-1 rounded-full bg-warning transition-all duration-300"
                style={{ width: `${(usageData.speedMBps / usageData.maxSpeedMBps) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-xs font-medium text-text-secondary">Success Rate</span>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-lg font-bold text-text-primary">{usageData.successRate}</span>
              <span className="text-xs text-text-secondary">%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1 mt-2">
              <div 
                className="h-1 rounded-full bg-success transition-all duration-300"
                style={{ width: `${usageData.successRate}%` }}
              />
            </div>
          </div>
        </div>

        {/* Upgrade Prompt for Free Users */}
        {userPlan === 'free' && (downloadPercentage > 75 || dataPercentage > 75) && (
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="TrendingUp" size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary mb-1">
                  Approaching Usage Limits
                </h3>
                <p className="text-xs text-text-secondary mb-3">
                  Upgrade to Premium for unlimited downloads, faster speeds, and priority support.
                </p>
                <div className="flex items-center space-x-2">
                  <Button variant="default" size="xs" iconName="Zap" iconPosition="left">
                    Upgrade Now
                  </Button>
                  <Button variant="ghost" size="xs">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Premium Benefits */}
        {userPlan === 'free' && (
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-sm font-semibold text-text-primary mb-3">Premium Benefits</h3>
            <div className="space-y-2">
              {[
                { icon: 'Infinity', text: 'Unlimited downloads' },
                { icon: 'Zap', text: 'Up to 50 MB/s speed' },
                { icon: 'List', text: 'Batch processing' },
                { icon: 'Clock', text: 'Priority queue' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name={benefit.icon} size={14} className="text-primary" />
                  <span className="text-xs text-text-secondary">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsageAnalytics;