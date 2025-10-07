import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { User } from '../types';
import { StatCardData } from '../types';
import { MessagesIcon, TicketsIcon, TasksIcon, CheckCircleIcon, ArrowUpIcon, ArrowDownIcon } from './icons';

const StatCard: React.FC<StatCardData> = ({ title, value, change, changeType, icon: Icon }) => {
    const isIncrease = changeType === 'increase';
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-text-secondary">{title}</p>
                <p className="text-3xl font-bold text-text-primary mt-2">{value}</p>
                <div className="flex items-center mt-2">
                    <span className={`flex items-center text-sm font-semibold ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                        {isIncrease ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        <span className="ml-1">{change}</span>
                    </span>
                    <span className="text-xs text-text-secondary ml-2">vs. hier</span>
                </div>
            </div>
            <div className="bg-whatsapp-green/10 text-whatsapp-green p-3 rounded-full">
                <Icon />
            </div>
        </div>
    );
};

const barChartData = [
  { name: 'Béatrice M.', traités: 40, résolus: 24, attente: 16 },
  { name: 'Charles L.', traités: 30, résolus: 18, attente: 12 },
  { name: 'David M.', traités: 25, résolus: 15, attente: 10 },
  { name: 'Équipe', traités: 95, résolus: 57, attente: 38 },
];

const pieChartData = [
  { name: 'Satisfaits', value: 400 },
  { name: 'Neutres', value: 80 },
  { name: 'Insatisfaits', value: 30 },
];
const COLORS = ['#25D366', '#34B7F1', '#ff8042'];

const Dashboard: React.FC<{ currentUser: User }> = ({ currentUser }) => {
  const stats: StatCardData[] = [
    { title: "Messages traités", value: "95", change: "+15%", changeType: 'increase', icon: MessagesIcon },
    { title: "Tickets en attente", value: "10", change: "-2%", changeType: 'decrease', icon: TicketsIcon },
    { title: "Délai de réponse moyen", value: "1h 15m", change: "-15m", changeType: 'decrease', icon: TasksIcon },
    { title: "Taux de satisfaction", value: "93%", change: "+1%", changeType: 'increase', icon: CheckCircleIcon },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Performance par commercial</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="traités" fill="#128C7E" name="Messages Traités"/>
              <Bar dataKey="résolus" fill="#25D366" name="Tickets Résolus" />
              <Bar dataKey="attente" fill="#FFC658" name="Tickets en Attente" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Satisfaction client</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;