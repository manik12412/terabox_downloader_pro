import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProgressTracker = () => {
  const [downloads, setDownloads] = useState([]);

  // Mock download data
  useEffect(() => {
    const mockDownloads = [
      {
        id: 1,
        fileName: "Project_Presentation_Final.pptx",
        fileSize: "45.2 MB",
        progress: 75,
        speed: "12.3 MB/s",
        timeRemaining: "3s",
        status: "downloading",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop"
      },
      {
        id: 2,
        fileName: "Marketing_Video_HD.mp4",
        fileSize: "234.7 MB",
        progress: 100,
        speed: "15.8 MB/s",
        timeRemaining: "0s",
        status: "completed",
        thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=60&h=60&fit=crop"
      },
      {
        id: 3,
        fileName: "Database_Backup.zip",
        fileSize: "1.2 GB",
        progress: 45,
        speed: "8.7 MB/s",
        timeRemaining: "2m 15s",
        status: "downloading",
        thumbnail: "https://images.unsplash.com/photo-1544396821-4dd40b938f0e?w=60&h=60&fit=crop"
      }
    ];
    setDownloads(mockDownloads);
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'downloading':
        return <Icon name="Download" size={16} className="text-primary animate-pulse" />;
      case 'completed':
        return <Icon name="CheckCircle" size={16} className="text-success" />;
      case 'paused':
        return <Icon name="Pause" size={16} className="text-warning" />;
      case 'error':
        return <Icon name="AlertCircle" size={16} className="text-destructive" />;
      default:
        return <Icon name="Clock" size={16} className="text-text-secondary" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'downloading':
        return 'bg-primary';
      case 'completed':
        return 'bg-success';
      case 'paused':
        return 'bg-warning';
      case 'error':
        return 'bg-destructive';
      default:
        return 'bg-text-secondary';
    }
  };

  const pauseDownload = (id) => {
    setDownloads(prev => prev.map(download => 
      download.id === id 
        ? { ...download, status: download.status === 'downloading' ? 'paused' : 'downloading' }
        : download
    ));
  };

  const cancelDownload = (id) => {
    setDownloads(prev => prev.filter(download => download.id !== id));
  };

  const retryDownload = (id) => {
    setDownloads(prev => prev.map(download => 
      download.id === id 
        ? { ...download, status: 'downloading', progress: 0 }
        : download
    ));
  };

  if (downloads.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-border p-6">
        <div className="text-center py-8">
          <Icon name="Download" size={48} className="mx-auto text-text-secondary mb-4" />
          <h3 className="text-lg font-semibold text-text-primary mb-2">No Active Downloads</h3>
          <p className="text-text-secondary">Your download progress will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text-primary">Download Progress</h2>
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="Activity" size={16} />
            <span>{downloads.filter(d => d.status === 'downloading').length} active</span>
          </div>
        </div>
      </div>

      <div className="divide-y divide-border">
        {downloads.map((download) => (
          <div key={download.id} className="p-6">
            <div className="flex items-start space-x-4">
              {/* File Thumbnail */}
              <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={download.thumbnail} 
                  alt="File preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* File Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {getStatusIcon(download.status)}
                  <h3 className="font-medium text-text-primary truncate">
                    {download.fileName}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                  <span>{download.fileSize}</span>
                  {download.status === 'downloading' && (
                    <>
                      <span>{download.speed}</span>
                      <span>ETA: {download.timeRemaining}</span>
                    </>
                  )}
                  {download.status === 'completed' && (
                    <span className="text-success font-medium">Download Complete</span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-text-secondary mb-1">
                    <span>{download.progress}% complete</span>
                    {download.status === 'downloading' && (
                      <span>{download.speed}</span>
                    )}
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${getStatusColor(download.status)}`}
                      style={{ width: `${download.progress}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  {download.status === 'downloading' && (
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => pauseDownload(download.id)}
                      iconName="Pause"
                      iconPosition="left"
                    >
                      Pause
                    </Button>
                  )}
                  
                  {download.status === 'paused' && (
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => pauseDownload(download.id)}
                      iconName="Play"
                      iconPosition="left"
                    >
                      Resume
                    </Button>
                  )}
                  
                  {download.status === 'completed' && (
                    <Button
                      variant="outline"
                      size="xs"
                      iconName="FolderOpen"
                      iconPosition="left"
                    >
                      Open Folder
                    </Button>
                  )}
                  
                  {download.status === 'error' && (
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={() => retryDownload(download.id)}
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Retry
                    </Button>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => cancelDownload(download.id)}
                    iconName="X"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="p-6 bg-muted/30 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4 text-text-secondary">
            <span>Total: {downloads.length} files</span>
            <span>Completed: {downloads.filter(d => d.status === 'completed').length}</span>
          </div>
          <Button variant="ghost" size="sm" iconName="Trash2" iconPosition="left">
            Clear Completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;