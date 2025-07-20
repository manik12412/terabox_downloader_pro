import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import DownloadInterface from './components/DownloadInterface';
import ProgressTracker from './components/ProgressTracker';
import RecentDownloads from './components/RecentDownloads';
import UsageAnalytics from './components/UsageAnalytics';
import QuickActions from './components/QuickActions';
import Icon from '../../components/AppIcon';

const DownloadHub = () => {
  return (
    <>
      <Helmet>
        <title>Download Hub - TeraBox Downloader Pro</title>
        <meta name="description" content="Fast, secure TeraBox file downloads with real-time progress tracking, batch processing, and premium features." />
        <meta name="keywords" content="terabox downloader, file download, cloud storage, batch download" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="Download" size={32} className="text-primary" />
                <h1 className="text-3xl lg:text-4xl font-bold text-text-primary">
                  Download Hub
                </h1>
              </div>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Transform your TeraBox links into instant downloads. Fast, secure, and reliable file access with real-time progress tracking.
              </p>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Downloads Today', value: '1,247', icon: 'Download', color: 'text-primary' },
                { label: 'Success Rate', value: '99.2%', icon: 'CheckCircle', color: 'text-success' },
                { label: 'Avg Speed', value: '15.2 MB/s', icon: 'Zap', color: 'text-warning' },
                { label: 'Active Users', value: '8,934', icon: 'Users', color: 'text-secondary' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg border border-border p-4 text-center">
                  <Icon name={stat.icon} size={24} className={`${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Interface */}
              <div className="lg:col-span-2 space-y-8">
                <DownloadInterface />
                <ProgressTracker />
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-8">
                <UsageAnalytics />
                <RecentDownloads />
                <QuickActions />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                Why Choose Our Download Hub?
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Experience the fastest and most reliable way to download your TeraBox files with advanced features and security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Zap',
                  title: 'Lightning Fast',
                  description: 'Download speeds up to 50 MB/s with our optimized servers and CDN network.',
                  color: 'text-warning'
                },
                {
                  icon: 'Shield',
                  title: 'Secure & Private',
                  description: 'End-to-end encryption with automatic file deletion after 24 hours.',
                  color: 'text-success'
                },
                {
                  icon: 'List',
                  title: 'Batch Processing',
                  description: 'Download multiple files simultaneously with intelligent queue management.',
                  color: 'text-primary'
                },
                {
                  icon: 'Smartphone',
                  title: 'Mobile Optimized',
                  description: 'Native mobile apps with background downloads and push notifications.',
                  color: 'text-secondary'
                },
                {
                  icon: 'RotateCcw',
                  title: 'Resume Downloads',
                  description: 'Automatic resume for interrupted downloads with progress preservation.',
                  color: 'text-accent'
                },
                {
                  icon: 'Headphones',
                  title: '24/7 Support',
                  description: 'Round-the-clock customer support with live chat and video tutorials.',
                  color: 'text-trust-builder'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-muted/30 flex items-center justify-center mb-4`}>
                    <Icon name={feature.icon} size={24} className={feature.color} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon name="Zap" size={48} color="white" className="mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready for Unlimited Downloads?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Upgrade to Premium for unlimited downloads, faster speeds, priority support, and advanced features.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200 flex items-center space-x-2">
                <Icon name="Crown" size={20} />
                <span>Upgrade to Premium</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Download" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-lg font-bold">TeraBox Downloader Pro</div>
                    <div className="text-sm opacity-80">Your files, instantly accessible</div>
                  </div>
                </div>
                <p className="text-white/80 mb-4 max-w-md">
                  The fastest and most reliable way to download your TeraBox files. Trusted by millions of users worldwide.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} />
                    <span className="text-sm">SSL Secured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">99.9% Uptime</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a href="/how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="/api-documentation" className="hover:text-white transition-colors">API Docs</a></li>
                  <li><a href="/security-privacy-center" className="hover:text-white transition-colors">Security</a></li>
                  <li><a href="/support-center" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center space-x-2">
                    <Icon name="Mail" size={14} />
                    <span>support@teraboxpro.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="MessageCircle" size={14} />
                    <span>Live Chat 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} />
                    <span>Response within 1 hour</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} TeraBox Downloader Pro. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">DMCA</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DownloadHub;