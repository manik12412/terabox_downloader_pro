import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingPreview = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Free",
      description: "Perfect for occasional downloads",
      price: { monthly: 0, yearly: 0 },
      popular: false,
      features: [
        "5 downloads per day",
        "Standard download speed",
        "Basic file format support",
        "Community support",
        "Mobile app access"
      ],
      limitations: [
        "Daily download limit",
        "No batch downloads",
        "No resume capability"
      ],
      cta: "Start Free",
      ctaVariant: "outline"
    },
    {
      name: "Pro",
      description: "For power users and professionals",
      price: { monthly: 9.99, yearly: 7.99 },
      popular: true,
      features: [
        "Unlimited downloads",
        "Maximum download speed",
        "Batch processing (50 files)",
        "Resume interrupted downloads",
        "All file formats",
        "Priority support",
        "Download history",
        "Mobile app premium features"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      ctaVariant: "default"
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: { monthly: 29.99, yearly: 24.99 },
      popular: false,
      features: [
        "Everything in Pro",
        "Team management",
        "API access",
        "Custom integrations",
        "Advanced analytics",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaVariant: "secondary"
    }
  ];

  const savingsPercentage = Math.round(((plans[1].price.monthly - plans[1].price.yearly) / plans[1].price.monthly) * 100);

  const formatPrice = (price) => {
    return price === 0 ? 'Free' : `$${price}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="CreditCard" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Choose Your Download Experience
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            Start free and upgrade when you need more power. All plans include our core speed optimization technology.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-text-primary' : 'text-text-secondary'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                billingCycle === 'yearly' ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`}></div>
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-text-primary' : 'text-text-secondary'}`}>
                Yearly
              </span>
              <span className="bg-success/10 text-success text-xs font-medium px-2 py-1 rounded-full">
                Save {savingsPercentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover:shadow-brand ${
              plan.popular ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-sm text-text-secondary mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-text-primary">
                        {formatPrice(plan.price[billingCycle])}
                      </span>
                      {plan.price[billingCycle] > 0 && (
                        <span className="text-text-secondary">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                      <p className="text-sm text-text-secondary mt-1">
                        ${plan.price.monthly}/mo billed monthly
                      </p>
                    )}
                  </div>

                  <Button
                    variant={plan.ctaVariant}
                    size="lg"
                    fullWidth
                    iconName={plan.name === 'Enterprise' ? 'Mail' : 'ArrowRight'}
                    iconPosition="right"
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-border">
                      <h5 className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-3">
                        Limitations
                      </h5>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start space-x-3">
                            <Icon name="X" size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-text-secondary">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
          <h3 className="text-xl font-bold text-text-primary text-center mb-8">
            Compare All Features
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-medium text-text-secondary">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-text-secondary">Free</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-text-secondary">Pro</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-text-secondary">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Daily Downloads", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
                  { feature: "Download Speed", free: "Standard", pro: "Maximum", enterprise: "Maximum" },
                  { feature: "Batch Downloads", free: "✗", pro: "50 files", enterprise: "Unlimited" },
                  { feature: "Resume Downloads", free: "✗", pro: "✓", enterprise: "✓" },
                  { feature: "API Access", free: "✗", pro: "✗", enterprise: "✓" },
                  { feature: "Team Management", free: "✗", pro: "✗", enterprise: "✓" },
                  { feature: "Support Level", free: "Community", pro: "Priority", enterprise: "Dedicated" }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 text-sm text-text-primary">{row.feature}</td>
                    <td className="py-4 px-4 text-sm text-center text-text-secondary">{row.free}</td>
                    <td className="py-4 px-4 text-sm text-center text-text-secondary">{row.pro}</td>
                    <td className="py-4 px-4 text-sm text-center text-text-secondary">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            Questions about our pricing? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/support-center">
              <Button variant="outline" iconName="MessageCircle" iconPosition="left">
                Contact Support
              </Button>
            </Link>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Shield" size={16} className="text-success" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;