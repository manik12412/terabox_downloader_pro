import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Download Hub', path: '/download-hub', icon: 'Download' },
    { name: 'How It Works', path: '/how-it-works', icon: 'HelpCircle' },
    { name: 'Security & Privacy', path: '/security-privacy-center', icon: 'Shield' },
    { name: 'API Docs', path: '/api-documentation', icon: 'Code' },
    { name: 'Support', path: '/support-center', icon: 'MessageCircle' }
  ];

  const isActivePath = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Download" size={20} color="white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary leading-none">TeraBox</span>
              <span className="text-xs font-medium text-text-secondary leading-none">Downloader Pro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
              <span className="text-xs font-medium text-success">99.9% Uptime</span>
            </div>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 mt-4 border-t border-border space-y-3">
                <div className="flex items-center justify-center space-x-2 px-3 py-2 bg-success/10 rounded-full">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-slow"></div>
                  <span className="text-xs font-medium text-success">99.9% Uptime</span>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" fullWidth>
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live Activity Indicator */}
      <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-success/5 to-accent/5 border-b border-success/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2">
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-2">
                <Icon name="Activity" size={14} color="var(--color-success)" />
                <span className="text-success font-medium">Live: 1,247 downloads today</span>
              </div>
              <div className="w-1 h-1 bg-muted rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={14} color="var(--color-trust-builder)" />
                <span className="text-trust font-medium">Avg speed: 15.2 MB/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;