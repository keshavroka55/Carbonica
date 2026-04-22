// ResetPasswordPage.tsx
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Lock, Eye, EyeOff, Shield, CheckCircle, Sparkles } from "lucide-react";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setError("Invalid or expired reset link. Please request a new one.");
    }
  }, [token]);

  useEffect(() => {
    // Calculate password strength
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(Math.min(strength, 4));
  }, [password]);

  const getStrengthColor = () => {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-emerald-500"
    ];
    return colors[passwordStrength];
  };

  const getStrengthText = () => {
    const texts = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    return texts[passwordStrength];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 3000);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-bg-gradient-start to-bg-gradient-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">
            Password Reset Successful!
          </h2>
          <p className="text-muted mb-4">
            Your password has been updated. Redirecting you to login...
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
          </div>
        </motion.div>
      </div>
    );
  }

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
                src="https://images.unsplash.com/photo-1441974231531-c622288db792?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Sunrise over forest"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full min-h-150">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">EcoTrack School</span>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm w-fit">
                  <Sparkles className="w-4 h-4" />
                  <span>Secure Password Reset</span>
                </div>
                
                <blockquote className="text-white text-2xl font-medium leading-tight">
                  "Create a strong password to protect your eco-journey and keep your impact data safe."
                </blockquote>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-white/80 text-sm mb-2">Password tips:</p>
                  <ul className="text-white/60 text-xs space-y-1">
                    <li className="flex items-center gap-2">• Use at least 8 characters</li>
                    <li className="flex items-center gap-2">• Mix uppercase and lowercase letters</li>
                    <li className="flex items-center gap-2">• Include numbers and symbols</li>
                    <li className="flex items-center gap-2">• Avoid common words or patterns</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Shield className="w-3 h-3" />
                <span>End-to-end encrypted</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - RESET PASSWORD FORM */}
          <div className="bg-card-bg p-6 sm:p-8 lg:p-12">
            <div className="flex justify-center mb-6 md:hidden">
              <div className="bg-accent p-3 rounded-full">
                <Lock className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Create New Password
              </h2>
              <p className="text-muted mt-2">
                Choose a strong password for your account
              </p>
            </div>

            {error && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200">
                <p className="text-red-600 text-sm">{error}</p>
                {error.includes("Invalid or expired") && (
                  <Link to="/forgot-password" className="text-accent text-sm mt-2 inline-block hover:underline">
                    Request new reset link →
                  </Link>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password */}
              <div>
                <label className="text-sm font-medium text-primary block mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                    placeholder="Enter new password"
                    required
                    disabled={!!error && error.includes("Invalid or expired")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2 space-y-1">
                    <div className="flex gap-1 h-1.5">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-all ${
                            i < passwordStrength ? getStrengthColor() : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                    <p className={`text-xs ${passwordStrength >= 3 ? "text-green-600" : "text-muted"}`}>
                      Password strength: {getStrengthText()}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-primary block mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                    placeholder="Confirm new password"
                    required
                    disabled={!!error && error.includes("Invalid or expired")}
                  />
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                )}
                {confirmPassword && password === confirmPassword && password.length > 0 && (
                  <p className="text-xs text-green-600 mt-1">✓ Passwords match</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !token || (!!error && error.includes("Invalid or expired"))}
                className="w-full py-3 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold shadow-button hover:shadow-button-hover transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Resetting Password...
                  </span>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card-bg text-muted">
                  Remember your password?
                </span>
              </div>
            </div>

            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors group"
            >
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}