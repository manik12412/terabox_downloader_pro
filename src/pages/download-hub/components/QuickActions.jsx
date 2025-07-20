import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const QuickActions = () => {
  const [showMobileApp, setShowMobileApp] = useState(false);

  const quickActionItems = [
    {
      id: 'mobile-app',
      title: 'Mobile App',
      description: 'Download on the go',
      icon: 'Smartphone',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      action: () => setShowMobileApp(true)
    },
    {
      id: 'api-docs',
      title: 'API Access',
      description: 'Integrate with your apps',
      icon: 'Code',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      action: () => window.open('/api-documentation', '_blank')
    },
    {
      id: 'browser-extension',
      title: 'Browser Extension',
      description: 'One-click downloads',
      icon: 'Puzzle',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      action: () => console.log('Browser extension')
    },
    {
      id: 'support',
      title: 'Get Help',
      description: 'Support & tutorials',
      icon: 'HelpCircle',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      action: () => window.open('/support-center', '_blank')
    }
  ];

  const mobileAppLinks = [
    {
      platform: 'Android',
      icon: 'Smartphone',
      url: 'https://play.google.com/store',
      color: 'text-success'
    },
    {
      platform: 'iOS',
      icon: 'Smartphone',
      url: 'https://apps.apple.com',
      color: 'text-text-secondary'
    }
  ];

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-text-primary">Quick Actions</h2>
        </div>

        <div className="p-6 space-y-4">
          {quickActionItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className="w-full flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/30 transition-all duration-200 group"
            >
              <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                <Icon name={item.icon} size={20} className={item.color} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary">
                  {item.description}
                </p>
              </div>
              <Icon name="ChevronRight" size={16} className="text-text-secondary group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>

        {/* Security Notice */}
        <div className="p-6 bg-muted/30 border-t border-border">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={16} className="text-success flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-text-primary mb-1">
                Secure & Private
              </p>
              <p className="text-xs text-text-secondary">
                All downloads are encrypted and automatically deleted after 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Modal */}
      {showMobileApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">Download Mobile App</h3>
                <button
                  onClick={() => setShowMobileApp(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <Icon name="X" size={20} className="text-text-secondary" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Download" size={32} color="white" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  TeraBox Downloader Pro
                </h4>
                <p className="text-sm text-text-secondary">
                  Download files on the go with our mobile app. Features background downloads, push notifications, and offline access.
                </p>
              </div>

              <div className="space-y-3">
                {mobileAppLinks.map((app) => (
                  <a
                    key={app.platform}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary/30 hover:bg-muted/30 transition-all duration-200 group"
                  >
                    <Icon name={app.icon} size={24} className={app.color} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                        Download for {app.platform}
                      </p>
                      <p className="text-xs text-text-secondary">
                        Free download from official store
                      </p>
                    </div>
                    <Icon name="ExternalLink" size={16} className="text-text-secondary group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Star" size={16} className="text-warning" />
                  <span className="text-sm font-medium text-text-primary">Features</span>
                </div>
                <ul className="text-xs text-text-secondary space-y-1">
                  <li>• Background downloads</li>
                  <li>• Push notifications</li>
                  <li>• Offline file access</li>
                  <li>• Share directly from other apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickActions;