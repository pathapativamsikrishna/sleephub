import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Moon, Clock, TrendingUp, Award, Plus, Calendar } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function SleepTrackerPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month'>('week');

  // Sample sleep data
  const weeklyData = [
    { day: 'Mon', hours: 7.5, quality: 4, bedtime: '22:30', wakeup: '06:00' },
    { day: 'Tue', hours: 8.0, quality: 5, bedtime: '22:00', wakeup: '06:00' },
    { day: 'Wed', hours: 6.5, quality: 3, bedtime: '23:30', wakeup: '06:00' },
    { day: 'Thu', hours: 8.5, quality: 5, bedtime: '21:30', wakeup: '06:00' },
    { day: 'Fri', hours: 7.0, quality: 4, bedtime: '23:00', wakeup: '06:00' },
    { day: 'Sat', hours: 9.0, quality: 5, bedtime: '22:00', wakeup: '07:00' },
    { day: 'Sun', hours: 8.0, quality: 4, bedtime: '22:30', wakeup: '06:30' },
  ];

  const monthlyData = [
    { week: 'Week 1', avgHours: 7.8, avgQuality: 4.2 },
    { week: 'Week 2', avgHours: 7.5, avgQuality: 4.0 },
    { week: 'Week 3', avgHours: 8.1, avgQuality: 4.4 },
    { week: 'Week 4', avgHours: 7.9, avgQuality: 4.3 },
  ];

  const currentData = selectedPeriod === 'week' ? weeklyData : monthlyData;
  const averageHours = selectedPeriod === 'week' 
    ? (weeklyData.reduce((sum, day) => sum + day.hours, 0) / weeklyData.length).toFixed(1)
    : (monthlyData.reduce((sum, week) => sum + week.avgHours, 0) / monthlyData.length).toFixed(1);

  const averageQuality = selectedPeriod === 'week'
    ? (weeklyData.reduce((sum, day) => sum + day.quality, 0) / weeklyData.length).toFixed(1)
    : (monthlyData.reduce((sum, week) => sum + week.avgQuality, 0) / monthlyData.length).toFixed(1);

  const getQualityColor = (quality: number) => {
    if (quality >= 4.5) return 'text-green-600';
    if (quality >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getSleepAdvice = () => {
    const avgHours = parseFloat(averageHours);
    const avgQual = parseFloat(averageQuality);

    if (avgHours >= 8 && avgQual >= 4) {
      return "Excellent! You're maintaining great sleep habits. Keep it up!";
    } else if (avgHours < 7) {
      return "You're getting less than 7 hours of sleep. Try going to bed 30 minutes earlier.";
    } else if (avgQual < 3.5) {
      return "Your sleep quality could improve. Consider reducing screen time before bed.";
    }
    return "Good progress! Small adjustments to your routine can help optimize your sleep further.";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Sleep Tracker Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor your sleep patterns, track improvements, and get personalized recommendations for better rest.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{averageHours}</div>
            <div className="text-sm text-gray-600">Average Hours</div>
            <div className="text-xs text-gray-500 mt-1">This {selectedPeriod}</div>
          </Card>
          
          <Card className="text-center">
            <div className={`text-3xl font-bold mb-2 ${getQualityColor(parseFloat(averageQuality))}`}>
              {averageQuality}/5
            </div>
            <div className="text-sm text-gray-600">Sleep Quality</div>
            <div className="text-xs text-gray-500 mt-1">Average rating</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-sm text-gray-600">Streak Days</div>
            <div className="text-xs text-gray-500 mt-1">Consistent schedule</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
            <div className="text-sm text-gray-600">Goal Achievement</div>
            <div className="text-xs text-gray-500 mt-1">8+ hours target</div>
          </Card>
        </div>

        {/* Period Selector and Add Entry */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex bg-white p-1 rounded-lg shadow-sm border border-gray-200 mb-4 sm:mb-0">
            <Button
              variant={selectedPeriod === 'week' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedPeriod('week')}
            >
              This Week
            </Button>
            <Button
              variant={selectedPeriod === 'month' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedPeriod('month')}
            >
              This Month
            </Button>
          </div>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Log Sleep Entry
          </Button>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Sleep Hours Chart */}
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-blue-600" />
              Sleep Hours
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey={selectedPeriod === 'week' ? 'day' : 'week'} 
                  tick={{ fontSize: 12 }}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => [`${value} hours`, 'Sleep Time']}
                  labelStyle={{ color: '#374151' }}
                />
                <Bar 
                  dataKey={selectedPeriod === 'week' ? 'hours' : 'avgHours'} 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Sleep Quality Chart */}
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
              Sleep Quality
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={currentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey={selectedPeriod === 'week' ? 'day' : 'week'} 
                  tick={{ fontSize: 12 }}
                />
                <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => [`${value}/5`, 'Quality Rating']}
                  labelStyle={{ color: '#374151' }}
                />
                <Line 
                  type="monotone" 
                  dataKey={selectedPeriod === 'week' ? 'quality' : 'avgQuality'} 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Detailed Data and Insights */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Sleep Entries */}
          <div className="lg:col-span-2">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                Recent Sleep Entries
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2">Date</th>
                      <th className="text-left py-2">Bedtime</th>
                      <th className="text-left py-2">Wake Up</th>
                      <th className="text-left py-2">Hours</th>
                      <th className="text-left py-2">Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeklyData.map((entry, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 font-medium">{entry.day}</td>
                        <td className="py-3">{entry.bedtime}</td>
                        <td className="py-3">{entry.wakeup}</td>
                        <td className="py-3">{entry.hours}h</td>
                        <td className="py-3">
                          <span className={`font-medium ${getQualityColor(entry.quality)}`}>
                            {entry.quality}/5
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Insights and Recommendations */}
          <div>
            <Card className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Award className="mr-2 h-5 w-5 text-yellow-600" />
                Your Progress
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-green-800">Sleep Goal Achievement</span>
                  <span className="font-bold text-green-600">5/7 days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-blue-800">Consistency Score</span>
                  <span className="font-bold text-blue-600">85%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm text-purple-800">Quality Improvement</span>
                  <span className="font-bold text-purple-600">+0.3</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <Moon className="mr-2 h-5 w-5" />
                Smart Insights
              </h3>
              <p className="text-blue-800 text-sm mb-4">
                {getSleepAdvice()}
              </p>
              <div className="space-y-2 text-sm text-blue-700">
                <div>• Your best sleep day was Saturday (9 hours)</div>
                <div>• Most consistent bedtime: 22:30</div>
                <div>• Recommendation: Try to sleep before 23:00 on weekdays</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}