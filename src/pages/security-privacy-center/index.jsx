import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import SecurityHero from './components/SecurityHero';
import PrivacyPrinciples from './components/PrivacyPrinciples';
import SecurityDashboard from './components/SecurityDashboard';
import ComplianceCertifications from './components/ComplianceCertifications';
import DataHandlingPolicy from './components/DataHandlingPolicy';
import TechnicalSecurity from './components/TechnicalSecurity';
import IncidentResponse from './components/IncidentResponse';

const SecurityPrivacyCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Security & Privacy Center - TeraBox Downloader Pro</title>
        <meta name="description" content="Comprehensive security and privacy information for TeraBox Downloader Pro. Learn about our encryption, data handling, compliance certifications, and privacy-first approach." />
        <meta name="keywords" content="security, privacy, encryption, GDPR, compliance, data protection, TeraBox downloader" />
        <meta property="og:title" content="Security & Privacy Center - TeraBox Downloader Pro" />
        <meta property="og:description" content="Your trust is our foundation. Discover how we protect your files with military-grade security and zero-storage policies." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://teraboxpro.com/security-privacy-center" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        <SecurityHero />
        <PrivacyPrinciples />
        <SecurityDashboard />
        <ComplianceCertifications />
        <DataHandlingPolicy />
        <TechnicalSecurity />
        <IncidentResponse />
      </main>

      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TB</span>
                </div>
                <div>
                  <div className="text-lg font-bold">TeraBox Downloader Pro</div>
                  <div className="text-sm text-gray-400">Security & Privacy First</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted partner for secure, fast, and reliable TeraBox file downloads. 
                Built with privacy as our foundation.
              </p>
              <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} TeraBox Downloader Pro. All rights reserved.
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Security</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Security Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Incident Reports</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>security@teraboxpro.com</li>
                <li>privacy@teraboxpro.com</li>
                <li>24/7 Security Hotline</li>
                <li>Emergency Response</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>🔒 256-bit Encryption</span>
              <span>🛡️ Zero Data Storage</span>
              <span>✅ GDPR Compliant</span>
              <span>🏆 SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecurityPrivacyCenter;