import React from 'react';
import DashboardCard from '@/components/DashboardCard';
import GraphComponent from '@/components/GraphComponent';
import AlertsTable from '@/components/AlertsTable';
import { 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  Shield,
  Droplets,
  Battery,
  Users,
  Target
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-content">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="text-30 font-bold text-gray-900 mb-2">Energy Monitoring Dashboard</h1>
        <p className="text-16 text-gray-600">Real-time insights into electricity theft and pipeline monitoring</p>
      </div>

      {/* Key Metrics */}
      <div className="dashboard-grid-full">
        <DashboardCard
          title="Active Alerts"
          value="3"
          change="-2 from yesterday"
          changeType="positive"
          icon={AlertTriangle}
          color="red"
        />
        
        <DashboardCard
          title="Detection Accuracy"
          value="94.2%"
          change="+1.3% this week"
          changeType="positive"
          icon={Target}
          color="green"
        />
        
        <DashboardCard
          title="Response Time"
          value="4.3m"
          change="avg this month"
          changeType="neutral"
          icon={Clock}
          color="blue"
        />
        
        <DashboardCard
          title="Monitored Zones"
          value="847"
          change="+12 this month"
          changeType="positive"
          icon={Users}
          color="purple"
        />
      </div>

      {/* Charts Row */}
      <div className="dashboard-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Electricity Consumption Trends</h3>
          <div className="h-[300px] bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pipeline Pressure Monitoring</h3>
          <div className="h-[300px] bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder</p>
          </div>
        </div>
      </div>

      {/* Secondary Metrics */}
      <div className="dashboard-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Theft Cases Prevented"
          value="28"
          change="+15% vs last month"
          changeType="positive"
          icon={Shield}
          color="green"
        />
        
        <DashboardCard
          title="Pipeline Integrity"
          value="98.7%"
          change="Excellent status"
          changeType="positive"
          icon={Droplets}
          color="blue"
        />
        
        <DashboardCard
          title="Energy Efficiency"
          value="91.4%"
          change="+2.1% improvement"
          changeType="positive"
          icon={Battery}
          color="yellow"
        />
      </div>

      {/* Recent Alerts Table */}
      <div>
        <AlertsTable maxRows={5} />
      </div>
    </div>
  );
};

export default Dashboard;