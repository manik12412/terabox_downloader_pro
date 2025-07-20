import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoTutorials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoTutorials = [
    {
      id: 1,
      title: "Getting Started with TeraBox Downloader Pro",
      description: "Learn the basics of downloading files from TeraBox using our platform",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
      category: "Beginner",
      views: "12.5K",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      popular: true
    },
    {
      id: 2,
      title: "Batch Download Multiple Files",
      description: "How to download multiple TeraBox files simultaneously with Premium features",
      duration: "5:20",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
      category: "Premium",
      views: "8.2K",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Mobile App Setup and Usage",
      description: "Complete guide to installing and using our mobile application",
      duration: "4:15",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=225&fit=crop",
      category: "Mobile",
      views: "6.8K",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "API Integration for Developers",
      description: "Step-by-step guide to integrating our API into your applications",
      duration: "8:30",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
      category: "Developer",
      views: "4.1K",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Troubleshooting Common Issues",
      description: "Solutions to the most frequently encountered download problems",
      duration: "6:45",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop",
      category: "Troubleshooting",
      views: "9.7K",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Security Features and Privacy Settings",
      description: "Understanding our security measures and how to protect your downloads",
      duration: "4:55",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
      category: "Security",
      views: "5.3K",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const categories = ["All", "Beginner", "Premium", "Mobile", "Developer", "Troubleshooting", "Security"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All" 
    ? videoTutorials 
    : videoTutorials.filter(video => video.category === activeCategory);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Video Tutorials
        </h2>
        <p className="text-text-secondary">
          Step-by-step guides to help you master our platform
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-md'
                : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => openVideoModal(video)}
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-primary ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>

              {/* Popular Badge */}
              {video.popular && (
                <div className="absolute top-3 left-3 bg-warning text-white text-xs px-2 py-1 rounded-full font-medium">
                  Popular
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {video.category}
                </span>
                <div className="flex items-center space-x-1 text-text-secondary text-xs">
                  <Icon name="Eye" size={12} />
                  <span>{video.views}</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                {video.title}
              </h3>
              
              <p className="text-text-secondary text-sm line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-text-primary">
                {selectedVideo.title}
              </h3>
              <Button
                onClick={closeVideoModal}
                variant="ghost"
                size="icon"
                iconName="X"
              />
            </div>

            {/* Video Player */}
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {selectedVideo.category}
                  </span>
                  <div className="flex items-center space-x-1 text-text-secondary text-sm">
                    <Icon name="Clock" size={14} />
                    <span>{selectedVideo.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-text-secondary text-sm">
                    <Icon name="Eye" size={14} />
                    <span>{selectedVideo.views} views</span>
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Video" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            No videos found
          </h3>
          <p className="text-text-secondary">
            No tutorials available for the selected category.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoTutorials;