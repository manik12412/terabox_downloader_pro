import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    priority: '',
    message: '',
    attachments: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: "MessageCircle",
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "from-blue-500 to-blue-600",
      action: "Start Chat",
      popular: true
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: "Mail",
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "from-green-500 to-green-600",
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: "Phone",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "from-purple-500 to-purple-600",
      action: "Call Now",
      premium: true
    },
    {
      title: "Community Forum",
      description: "Get help from other users",
      icon: "Users",
      availability: "24/7",
      responseTime: "Varies",
      color: "from-orange-500 to-orange-600",
      action: "Browse Forum"
    }
  ];

  const categoryOptions = [
    { value: 'download-issues', label: 'Download Issues' },
    { value: 'account-billing', label: 'Account & Billing' },
    { value: 'premium-features', label: 'Premium Features' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'api-integration', label: 'API Integration' },
    { value: 'security-privacy', label: 'Security & Privacy' },
    { value: 'other', label: 'Other' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low - General question' },
    { value: 'medium', label: 'Medium - Issue affecting usage' },
    { value: 'high', label: 'High - Service not working' },
    { value: 'urgent', label: 'Urgent - Business critical' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Support ticket submitted successfully! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      priority: '',
      message: '',
      attachments: []
    });
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Contact Support
        </h2>
        <p className="text-text-secondary">
          Choose your preferred way to get help
        </p>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {supportChannels.map((channel, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            {/* Badges */}
            {channel.popular && (
              <div className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-1 rounded-full font-medium">
                Popular
              </div>
            )}
            {channel.premium && (
              <div className="absolute -top-2 -right-2 bg-warning text-white text-xs px-2 py-1 rounded-full font-medium">
                Premium
              </div>
            )}

            {/* Icon */}
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${channel.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={channel.icon} size={24} color="white" />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {channel.title}
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              {channel.description}
            </p>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">Availability:</span>
                <span className="font-medium text-text-primary">{channel.availability}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">Response:</span>
                <span className="font-medium text-success">{channel.responseTime}</span>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant="outline"
              size="sm"
              fullWidth
              className="group-hover:bg-primary group-hover:text-white group-hover:border-primary"
            >
              {channel.action}
            </Button>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl border border-border p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Submit a Support Ticket
            </h3>
            <p className="text-text-secondary">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Subject */}
            <Input
              label="Subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Brief description of your issue"
              required
            />

            {/* Category and Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Category"
                options={categoryOptions}
                value={formData.category}
                onChange={(value) => handleSelectChange('category', value)}
                placeholder="Select a category"
                required
              />
              <Select
                label="Priority"
                options={priorityOptions}
                value={formData.priority}
                onChange={(value) => handleSelectChange('priority', value)}
                placeholder="Select priority level"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your issue in detail..."
                rows={6}
                required
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Attachments (Optional)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-200">
                <Icon name="Upload" size={32} className="text-text-secondary mx-auto mb-2" />
                <p className="text-text-secondary text-sm mb-2">
                  Drag and drop files here, or click to browse
                </p>
                <p className="text-text-secondary text-xs">
                  Supported formats: PNG, JPG, PDF, TXT (Max 10MB)
                </p>
                <input
                  type="file"
                  multiple
                  accept=".png,.jpg,.jpeg,.pdf,.txt"
                  className="hidden"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                className="px-8"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
              </Button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary mb-1">
                  What happens next?
                </h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• You'll receive a confirmation email with your ticket number</li>
                  <li>• Our team will review your request within 4 hours</li>
                  <li>• We'll respond with a solution or request for more information</li>
                  <li>• Premium users get priority support with faster response times</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;