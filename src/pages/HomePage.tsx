import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Clock, Star, ChevronRight, Moon, Sun, BookOpen, Target } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function HomePage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      grade: "A Student, Senior",
      text: "My GPA jumped from 3.2 to 3.8 after following the sleep routines. I feel more focused during lectures!",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Williams", 
      grade: "Computer Science, Junior",
      text: "The 30-day challenge changed my life. Better sleep = better code. No more all-nighters!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emma Rodriguez",
      grade: "Pre-Med, Sophomore", 
      text: "I used to crash every afternoon. Now I have steady energy all day thanks to proper sleep timing.",
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Optimized Study Schedules",
      description: "Science-based daily routines tailored for teens and young adults",
      color: "text-blue-600"
    },
    {
      icon: Moon,
      title: "Sleep Tracking",
      description: "Monitor your sleep patterns and get personalized recommendations",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Productivity Tools",
      description: "Pomodoro timers, task management, and focus techniques",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with peers and get expert guidance on healthy habits",
      color: "text-yellow-600"
    }
  ];

  const stats = [
    { number: "8.5", label: "Hours recommended sleep for teens" },
    { number: "25%", label: "Grade improvement with better sleep" },
    { number: "1000+", label: "Students already improving" },
    { number: "30", label: "Day challenge completion rate: 78%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
              Get Better Sleep,<br />
              <span className="text-blue-600">Boost Your Grades!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn how timely sleep can help you succeed. Join thousands of students who've transformed their academic performance through better sleep hygiene.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/routines">
                <Button size="lg" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Set Your Sleep Schedule
                </Button>
              </Link>
              <Link to="/sleep-quiz">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Take the Sleep Quiz
                </Button>
              </Link>
              <Link to="/challenge">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400">
                  <Trophy className="mr-2 h-5 w-5" />
                  Join 30-Day Challenge
                </Button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Everything You Need for Better Sleep & Study Habits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines scientific research with practical tools to help you optimize your daily routine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 mb-4 ${feature.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how better sleep habits have transformed academic performance and overall well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.grade}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sleep Science Infographic */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Sleep Matters for Academic Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="text-blue-600 mb-4">
                <BookOpen className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Memory Consolidation</h3>
              <p className="text-blue-700 text-sm">Sleep helps transfer information from short-term to long-term memory, improving retention by up to 40%.</p>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="text-green-600 mb-4">
                <Target className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Focus & Attention</h3>
              <p className="text-green-700 text-sm">Well-rested students show 25% better concentration and are less likely to make careless mistakes.</p>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="text-purple-600 mb-4">
                <Sun className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Mood & Stress</h3>
              <p className="text-purple-700 text-sm">Adequate sleep reduces cortisol levels and improves emotional regulation during exam periods.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to Transform Your Academic Performance?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've improved their grades and well-being through better sleep habits.
          </p>
          <Link to="/sleep-tracker">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}