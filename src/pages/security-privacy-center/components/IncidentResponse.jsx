import React from 'react';
import Icon from '../../../components/AppIcon';

const IncidentResponse = () => {
  const responsePhases = [
    {
      phase: "Detection",
      duration: "< 30 seconds",
      description: "Automated monitoring systems detect potential security incidents",
      actions: [
        "Real-time threat monitoring",
        "Anomaly detection algorithms",
        "User behavior analysis",
        "System health checks"
      ],
      icon: "Search"
    },
    {
      phase: "Assessment",
      duration: "< 2 minutes",
      description: "Security team evaluates the severity and scope of the incident",
      actions: [
        "Threat classification",
        "Impact assessment",
        "Affected systems identification",
        "Risk level determination"
      ],
      icon: "AlertTriangle"
    },
    {
      phase: "Containment",
      duration: "< 5 minutes",
      description: "Immediate actions to prevent further damage or data exposure",
      actions: [
        "Isolate affected systems",
        "Block malicious traffic",
        "Preserve evidence",
        "Activate backup systems"
      ],
      icon: "Shield"
    },
    {
      phase: "Resolution",
      duration: "< 30 minutes",
      description: "Eliminate the threat and restore normal operations",
      actions: [
        "Remove malicious code",
        "Patch vulnerabilities",
        "Restore from backups",
        "Verify system integrity"
      ],
      icon: "CheckCircle"
    },
    {
      phase: "Recovery",
      duration: "< 1 hour",
      description: "Full service restoration with enhanced monitoring",
      actions: [
        "Gradual service restoration",
        "Enhanced monitoring",
        "Performance validation",
        "User communication"
      ],
      icon: "RefreshCw"
    },
    {
      phase: "Review",
      duration: "24-48 hours",
      description: "Post-incident analysis and improvement implementation",
      actions: [
        "Root cause analysis",
        "Process improvements",
        "Security enhancements",
        "Documentation updates"
      ],
      icon: "FileText"
    }
  ];

  const emergencyContacts = [
    {
      role: "Security Operations Center",
      contact: "security@teraboxpro.com",
      availability: "24/7",
      response: "< 15 minutes",
      icon: "Shield"
    },
    {
      role: "Incident Response Team",
      contact: "incident@teraboxpro.com",
      availability: "24/7",
      response: "< 30 minutes",
      icon: "AlertCircle"
    },
    {
      role: "Privacy Officer",
      contact: "privacy@teraboxpro.com",
      availability: "Business Hours",
      response: "< 4 hours",
      icon: "User"
    },
    {
      role: "Executive Escalation",
      contact: "executive@teraboxpro.com",
      availability: "Critical Issues",
      response: "< 1 hour",
      icon: "Crown"
    }
  ];

  const recentIncidents = [
    {
      date: "June 15, 2025",
      type: "DDoS Attempt",
      severity: "Low",
      status: "Resolved",
      duration: "3 minutes",
      impact: "No service disruption",
      response: "Automatic mitigation activated, traffic filtered successfully"
    },
    {
      date: "May 8, 2025",
      type: "Suspicious Login",
      severity: "Medium",
      status: "Resolved",
      duration: "12 minutes",
      impact: "Single user account",
      response: "Account secured, user notified, additional verification implemented"
    },
    {
      date: "April 22, 2025",
      type: "Certificate Renewal",
      severity: "Low",
      status: "Resolved",
      duration: "5 minutes",
      impact: "Brief SSL warning",
      response: "Automatic certificate renewal, no data exposure"
    }
  ];

  return (
    <section className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Incident Response & Recovery
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our comprehensive incident response plan ensures rapid detection, containment, 
            and resolution of any security issues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {responsePhases.map((phase, index) => (
            <div key={index} className="card-elevated p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={phase.icon} size={20} color="var(--color-primary)" />
                </div>
                <div className="text-xs font-medium text-success px-2 py-1 bg-success/10 rounded-full">
                  {phase.duration}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Phase {index + 1}: {phase.phase}
              </h3>
              <p className="text-text-secondary mb-4">{phase.description}</p>
              
              <ul className="space-y-2">
                {phase.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span className="text-text-secondary">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="card-elevated p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Phone" size={24} color="var(--color-primary)" />
              <h3 className="text-xl font-semibold text-text-primary">Emergency Contacts</h3>
            </div>
            
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-4 bg-surface rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Icon name={contact.icon} size={18} color="var(--color-primary)" />
                      <span className="font-medium text-text-primary">{contact.role}</span>
                    </div>
                    <span className="text-xs font-medium text-success px-2 py-1 bg-success/10 rounded-full">
                      {contact.response}
                    </span>
                  </div>
                  <div className="text-sm text-text-secondary mb-1">{contact.contact}</div>
                  <div className="text-xs text-text-secondary">{contact.availability}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="AlertTriangle" size={18} color="var(--color-warning)" />
                <span className="font-medium text-warning">Critical Security Issues</span>
              </div>
              <p className="text-sm text-text-secondary">
                For immediate security concerns, contact our SOC directly. 
                All reports are investigated within 15 minutes.
              </p>
            </div>
          </div>
          
          <div className="card-elevated p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Clock" size={24} color="var(--color-primary)" />
              <h3 className="text-xl font-semibold text-text-primary">Recent Incidents</h3>
            </div>
            
            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <div key={index} className="p-4 bg-surface rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-text-primary">{incident.type}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        incident.severity === 'Low' ? 'bg-success/10 text-success' :
                        incident.severity === 'Medium'? 'bg-warning/10 text-warning' : 'bg-destructive/10 text-destructive'
                      }`}>
                        {incident.severity}
                      </span>
                      <span className="text-xs font-medium text-success px-2 py-1 bg-success/10 rounded-full">
                        {incident.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-text-secondary mb-2">
                    {incident.date} • Duration: {incident.duration}
                  </div>
                  <div className="text-sm text-text-secondary mb-2">
                    Impact: {incident.impact}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Response: {incident.response}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 mx-auto transition-colors duration-200">
                <span>View Full Incident History</span>
                <Icon name="ExternalLink" size={14} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="card-elevated p-8 bg-gradient-to-r from-success/5 to-accent/5 border border-success/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-success to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Proactive Security Monitoring
            </h3>
            <p className="text-text-secondary max-w-3xl mx-auto mb-6">
              Our security team monitors systems 24/7 using advanced AI and machine learning 
              to detect and prevent incidents before they impact our users. Most threats are 
              neutralized automatically without any service disruption.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">99.97%</div>
                <div className="text-sm text-text-secondary">Threats Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">&lt; 30s</div>
                <div className="text-sm text-text-secondary">Average Detection Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">0</div>
                <div className="text-sm text-text-secondary">Successful Breaches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncidentResponse;