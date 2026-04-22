// SelectRolePage.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Users, School, Shield, TreePine, Sparkles, ChevronRight } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

interface RoleOption {
  id: UserRole;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
}

export default function SelectRolePage() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  // If not logged in, redirect to login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleRoleSelection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) {
      setError("Please select a role to continue");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API call to update role
    setTimeout(() => {
      setLoading(false);
      setSuccess(`Welcome! Setting up your ${selectedRole} dashboard...`);
      setTimeout(() => {
        // Navigate to role-specific dashboard
        switch(selectedRole) {
          case 'student':
            navigate("/student/dashboard");
            break;
          case 'teacher':
            navigate("/teacher/dashboard");
            break;
          case 'parent':
            navigate("/parent/dashboard");
            break;
          case 'admin':
            navigate("/admin/dashboard");
            break;
          default:
            navigate("/dashboard");
        }
      }, 1500);
    }, 1000);
  };

  const roles: RoleOption[] = [
    {
      id: "student",
      title: "Student",
      description: "Track your carbon footprint, earn eco-badges, and participate in green challenges",
      icon: <Users className="w-6 h-6" />,
      color: "from-emerald-500 to-green-500",
      benefits: ["Track personal impact", "Earn rewards & badges", "Join challenges", "Plant virtual trees"]
    },
    {
      id: "teacher",
      title: "Teacher",
      description: "Lead classes, monitor student progress, and create sustainability initiatives",
      icon: <School className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Classroom management", "Progress analytics", "Create challenges", "Resource library"]
    },
    {
      id: "parent",
      title: "Parent",
      description: "Support your child's eco-journey and track family sustainability goals",
      icon: <Shield className="w-6 h-6" />,
      color: "from-teal-500 to-emerald-500",
      benefits: ["Family dashboard", "Child progress", "Family challenges", "Educational resources"]
    },
    {
      id: "admin",
      title: "Admin",
      description: "Manage schools, analyze impact data, and drive institution-wide initiatives",
      icon: <TreePine className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      benefits: ["School analytics", "User management", "Impact reporting", "Program oversight"]
    }
  ];

  const getRoleTitle = (roleId: UserRole | null) => {
    if (!roleId) return "Select a Role";
    const role = roles.find(r => r.id === roleId);
    return role?.title || "Role";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-bg-gradient-start to-bg-gradient-end">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* LEFT SIDE - IMAGE SECTION */}
          <div className="relative hidden md:block bg-linear-to-br from-accent/90 to-green-700/90 p-8">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Students working together on environmental project"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full min-h-162.5">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">EcoTrack School</span>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm w-fit">
                  <Sparkles className="w-4 h-4" />
                  <span>Almost there!</span>
                </div>
                
                <blockquote className="text-white text-2xl font-medium leading-tight">
                  "Choose your path and start making a difference today."
                </blockquote>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3">
                  <p className="text-white font-medium text-sm">What happens next?</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">1</div>
                      <span>Complete your profile setup</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">2</div>
                      <span>Get personalized dashboard</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 text-sm">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">3</div>
                      <span>Start your sustainability journey</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>You can update role later</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ROLE SELECTION FORM */}
          <div className="bg-card-bg p-6 sm:p-8 lg:p-10 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-center mb-6 md:hidden">
              <div className="bg-accent p-3 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Welcome to EcoTrack!
              </h2>
              <p className="text-muted mt-2">
                {user?.name ? `Hello, ${user.name}! ` : ""}Choose your role to get started
              </p>
            </div>

            {error && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-4 p-4 rounded-xl bg-green-50 border border-green-200">
                <p className="text-green-600 text-sm">{success}</p>
              </div>
            )}

            <form onSubmit={handleRoleSelection} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roles.map((role) => {
                  const isSelected = selectedRole === role.id;

                  return (
                    <motion.button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative p-5 rounded-xl border-2 transition-all duration-300 text-left ${
                        isSelected
                          ? "border-accent bg-accent/5 shadow-card"
                          : "border-border bg-white hover:border-accent/30 hover:shadow-card"
                      }`}
                    >
                      {/* Selected indicator */}
                      {isSelected && (
                        <motion.div
                          layoutId="selected-indicator"
                          className="absolute top-3 right-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                      )}

                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${role.color} flex items-center justify-center mb-4 transition-transform ${
                          isSelected ? "scale-105" : ""
                        }`}
                      >
                        <div className="text-white">{role.icon}</div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {role.title}
                      </h3>
                      <p className="text-sm text-muted mb-3">
                        {role.description}
                      </p>
                      
                      {/* Benefits list - hidden on mobile, visible on larger screens */}
                      <div className="hidden sm:block space-y-1 mt-3 pt-3 border-t border-border/50">
                        {role.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted">
                            <ChevronRight className="w-3 h-3 text-accent" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedRole || loading}
                className="w-full py-3 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold shadow-button hover:shadow-button-hover transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Setting up your account...
                  </span>
                ) : (
                  `Continue as ${getRoleTitle(selectedRole)}`
                )}
              </button>
            </form>

            {/* Optional: Skip for now */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card-bg text-muted">
                  Not sure yet?
                </span>
              </div>
            </div>

            <p className="text-center text-sm text-muted">
              You can change your role later in{" "}
              <button 
                onClick={() => navigate("/settings")}
                className="text-accent hover:underline font-medium"
              >
                Settings
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}