import React from 'react';
import { Brain, Plane, MessageCircle, MapPin, Activity, Zap, Shield, Users } from 'lucide-react';

const RightSidebar: React.FC = () => {
  const aiModels = [
    { name: 'Theft Detection', accuracy: 96.8, status: 'active' },
    { name: 'Leak Detection', accuracy: 94.2, status: 'active' },
    { name: 'Drone Analysis', accuracy: 91.5, status: 'training' },
  ];

  const droneFleet = [
    { id: 'DR-001', battery: 85, status: 'patrolling', location: 'Zone A' },
    { id: 'DR-002', battery: 42, status: 'charging', location: 'Base' },
    { id: 'DR-003', battery: 78, status: 'patrolling', location: 'Zone C' },
  ];

  const riskAreas = [
    { zone: 'Zone A-12', risk: 'High', theft: 3, leaks: 1 },
    { zone: 'Zone B-7', risk: 'Medium', theft: 1, leaks: 2 },
    { zone: 'Zone C-3', risk: 'Low', theft: 0, leaks: 0 },
  ];

  return (
    <div className="w-80 bg-white shadow-lg border-l border-gray-200 p-6 overflow-y-auto">
      {/* AI Model Performance */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-600" />
          AI Models
        </h3>
        <div className="space-y-3">
          {aiModels.map((model, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{model.name}</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  model.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {model.status}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{ width: `${model.accuracy}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">{model.accuracy}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drone Fleet Status */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Plane className="w-5 h-5 mr-2 text-blue-600" />
          Drone Fleet
        </h3>
        <div className="space-y-3">
          {droneFleet.map((drone) => (
            <div key={drone.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{drone.id}</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  drone.status === 'patrolling' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {drone.status}
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="w-3 h-3 text-yellow-500" />
                <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full ${drone.battery > 50 ? 'bg-green-500' : 'bg-yellow-500'}`}
                    style={{ width: `${drone.battery}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-600">{drone.battery}%</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-600">
                <MapPin className="w-3 h-3" />
                <span>{drone.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Heat Map */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-red-600" />
          Risk Areas
        </h3>
        <div className="space-y-3">
          {riskAreas.map((area, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{area.zone}</span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  area.risk === 'High' ? 'bg-red-100 text-red-800' :
                  area.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {area.risk}
                </span>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-600">
                <div className="flex items-center space-x-1">
                  <Shield className="w-3 h-3 text-red-500" />
                  <span>{area.theft} theft</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="w-3 h-3 text-blue-500" />
                  <span>{area.leaks} leaks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Chat */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
          AI Assistant
        </h3>
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Spectra AI</p>
              <p className="text-xs text-gray-600">Online • Ready to help</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Ask me about energy theft patterns, pipeline safety, or system status.
          </p>
          <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;