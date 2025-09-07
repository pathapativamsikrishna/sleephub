import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Plus, Check, Clock, Target, BookOpen, Trophy } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function StudyToolsPage() {
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'work' | 'break' | 'longBreak'>('work');
  const [completedSessions, setCompletedSessions] = useState(0);
  const [newTask, setNewTask] = useState('');
  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete Math Assignment Chapter 5', priority: 'high' as const, completed: false, estimatedTime: 90 },
    { id: 2, title: 'Study Biology - Cell Structure', priority: 'medium' as const, completed: false, estimatedTime: 60 },
    { id: 3, title: 'Read History Chapter 12', priority: 'low' as const, completed: true, estimatedTime: 45 },
    { id: 4, title: 'Practice Spanish Vocabulary', priority: 'medium' as const, completed: false, estimatedTime: 30 },
  ]);

  // Pomodoro timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime((time) => time - 1);
      }, 1000);
    } else if (pomodoroTime === 0) {
      setIsRunning(false);
      // Handle phase transitions
      if (currentPhase === 'work') {
        setCompletedSessions(prev => prev + 1);
        if ((completedSessions + 1) % 4 === 0) {
          setCurrentPhase('longBreak');
          setPomodoroTime(15 * 60); // 15 minutes long break
        } else {
          setCurrentPhase('break');
          setPomodoroTime(5 * 60); // 5 minutes short break
        }
      } else {
        setCurrentPhase('work');
        setPomodoroTime(25 * 60); // Back to 25 minutes work
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, pomodoroTime, currentPhase, completedSessions]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setPomodoroTime(25 * 60);
    setCurrentPhase('work');
  };

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        title: newTask,
        priority: 'medium' as const,
        completed: false,
        estimatedTime: 30
      };
      setTasks([task, ...tasks]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPhaseTitle = () => {
    switch (currentPhase) {
      case 'work': return 'Focus Time';
      case 'break': return 'Short Break';
      case 'longBreak': return 'Long Break';
      default: return 'Focus Time';
    }
  };

  const getPhaseColor = () => {
    switch (currentPhase) {
      case 'work': return 'from-blue-500 to-blue-600';
      case 'break': return 'from-green-500 to-green-600';
      case 'longBreak': return 'from-purple-500 to-purple-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Study & Productivity Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Boost your focus and productivity with our Pomodoro timer and smart task management system.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{completedSessions}</div>
            <div className="text-sm text-gray-600">Completed Sessions</div>
            <div className="text-xs text-gray-500 mt-1">Today</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{completedTasks}</div>
            <div className="text-sm text-gray-600">Tasks Completed</div>
            <div className="text-xs text-gray-500 mt-1">Out of {totalTasks}</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {(completedSessions * 25)} min
            </div>
            <div className="text-sm text-gray-600">Focus Time</div>
            <div className="text-xs text-gray-500 mt-1">Today</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {Math.round((completedTasks / totalTasks) * 100) || 0}%
            </div>
            <div className="text-sm text-gray-600">Completion Rate</div>
            <div className="text-xs text-gray-500 mt-1">Today's goals</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pomodoro Timer */}
          <div className="lg:col-span-1">
            <Card className="text-center">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Pomodoro Timer
              </h2>

              {/* Timer Display */}
              <div className={`w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center shadow-lg`}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {formatTime(pomodoroTime)}
                  </div>
                  <div className="text-white text-sm opacity-90">
                    {getPhaseTitle()}
                  </div>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex justify-center space-x-4 mb-6">
                {!isRunning ? (
                  <Button onClick={handleStart} size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Start
                  </Button>
                ) : (
                  <Button onClick={handlePause} variant="outline" size="lg">
                    <Pause className="mr-2 h-5 w-5" />
                    Pause
                  </Button>
                )}
                <Button onClick={handleReset} variant="ghost" size="lg">
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Reset
                </Button>
              </div>

              {/* Session Progress */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Sessions Completed</span>
                  <span className="font-semibold">{completedSessions}/4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedSessions % 4) * 25}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Next: {completedSessions % 4 === 3 ? 'Long Break (15 min)' : 'Short Break (5 min)'}
                </p>
              </div>
            </Card>

            {/* Pomodoro Guidelines */}
            <Card className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                How It Works
              </h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Work for 25 minutes with full focus</li>
                <li>• Take a 5-minute break</li>
                <li>• After 4 sessions, take a 15-minute break</li>
                <li>• Repeat the cycle throughout your study session</li>
              </ul>
            </Card>
          </div>

          {/* Task Management */}
          <div className="lg:col-span-2">
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-playfair font-bold text-gray-900 flex items-center">
                  <Target className="mr-2 h-6 w-6 text-green-600" />
                  Task Priority List
                </h2>
                <div className="text-sm text-gray-600">
                  {completedTasks}/{totalTasks} completed
                </div>
              </div>

              {/* Add New Task */}
              <div className="flex gap-3 mb-6">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                />
                <Button onClick={addTask}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </div>

              {/* Task List */}
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
                  >
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="mr-4 p-1 rounded-full hover:bg-gray-100"
                    >
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        {task.completed && <Check className="h-3 w-3 text-green-600" />}
                      </div>
                    </button>

                    <div className="flex-1">
                      <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.title}
                      </h3>
                      <div className="flex items-center mt-1 space-x-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority} priority
                        </span>
                        <span className="text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {task.estimatedTime} min
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Completed Tasks */}
                {tasks.filter(task => task.completed).length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                      <Trophy className="mr-2 h-5 w-5 text-green-600" />
                      Completed Tasks ({completedTasks})
                    </h3>
                    <div className="space-y-2">
                      {tasks.filter(task => task.completed).map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg opacity-75"
                        >
                          <button
                            onClick={() => toggleTask(task.id)}
                            className="mr-3 p-1 rounded-full"
                          >
                            <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          </button>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-700 line-through">{task.title}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}