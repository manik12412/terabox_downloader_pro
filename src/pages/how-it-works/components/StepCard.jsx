import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StepCard = ({ step, isActive, onClick }) => {
  return (
    <div 
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'border-primary bg-primary/5 shadow-brand' 
          : 'border-border bg-card hover:border-primary/30 hover:shadow-sm'
      }`}
      onClick={onClick}
    >
      {/* Step Number */}
      <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        isActive 
          ? 'bg-primary text-white' :'bg-muted text-text-secondary'
      }`}>
        {step.number}
      </div>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        isActive 
          ? 'bg-primary text-white' :'bg-muted text-text-secondary'
      }`}>
        <Icon name={step.icon} size={24} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
      <p className="text-sm text-text-secondary mb-4">{step.description}</p>

      {/* Preview Image */}
      {step.image && (
        <div className="relative overflow-hidden rounded-lg border border-border">
          <Image 
            src={step.image} 
            alt={step.title}
            className="w-full h-32 object-cover"
          />
          {isActive && (
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <Icon name="Play" size={32} color="var(--color-primary)" />
            </div>
          )}
        </div>
      )}

      {/* Duration */}
      <div className="flex items-center justify-between mt-4 text-xs text-text-secondary">
        <span>Duration: {step.duration}</span>
        <span className="flex items-center space-x-1">
          <Icon name="Clock" size={12} />
          <span>{step.estimatedTime}</span>
        </span>
      </div>
    </div>
  );
};

export default StepCard;