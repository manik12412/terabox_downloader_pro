import React from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonChart = () => {
  const comparisonData = [
    {
      fileSize: "100 MB",
      standardTime: "15-25 min",
      acceleratedTime: "2-3 min",
      speedImprovement: "8x faster",
      reliability: { standard: 60, accelerated: 99 }
    },
    {
      fileSize: "500 MB",
      standardTime: "45-90 min",
      acceleratedTime: "8-12 min",
      speedImprovement: "7x faster",
      reliability: { standard: 45, accelerated: 99 }
    },
    {
      fileSize: "1 GB",
      standardTime: "2-4 hours",
      acceleratedTime: "15-20 min",
      speedImprovement: "10x faster",
      reliability: { standard: 30, accelerated: 98 }
    },
    {
      fileSize: "5 GB",
      standardTime: "8-12 hours",
      acceleratedTime: "45-60 min",
      speedImprovement: "12x faster",
      reliability: { standard: 20, accelerated: 97 }
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border">
        <h3 className="text-xl font-bold text-text-primary mb-2">Speed Comparison</h3>
        <p className="text-text-secondary">See the dramatic difference in download times</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-semibold text-text-primary">File Size</th>
              <th className="text-left p-4 font-semibold text-text-primary">
                <div className="flex items-center space-x-2">
                  <Icon name="Turtle" size={16} color="var(--color-warning)" />
                  <span>Standard TeraBox</span>
                </div>
              </th>
              <th className="text-left p-4 font-semibold text-text-primary">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} color="var(--color-primary)" />
                  <span>Our Service</span>
                </div>
              </th>
              <th className="text-left p-4 font-semibold text-text-primary">Improvement</th>
              <th className="text-left p-4 font-semibold text-text-primary">Success Rate</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="font-medium text-text-primary">{row.fileSize}</div>
                </td>
                <td className="p-4">
                  <div className="text-warning font-medium">{row.standardTime}</div>
                  <div className="text-xs text-text-secondary">Often fails or times out</div>
                </td>
                <td className="p-4">
                  <div className="text-primary font-medium">{row.acceleratedTime}</div>
                  <div className="text-xs text-success">Consistent & reliable</div>
                </td>
                <td className="p-4">
                  <div className="inline-flex items-center space-x-1 px-2 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                    <Icon name="TrendingUp" size={12} />
                    <span>{row.speedImprovement}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-warning rounded-full"
                          style={{ width: `${row.reliability.standard}%` }}
                        />
                      </div>
                      <span className="text-xs text-text-secondary">{row.reliability.standard}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1.5 bg-border rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-success rounded-full"
                          style={{ width: `${row.reliability.accelerated}%` }}
                        />
                      </div>
                      <span className="text-xs text-text-secondary">{row.reliability.accelerated}%</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-muted/30 text-center">
        <p className="text-sm text-text-secondary">
          * Times based on average connection speeds. Results may vary based on network conditions.
        </p>
      </div>
    </div>
  );
};

export default ComparisonChart;