import React from 'react';
import Icon from '../../../components/AppIcon';


const QuickHelpCards = ({ onCategorySelect }) => {
  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of using TeraBox Downloader Pro',
      icon: 'PlayCircle',
      color: 'from-blue-500 to-blue-600',
      articles: 12,
      popular: true
    },
    {
      id: 'download-issues',
      title: 'Download Issues',
      description: 'Troubleshoot common download problems',
      icon: 'Download',
      color: 'from-red-500 to-red-600',
      articles: 18,
      urgent: true
    },
    {
      id: 'account-billing',
      title: 'Account & Billing',
      description: 'Manage your account and subscription',
      icon: 'CreditCard',
      color: 'from-green-500 to-green-600',
      articles: 15
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      description: 'Setup and use our mobile application',
      icon: 'Smartphone',
      color: 'from-purple-500 to-purple-600',
      articles: 9
    },
    {
      id: 'api-integration',
      title: 'API & Integration',
      description: 'Developer resources and API documentation',
      icon: 'Code',
      color: 'from-indigo-500 to-indigo-600',
      articles: 22
    },
    {
      id: 'security-privacy',
      title: 'Security & Privacy',
      description: 'Learn about our security measures',
      icon: 'Shield',
      color: 'from-orange-500 to-orange-600',
      articles: 8
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Browse Help Categories
        </h2>
        <p className="text-text-secondary">
          Find answers organized by topic
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpCategories.map((category) => (
          <div
            key={category.id}
            className="group relative bg-white rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden"
            onClick={() => onCategorySelect(category)}
          >
            {/* Background Gradient */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>
            
            {/* Badge */}
            {(category.popular || category.urgent) && (
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  category.popular 
                    ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                }`}>
                  {category.popular ? 'Popular' : 'Urgent'}
                </span>
              </div>
            )}

            <div className="p-6">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={category.icon} size={24} color="white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                {category.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {category.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">
                  {category.articles} articles
                </span>
                <Icon 
                  name="ArrowRight" 
                  size={16} 
                  className="text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickHelpCards;