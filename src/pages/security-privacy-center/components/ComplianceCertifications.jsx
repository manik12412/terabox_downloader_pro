import React from 'react';
import Icon from '../../../components/AppIcon';


const ComplianceCertifications = () => {
  const certifications = [
    {
      name: "GDPR Compliance",
      description: "Full compliance with European General Data Protection Regulation",
      status: "Certified",
      validUntil: "Ongoing",
      icon: "Shield",
      details: [
        "Right to data portability",
        "Right to be forgotten",
        "Data minimization principles",
        "Consent management"
      ]
    },
    {
      name: "CCPA Compliance",
      description: "California Consumer Privacy Act compliance certification",
      status: "Certified",
      validUntil: "Ongoing",
      icon: "FileCheck",
      details: [
        "Consumer rights protection",
        "Data transparency requirements",
        "Opt-out mechanisms",
        "Non-discrimination policies"
      ]
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 security audit certification",
      status: "Certified",
      validUntil: "March 2026",
      icon: "Award",
      details: [
        "Security controls audit",
        "Availability monitoring",
        "Processing integrity",
        "Confidentiality measures"
      ]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      status: "Certified",
      validUntil: "September 2025",
      icon: "Globe",
      details: [
        "Information security management",
        "Risk assessment procedures",
        "Security incident management",
        "Continuous improvement"
      ]
    }
  ];

  const auditReports = [
    {
      title: "Q2 2025 Security Audit",
      date: "June 15, 2025",
      auditor: "CyberSec Solutions",
      score: "100%",
      status: "Passed",
      findings: "0 Critical Issues"
    },
    {
      title: "Penetration Testing Report",
      date: "May 20, 2025",
      auditor: "WhiteHat Security",
      score: "A+",
      status: "Passed",
      findings: "No Vulnerabilities"
    },
    {
      title: "Privacy Impact Assessment",
      date: "April 10, 2025",
      auditor: "Privacy Experts Ltd",
      score: "Excellent",
      status: "Approved",
      findings: "Full Compliance"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Compliance & Certifications
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Independently verified security and privacy standards that you can trust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="card-elevated p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                    <Icon name={cert.icon} size={24} color="var(--color-success)" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-text-secondary">{cert.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" />
                  <span className="text-success font-medium text-sm">{cert.status}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-text-secondary">Valid Until:</span>
                  <span className="font-medium text-text-primary">{cert.validUntil}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-text-primary mb-3">Key Requirements:</h4>
                {cert.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} color="var(--color-success)" />
                    <span className="text-sm text-text-secondary">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="card-elevated p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Icon name="FileText" size={24} color="var(--color-primary)" />
            <h3 className="text-2xl font-semibold text-text-primary">Recent Audit Reports</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {auditReports.map((report, index) => (
              <div key={index} className="p-6 bg-surface rounded-lg border border-border hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-text-primary">{report.title}</h4>
                  <div className="flex items-center space-x-1 px-2 py-1 bg-success/10 rounded-full">
                    <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                    <span className="text-xs text-success font-medium">{report.status}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Date:</span>
                    <span className="font-medium text-text-primary">{report.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Auditor:</span>
                    <span className="font-medium text-text-primary">{report.auditor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Score:</span>
                    <span className="font-bold text-success">{report.score}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Findings:</span>
                    <span className="font-medium text-success">{report.findings}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 transition-colors duration-200">
                    <span>View Full Report</span>
                    <Icon name="ExternalLink" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <Icon name="Download" size={20} color="var(--color-primary)" />
              <span className="text-primary font-medium">Download All Compliance Documents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCertifications;