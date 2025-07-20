import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeExamples = () => {
  const [activeLanguage, setActiveLanguage] = useState('javascript');

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: 'Code' },
    { id: 'python', name: 'Python', icon: 'FileCode' },
    { id: 'php', name: 'PHP', icon: 'Code2' },
    { id: 'curl', name: 'cURL', icon: 'Terminal' }
  ];

  const codeExamples = {
    javascript: {
      basic: `// Basic download request
const response = await fetch('https://api.teraboxpro.com/v1/download', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer tbp_live_abc123def456ghi789',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://terabox.com/s/1abc2def3ghi4jkl',
    format: 'original'
  })
});

const data = await response.json();
console.log('Download URL:', data.download_url);`,
      
      batch: `// Batch download with progress tracking
const batchDownload = async (urls) => {
  const response = await fetch('https://api.teraboxpro.com/v1/batch-download', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer tbp_live_abc123def456ghi789',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      urls: urls,
      format: 'original',
      webhook_url: 'https://yourapp.com/webhook'
    })
  });
  
  const batch = await response.json();
  
  // Poll for status updates
  const checkStatus = async () => {
    const statusResponse = await fetch(
      \`https://api.teraboxpro.com/v1/batch/\${batch.batch_id}/status\`,
      {
        headers: {
          'Authorization': 'Bearer tbp_live_abc123def456ghi789'
        }
      }
    );
    
    const status = await statusResponse.json();
    console.log(\`Progress: \${status.completed}/\${status.total}\`);
    
    if (status.status !== 'completed') {
      setTimeout(checkStatus, 2000);
    }
  };
  
  checkStatus();
};`,

      webhook: `// Webhook handler for download completion
app.post('/webhook', (req, res) => {
  const { event, download_id, status, download_url } = req.body;
  
  switch (event) {
    case 'download.completed':
      console.log(\`Download \${download_id} completed: \${download_url}\`);
      // Process completed download
      break;
      
    case 'download.failed':
      console.log(\`Download \${download_id} failed: \${status.error}\`);
      // Handle failed download
      break;
      
    case 'download.progress':
      console.log(\`Download \${download_id} progress: \${status.progress}%\`);
      // Update progress UI
      break;
  }
  
  res.status(200).send('OK');
});`
    },

    python: {
      basic: `import requests
import json

# Basic download request
def download_file(terabox_url, api_key):
    url = "https://api.teraboxpro.com/v1/download"
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "url": terabox_url,
        "format": "original"
    }
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        data = response.json()
        return data["download_url"]
    else:
        raise Exception(f"API Error: {response.status_code}")

# Usage
api_key = "tbp_live_abc123def456ghi789"
terabox_url = "https://terabox.com/s/1abc2def3ghi4jkl"
download_url = download_file(terabox_url, api_key)
print(f"Download URL: {download_url}")`,

      batch: `import requests
import time
from typing import List

class TeraBoxAPI:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.teraboxpro.com/v1"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def batch_download(self, urls: List[str], webhook_url: str = None):
        payload = {
            "urls": urls,
            "format": "original"
        }
        
        if webhook_url:
            payload["webhook_url"] = webhook_url
        
        response = requests.post(
            f"{self.base_url}/batch-download",
            headers=self.headers,
            json=payload
        )
        
        return response.json()
    
    def check_batch_status(self, batch_id: str):
        response = requests.get(
            f"{self.base_url}/batch/{batch_id}/status",
            headers=self.headers
        )
        
        return response.json()
    
    def wait_for_completion(self, batch_id: str, timeout: int = 300):
        start_time = time.time()
        
        while time.time() - start_time < timeout:
            status = self.check_batch_status(batch_id)
            
            if status["status"] == "completed":
                return status
            elif status["status"] == "failed":
                raise Exception(f"Batch failed: {status['error']}")
            
            print(f"Progress: {status['completed']}/{status['total']}")
            time.sleep(5)
        
        raise TimeoutError("Batch download timeout")

# Usage
api = TeraBoxAPI("tbp_live_abc123def456ghi789")
urls = [
    "https://terabox.com/s/1abc2def3ghi4jkl",
    "https://terabox.com/s/2def3ghi4jkl5mno"
]

batch = api.batch_download(urls)
result = api.wait_for_completion(batch["batch_id"])
print("All downloads completed!")`,

      webhook: `from flask import Flask, request, jsonify
import hmac
import hashlib

app = Flask(__name__)

def verify_webhook_signature(payload, signature, secret):
    """Verify webhook signature for security"""
    expected_signature = hmac.new(
        secret.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    # Verify signature (recommended for production)
    signature = request.headers.get('X-TeraBox-Signature')
    webhook_secret = "your_webhook_secret"
    
    if not verify_webhook_signature(request.data, signature, webhook_secret):
        return jsonify({"error": "Invalid signature"}), 401
    
    data = request.json
    event = data.get('event')
    download_id = data.get('download_id')
    
    if event == 'download.completed':
        download_url = data.get('download_url')
        print(f"Download {download_id} completed: {download_url}")
        # Process completed download
        
    elif event == 'download.failed':
        error = data.get('error')
        print(f"Download {download_id} failed: {error}")
        # Handle failed download
        
    elif event == 'download.progress':
        progress = data.get('progress')
        print(f"Download {download_id} progress: {progress}%")
        # Update progress in your application
    
    return jsonify({"status": "received"}), 200

if __name__ == '__main__':
    app.run(debug=True)`
    },

    php: {
      basic: `<?php

class TeraBoxAPI {
    private $apiKey;
    private $baseUrl = 'https://api.teraboxpro.com/v1';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function downloadFile($teraboxUrl, $format = 'original') {
        $url = $this->baseUrl . '/download';
        
        $data = [
            'url' => $teraboxUrl,
            'format' => $format
        ];
        
        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 200) {
            $result = json_decode($response, true);
            return $result['download_url'];
        } else {
            throw new Exception('API Error: ' . $httpCode);
        }
    }
}

// Usage
$api = new TeraBoxAPI('tbp_live_abc123def456ghi789');
$teraboxUrl = 'https://terabox.com/s/1abc2def3ghi4jkl';

try {
    $downloadUrl = $api->downloadFile($teraboxUrl);
    echo "Download URL: " . $downloadUrl . "\\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}

?>`,

      batch: `<?php

class TeraBoxBatchAPI {
    private $apiKey;
    private $baseUrl = 'https://api.teraboxpro.com/v1';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function batchDownload($urls, $webhookUrl = null) {
        $url = $this->baseUrl . '/batch-download';
        
        $data = [
            'urls' => $urls,
            'format' => 'original'
        ];
        
        if ($webhookUrl) {
            $data['webhook_url'] = $webhookUrl;
        }
        
        return $this->makeRequest($url, $data);
    }
    
    public function checkBatchStatus($batchId) {
        $url = $this->baseUrl . '/batch/' . $batchId . '/status';
        return $this->makeRequest($url, null, 'GET');
    }
    
    public function waitForCompletion($batchId, $timeout = 300) {
        $startTime = time();
        
        while (time() - $startTime < $timeout) {
            $status = $this->checkBatchStatus($batchId);
            
            if ($status['status'] === 'completed') {
                return $status;
            } elseif ($status['status'] === 'failed') {
                throw new Exception('Batch failed: ' . $status['error']);
            }
            
            echo "Progress: {$status['completed']}/{$status['total']}\\n";
            sleep(5);
        }
        
        throw new Exception('Batch download timeout');
    }
    
    private function makeRequest($url, $data = null, $method = 'POST') {
        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json'
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        if ($method === 'POST' && $data) {
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        }
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 200) {
            return json_decode($response, true);
        } else {
            throw new Exception('API Error: ' . $httpCode);
        }
    }
}

// Usage
$api = new TeraBoxBatchAPI('tbp_live_abc123def456ghi789');
$urls = [
    'https://terabox.com/s/1abc2def3ghi4jkl',
    'https://terabox.com/s/2def3ghi4jkl5mno'
];

try {
    $batch = $api->batchDownload($urls);
    echo "Batch ID: " . $batch['batch_id'] . "\\n";
    
    $result = $api->waitForCompletion($batch['batch_id']);
    echo "All downloads completed!\\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}

?>`,

      webhook: `<?php

// Webhook handler for TeraBox API events
function verifyWebhookSignature($payload, $signature, $secret) {
    $expectedSignature = 'sha256=' . hash_hmac('sha256', $payload, $secret);
    return hash_equals($expectedSignature, $signature);
}

// Get raw POST data
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_TERABOX_SIGNATURE'] ?? '';
$webhookSecret = 'your_webhook_secret';

// Verify signature for security
if (!verifyWebhookSignature($payload, $signature, $webhookSecret)) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

// Parse JSON data
$data = json_decode($payload, true);
$event = $data['event'] ?? '';
$downloadId = $data['download_id'] ?? '';

switch ($event) {
    case 'download.completed':
        $downloadUrl = $data['download_url'] ?? '';
        error_log("Download $downloadId completed: $downloadUrl");
        
        // Process completed download
        // Example: Save to database, send notification, etc.
        processCompletedDownload($downloadId, $downloadUrl);
        break;
        
    case 'download.failed':
        $error = $data['error'] ?? '';
        error_log("Download $downloadId failed: $error");
        
        // Handle failed download
        handleFailedDownload($downloadId, $error);
        break;
        
    case 'download.progress':
        $progress = $data['progress'] ?? 0;
        error_log("Download $downloadId progress: {$progress}%");
        
        // Update progress in your application
        updateDownloadProgress($downloadId, $progress);
        break;
        
    default:
        error_log("Unknown webhook event: $event");
}

// Send success response
http_response_code(200);
echo json_encode(['status' => 'received']);

function processCompletedDownload($downloadId, $downloadUrl) {
    // Your implementation here
    // Example: Update database, send email notification, etc.
}

function handleFailedDownload($downloadId, $error) {
    // Your implementation here
    // Example: Log error, retry download, notify user, etc.
}

function updateDownloadProgress($downloadId, $progress) {
    // Your implementation here
    // Example: Update progress bar, send real-time updates, etc.
}

?>`
    },

    curl: {
      basic: `# Basic download request
curl -X POST "https://api.teraboxpro.com/v1/download" \\
  -H "Authorization: Bearer tbp_live_abc123def456ghi789"\ -H"Content-Type: application/json" \\
  -d '{
    "url": "https://terabox.com/s/1abc2def3ghi4jkl",
    "format": "original"
  }'

# Response:
# {
#   "success": true,
#   "download_id": "dl_789xyz123abc",
#   "download_url": "https://cdn.teraboxpro.com/files/...",
#   "expires_at": "2025-07-20T08:29:17Z",
#   "file_info": {
#     "name": "document.pdf",
#     "size": 2048576,
#     "type": "application/pdf"
#   }
# }`,

      batch: `# Batch download request
curl -X POST "https://api.teraboxpro.com/v1/batch-download" \\
  -H "Authorization: Bearer tbp_live_abc123def456ghi789"\ -H"Content-Type: application/json" \\
  -d '{
    "urls": [
      "https://terabox.com/s/1abc2def3ghi4jkl",
      "https://terabox.com/s/2def3ghi4jkl5mno",
      "https://terabox.com/s/3ghi4jkl5mno6pqr"
    ],
    "format": "original",
    "webhook_url": "https://yourapp.com/webhook"
  }'

# Check batch status
curl -X GET "https://api.teraboxpro.com/v1/batch/batch_abc123/status" \\
  -H "Authorization: Bearer tbp_live_abc123def456ghi789"

# Response:
# {
#   "batch_id": "batch_abc123",
#   "status": "processing",
#   "total": 3,
#   "completed": 1,
#   "failed": 0,
#   "downloads": [
#     {
#       "url": "https://terabox.com/s/1abc2def3ghi4jkl",
#       "status": "completed",
#       "download_url": "https://cdn.teraboxpro.com/files/..."
#     }
#   ]
# }`,

      webhook: `# Test webhook endpoint
curl -X POST "https://yourapp.com/webhook" \\
  -H "Content-Type: application/json"\ -H"X-TeraBox-Signature: sha256=abc123..." \\
  -d '{
    "event": "download.completed",
    "download_id": "dl_789xyz123abc",
    "download_url": "https://cdn.teraboxpro.com/files/document.pdf",
    "file_info": {
      "name": "document.pdf",
      "size": 2048576,
      "type": "application/pdf"
    },
    "timestamp": "2025-07-20T07:29:17Z"
  }'

# Get download history
curl -X GET "https://api.teraboxpro.com/v1/downloads?limit=10&offset=0" \\
  -H "Authorization: Bearer tbp_live_abc123def456ghi789"

# Get specific download status
curl -X GET "https://api.teraboxpro.com/v1/download/dl_789xyz123abc/status" \\
  -H "Authorization: Bearer tbp_live_abc123def456ghi789"

# Delete download record
curl -X DELETE "https://api.teraboxpro.com/v1/download/dl_789xyz123abc" \\
  -H "Authorization: Bearer tbp_live_abc123def456ghi789"`
    }
  };

  const examples = [
    { id: 'basic', title: 'Basic Download', description: 'Simple file download request' },
    { id: 'batch', title: 'Batch Processing', description: 'Multiple files with progress tracking' },
    { id: 'webhook', title: 'Webhook Handler', description: 'Real-time event notifications' }
  ];

  const [activeExample, setActiveExample] = useState('basic');

  return (
    <div className="bg-white rounded-xl border border-border p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-conversion-accent to-success rounded-lg flex items-center justify-center">
          <Icon name="FileCode" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">Code Examples</h2>
          <p className="text-sm text-text-secondary">Ready-to-use code snippets in multiple languages</p>
        </div>
      </div>

      {/* Language Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {languages.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setActiveLanguage(lang.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
              activeLanguage === lang.id
                ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/30 text-text-secondary hover:text-primary'
            }`}
          >
            <Icon name={lang.icon} size={16} />
            <span className="font-medium">{lang.name}</span>
          </button>
        ))}
      </div>

      {/* Example Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((example) => (
          <button
            key={example.id}
            onClick={() => setActiveExample(example.id)}
            className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
              activeExample === example.id
                ? 'border-secondary bg-secondary/5 text-secondary' :'border-border hover:border-secondary/30 text-text-secondary hover:text-secondary'
            }`}
          >
            <div className="text-left">
              <div className="font-medium">{example.title}</div>
              <div className="text-xs opacity-70">{example.description}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono">
            {languages.find(l => l.id === activeLanguage)?.name} - {examples.find(e => e.id === activeExample)?.title}
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
          <pre className="text-sm text-gray-100 font-mono">
            <code>{codeExamples[activeLanguage][activeExample]}</code>
          </pre>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
            <div>
              <h4 className="font-medium text-primary mb-1">Pro Tip</h4>
              <p className="text-sm text-text-secondary">
                Use webhooks for real-time updates instead of polling for better performance and user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={20} color="var(--color-warning)" />
            <div>
              <h4 className="font-medium text-warning mb-1">Security Note</h4>
              <p className="text-sm text-text-secondary">
                Always verify webhook signatures in production to ensure requests are from TeraBox API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExamples;