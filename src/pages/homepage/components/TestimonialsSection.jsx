import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Content Creator",
      company: "Digital Marketing Agency",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      content: `I was spending 3-4 hours daily just waiting for TeraBox downloads. With TeraBox Downloader Pro, I get my client files in minutes instead of hours. It's literally saved me 20+ hours per week - that's time I can spend creating instead of waiting.`,
      metrics: {
        timeSaved: "20+ hours/week",
        speedIncrease: "15x faster",
        filesDownloaded: "500+"
      },
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Graduate Student",
      company: "Stanford University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      content: `Research papers, datasets, and project files - I download gigabytes of academic content daily. The batch download feature is a game-changer. I can queue up 20 files before bed and everything's ready by morning. My productivity has skyrocketed.`,
      metrics: {
        timeSaved: "15 hours/week",
        speedIncrease: "12x faster",
        filesDownloaded: "1,200+"
      },
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Park",
      role: "Small Business Owner",
      company: "Creative Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: `Managing client assets across multiple projects was a nightmare with slow TeraBox downloads. Now I can download entire project folders in minutes. The mobile app means I can grab files on-the-go. It's transformed how we handle client deliverables.`,
      metrics: {
        timeSaved: "12 hours/week",
        speedIncrease: "18x faster",
        filesDownloaded: "800+"
      },
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Video Editor",
      company: "Freelance",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: `4K video files are massive, and TeraBox's speed limits were killing my workflow. TeraBox Downloader Pro downloads my 50GB projects in under 30 minutes instead of 6+ hours. The resume feature saved me when my internet dropped during a huge download.`,
      metrics: {
        timeSaved: "25+ hours/week",
        speedIncrease: "20x faster",
        filesDownloaded: "300+"
      },
      rating: 5
    }
  ];

  const overallStats = [
    { label: "Average Time Saved", value: "18 hrs/week", icon: "Clock" },
    { label: "Speed Improvement", value: "16x faster", icon: "Zap" },
    { label: "User Satisfaction", value: "4.9/5", icon: "Star" },
    { label: "Files Downloaded", value: "10M+", icon: "Download" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? "text-warning fill-current" : "text-muted"} 
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="MessageSquare" size={24} className="text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">User Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Real Users, Real Results
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover how TeraBox Downloader Pro has transformed workflows and saved countless hours for users worldwide
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {overallStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden mb-8">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <img 
                  src={testimonials[activeTestimonial].avatar} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover mx-auto lg:mx-0 mb-4"
                  onError={(e) => {
                    e.target.src = '/assets/images/no_image.png';
                  }}
                />
                <h4 className="text-lg font-semibold text-text-primary">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-sm text-text-secondary mb-2">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  {testimonials[activeTestimonial].company}
                </p>
                <div className="flex justify-center lg:justify-start space-x-1">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <Icon name="Quote" size={32} className="text-primary/20 mb-4" />
                  <p className="text-lg text-text-primary leading-relaxed">
                    {testimonials[activeTestimonial].content}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-success/10 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-success mb-1">
                      {testimonials[activeTestimonial].metrics.timeSaved}
                    </div>
                    <div className="text-xs text-text-secondary">Time Saved</div>
                  </div>
                  <div className="bg-warning/10 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-warning mb-1">
                      {testimonials[activeTestimonial].metrics.speedIncrease}
                    </div>
                    <div className="text-xs text-text-secondary">Speed Increase</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-lg font-bold text-primary mb-1">
                      {testimonials[activeTestimonial].metrics.filesDownloaded}
                    </div>
                    <div className="text-xs text-text-secondary">Files Downloaded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button 
            onClick={prevTestimonial}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors duration-200"
          >
            <Icon name="ChevronLeft" size={20} />
            <span className="text-sm font-medium">Previous</span>
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeTestimonial ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors duration-200"
          >
            <span className="text-sm font-medium">Next</span>
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Join thousands of satisfied users who've transformed their download experience
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span>2M+ active users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={16} className="text-success" />
              <span>98% recommend us</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-warning" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;