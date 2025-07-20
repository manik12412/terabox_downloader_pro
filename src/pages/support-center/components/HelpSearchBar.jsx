import React, { useState } from 'react';

import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const HelpSearchBar = ({ onSearch, searchResults, isSearching }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const popularSearches = [
    "Download speed slow",
    "File not downloading",
    "Premium features",
    "Mobile app setup",
    "API integration",
    "Account issues"
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          How can we help you today?
        </h2>
        <p className="text-text-secondary mb-6">
          Search our knowledge base or browse popular topics below
        </p>
        
        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-base"
            />
          </div>
          <Button 
            type="submit" 
            variant="default" 
            iconName="Search" 
            iconPosition="left"
            loading={isSearching}
          >
            Search
          </Button>
        </form>

        {/* Popular Searches */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="text-sm text-text-secondary mr-2">Popular:</span>
          {popularSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchQuery(search);
                onSearch(search);
              }}
              className="text-sm px-3 py-1 bg-white/60 hover:bg-white/80 rounded-full text-primary hover:text-primary/80 transition-all duration-200 border border-primary/20"
            >
              {search}
            </button>
          ))}
        </div>

        {/* Search Results Count */}
        {searchResults && (
          <div className="mt-4 text-sm text-text-secondary">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpSearchBar;