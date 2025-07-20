import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import HelpSearchBar from './components/HelpSearchBar';
import QuickHelpCards from './components/QuickHelpCards';
import FAQSection from './components/FAQSection';
import VideoTutorials from './components/VideoTutorials';
import ServiceStatus from './components/ServiceStatus';
import ContactSupport from './components/ContactSupport';
import LiveChatWidget from './components/LiveChatWidget';

const SupportCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
    { id: 'tutorials', label: 'Video Tutorials', icon: 'Video' },
    { id: 'status', label: 'Service Status', icon: 'Activity' },
    { id: 'contact', label: 'Contact Support', icon: 'MessageCircle' }
  ];

  const handleSearch = async (query) => {
    setIsSearching(true);
    
    // Simulate search API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock search results
    const mockResults = [
      {
        id: 1,
        title: "How to download files from TeraBox",
        excerpt: "Step-by-step guide to downloading files using our platform...",
        category: "Getting Started",
        type: "article"
      },
      {
        id: 2,
        title: "Download speed optimization",
        excerpt: "Tips to improve your download speeds and troubleshoot slow downloads...",
        category: "Troubleshooting",
        type: "article"
      },
      {
        id: 3,
        title: "Premium features overview",
        excerpt: "Learn about all the premium features available with your subscription...",
        category: "Premium",
        type: "video"
      }
    ].filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(mockResults);
    setIsSearching(false);
  };

  const handleCategorySelect = (category) => {
    // Handle category selection - could filter content or navigate
    console.log('Selected category:', category);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            <HelpSearchBar 
              onSearch={handleSearch}
              searchResults={searchResults}
              isSearching={isSearching}
            />
            <QuickHelpCards onCategorySelect={handleCategorySelect} />
            
            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  Support Statistics
                </h2>
                <p className="text-text-secondary">
                  Our commitment to helping you succeed
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Clock" size={24} className="text-success" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">2.3 min</div>
                  <div className="text-sm text-text-secondary">Avg Response Time</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">98.5%</div>
                  <div className="text-sm text-text-secondary">Satisfaction Rate</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageCircle" size={24} className="text-warning" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">24/7</div>
                  <div className="text-sm text-text-secondary">Live Chat Support</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="BookOpen" size={24} className="text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary mb-1">150+</div>
                  <div className="text-sm text-text-secondary">Help Articles</div>
                </div>
              </div>
            </div>

            {/* Search Results */}
            {searchResults && (
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Search Results
                </h3>
                {searchResults.length > 0 ? (
                  <div className="space-y-4">
                    {searchResults.map((result) => (
                      <div key={result.id} className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors duration-200 cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Icon 
                                name={result.type === 'video' ? 'Video' : 'FileText'} 
                                size={16} 
                                className="text-primary" 
                              />
                              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                {result.category}
                              </span>
                            </div>
                            <h4 className="font-medium text-text-primary mb-1">
                              {result.title}
                            </h4>
                            <p className="text-text-secondary text-sm">
                              {result.excerpt}
                            </p>
                          </div>
                          <Icon name="ArrowRight" size={16} className="text-text-secondary ml-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h4 className="font-medium text-text-primary mb-2">
                      No results found
                    </h4>
                    <p className="text-text-secondary">
                      Try searching with different keywords or browse our help categories
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      case 'faq':
        return <FAQSection />;
      case 'tutorials':
        return <VideoTutorials />;
      case 'status':
        return <ServiceStatus />;
      case 'contact':
        return <ContactSupport />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="HelpCircle" size={24} color="white" />
              </div>
              <h1 className="text-4xl font-bold text-text-primary">
                Support Center
              </h1>
            </div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Get the help you need to make the most of TeraBox Downloader Pro. 
              Find answers, watch tutorials, and connect with our support team.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary hover:border-primary/30'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderTabContent()}
      </main>

      {/* Live Chat Widget */}
      <LiveChatWidget isOpen={isChatOpen} onToggle={toggleChat} />

      {/* Footer */}
      <footer className="bg-text-primary text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Download" size={20} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-lg font-bold">TeraBox Downloader Pro</div>
                  <div className="text-sm text-white/70">Your files, instantly accessible</div>
                </div>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                Transform your TeraBox experience with our fast, secure, and reliable download service. 
                Get your files when you need them, how you need them.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                  <span className="text-sm text-success">Service Online</span>
                </div>
                <div className="text-sm text-white/70">
                  99.9% Uptime
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Getting Started</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Premium Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Mobile App</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Service Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Community Forum</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} TeraBox Downloader Pro. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SupportCenter;