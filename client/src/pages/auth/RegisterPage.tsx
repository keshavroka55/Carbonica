// RegisterPage.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Users, 
  School,
  TreePine,
  Shield,
  Sparkles
} from "lucide-react";

type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

interface RoleOption {
  id: UserRole;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<UserRole>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const roleOptions: RoleOption[] = [
    {
      id: "student",
      label: "Student",
      description: "Track your impact, earn badges, and plant trees",
      icon: <Users className="w-4 h-4" />
    },
    {
      id: "teacher",
      label: "Teacher",
      description: "Lead classes and monitor sustainability progress",
      icon: <School className="w-4 h-4" />
    },
    {
      id: "parent",
      label: "Parent",
      description: "Support your child's eco-journey",
      icon: <Users className="w-4 h-4" />
    },
    {
      id: "admin",
      label: "Admin",
      description: "Manage schools and analyze impact data",
      icon: <Shield className="w-4 h-4" />
    }
  ];

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-bg-gradient-start to-bg-gradient-end">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* LEFT SIDE - IMAGE SECTION */}
          <div className="relative hidden md:block bg-gradient-to-br from-accent-DEFAULT/90 to-green-700/90 p-8">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Students celebrating sustainability"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[650px]">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">EcoTrack School</span>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm w-fit">
                  <Sparkles className="w-4 h-4" />
                  <span>Join the Movement</span>
                </div>
                
                <blockquote className="text-white text-2xl font-medium leading-tight">
                  "Small actions, when multiplied by millions of people, can transform the world."
                </blockquote>
                <p className="text-white/80 text-sm">— EcoTrack Community</p>
                
                <div className="flex items-center gap-4 pt-8">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-accent-DEFAULT/30 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(64+i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm">Join 10,000+ students making a difference</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/40 text-xs">
                <div className="flex items-center gap-1">
                  <TreePine className="w-3 h-3" />
                  <span>45K+ trees planted</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>100% secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - REGISTRATION FORM */}
          <div className="bg-card-bg p-6 sm:p-8 lg:p-10 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-center mb-6 md:hidden">
              <div className="bg-accent-DEFAULT p-3 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-primary-DEFAULT mb-2">
              Create Account
            </h2>
            <p className="text-muted mb-6">
              Join the EcoTrack community and start your sustainability journey
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-600 text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-primary-DEFAULT block mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-primary-DEFAULT block mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="email"
                    placeholder="student@school.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="text-sm font-medium text-primary-DEFAULT block mb-2">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {roleOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setRole(option.id)}
                      className={`p-3 rounded-xl border transition-all text-left ${
                        role === option.id
                          ? "border-accent-DEFAULT bg-accent-DEFAULT/5 ring-2 ring-accent-DEFAULT/20"
                          : "border-border hover:border-accent-DEFAULT/30 hover:bg-secondary-bg"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg mb-2 flex items-center justify-center ${
                        role === option.id ? "bg-accent-DEFAULT/20 text-accent-DEFAULT" : "bg-border/50 text-muted"
                      }`}>
                        {option.icon}
                      </div>
                      <p className={`text-sm font-medium ${
                        role === option.id ? "text-accent-DEFAULT" : "text-primary-DEFAULT"
                      }`}>
                        {option.label}
                      </p>
                      <p className="text-xs text-muted mt-1">{option.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-primary-DEFAULT block mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <p className="text-xs text-muted mt-1">Must be at least 6 characters</p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-primary-DEFAULT block mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent-DEFAULT/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 rounded border-border text-accent-DEFAULT focus:ring-accent-DEFAULT/30"
                  required
                />
                <label htmlFor="terms" className="text-xs text-muted">
                  I agree to the{" "}
                  <a href="#" className="text-accent-DEFAULT hover:underline">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-accent-DEFAULT hover:underline">Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-accent-DEFAULT hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold shadow-button hover:shadow-button-hover transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating Account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card-bg text-muted">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Login Link */}
            <p className="text-center">
              <Link
                to="/login"
                className="text-accent-DEFAULT hover:text-accent-hover font-semibold transition-colors inline-flex items-center gap-1"
              >
                Sign in instead
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}