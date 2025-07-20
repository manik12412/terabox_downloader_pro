import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentDownloads = () => {
  const [recentFiles] = useState([
    {
      id: 1,
      name: "Annual_Report_2024.pdf",
      size: "12.4 MB",
      downloadedAt: "2 hours ago",
      type: "PDF Document",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=60&h=60&fit=crop",
      url: "https://terabox.com/s/1abc123"
    },
    {
      id: 2,
      name: "Team_Meeting_Recording.mp4",
      size: "156.8 MB",
      downloadedAt: "5 hours ago",
      type: "Video File",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=60&h=60&fit=crop",
      url: "https://terabox.com/s/2def456"
    },
    {
      id: 3,
      name: "Project_Assets.zip",
      size: "89.2 MB",
      downloadedAt: "1 day ago",
      type: "Archive",
      thumbnail: "https://images.unsplash.com/photo-1544396821-4dd40b938f0e?w=60&h=60&fit=crop",
      url: "https://terabox.com/s/3ghi789"
    },
    {
      id: 4,
      name: "Presentation_Slides.pptx",
      size: "34.7 MB",
      downloadedAt: "2 days ago",
      type: "PowerPoint",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop",
      url: "https://terabox.com/s/4jkl012"
    },
    {
      id: 5,
      name: "Database_Export.xlsx",
      size: "8.9 MB",
      downloadedAt: "3 days ago",
      type: "Excel Spreadsheet",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop",
      url: "https://terabox.com/s/5mno345"
    }
  ]);

  const getFileIcon = (type) => {
    if (type.includes('PDF')) return 'FileText';
    if (type.includes('Video')) return 'Video';
    if (type.includes('Archive')) return 'Archive';
    if (type.includes('PowerPoint')) return 'Presentation';
    if (type.includes('Excel')) return 'Sheet';
    return 'File';
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    // You could add a toast notification here
  };

  const redownloadFile = (file) => {
    console.log('Re-downloading:', file.name);
    // Trigger re-download logic
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text-primary">Recent Downloads</h2>
          <Button variant="ghost" size="sm" iconName="History" iconPosition="left">
            View All
          </Button>
        </div>
      </div>

      <div className="divide-y divide-border max-h-96 overflow-y-auto">
        {recentFiles.map((file) => (
          <div key={file.id} className="p-4 hover:bg-muted/30 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              {/* File Thumbnail */}
              <div className="relative w-10 h-10 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={file.thumbnail} 
                  alt="File preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Icon name={getFileIcon(file.type)} size={16} color="white" />
                </div>
              </div>

              {/* File Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-text-primary truncate text-sm">
                  {file.name}
                </h3>
                <div className="flex items-center space-x-3 text-xs text-text-secondary mt-1">
                  <span>{file.size}</span>
                  <span>{file.type}</span>
                  <span>{file.downloadedAt}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => redownloadFile(file)}
                  iconName="Download"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => copyToClipboard(file.url)}
                  iconName="Copy"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 bg-muted/30 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">
            {recentFiles.length} files in history
          </span>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="xs" iconName="Download" iconPosition="left">
              Export List
            </Button>
            <Button variant="ghost" size="xs" iconName="Trash2" iconPosition="left">
              Clear History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentDownloads;