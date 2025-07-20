import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TroubleshootingSection = () => {
  const [activeIssue, setActiveIssue] = useState(null);

  const troubleshootingIssues = [
    {
      id: 1,
      title: "Link Expired or Invalid",
      icon: "AlertCircle",
      problem: "The TeraBox link shows as expired or invalid",
      solutions: [
        "Ensure the link was copied completely without any missing characters",
        "Check if the file owner has changed sharing permissions",
        "Try accessing the original TeraBox link first to verify it works",
        "Contact the file owner to generate a new sharing link"
      ],
      prevention: "Always use fresh links and verify they work in TeraBox first"
    },
    {
      id: 2,
      title: "Large File Handling",
      icon: "HardDrive",
      problem: "Files over 1GB are taking too long or failing",
      solutions: [
        "Ensure you have sufficient storage space on your device",
        "Use a stable internet connection (WiFi recommended for large files)",
        "Enable \'Resume Downloads\' in your browser settings",
        "Consider upgrading to Premium for priority processing of large files"
      ],
      prevention: "Check available storage and connection stability before starting"
    },
    {
      id: 3,
      title: "Mobile Download Issues",
      icon: "Smartphone",
      problem: "Downloads not working properly on mobile devices",
      solutions: [
        "Use our mobile app instead of the browser for better performance",
        "Ensure you have enough storage space on your mobile device",
        "Try switching between WiFi and mobile data",
        "Clear your browser cache and cookies",
        "Disable any download managers or VPN apps temporarily"
      ],
      prevention: "Use the dedicated mobile app for the best mobile experience"
    },
    {
      id: 4,
      title: "Slow Download Speeds",
      icon: "Wifi",
      problem: "Downloads are slower than expected",
      solutions: [
        "Check your internet connection speed using a speed test",
        "Pause other downloads or streaming activities",
        "Try downloading during off-peak hours",
        "Switch to a different server location in Premium settings",
        "Ensure no background apps are consuming bandwidth"
      ],
      prevention: "Use Premium for guaranteed high-speed downloads and priority servers"
    },
    {
      id: 5,
      title: "Browser Compatibility",
      icon: "Globe",
      problem: "Service not working in your browser",
      solutions: [
        "Update your browser to the latest version",
        "Disable ad blockers temporarily",
        "Clear browser cache and cookies",
        "Try using Chrome, Firefox, or Safari",
        "Disable browser extensions that might interfere"
      ],
      prevention: "Keep your browser updated and use supported browsers"
    }
  ];

  const toggleIssue = (issueId) => {
    setActiveIssue(activeIssue === issueId ? null : issueId);
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Common Issues & Solutions</h3>
        <p className="text-text-secondary">Quick fixes for the most frequent problems</p>
      </div>

      <div className="space-y-3">
        {troubleshootingIssues.map((issue) => (
          <div key={issue.id} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleIssue(issue.id)}
              className="w-full p-4 text-left bg-white hover:bg-muted/30 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Icon name={issue.icon} size={20} color="var(--color-warning)" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{issue.title}</h4>
                  <p className="text-sm text-text-secondary">{issue.problem}</p>
                </div>
              </div>
              <Icon 
                name={activeIssue === issue.id ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                color="var(--color-text-secondary)" 
              />
            </button>

            {activeIssue === issue.id && (
              <div className="p-4 bg-muted/20 border-t border-border">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2 flex items-center space-x-2">
                      <Icon name="Wrench" size={16} />
                      <span>Solutions:</span>
                    </h5>
                    <ul className="space-y-2">
                      {issue.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                          <Icon name="CheckCircle" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <h6 className="font-medium text-success mb-1 flex items-center space-x-2">
                      <Icon name="Lightbulb" size={14} />
                      <span>Prevention Tip:</span>
                    </h6>
                    <p className="text-sm text-success/80">{issue.prevention}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20 text-center">
        <Icon name="MessageCircle" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
        <h4 className="font-semibold text-text-primary mb-2">Still Need Help?</h4>
        <p className="text-text-secondary mb-4">Our support team is available 24/7 to assist you</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="/support-center" 
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="MessageSquare" size={16} />
            <span>Contact Support</span>
          </a>
          <a 
            href="/support-center" 
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
          >
            <Icon name="Book" size={16} />
            <span>View FAQ</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingSection;