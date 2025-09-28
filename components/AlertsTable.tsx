import React from 'react';
import { Clock, MapPin, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Alert {
  id: number;
  type: 'theft' | 'leak' | 'maintenance';
  location: string;
  timestamp: string;
  severity: 'high' | 'medium' | 'low';
  status: 'active' | 'resolved' | 'investigating';
  description: string;
}

interface AlertsTableProps {
  alerts?: Alert[];
  maxRows?: number;
}

const AlertsTable: React.FC<AlertsTableProps> = ({ alerts, maxRows = 5 }) => {
  const mockAlerts: Alert[] = [
    {
      id: 1,
      type: 'theft',
      location: 'Zone A-12, Sector 3',
      timestamp: '2024-01-15 14:32:15',
      severity: 'high',
      status: 'active',
      description: 'Unusual consumption pattern detected'
    },
    {
      id: 2,
      type: 'leak',
      location: 'Pipeline B-7, Junction 15',
      timestamp: '2024-01-15 13:45:22',
      severity: 'medium',
      status: 'investigating',
      description: 'Pressure drop detected in main line'
    },
    {
      id: 3,
      type: 'theft',
      location: 'Zone C-3, Building 8',
      timestamp: '2024-01-15 12:15:33',
      severity: 'low',
      status: 'resolved',
      description: 'Minor consumption anomaly'
    },
    {
      id: 4,
      type: 'maintenance',
      location: 'Station 15, Control Room',
      timestamp: '2024-01-15 11:20:45',
      severity: 'medium',
      status: 'active',
      description: 'Scheduled maintenance required'
    },
    {
      id: 5,
      type: 'leak',
      location: 'Pipeline A-3, Valve 22',
      timestamp: '2024-01-15 10:55:10',
      severity: 'high',
      status: 'investigating',
      description: 'Critical pressure loss detected'
    },
  ];

  const displayAlerts = (alerts || mockAlerts).slice(0, maxRows);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'investigating': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'theft': return 'text-red-600';
      case 'leak': return 'text-blue-600';
      case 'maintenance': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type & Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Severity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayAlerts.map((alert) => (
              <tr key={alert.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className={`text-sm font-medium capitalize ${getTypeColor(alert.type)}`}>
                      {alert.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {alert.location}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    {alert.timestamp}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getSeverityColor(alert.severity)}`}>
                    {alert.severity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(alert.status)}
                    <span className="ml-2 text-sm font-medium text-gray-900 capitalize">
                      {alert.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {alert.description}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200">
          View All Alerts →
        </button>
      </div>
    </div>
  );
};

export default AlertsTable;