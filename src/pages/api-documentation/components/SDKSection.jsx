import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SDKSection = () => {
  const [selectedSDK, setSelectedSDK] = useState('javascript');

  const sdks = [
    {
      id: 'javascript',
      name: 'JavaScript/Node.js',
      icon: 'Code',
      version: 'v2.1.0',
      downloads: '15.2k',
      description: 'Official SDK for JavaScript and Node.js applications',
      features: [
        'Promise-based API',
        'TypeScript support',
        'Automatic retries',
        'Progress tracking',
        'Webhook helpers'
      ],
      installation: 'npm install @terabox/sdk',
      github: 'https://github.com/terabox/javascript-sdk',
      docs: 'https://docs.teraboxpro.com/sdk/javascript',
      example: `import { TeraBoxClient } from '@terabox/sdk';

const client = new TeraBoxClient({
  apiKey: 'tbp_live_abc123def456ghi789',
  timeout: 30000
});

// Download a file
const download = await client.download({
  url: 'https://terabox.com/s/1abc2def3ghi4jkl',
  format: 'original'
});

console.log('Download URL:', download.downloadUrl);

// Batch download with progress tracking
const batch = await client.batchDownload({
  urls: [
    'https://terabox.com/s/1abc2def3ghi4jkl',
    'https://terabox.com/s/2def3ghi4jkl5mno'
  ],
  onProgress: (progress) => {
    console.log(\`Progress: \${progress.completed}/\${progress.total}\`);
  }
});`
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'FileCode',
      version: 'v1.8.3',
      downloads: '8.7k',
      description: 'Pythonic SDK with async support and comprehensive error handling',
      features: [
        'Async/await support',
        'Type hints',
        'Automatic pagination',
        'Built-in caching',
        'CLI tools included'
      ],
      installation: 'pip install terabox-sdk',
      github: 'https://github.com/terabox/python-sdk',
      docs: 'https://docs.teraboxpro.com/sdk/python',
      example: `from terabox import TeraBoxClient
import asyncio

client = TeraBoxClient(api_key='tbp_live_abc123def456ghi789')

async def download_file():
    # Simple download
    download = await client.download(
        url='https://terabox.com/s/1abc2def3ghi4jkl',
        format='original'
    )
    
    print(f"Download URL: {download.download_url}")
    
    # Batch download with progress callback
    async def progress_callback(progress):
        print(f"Progress: {progress.completed}/{progress.total}")
    
    batch = await client.batch_download(
        urls=[
            'https://terabox.com/s/1abc2def3ghi4jkl',
            'https://terabox.com/s/2def3ghi4jkl5mno'
        ],
        progress_callback=progress_callback
    )

# Run the async function
asyncio.run(download_file())`
    },
    {
      id: 'php',
      name: 'PHP',
      icon: 'Code2',
      version: 'v1.5.2',
      downloads: '4.3k',
      description: 'Modern PHP SDK with PSR-4 autoloading and comprehensive documentation',
      features: [
        'PSR-4 autoloading',
        'Guzzle HTTP client',
        'Exception handling',
        'Response caching',
        'Laravel integration'
      ],
      installation: 'composer require terabox/sdk',
      github: 'https://github.com/terabox/php-sdk',
      docs: 'https://docs.teraboxpro.com/sdk/php',
      example: `<?php

use TeraBox\\SDK\\TeraBoxClient;
use TeraBox\\SDK\\Exceptions\\TeraBoxException;

$client = new TeraBoxClient([
    'api_key' => 'tbp_live_abc123def456ghi789',
    'timeout' => 30
]);

try {
    // Download a file
    $download = $client->download([
        'url' => 'https://terabox.com/s/1abc2def3ghi4jkl',
        'format' => 'original'
    ]);
    
    echo "Download URL: " . $download->getDownloadUrl() . "\\n";
    
    // Batch download
    $batch = $client->batchDownload([
        'urls' => [
            'https://terabox.com/s/1abc2def3ghi4jkl',
            'https://terabox.com/s/2def3ghi4jkl5mno'
        ]
    ]);
    
    // Wait for completion
    $result = $client->waitForBatchCompletion($batch->getBatchId());
    echo "Batch completed: " . $result->getCompletedCount() . " files\\n";
    
} catch (TeraBoxException $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}

?>`
    },
    {
      id: 'go',
      name: 'Go',
      icon: 'Terminal',
      version: 'v1.3.1',
      downloads: '2.1k',
      description: 'Lightweight Go SDK with excellent performance and minimal dependencies',
      features: [
        'Zero dependencies',
        'Context support',
        'Concurrent downloads',
        'Built-in retries',
        'Structured logging'
      ],
      installation: 'go get github.com/terabox/go-sdk',
      github: 'https://github.com/terabox/go-sdk',
      docs: 'https://docs.teraboxpro.com/sdk/go',
      example: `package main

import (
    "context" "fmt" "log" "github.com/terabox/go-sdk/terabox"
)

func main() {
    client := terabox.NewClient("tbp_live_abc123def456ghi789")
    
    ctx := context.Background()
    
    // Download a file
    download, err := client.Download(ctx, &terabox.DownloadRequest{
        URL:    "https://terabox.com/s/1abc2def3ghi4jkl",
        Format: "original",
    })
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Download URL: %s\\n", download.DownloadURL)
    
    // Batch download
    batch, err := client.BatchDownload(ctx, &terabox.BatchDownloadRequest{
        URLs: []string{
            "https://terabox.com/s/1abc2def3ghi4jkl",
            "https://terabox.com/s/2def3ghi4jkl5mno",
        },
    })
    if err != nil {
        log.Fatal(err)
    }
    
    // Wait for completion
    result, err := client.WaitForBatchCompletion(ctx, batch.BatchID)
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Batch completed: %d files\\n", result.CompletedCount)
}`
    }
  ];

  const communitySDKs = [
    {
      name: 'Ruby',
      author: 'community',
      version: 'v0.9.2',
      github: 'https://github.com/community/terabox-ruby',
      description: 'Community-maintained Ruby gem'
    },
    {
      name: 'Java',
      author: 'community',
      version: 'v0.7.1',
      github: 'https://github.com/community/terabox-java',
      description: 'Spring Boot compatible Java library'
    },
    {
      name: 'C#/.NET',
      author: 'community',
      version: 'v0.6.0',
      github: 'https://github.com/community/terabox-dotnet',
      description: '.NET Standard 2.0 compatible library'
    },
    {
      name: 'Rust',
      author: 'community',
      version: 'v0.4.3',
      github: 'https://github.com/community/terabox-rust',
      description: 'High-performance Rust crate'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
          <Icon name="Package" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">SDKs & Libraries</h2>
          <p className="text-sm text-text-secondary">Official and community-maintained libraries for popular languages</p>
        </div>
      </div>

      {/* Official SDKs */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text-primary mb-4">Official SDKs</h3>
        
        {/* SDK Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {sdks.map((sdk) => (
            <button
              key={sdk.id}
              onClick={() => setSelectedSDK(sdk.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedSDK === sdk.id
                  ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/30 text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name={sdk.icon} size={16} />
              <span className="font-medium">{sdk.name}</span>
              <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">
                {sdk.version}
              </span>
            </button>
          ))}
        </div>

        {/* SDK Details */}
        {sdks.map((sdk) => (
          selectedSDK === sdk.id && (
            <div key={sdk.id} className="grid lg:grid-cols-2 gap-8">
              {/* SDK Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name={sdk.icon} size={24} color="var(--color-primary)" />
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">{sdk.name}</h4>
                      <p className="text-sm text-text-secondary">{sdk.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={14} />
                      <span>{sdk.downloads} downloads</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Tag" size={14} />
                      <span>{sdk.version}</span>
                    </div>
                  </div>
                </div>

                {/* Installation */}
                <div>
                  <h5 className="font-semibold text-text-primary mb-2">Installation</h5>
                  <div className="bg-gray-900 rounded-lg p-3">
                    <code className="text-sm text-gray-100 font-mono">{sdk.installation}</code>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h5 className="font-semibold text-text-primary mb-3">Features</h5>
                  <div className="space-y-2">
                    {sdk.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} color="var(--color-success)" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Book"
                    iconPosition="left"
                  >
                    Documentation
                  </Button>
                </div>
              </div>

              {/* Code Example */}
              <div>
                <h5 className="font-semibold text-text-primary mb-3">Quick Start Example</h5>
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {sdk.name} Example
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
                  <div className="p-4 max-h-80 overflow-y-auto">
                    <pre className="text-xs text-gray-100 font-mono">
                      <code>{sdk.example}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {/* Community SDKs */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-text-primary mb-4">Community Libraries</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {communitySDKs.map((sdk, index) => (
            <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/30 transition-colors duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-text-primary">{sdk.name}</h4>
                <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded-full">
                  {sdk.version}
                </span>
              </div>
              <p className="text-sm text-text-secondary mb-3">{sdk.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">by {sdk.author}</span>
                <Button
                  variant="ghost"
                  size="xs"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SDK Support */}
      <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="MessageCircle" size={24} color="var(--color-primary)" />
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">SDK Support & Contributions</h3>
            <p className="text-sm text-text-secondary mb-4">
              Need help with our SDKs or want to contribute? We welcome community contributions and provide dedicated support channels.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                iconName="MessageSquare"
                iconPosition="left"
              >
                Discord Community
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Github"
                iconPosition="left"
              >
                Contribute on GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Mail"
                iconPosition="left"
              >
                SDK Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDKSection;