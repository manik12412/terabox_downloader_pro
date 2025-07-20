import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      category: "General",
      faqs: [
        {
          id: 1,
          question: "What is TeraBox Downloader Pro?",
          answer: `TeraBox Downloader Pro is a specialized service that transforms the frustrating experience of retrieving files from TeraBox into a seamless, fast, and user-friendly process.\n\nOur platform acts as a bridge between you and your cloud-stored content, eliminating the typical limitations and speed restrictions you might encounter when downloading directly from TeraBox.\n\nWe support all file types and sizes, with premium features including batch downloads, faster speeds, and priority processing.`
        },
        {
          id: 2,
          question: "Is it safe to use TeraBox Downloader Pro?",
          answer: `Yes, absolutely. We prioritize your security and privacy above everything else.\n\n• End-to-end encryption for all file transfers\n• No file storage on our servers - direct download to your device\n• SOC 2 Type II certified infrastructure\n• GDPR and CCPA compliant data handling\n• Regular security audits by third-party firms\n\nYour files are processed securely and deleted from our temporary processing cache within 24 hours.`
        },
        {
          id: 3,
          question: "How fast are the downloads?",
          answer: `Download speeds depend on several factors:\n\n• Free users: Up to 5 MB/s average speed\n• Premium users: Up to 50 MB/s with priority servers\n• Enterprise users: Dedicated bandwidth up to 100 MB/s\n\nActual speeds may vary based on your internet connection, file size, and server load. Our global CDN ensures optimal performance worldwide.`
        }
      ]
    },
    {
      category: "Account & Billing",
      faqs: [
        {
          id: 4,
          question: "What are the differences between Free and Premium?",
          answer: `Free Account:\n• 3 downloads per day\n• Standard speed (up to 5 MB/s)\n• Files up to 500MB\n• Basic support\n\nPremium Account ($9.99/month):\n• Unlimited downloads\n• High-speed downloads (up to 50 MB/s)\n• Files up to 5GB\n• Batch download support\n• Priority customer support\n• No ads\n• Download history and management`
        },
        {
          id: 5,
          question: "How do I cancel my subscription?",
          answer: `You can cancel your subscription at any time:\n\n1. Log into your account dashboard\n2. Go to 'Billing & Subscription'\n3. Click 'Cancel Subscription'\n4. Follow the confirmation steps\n\nYour premium features will remain active until the end of your current billing period. No cancellation fees apply.`
        }
      ]
    },
    {
      category: "Technical Issues",
      faqs: [
        {
          id: 6,
          question: "Why is my download failing?",
          answer: `Common reasons for download failures:\n\n• Invalid or expired TeraBox link\n• File has been deleted from TeraBox\n• Network connectivity issues\n• Browser blocking the download\n• Insufficient storage space\n\nTroubleshooting steps:\n1. Verify the TeraBox link is valid and accessible\n2. Check your internet connection\n3. Clear browser cache and cookies\n4. Try using a different browser\n5. Ensure you have enough storage space\n\nIf issues persist, contact our support team with the specific error message.`
        },
        {
          id: 7,
          question: "Can I download multiple files at once?",
          answer: `Batch downloading is available for Premium users:\n\n• Add multiple TeraBox links (up to 10 at once)\n• Queue management with pause/resume functionality\n• Automatic retry for failed downloads\n• Progress tracking for each file\n\nFree users can download one file at a time. Upgrade to Premium to unlock batch download capabilities.`
        }
      ]
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-text-secondary">
          Quick answers to common questions
        </p>
      </div>

      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-xl border border-border p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              {category.category}
            </h3>
            
            <div className="space-y-3">
              {category.faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                  >
                    <span className="font-medium text-text-primary pr-4">
                      {faq.question}
                    </span>
                    <Icon
                      name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      className="text-text-secondary flex-shrink-0"
                    />
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-4 pb-4 border-t border-border bg-muted/20">
                      <div className="pt-4 text-text-secondary whitespace-pre-line leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Support CTA */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Still need help?
          </h3>
          <p className="text-text-secondary mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="MessageCircle" size={16} />
              <span>Start Live Chat</span>
            </button>
            <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="Mail" size={16} />
              <span>Email Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;