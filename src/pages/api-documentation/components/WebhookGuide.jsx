import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const WebhookGuide = () => {
  const [webhookUrl, setWebhookUrl] = useState('https://yourapp.com/webhook');
  const [selectedEvent, setSelectedEvent] = useState('download.completed');

  const events = [
    {
      id: 'download.completed',
      name: 'Download Completed',
      description: 'Triggered when a file download is successfully completed',
      payload: {
        event: 'download.completed',
        download_id: 'dl_789xyz123abc',
        download_url: 'https://cdn.teraboxpro.com/files/document.pdf',
        file_info: {
          name: 'Important_Document.pdf',
          size: 2048576,
          type: 'application/pdf',
          created_at: '2025-07-19T14:30:00Z'
        },
        metadata: {
          processing_time: '1.2s',
          server_region: 'us-east-1',
          quality: 'original'
        },
        timestamp: '2025-07-20T07:29:17Z'
      }
    },
    {
      id: 'download.failed',
      name: 'Download Failed',
      description: 'Triggered when a download fails due to various reasons',
      payload: {
        event: 'download.failed',
        download_id: 'dl_789xyz123abc',
        error: {
          code: 'FILE_NOT_FOUND',
          message: 'The requested file could not be found or has been removed',
          details: 'TeraBox returned 404 for the requested URL'
        },
        original_url: 'https://terabox.com/s/1abc2def3ghi4jkl',
        retry_count: 3,
        timestamp: '2025-07-20T07:29:17Z'
      }
    },
    {
      id: 'download.progress',
      name: 'Download Progress',
      description: 'Triggered periodically during file processing (large files only)',
      payload: {
        event: 'download.progress',
        download_id: 'dl_789xyz123abc',
        progress: {
          percentage: 65,
          bytes_processed: 1331200,
          total_bytes: 2048576,
          estimated_completion: '2025-07-20T07:31:00Z'
        },
        stage: 'downloading',
        timestamp: '2025-07-20T07:29:17Z'
      }
    },
    {
      id: 'batch.completed',
      name: 'Batch Completed',
      description: 'Triggered when all files in a batch download are processed',
      payload: {
        event: 'batch.completed',
        batch_id: 'batch_abc123def456',
        summary: {
          total: 5,
          completed: 4,
          failed: 1,
          total_size: 10485760
        },
        downloads: [
          {
            download_id: 'dl_001',
            status: 'completed',
            download_url: 'https://cdn.teraboxpro.com/files/file1.pdf'
          },
          {
            download_id: 'dl_002',
            status: 'failed',
            error: 'FILE_TOO_LARGE'
          }
        ],
        timestamp: '2025-07-20T07:29:17Z'
      }
    }
  ];

  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'Signature Verification',
      description: 'All webhooks include HMAC-SHA256 signatures for authenticity verification'
    },
    {
      icon: 'Lock',
      title: 'HTTPS Required',
      description: 'Webhook URLs must use HTTPS for secure data transmission'
    },
    {
      icon: 'RefreshCw',
      title: 'Automatic Retries',
      description: 'Failed webhooks are retried up to 5 times with exponential backoff'
    },
    {
      icon: 'Clock',
      title: 'Timeout Protection',
      description: 'Webhook requests timeout after 30 seconds to prevent hanging'
    }
  ];

  const testWebhook = () => {
    // Simulate webhook test
    console.log('Testing webhook:', webhookUrl, 'with event:', selectedEvent);
  };

  return (
    <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center">
          <Icon name="Webhook" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">Webhook Integration</h2>
          <p className="text-sm text-text-secondary">Real-time notifications for download events</p>
        </div>
      </div>

      {/* Webhook Setup */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">Setup Webhook</h3>
            <div className="space-y-4">
              <Input
                label="Webhook URL"
                type="url"
                placeholder="https://yourapp.com/webhook"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                description="Must be a valid HTTPS URL"
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Test Event Type
                </label>
                <div className="space-y-2">
                  {events.map((event) => (
                    <label key={event.id} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="event"
                        value={event.id}
                        checked={selectedEvent === event.id}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-medium text-text-primary">{event.name}</div>
                        <div className="text-sm text-text-secondary">{event.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                variant="default"
                iconName="Send"
                iconPosition="left"
                onClick={testWebhook}
                fullWidth
              >
                Test Webhook
              </Button>
            </div>
          </div>

          {/* Security Features */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">Security Features</h3>
            <div className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <Icon name={feature.icon} size={20} color="var(--color-primary)" />
                  <div>
                    <h4 className="font-medium text-text-primary">{feature.title}</h4>
                    <p className="text-sm text-text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Payload Preview */}
        <div>
          <h3 className="text-lg font-bold text-text-primary mb-4">Event Payload Preview</h3>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {events.find(e => e.id === selectedEvent)?.name}
              </div>
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
            <div className="p-4 max-h-96 overflow-y-auto">
              <pre className="text-xs text-gray-100 font-mono">
                <code>
                  {JSON.stringify(events.find(e => e.id === selectedEvent)?.payload, null, 2)}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Guide */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text-primary mb-4">Implementation Guide</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <h4 className="font-semibold text-text-primary">Configure Endpoint</h4>
              </div>
              <p className="text-sm text-text-secondary">
                Set up an HTTPS endpoint in your application to receive webhook notifications.
              </p>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <h4 className="font-semibold text-text-primary">Verify Signatures</h4>
              </div>
              <p className="text-sm text-text-secondary">
                Validate incoming webhooks using HMAC-SHA256 signature verification for security.
              </p>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <h4 className="font-semibold text-text-primary">Handle Events</h4>
              </div>
              <p className="text-sm text-text-secondary">
                Process different event types and update your application state accordingly.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <h4 className="font-semibold text-text-primary">Return 200 OK</h4>
              </div>
              <p className="text-sm text-text-secondary">
                Always respond with HTTP 200 status to acknowledge successful receipt.
              </p>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <h4 className="font-semibold text-text-primary">Handle Retries</h4>
              </div>
              <p className="text-sm text-text-secondary">
                Implement idempotency to handle duplicate webhook deliveries gracefully.
              </p>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">6</div>
                <h4 className="font-semibold text-text-primary">Monitor & Log</h4>
              </div>
              <p className="text-sm text-text-secondary">
                Log webhook events for debugging and monitor delivery success rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Headers */}
      <div className="p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-bold text-text-primary mb-4">Webhook Headers</h3>
        <div className="space-y-2 font-mono text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Content-Type:</span>
            <span className="text-text-primary">application/json</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">X-TeraBox-Event:</span>
            <span className="text-text-primary">download.completed</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">X-TeraBox-Signature:</span>
            <span className="text-text-primary">sha256=abc123def456...</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">X-TeraBox-Delivery:</span>
            <span className="text-text-primary">12345678-1234-1234-1234-123456789abc</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">User-Agent:</span>
            <span className="text-text-primary">TeraBox-Webhook/1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebhookGuide;