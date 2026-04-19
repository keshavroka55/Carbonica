// App.tsx
import React, { useState } from 'react';
import { 
  Leaf, 
  TreePine, 
  Users, 
  School, 
  TrendingUp, 
  Award, 
  Droplets, 
  Footprints,
  ChevronRight,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================
interface Role {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

// ============================================================================
// COMPONENTS
// ============================================================================

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="bg-accent-DEFAULT p-2 rounded-xl shadow-glow">
      <Leaf className="w-6 h-6 text-white" />
    </div>
    <span className="font-bold text-xl tracking-tight text-primary-DEFAULT">
      EcoTrack<span className="text-accent-DEFAULT">School</span>
    </span>
  </div>
);

const RoleCard: React.FC<Role & { onClick: () => void }> = ({ title, description, icon, color, onClick }) => (
  <button
    onClick={onClick}
    className="group w-full text-left p-6 rounded-2xl bg-card-bg border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
  >
    <div className={`w-12 h-12 rounded-xl bg-${color}/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
      <div className={`text-${color}-DEFAULT`}>{icon}</div>
    </div>
    <h3 className="text-lg font-semibold text-primary-DEFAULT mb-1">{title}</h3>
    <p className="text-sm text-muted mb-3">{description}</p>
    <div className="flex items-center text-xs font-medium text-accent-DEFAULT group-hover:gap-1 transition-all">
      <span>Get Started</span>
      <ChevronRight className="w-3 h-3" />
    </div>
  </button>
);

const StatsCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendUp }) => (
  <div className="p-5 rounded-xl bg-card-bg border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="p-2 rounded-lg bg-accent-DEFAULT/10 text-accent-DEFAULT">
        {icon}
      </div>
      {trend && (
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {trend}
        </span>
      )}
    </div>
    <p className="text-2xl font-bold text-primary-DEFAULT">{value}</p>
    <p className="text-sm text-muted mt-1">{title}</p>
  </div>
);

const CTAButton: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary'; className?: string }> = 
({ children, variant = 'primary', className = "" }) => {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-accent-DEFAULT hover:bg-accent-hover text-white shadow-button hover:shadow-button-hover focus:ring-accent-DEFAULT/50",
    secondary: "bg-secondary-bg hover:bg-border text-primary-DEFAULT border border-border hover:border-accent-DEFAULT/30 focus:ring-accent-DEFAULT/30"
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// ============================================================================
// MAIN LANDING PAGE
// ============================================================================
const EcoTrackLanding: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles: Role[] = [
    {
      id: 'student',
      title: 'Student',
      description: 'Track your carbon footprint, earn badges, and plant virtual trees.',
      icon: <Users className="w-5 h-5" />,
      color: 'green'
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Monitor class progress, create eco-challenges, and inspire students.',
      icon: <School className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: 'parent',
      title: 'Parent',
      description: 'Support your child\'s journey and track family sustainability goals.',
      icon: <Users className="w-5 h-5" />,
      color: 'teal'
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage schools, analyze impact data, and drive green initiatives.',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'emerald'
    }
  ];

  const stats = [
    { title: "Active Students", value: "12,847", icon: <Users className="w-4 h-4" />, trend: "+18%", trendUp: true },
    { title: "Trees Planted", value: "45.2K", icon: <TreePine className="w-4 h-4" />, trend: "+342", trendUp: true },
    { title: "CO₂ Reduced (kg)", value: "128.4K", icon: <Footprints className="w-4 h-4" />, trend: "+12%", trendUp: true },
    { title: "Eco Points Earned", value: "892K", icon: <Award className="w-4 h-4" />, trend: "+5.2K", trendUp: true }
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    // In a real app, you'd navigate to role-specific dashboard
    console.log(`Selected role: ${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-header-bg/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-muted hover:text-primary transition-colors">About</a>
              <a href="#" className="text-sm text-muted hover:text-primary transition-colors">Impact</a>
              <a href="#" className="text-sm text-muted hover:text-primary transition-colors">Resources</a>
              <CTAButton variant="secondary" className="py-2 px-4">
                Sign In
              </CTAButton>
              <CTAButton variant="primary" className="py-2 px-4">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-border/50 transition-colors">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-DEFAULT/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-400/5 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-DEFAULT/10 text-accent-DEFAULT text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Join the Green Revolution</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-DEFAULT leading-tight">
                  Track, Learn, and{' '}
                  <span className="text-accent-DEFAULT bg-gradient-to-r from-accent-DEFAULT to-green-400 bg-clip-text text-transparent">
                    Reduce
                  </span>{' '}
                  Your School's Carbon Footprint
                </h1>
                <p className="text-lg text-muted mt-6 max-w-xl mx-auto lg:mx-0">
                  Empowering students, teachers, and parents to build a sustainable future through gamified learning and real-world impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                  <CTAButton variant="primary">
                    Start Your Journey
                    <ChevronRight className="w-4 h-4" />
                  </CTAButton>
                  <CTAButton variant="secondary">
                    Watch Demo
                  </CTAButton>
                </div>
                <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-DEFAULT/80 to-green-400/80 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                        {String.fromCharCode(64+i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-primary">2,000+</span> schools already joined
                  </p>
                </div>
              </div>

              {/* Right Image/Illustration */}
              <div className="flex-1 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Students planting trees"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card-bg rounded-xl shadow-card p-3 backdrop-blur-sm hidden lg:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Trees Planted Today</p>
                    <p className="font-bold text-primary">+1,247</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary-bg/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-DEFAULT">Our Collective Impact</h2>
              <p className="text-muted mt-2">Together we're making a difference for our planet</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat, idx) => (
                <StatsCard key={idx} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Role Selection Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-DEFAULT">Choose Your Role</h2>
              <p className="text-muted mt-2 max-w-xl mx-auto">
                Every role has a unique part to play in creating a sustainable school ecosystem
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map((role) => (
                <RoleCard key={role.id} {...role} onClick={() => handleRoleSelect(role.id)} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent-DEFAULT/10 to-green-400/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card-bg rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
              <div className="w-16 h-16 rounded-full bg-accent-DEFAULT/20 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-accent-DEFAULT" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-DEFAULT">
                Ready to Transform Your School's Future?
              </h2>
              <p className="text-muted mt-3 max-w-md mx-auto">
                Join thousands of schools already making a positive impact on our planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <CTAButton variant="primary">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </CTAButton>
                <CTAButton variant="secondary">
                  Request Demo
                </CTAButton>
              </div>
              <p className="text-xs text-muted mt-6">
                No credit card required • Free for first 30 days • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-DEFAULT/5 border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo />
            <div className="flex gap-8 text-sm text-muted">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-xs text-muted">
              © 2025 EcoTrack School System — Planting seeds for a greener tomorrow.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcoTrackLanding;