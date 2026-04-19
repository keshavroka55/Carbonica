import React from 'react';
import { Link } from 'react-router';
import { Leaf, Trophy, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export const PublicShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50 dark:from-green-950 dark:via-blue-950 dark:to-green-950">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">EcoTrack</span>
          </div>
          <Link to="/">
            <Button>Login</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">🌍 Building a Sustainable Future</Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            EcoTrack School System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering students to track their carbon footprint, participate in eco-friendly activities, and compete for a greener tomorrow.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2">5,240</div>
                <div className="text-muted-foreground">Active Students</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <div className="text-4xl font-bold mb-2">12.5T</div>
                <div className="text-muted-foreground">CO₂ Saved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <div className="text-4xl font-bold mb-2">8,420</div>
                <div className="text-muted-foreground">Trees Planted</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-4xl font-bold mb-2">45</div>
                <div className="text-muted-foreground">Schools Joined</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Students */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">🏆 Top Eco Warriors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Priya Thapa', points: 850, school: 'Green Valley School' },
              { name: 'Aayush Sharma', points: 720, school: 'Eco High School' },
              { name: 'Rohan Adhikari', points: 680, school: 'Nature Academy' },
            ].map((student, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${i === 0 ? 'bg-yellow-400' : i === 1 ? 'bg-gray-300' : 'bg-orange-400'} flex items-center justify-center text-2xl font-bold text-white`}>
                    #{i + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{student.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{student.school}</p>
                  <Badge variant="secondary">{student.points} points</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-card border-t py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">Built with 💚 for a sustainable future</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-primary" />
            <span className="font-semibold">EcoTrack School System</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 EcoTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
