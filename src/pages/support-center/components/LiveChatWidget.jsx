import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveChatWidget = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! I\'m here to help you with TeraBox Downloader Pro. What can I assist you with today?",
      timestamp: new Date(Date.now() - 60000)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const supportAgents = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      status: "online",
      role: "Technical Support"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      status: "online",
      role: "Premium Support"
    }
  ];

  const quickReplies = [
    "Download not working",
    "Premium features",
    "Account issues",
    "Mobile app help"
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: "Thanks for your message! I\'m connecting you with one of our support agents who can help you with this issue. Please wait a moment...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={onToggle}
          variant="default"
          size="lg"
          iconName="MessageCircle"
          iconPosition="left"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
        >
          Live Chat
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={20} color="white" />
            </div>
            <div>
              <h3 className="font-semibold">Live Support</h3>
              <p className="text-xs opacity-90">Usually replies in minutes</p>
            </div>
          </div>
          <Button
            onClick={onToggle}
            variant="ghost"
            size="icon"
            iconName="X"
            className="text-white hover:bg-white/20"
          />
        </div>

        {/* Online Agents */}
        <div className="flex items-center space-x-2 mt-3">
          {supportAgents.map((agent) => (
            <div key={agent.id} className="flex items-center space-x-2">
              <div className="relative">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="w-6 h-6 rounded-full border-2 border-white/50"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xs opacity-90">{agent.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.type === 'user' ?'bg-primary text-white' :'bg-muted text-text-primary'
              }`}
            >
              <p className="text-sm">{message.message}</p>
              <p className={`text-xs mt-1 ${
                message.type === 'user' ? 'text-white/70' : 'text-text-secondary'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replies */}
      <div className="px-4 py-2 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="text-xs px-2 py-1 bg-muted hover:bg-primary/10 rounded-full text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            variant="default"
            size="icon"
            iconName="Send"
            disabled={!newMessage.trim()}
          />
        </div>
      </form>
    </div>
  );
};

export default LiveChatWidget;