import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const QuickFAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Is it safe to use this service with my TeraBox files?",
      answer: "Absolutely. We never store your files or login credentials. Our service acts as a bridge between you and TeraBox, processing only the public share links you provide. All downloads are direct from TeraBox servers to your device.",
      category: "Security"
    },
    {
      id: 2,
      question: "Why are downloads faster than using TeraBox directly?",
      answer: "We use optimized routing, multiple server locations, and advanced compression techniques. Our premium CDN network ensures the fastest possible connection between TeraBox servers and your device, bypassing common bottlenecks.",
      category: "Performance"
    },
    {
      id: 3,
      question: "What file formats and sizes are supported?",
      answer: "We support all file types that TeraBox allows for sharing. File size limits depend on your plan: Free users can download files up to 2GB, Premium users up to 50GB, and Enterprise users have no limits.",
      category: "Compatibility"
    },
    {
      id: 4,
      question: "Do I need to install any software?",
      answer: "No installation required! Our service works entirely through your web browser. For mobile users, we offer optional apps for iOS and Android that provide additional features like background downloads and notifications.",
      category: "Usage"
    },
    {
      id: 5,
      question: "What happens if a download fails?",
      answer: "Our system automatically retries failed downloads up to 3 times. Premium users get priority retry processing and can resume interrupted downloads. We also provide detailed error logs to help troubleshoot issues.",
      category: "Reliability"
    },
    {
      id: 6,
      question: "Can I download multiple files at once?",
      answer: "Yes! Free users can queue up to 3 files simultaneously. Premium users can process up to 10 concurrent downloads, and Enterprise users have unlimited concurrent processing with priority queuing.",
      category: "Features"
    },
    {
      id: 7,
      question: "How do you handle privacy and data protection?",
      answer: "We follow strict privacy policies and comply with GDPR, CCPA, and other data protection regulations. We never log file contents, only process metadata necessary for downloads, and automatically delete all processing data after 24 hours.",
      category: "Privacy"
    },
    {
      id: 8,
      question: "Is there an API for developers?",
      answer: "Yes! We offer a comprehensive REST API for developers and businesses. The API includes endpoints for single downloads, batch processing, status monitoring, and webhook notifications. Full documentation and SDKs are available.",
      category: "Development"
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Frequently Asked Questions</h3>
        <p className="text-text-secondary">Quick answers to common questions about our service</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map((category) => (
          <span 
            key={category}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
          >
            {category}
          </span>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {faqData.map((item) => (
          <div key={item.id} className="border border-border rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggleQuestion(item.id)}
              className="w-full p-4 text-left hover:bg-muted/30 transition-colors flex items-center justify-between"
            >
              <div className="flex items-start space-x-3 flex-1">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="HelpCircle" size={16} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-text-primary text-left">{item.question}</h4>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-muted text-text-secondary text-xs rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              <Icon 
                name={activeQuestion === item.id ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                color="var(--color-text-secondary)"
                className="flex-shrink-0 ml-2"
              />
            </button>

            {activeQuestion === item.id && (
              <div className="p-4 pt-0 border-t border-border bg-muted/20">
                <div className="pl-11">
                  <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* More Help */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20 text-center">
        <Icon name="MessageSquare" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
        <h4 className="font-semibold text-text-primary mb-2">Need More Help?</h4>
        <p className="text-text-secondary mb-4">
          Can't find what you're looking for? Our comprehensive support center has detailed guides and live chat support.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="/support-center" 
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="ExternalLink" size={16} />
            <span>Visit Support Center</span>
          </a>
          <a 
            href="/support-center" 
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
          >
            <Icon name="MessageCircle" size={16} />
            <span>Live Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickFAQ;