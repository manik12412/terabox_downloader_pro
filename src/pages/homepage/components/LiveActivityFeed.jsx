import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  const mockActivities = [
    {
      id: 1,
      type: "download",
      fileName: "Project_Presentation.pptx",
      fileSize: "45.2 MB",
      location: "New York, US",
      timeAgo: "2 seconds ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 2,
      type: "batch",
      fileName: "Design_Assets_Folder",
      fileSize: "156.8 MB",
      location: "London, UK",
      timeAgo: "8 seconds ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 3,
      type: "download",
      fileName: "Research_Data.xlsx",
      fileSize: "12.4 MB",
      location: "Tokyo, JP",
      timeAgo: "15 seconds ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 4,
      type: "download",
      fileName: "Marketing_Video.mp4",
      fileSize: "234.1 MB",
      location: "Sydney, AU",
      timeAgo: "23 seconds ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 5,
      type: "batch",
      fileName: "Photo_Collection",
      fileSize: "89.3 MB",
      location: "Berlin, DE",
      timeAgo: "31 seconds ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    setActivities(mockActivities);
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        type: Math.random() > 0.7 ? "batch" : "download",
        fileName: [
          "Document.pdf", "Video_Tutorial.mp4", "Design_Files.zip", 
          "Spreadsheet.xlsx", "Presentation.pptx", "Images_Folder"
        ][Math.floor(Math.random() * 6)],
        fileSize: `${(Math.random() * 200 + 10).toFixed(1)} MB`,
        location: [
          "California, US", "Toronto, CA", "Mumbai, IN", "Paris, FR", 
          "Singapore, SG", "São Paulo, BR"
        ][Math.floor(Math.random() * 6)],
        timeAgo: "Just now",
        avatar: `https://images.unsplash.com/photo-${1472099645785 + Math.floor(Math.random() * 1000)}?w=32&h=32&fit=crop&crop=face`
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type) => {
    return type === "batch" ? "FolderDown" : "Download";
  };

  const getActivityColor = (type) => {
    return type === "batch" ? "text-accent" : "text-primary";
  };

  return (
    <section className="py-16 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success uppercase tracking-wide">Live Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Downloads Happening Right Now
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join thousands of users who are downloading their files faster than ever before
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="Activity" size={24} className="text-primary" />
                  <h3 className="text-lg font-semibold text-text-primary">Recent Downloads</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Users" size={16} />
                  <span>1,247 active users</span>
                </div>
              </div>
            </div>

            <div className="divide-y divide-border">
              {activities.map((activity, index) => (
                <div 
                  key={activity.id} 
                  className={`p-6 transition-all duration-500 ${index === 0 ? 'bg-success/5 border-l-4 border-l-success' : 'hover:bg-muted/50'}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={activity.avatar} 
                        alt="User avatar" 
                        className="w-10 h-10 rounded-full object-cover"
                        onError={(e) => {
                          e.target.src = '/assets/images/no_image.png';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon 
                          name={getActivityIcon(activity.type)} 
                          size={16} 
                          className={getActivityColor(activity.type)} 
                        />
                        <span className="text-sm font-medium text-text-primary truncate">
                          {activity.fileName}
                        </span>
                        <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">
                          {activity.fileSize}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={12} />
                          <span>{activity.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>{activity.timeAgo}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-xs font-medium text-success">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-muted/30 text-center">
              <p className="text-sm text-text-secondary">
                <Icon name="Shield" size={16} className="inline mr-1" />
                All downloads are anonymized and encrypted for privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveActivityFeed;