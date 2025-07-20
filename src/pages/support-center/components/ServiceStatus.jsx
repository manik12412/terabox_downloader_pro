import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceStatus = () => {
  const currentStatus = {
    overall: "operational",
    lastUpdated: new Date(Date.now() - 300000), // 5 minutes ago
    uptime: "99.98%"
  };

  const services = [
    {
      name: "Download Service",
      status: "operational",
      description: "Core file download functionality",
      uptime: "99.99%",
      responseTime: "145ms"
    },
    {
      name: "API Endpoints",
      status: "operational",
      description: "Developer API and integration services",
      uptime: "99.97%",
      responseTime: "89ms"
    },
    {
      name: "Mobile App",
      status: "operational",
      description: "iOS and Android mobile applications",
      uptime: "99.95%",
      responseTime: "201ms"
    },
    {
      name: "Premium Features",
      status: "operational",
      description: "Batch downloads and premium functionality",
      uptime: "99.98%",
      responseTime: "156ms"
    },
    {
      name: "Support System",
      status: "operational",
      description: "Live chat and ticket support",
      uptime: "99.92%",
      responseTime: "312ms"
    },
    {
      name: "Payment Processing",
      status: "maintenance",
      description: "Subscription and billing services",
      uptime: "99.89%",
      responseTime: "445ms"
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      title: "Scheduled Maintenance - Payment System",
      description: "Routine maintenance on payment processing infrastructure",
      status: "in-progress",
      severity: "low",
      startTime: new Date(Date.now() - 1800000), // 30 minutes ago
      estimatedEnd: new Date(Date.now() + 1800000), // 30 minutes from now
      affectedServices: ["Payment Processing"]
    },
    {
      id: 2,
      title: "Download Speed Optimization Complete",
      description: "Successfully upgraded download servers for improved performance",
      status: "resolved",
      severity: "low",
      startTime: new Date(Date.now() - 86400000), // 1 day ago
      endTime: new Date(Date.now() - 82800000), // 23 hours ago
      affectedServices: ["Download Service"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational':
        return 'text-success';
      case 'maintenance':
        return 'text-warning';
      case 'degraded':
        return 'text-warning';
      case 'outage':
        return 'text-error';
      default:
        return 'text-text-secondary';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'operational':
        return 'bg-success';
      case 'maintenance':
        return 'bg-warning';
      case 'degraded':
        return 'bg-warning';
      case 'outage':
        return 'bg-error';
      default:
        return 'bg-text-secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return 'CheckCircle';
      case 'maintenance':
        return 'Settings';
      case 'degraded':
        return 'AlertTriangle';
      case 'outage':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low':
        return 'text-success';
      case 'medium':
        return 'text-warning';
      case 'high':
        return 'text-error';
      case 'critical':
        return 'text-error';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Service Status
        </h2>
        <p className="text-text-secondary">
          Real-time status of all our services
        </p>
      </div>

      {/* Overall Status */}
      <div className="bg-white rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${getStatusBg(currentStatus.overall)}`}></div>
            <h3 className="text-lg font-semibold text-text-primary">
              All Systems Operational
            </h3>
          </div>
          <div className="text-right">
            <div className="text-sm text-text-secondary">
              Last updated: {currentStatus.lastUpdated.toLocaleTimeString()}
            </div>
            <div className="text-sm font-medium text-success">
              {currentStatus.uptime} uptime
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-success/5 rounded-lg">
            <div className="text-2xl font-bold text-success mb-1">99.98%</div>
            <div className="text-sm text-text-secondary">30-day uptime</div>
          </div>
          <div className="text-center p-4 bg-primary/5 rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">156ms</div>
            <div className="text-sm text-text-secondary">Avg response time</div>
          </div>
          <div className="text-center p-4 bg-accent/5 rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">1.2M+</div>
            <div className="text-sm text-text-secondary">Downloads today</div>
          </div>
        </div>
      </div>

      {/* Individual Services */}
      <div className="bg-white rounded-xl border border-border p-6 mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Service Components
        </h3>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <Icon
                  name={getStatusIcon(service.status)}
                  size={20}
                  className={getStatusColor(service.status)}
                />
                <div>
                  <div className="font-medium text-text-primary">
                    {service.name}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {service.description}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`text-sm font-medium capitalize ${getStatusColor(service.status)}`}>
                  {service.status}
                </div>
                <div className="text-xs text-text-secondary">
                  {service.uptime} uptime • {service.responseTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="bg-white rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Recent Incidents
        </h3>
        
        {recentIncidents.length > 0 ? (
          <div className="space-y-4">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      incident.status === 'resolved' ? 'bg-success' :
                      incident.status === 'in-progress' ? 'bg-warning' : 'bg-error'
                    }`}></div>
                    <h4 className="font-medium text-text-primary">
                      {incident.title}
                    </h4>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getSeverityColor(incident.severity)} bg-current/10`}>
                    {incident.severity}
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-3 ml-5">
                  {incident.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-text-secondary ml-5">
                  <div className="flex items-center space-x-4">
                    <span>
                      Started: {incident.startTime.toLocaleString()}
                    </span>
                    {incident.endTime && (
                      <span>
                        Resolved: {incident.endTime.toLocaleString()}
                      </span>
                    )}
                    {incident.estimatedEnd && !incident.endTime && (
                      <span>
                        Est. completion: {incident.estimatedEnd.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Affected:</span>
                    <span className="font-medium">
                      {incident.affectedServices.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-4" />
            <h4 className="font-medium text-text-primary mb-2">
              No Recent Incidents
            </h4>
            <p className="text-text-secondary">
              All systems have been running smoothly
            </p>
          </div>
        )}
      </div>

      {/* Subscribe to Updates */}
      <div className="mt-6 text-center">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Stay Updated
          </h3>
          <p className="text-text-secondary mb-4">
            Subscribe to status updates and get notified of any incidents
          </p>
          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
            <Icon name="Bell" size={16} />
            <span>Subscribe to Updates</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceStatus;