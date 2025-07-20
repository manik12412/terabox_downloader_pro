import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DownloadInterface = () => {
  const [url, setUrl] = useState('');
  const [batchUrls, setBatchUrls] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState(null);
  const [activeTab, setActiveTab] = useState('single');
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const validateUrl = async (inputUrl) => {
    if (!inputUrl.trim()) {
      setValidationResult(null);
      return;
    }

    setIsValidating(true);
    
    // Simulate URL validation
    setTimeout(() => {
      if (inputUrl.includes('terabox') || inputUrl.includes('1024terabox')) {
        setValidationResult({
          isValid: true,
          fileInfo: {
            name: "Project_Presentation_Final.pptx",
            size: "45.2 MB",
            type: "PowerPoint Presentation",
            thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
          }
        });
      } else {
        setValidationResult({
          isValid: false,
          error: "Invalid TeraBox URL. Please check the link and try again."
        });
      }
      setIsValidating(false);
    }, 1500);
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    validateUrl(newUrl);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      // Handle dropped text file with URLs
      const file = files[0];
      if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (event) => {
          setBatchUrls(event.target.result);
          setActiveTab('batch');
        };
        reader.readAsText(file);
      }
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        setBatchUrls(event.target.result);
        setActiveTab('batch');
      };
      reader.readAsText(file);
    }
  };

  const startDownload = () => {
    if (activeTab === 'single' && validationResult?.isValid) {
      // Trigger download process
      console.log('Starting download for:', url);
    } else if (activeTab === 'batch' && batchUrls.trim()) {
      // Trigger batch download
      console.log('Starting batch download');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
        <button
          onClick={() => setActiveTab('single')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'single' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
          }`}
        >
          <Icon name="Link" size={16} />
          <span>Single URL</span>
        </button>
        <button
          onClick={() => setActiveTab('batch')}
          className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'batch' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-secondary'
          }`}
        >
          <Icon name="List" size={16} />
          <span>Batch Download</span>
        </button>
      </div>

      {/* Single URL Tab */}
      {activeTab === 'single' && (
        <div className="space-y-4">
          <div className="relative">
            <Input
              label="TeraBox URL"
              type="url"
              placeholder="Paste your TeraBox download link here..."
              value={url}
              onChange={handleUrlChange}
              description="Supports all TeraBox and 1024TeraBox links"
              className="pr-12"
            />
            {isValidating && (
              <div className="absolute right-3 top-9">
                <Icon name="Loader2" size={20} className="animate-spin text-primary" />
              </div>
            )}
          </div>

          {/* Validation Result */}
          {validationResult && (
            <div className={`p-4 rounded-lg border ${
              validationResult.isValid 
                ? 'bg-success/5 border-success/20' :'bg-destructive/5 border-destructive/20'
            }`}>
              {validationResult.isValid ? (
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={validationResult.fileInfo.thumbnail} 
                      alt="File preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span className="text-sm font-medium text-success">Valid TeraBox Link</span>
                    </div>
                    <h4 className="font-medium text-text-primary truncate">
                      {validationResult.fileInfo.name}
                    </h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-text-secondary">
                      <span>{validationResult.fileInfo.size}</span>
                      <span>{validationResult.fileInfo.type}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start space-x-3">
                  <Icon name="AlertCircle" size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-destructive mb-1">Invalid URL</p>
                    <p className="text-sm text-text-secondary">{validationResult.error}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Batch Download Tab */}
      {activeTab === 'batch' && (
        <div className="space-y-4">
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 ${
              dragActive 
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <Icon name="Upload" size={32} className="mx-auto text-text-secondary mb-3" />
              <p className="text-sm font-medium text-text-primary mb-1">
                Drop a text file with URLs or paste them below
              </p>
              <p className="text-xs text-text-secondary mb-4">
                One URL per line, supports up to 50 links
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleFileSelect}
                iconName="FileText"
                iconPosition="left"
              >
                Choose File
              </Button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Batch URLs
            </label>
            <textarea
              value={batchUrls}
              onChange={(e) => setBatchUrls(e.target.value)}
              placeholder={`Paste multiple TeraBox URLs here (one per line):\n\nhttps://terabox.com/s/example1\nhttps://1024terabox.com/s/example2\nhttps://terabox.com/s/example3`}
              className="w-full h-32 px-3 py-2 border border-border rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <p className="text-xs text-text-secondary mt-1">
              {batchUrls.split('\n').filter(line => line.trim()).length} URLs detected
            </p>
          </div>
        </div>
      )}

      {/* Download Button */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
        <div className="flex items-center space-x-4 text-sm text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={14} />
            <span>Encrypted Transfer</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Zap" size={14} />
            <span>High Speed</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Trash2" size={14} />
            <span>Auto Delete</span>
          </div>
        </div>
        
        <Button
          variant="default"
          size="lg"
          onClick={startDownload}
          disabled={
            (activeTab === 'single' && !validationResult?.isValid) ||
            (activeTab === 'batch' && !batchUrls.trim())
          }
          iconName="Download"
          iconPosition="left"
          className="min-w-[140px]"
        >
          {activeTab === 'single' ? 'Download File' : 'Start Batch'}
        </Button>
      </div>
    </div>
  );
};

export default DownloadInterface;