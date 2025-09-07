import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Clock, Users, Star, TrendingUp, MessageCircle, Plus } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const forumPosts = [
    {
      id: 1,
      title: "How I improved my GPA from 2.8 to 3.6 with better sleep",
      author: "Sarah M.",
      category: "success-stories",
      content: "After 3 months of following the sleep schedule for young adults, my focus during lectures improved dramatically...",
      replies: 24,
      likes: 87,
      timeAgo: "2 hours ago",
      badge: "Sleep Champion",
      isExpert: false
    },
    {
      id: 2,
      title: "The science behind REM sleep and memory consolidation",
      author: "Dr. Jennifer Walsh",
      category: "expert-qa",
      content: "Many students ask about the relationship between REM sleep and learning. Here's what the research shows...",
      replies: 15,
      likes: 134,
      timeAgo: "5 hours ago",
      badge: "Sleep Expert",
      isExpert: true
    },
    {
      id: 3,
      title: "Struggling with late-night study sessions - any tips?",
      author: "Mike C.",
      category: "peer-support",
      content: "I have a big exam coming up and I keep staying up until 2 AM studying. How do you balance study time with proper sleep?",
      replies: 32,
      likes: 28,
      timeAgo: "8 hours ago",
      badge: "New Member",
      isExpert: false
    },
    {
      id: 4,
      title: "30-Day Challenge: Week 2 Update & Motivation",
      author: "Alex R.",
      category: "challenges",
      content: "Week 2 of the sleep challenge is done! Sharing my progress and what's helping me stay consistent...",
      replies: 18,
      likes: 56,
      timeAgo: "1 day ago",
      badge: "Challenge Warrior",
      isExpert: false
    },
    {
      id: 5,
      title: "Blue light filters: Do they actually work?",
      author: "Dr. Marcus Chen",
      category: "expert-qa",
      content: "There's a lot of discussion about blue light and sleep quality. Let me break down the current research...",
      replies: 41,
      likes: 203,
      timeAgo: "2 days ago",
      badge: "Sleep Researcher",
      isExpert: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: forumPosts.length },
    { id: 'success-stories', name: 'Success Stories', count: 1 },
    { id: 'expert-qa', name: 'Expert Q&A', count: 2 },
    { id: 'peer-support', name: 'Peer Support', count: 1 },
    { id: 'challenges', name: 'Challenges', count: 1 }
  ];

  const leaderboard = [
    { rank: 1, name: "Emma Rodriguez", points: 1250, badge: "Sleep Master", avatar: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { rank: 2, name: "Marcus Williams", points: 1180, badge: "Consistency King", avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { rank: 3, name: "Sarah Chen", points: 1050, badge: "Early Bird", avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { rank: 4, name: "Alex Thompson", points: 920, badge: "Night Owl Reformed", avatar: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { rank: 5, name: "Jordan Kim", points: 890, badge: "Study Optimizer", avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory);

  const getBadgeColor = (badge: string) => {
    if (badge.includes('Expert') || badge.includes('Researcher')) return 'bg-purple-100 text-purple-800';
    if (badge.includes('Champion') || badge.includes('Master')) return 'bg-yellow-100 text-yellow-800';
    if (badge.includes('Warrior') || badge.includes('King')) return 'bg-red-100 text-red-800';
    return 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Community Forum
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow students, share your journey, get expert advice, and find accountability partners.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
            <div className="text-sm text-gray-600">Active Members</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">156</div>
            <div className="text-sm text-gray-600">Posts This Week</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
            <div className="text-sm text-gray-600">Challenge Completion</div>
          </Card>
          
          <Card className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">4.8/5</div>
            <div className="text-sm text-gray-600">Community Rating</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Forum Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <Card className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center"
                  >
                    {category.name}
                    <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-600 rounded-full text-xs">
                      {category.count}
                    </span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* New Post Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Discussions</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} hover className="cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {post.author.charAt(0)}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        {post.isExpert && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="font-medium">{post.author}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getBadgeColor(post.badge)}`}>
                          {post.badge}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.timeAgo}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4 line-clamp-2">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <button className="flex items-center hover:text-blue-600 transition-colors">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.replies} replies
                        </button>
                        <button className="flex items-center hover:text-red-600 transition-colors">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {post.likes} likes
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Leaderboard */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-yellow-600" />
                Weekly Leaderboard
              </h3>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                      user.rank === 1 ? 'bg-yellow-500' : 
                      user.rank === 2 ? 'bg-gray-400' : 
                      user.rank === 3 ? 'bg-amber-600' : 'bg-blue-500'
                    }`}>
                      {user.rank}
                    </div>
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.points} points</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Upcoming Events
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-blue-900">Expert Q&A Session</p>
                  <p className="text-blue-700">Dr. Sarah Williams - Sleep & Stress</p>
                  <p className="text-blue-600">Tomorrow, 7:00 PM EST</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-blue-900">30-Day Challenge Check-in</p>
                  <p className="text-blue-700">Share your progress & tips</p>
                  <p className="text-blue-600">Friday, 6:00 PM EST</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="font-medium text-blue-900">Study Group Formation</p>
                  <p className="text-blue-700">Find accountability partners</p>
                  <p className="text-blue-600">Next Monday, 8:00 PM EST</p>
                </div>
              </div>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Guidelines</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Be respectful and supportive of all members</li>
                <li>• Share authentic experiences and insights</li>
                <li>• Keep posts relevant to sleep and study topics</li>
                <li>• No spam or promotional content</li>
                <li>• Protect privacy - no personal contact info</li>
              </ul>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                Read Full Guidelines
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}