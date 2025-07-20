import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const EndpointExplorer = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('download');
  const [requestData, setRequestData] = useState({
    url: 'https://terabox.com/s/1abc2def3ghi4jkl',
    format: 'original',
    quality: 'high'
  });
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const endpoints = [
    {
      value: 'download',
      label: 'POST /v1/download',
      description: 'Download files from TeraBox URLs',
      method: 'POST'
    },
    {
      value: 'batch',
      label: 'POST /v1/batch-download',
      description: 'Download multiple files in batch',
      method: 'POST'
    },
    {
      value: 'status',
      label: 'GET /v1/download/{id}/status',
      description: 'Check download progress and status',
      method: 'GET'
    },
    {
      value: 'history',
      label: 'GET /v1/downloads',
      description: 'Retrieve download history',
      method: 'GET'
    }
  ];

  const formatOptions = [
    { value: 'original', label: 'Original Quality' },
    { value: 'compressed', label: 'Compressed' },
    { value: 'preview', label: 'Preview Only' }
  ];

  const qualityOptions = [
    { value: 'high', label: 'High Quality' },
    { value: 'medium', label: 'Medium Quality' },
    { value: 'low', label: 'Low Quality' }
  ];

  const handleTryRequest = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        success: true,
        download_id: "dl_789xyz123abc",
        download_url: "https://cdn.teraboxpro.com/files/document_abc123.pdf",
        expires_at: "2025-07-20T08:29:17Z",
        file_info: {
          name: "Important_Document.pdf",
          size: 2048576,
          type: "application/pdf",
          created_at: "2025-07-19T14:30:00Z"
        },
        metadata: {
          processing_time: "1.2s",
          server_region: "us-east-1",
          rate_limit_remaining: 98
        }
      };
      
      setResponse(mockResponse);
      setIsLoading(false);
    }, 2000);
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'text-success bg-success/10';
      case 'POST': return 'text-primary bg-primary/10';
      case 'PUT': return 'text-warning bg-warning/10';
      case 'DELETE': return 'text-destructive bg-destructive/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-trust-builder to-primary rounded-lg flex items-center justify-center">
          <Icon name="Code" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">API Explorer</h2>
          <p className="text-sm text-text-secondary">Test endpoints directly from your browser</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Request Panel */}
        <div className="space-y-6">
          <div>
            <Select
              label="Select Endpoint"
              description="Choose an API endpoint to test"
              options={endpoints}
              value={selectedEndpoint}
              onChange={setSelectedEndpoint}
            />
          </div>

          {/* Method and URL Display */}
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <span className={`px-2 py-1 rounded text-xs font-bold ${getMethodColor(endpoints.find(e => e.value === selectedEndpoint)?.method)}`}>
                {endpoints.find(e => e.value === selectedEndpoint)?.method}
              </span>
              <code className="text-sm font-mono text-text-primary">
                https://api.teraboxpro.com{endpoints.find(e => e.value === selectedEndpoint)?.label.split(' ')[1]}
              </code>
            </div>
            <p className="text-xs text-text-secondary">
              {endpoints.find(e => e.value === selectedEndpoint)?.description}
            </p>
          </div>

          {/* Request Parameters */}
          {selectedEndpoint === 'download' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-text-primary">Request Parameters</h3>
              
              <Input
                label="TeraBox URL"
                type="url"
                placeholder="https://terabox.com/s/..."
                value={requestData.url}
                onChange={(e) => setRequestData({...requestData, url: e.target.value})}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Format"
                  options={formatOptions}
                  value={requestData.format}
                  onChange={(value) => setRequestData({...requestData, format: value})}
                />

                <Select
                  label="Quality"
                  options={qualityOptions}
                  value={requestData.quality}
                  onChange={(value) => setRequestData({...requestData, quality: value})}
                />
              </div>
            </div>
          )}

          {/* Authentication */}
          <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Key" size={16} color="var(--color-warning)" />
              <div>
                <h4 className="font-medium text-warning text-sm">Authentication Required</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Add your API key to the Authorization header: Bearer your_api_key
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="default"
            iconName="Play"
            iconPosition="left"
            loading={isLoading}
            onClick={handleTryRequest}
            fullWidth
          >
            {isLoading ? 'Sending Request...' : 'Try Request'}
          </Button>
        </div>

        {/* Response Panel */}
        <div className="space-y-6">
          <h3 className="font-semibold text-text-primary">Response</h3>
          
          {!response && !isLoading && (
            <div className="h-64 border-2 border-dashed border-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="Code2" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-3" />
                <p className="text-text-secondary">Click "Try Request" to see the response</p>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="h-64 border border-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-text-secondary">Processing request...</p>
              </div>
            </div>
          )}

          {response && (
            <div className="space-y-4">
              {/* Status */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-sm font-medium text-success">200 OK</span>
                <span className="text-xs text-text-secondary">Response time: 1.2s</span>
              </div>

              {/* Response Body */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <span className="text-xs text-gray-400 font-mono">JSON Response</span>
                  <Button
                    variant="ghost"
                    size="xs"
                    iconName="Copy"
                    iconPosition="left"
                    className="text-gray-400 hover:text-white"
                  >
                    Copy
                  </Button>
                </div>
                <div className="p-4 max-h-64 overflow-y-auto">
                  <pre className="text-xs text-gray-100 font-mono">
                    <code>{JSON.stringify(response, null, 2)}</code>
                  </pre>
                </div>
              </div>

              {/* Response Headers */}
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium text-text-primary mb-2">Response Headers</h4>
                <div className="space-y-1 text-xs font-mono">
                  <div>content-type: application/json</div>
                  <div>x-rate-limit-remaining: 98</div>
                  <div>x-rate-limit-reset: 1642694400</div>
                  <div>server: TeraBox-Pro/1.0</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EndpointExplorer;