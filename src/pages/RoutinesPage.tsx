import React, { useState } from 'react';
import { Clock, Moon, Sun, Coffee, BookOpen, Dumbbell, Heart, CheckCircle2 } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function RoutinesPage() {
  const [selectedAge, setSelectedAge] = useState<'teen' | 'young-adult'>('teen');

  const teenRoutine = [
    { time: '10:00 PM - 6:30 AM', activity: 'Sleep', description: '8.5 hours of quality sleep', icon: Moon, color: 'bg-indigo-100 text-indigo-600' },
    { time: '6:30 - 7:30 AM', activity: 'Morning Routine', description: 'Wake up, hygiene, light breakfast', icon: Sun, color: 'bg-yellow-100 text-yellow-600' },
    { time: '7:30 - 8:30 AM', activity: 'Light Review', description: 'Study prep and light review', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { time: '9:00 AM - 12:00 PM', activity: 'Core Study Session', description: 'Best focus hours - deep learning', icon: BookOpen, color: 'bg-green-100 text-green-600' },
    { time: '12:00 - 1:00 PM', activity: 'Lunch & Relaxation', description: 'Nutritious meal and mental break', icon: Coffee, color: 'bg-orange-100 text-orange-600' },
    { time: '1:30 - 3:00 PM', activity: 'Afternoon Study', description: 'Continued learning session', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { time: '3:00 - 3:30 PM', activity: 'Short Break', description: 'Optional nap or walk', icon: Heart, color: 'bg-pink-100 text-pink-600' },
    { time: '3:30 - 4:30 PM', activity: 'Study/Homework', description: 'Assignments and practice', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { time: '4:30 - 6:00 PM', activity: 'Physical Activity', description: 'Exercise, hobbies, social time', icon: Dumbbell, color: 'bg-red-100 text-red-600' },
    { time: '7:00 - 9:00 PM', activity: 'Light Work', description: 'Review, creative work, or projects', icon: BookOpen, color: 'bg-purple-100 text-purple-600' },
    { time: '9:00 - 10:00 PM', activity: 'Relaxation', description: 'Reading, no screens', icon: Heart, color: 'bg-pink-100 text-pink-600' },
    { time: '10:00 PM', activity: 'Sleep Time', description: 'Begin sleep routine', icon: Moon, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const youngAdultRoutine = [
    { time: '11:00 PM - 7:00 AM', activity: 'Sleep', description: '8 hours of quality sleep', icon: Moon, color: 'bg-indigo-100 text-indigo-600' },
    { time: '7:00 - 8:00 AM', activity: 'Morning Routine', description: 'Breakfast, mindfulness/exercise', icon: Sun, color: 'bg-yellow-100 text-yellow-600' },
    { time: '9:00 AM - 12:00 PM', activity: 'Core Study/Work', description: 'High focus deep work session', icon: BookOpen, color: 'bg-green-100 text-green-600' },
    { time: '12:00 - 1:00 PM', activity: 'Lunch Break', description: 'Nutritious meal and short break', icon: Coffee, color: 'bg-orange-100 text-orange-600' },
    { time: '1:30 - 4:30 PM', activity: 'Deep Focus Work', description: 'Assignments and complex tasks', icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { time: '4:30 - 6:00 PM', activity: 'Physical Activity', description: 'Exercise or social break', icon: Dumbbell, color: 'bg-red-100 text-red-600' },
    { time: '6:00 - 7:00 PM', activity: 'Dinner & Relaxation', description: 'Evening meal and rest', icon: Coffee, color: 'bg-orange-100 text-orange-600' },
    { time: '7:00 - 9:00 PM', activity: 'Light Tasks', description: 'Review notes, creative work', icon: BookOpen, color: 'bg-purple-100 text-purple-600' },
    { time: '9:00 - 10:30 PM', activity: 'Screen-Free Time', description: 'Relaxation, reading, meditation', icon: Heart, color: 'bg-pink-100 text-pink-600' },
    { time: '11:00 PM', activity: 'Sleep Time', description: 'Begin sleep routine', icon: Moon, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const currentRoutine = selectedAge === 'teen' ? teenRoutine : youngAdultRoutine;

  const studyGuidelines = [
    'Use Pomodoro Timer: 25 minutes study, 5 minutes break',
    'After 4 sessions, take a 15–20 minute longer break',
    'Avoid late-night cramming - it reduces retention',
    'Study most challenging subjects during peak focus hours (morning)',
    'Keep your study space clean and well-lit',
    'Stay hydrated and take regular movement breaks'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Daily Routine Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Science-based schedules designed to optimize your sleep, study time, and overall well-being. 
            Choose your age group to see the recommended routine.
          </p>

          {/* Age Group Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200">
              <Button
                variant={selectedAge === 'teen' ? 'primary' : 'ghost'}
                onClick={() => setSelectedAge('teen')}
                className="mr-2"
              >
                Teens (14-17 years)
              </Button>
              <Button
                variant={selectedAge === 'young-adult' ? 'primary' : 'ghost'}
                onClick={() => setSelectedAge('young-adult')}
              >
                Young Adults (18-25 years)
              </Button>
            </div>
          </div>
        </div>

        {/* Routine Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Schedule */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="mr-3 h-6 w-6 text-blue-600" />
                {selectedAge === 'teen' ? 'Teen Schedule (14-17 years)' : 'Young Adult Schedule (18-25 years)'}
              </h2>

              <div className="space-y-4">
                {currentRoutine.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className={`p-2 rounded-lg ${item.color} mr-4 flex-shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.activity}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <div className="text-sm font-medium text-blue-600 mt-1 sm:mt-0">
                            {item.time}
                          </div>
                        </div>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-gray-300 ml-4 cursor-pointer hover:text-green-500 transition-colors" />
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Study Guidelines Sidebar */}
          <div>
            <Card className="mb-6">
              <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                Study Guidelines
              </h3>
              <ul className="space-y-3">
                {studyGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {guideline}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Pro Tips</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Consistency is key - try to stick to the same sleep/wake times</li>
                <li>• Avoid caffeine 6 hours before bedtime</li>
                <li>• Use blue light filters 2 hours before sleep</li>
                <li>• Keep your bedroom cool (65-68°F) for better sleep</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Start This Routine
            </Button>
            <Button variant="outline" size="lg">
              <Clock className="mr-2 h-5 w-5" />
              Customize Schedule
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Remember: It takes about 21 days to form a new habit. Be patient with yourself!
          </p>
        </div>
      </div>
    </div>
  );
}