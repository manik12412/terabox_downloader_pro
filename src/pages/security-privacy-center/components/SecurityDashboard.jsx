import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SecurityDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const securityMetrics = [
    {
      label: "Threat Protection",
      value: "Active",
      status: "success",
      icon: "Shield",
      description: "Real-time malware scanning and threat detection"
    },
    {
      label: "Server Uptime",
      value: "99.97%",
      status: "success",
      icon: "Server",
      description: "Last 30 days availability"
    },
    {
      label: "SSL Certificate",
      value: "Valid",
      status: "success",
      icon: "Lock",
      description: "Expires: March 15, 2026"
    },
    {
      label: "Data Centers",
      value: "12 Active",
      status: "success",
      icon: "Globe",
      description: "Globally distributed infrastructure"
    },
    {
      label: "Security Audits",
      value: "Passed",
      status: "success",
      icon: "FileCheck",
      description: "Last audit: June 2025"
    },
    {
      label: "Incident Response",
      value: "< 2 min",
      status: "success",
      icon: "Zap",
      description: "Average response time"
    }
  ];

  const recentActivities = [
    {
      time: "2 minutes ago",
      action: "Security scan completed",
      status: "success",
      details: "All systems clean - 0 threats detected"
    },
    {
      time: "15 minutes ago",
      action: "SSL certificate renewed",
      status: "success",
      details: "Extended validity through 2026"
    },
    {
      time: "1 hour ago",
      action: "Firewall rules updated",
      status: "success",
      details: "Enhanced DDoS protection activated"
    },
    {
      time: "3 hours ago",
      action: "Security audit completed",
      status: "success",
      details: "Penetration testing passed with 100% score"
    }
  ];

  return (
    <section className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Real-Time Security Dashboard
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-6">
            Live monitoring of our security infrastructure and threat protection systems.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
            <span className="text-success font-medium">
              Last updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityMetrics.map((metric, index) => (
            <div key={index} className="card-elevated p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name={metric.icon} size={20} color="var(--color-success)" />
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-xs text-success font-medium">LIVE</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {metric.label}
              </h3>
              <div className="text-2xl font-bold text-success mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-text-secondary">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-elevated p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Activity" size={24} color="var(--color-primary)" />
              <h3 className="text-xl font-semibold text-text-primary">Recent Security Activity</h3>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-text-primary">{activity.action}</span>
                      <span className="text-xs text-text-secondary">{activity.time}</span>
                    </div>
                    <p className="text-sm text-text-secondary">{activity.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card-elevated p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
              <h3 className="text-xl font-semibold text-text-primary">Security Metrics</h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Threat Detection Rate</span>
                  <span className="text-sm font-bold text-success">100%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">System Availability</span>
                  <span className="text-sm font-bold text-success">99.97%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '99.97%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-text-primary">Response Time</span>
                  <span className="text-sm font-bold text-success">98.5%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '98.5%' }}></div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">0</div>
                  <div className="text-sm text-text-secondary">Security incidents this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDashboard;