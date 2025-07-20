import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RateLimitsSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('free');

  const plans = [
    {
      id: 'free',
      name: 'Free Tier',
      price: '$0',
      period: '/month',
      limits: {
        requests: '100',
        downloads: '10',
        bandwidth: '1 GB',
        concurrent: '1',
        burst: '5'
      },
      features: [
        'Basic API access',
        'Standard support',
        'Community forum',
        'Basic documentation'
      ],
      color: 'text-text-secondary',
      bgColor: 'bg-muted'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      period: '/month',
      limits: {
        requests: '10,000',
        downloads: '1,000',
        bandwidth: '100 GB',
        concurrent: '10',
        burst: '50'
      },
      features: [
        'Priority API access',
        'Email support',
        'Webhook notifications',
        'Advanced analytics',
        'Custom rate limits'
      ],
      color: 'text-primary',
      bgColor: 'bg-primary',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      limits: {
        requests: 'Unlimited',
        downloads: 'Unlimited',
        bandwidth: 'Unlimited',
        concurrent: '100',
        burst: '500'
      },
      features: [
        'Dedicated infrastructure',
        '24/7 phone support',
        'Custom integrations',
        'SLA guarantees',
        'White-label options',
        'Dedicated account manager'
      ],
      color: 'text-trust-builder',
      bgColor: 'bg-trust-builder'
    }
  ];

  const rateLimitHeaders = [
    {
      header: 'X-RateLimit-Limit',
      description: 'The maximum number of requests allowed per hour',
      example: '1000'
    },
    {
      header: 'X-RateLimit-Remaining',
      description: 'Number of requests remaining in current window',
      example: '847'
    },
    {
      header: 'X-RateLimit-Reset',
      description: 'Unix timestamp when the rate limit resets',
      example: '1642694400'
    },
    {
      header: 'X-RateLimit-Retry-After',
      description: 'Seconds to wait before making another request (when limited)',
      example: '3600'
    }
  ];

  const errorResponses = [
    {
      code: '429',
      title: 'Too Many Requests',
      description: 'Rate limit exceeded',
      response: `{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Try again in 3600 seconds.",
    "retry_after": 3600,
    "limit": 1000,
    "remaining": 0,
    "reset_at": "2025-07-20T08:29:17Z"
  }
}`
    },
    {
      code: '503',
      title: 'Service Unavailable',
      description: 'Temporary overload or maintenance',
      response: `{
  "error": {
    "code": "SERVICE_UNAVAILABLE",
    "message": "Service temporarily unavailable. Please try again later.",
    "retry_after": 300,
    "maintenance": false
  }
}`
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-warning to-destructive rounded-lg flex items-center justify-center">
          <Icon name="Gauge" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">Rate Limits & Quotas</h2>
          <p className="text-sm text-text-secondary">Understand API usage limits and upgrade options</p>
        </div>
      </div>

      {/* Plan Comparison */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
              selectedPlan === plan.id
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/30'
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-text-primary mb-1">{plan.name}</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold text-text-primary">{plan.price}</span>
                <span className="text-sm text-text-secondary ml-1">{plan.period}</span>
              </div>
            </div>

            {/* Limits */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">API Requests/hour</span>
                <span className="font-semibold text-text-primary">{plan.limits.requests}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Downloads/day</span>
                <span className="font-semibold text-text-primary">{plan.limits.downloads}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Bandwidth/month</span>
                <span className="font-semibold text-text-primary">{plan.limits.bandwidth}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Concurrent requests</span>
                <span className="font-semibold text-text-primary">{plan.limits.concurrent}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">Burst limit</span>
                <span className="font-semibold text-text-primary">{plan.limits.burst}</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant={plan.id === 'pro' ? 'default' : 'outline'}
              fullWidth
              iconName={plan.id === 'free' ? 'Play' : 'Zap'}
              iconPosition="left"
            >
              {plan.id === 'free' ? 'Get Started' : plan.id === 'enterprise' ? 'Contact Sales' : 'Upgrade Now'}
            </Button>
          </div>
        ))}
      </div>

      {/* Rate Limit Headers */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text-primary mb-4">Rate Limit Headers</h3>
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            <div className="bg-gray-50 px-4 py-3 font-semibold text-text-primary">Header</div>
            <div className="bg-gray-50 px-4 py-3 font-semibold text-text-primary">Description</div>
            <div className="bg-gray-50 px-4 py-3 font-semibold text-text-primary">Example</div>
          </div>
          {rateLimitHeaders.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
              <div className="bg-white px-4 py-3">
                <code className="text-sm font-mono text-primary">{item.header}</code>
              </div>
              <div className="bg-white px-4 py-3 text-sm text-text-secondary">
                {item.description}
              </div>
              <div className="bg-white px-4 py-3">
                <code className="text-sm font-mono text-text-primary">{item.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Error Responses */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text-primary mb-4">Error Responses</h3>
        <div className="space-y-4">
          {errorResponses.map((error, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <div className="bg-destructive/10 border-b border-destructive/20 px-4 py-3">
                <div className="flex items-center space-x-3">
                  <span className="bg-destructive text-white px-2 py-1 rounded text-xs font-bold">
                    {error.code}
                  </span>
                  <div>
                    <h4 className="font-semibold text-destructive">{error.title}</h4>
                    <p className="text-sm text-text-secondary">{error.description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-4">
                <pre className="text-xs text-gray-100 font-mono overflow-x-auto">
                  <code>{error.response}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices */}
      <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
        <h3 className="text-lg font-bold text-primary mb-4">Rate Limiting Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Implement Exponential Backoff</h4>
                <p className="text-sm text-text-secondary">Gradually increase wait time between retries</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Monitor Rate Limit Headers</h4>
                <p className="text-sm text-text-secondary">Track remaining requests and reset times</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Cache Responses</h4>
                <p className="text-sm text-text-secondary">Reduce API calls by caching frequently accessed data</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Use Batch Endpoints</h4>
                <p className="text-sm text-text-secondary">Process multiple items in single requests</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Implement Request Queuing</h4>
                <p className="text-sm text-text-secondary">Queue requests to stay within limits</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Monitor Usage Analytics</h4>
                <p className="text-sm text-text-secondary">Track patterns to optimize API usage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitsSection;