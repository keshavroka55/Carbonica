// ForgotPasswordPage.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Mail, ArrowLeft, Shield, TreePine, Sparkles } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setMessage("If your email exists, you'll receive a password reset link shortly. Check your inbox!");
      setEmail("");
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
          <div className="relative hidden md:block bg-linear-to-br from-accent/90 to-green-700/90 p-8">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Peaceful forest path"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[550px]">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">EcoTrack School</span>
              </div>
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm w-fit">
                  <Sparkles className="w-4 h-4" />
                  <span>Don't Worry, We've Got You</span>
                </div>
                
                <blockquote className="text-white text-2xl font-medium leading-tight">
                  "Every great journey begins with a single step. Let's get you back on track."
                </blockquote>
                
                <div className="flex items-center gap-4 pt-8">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Secure password reset</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <TreePine className="w-4 h-4" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
              
              <div className="text-white/40 text-xs">
                Need help? Contact our support team
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORGOT PASSWORD FORM */}
          <div className="bg-card-bg p-6 sm:p-8 lg:p-12">
            <div className="flex justify-center mb-6 md:hidden">
              <div className="bg-accent p-3 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Forgot Password?
              </h2>
              <p className="text-muted mt-2">
                No worries! Enter your email and we'll send you a reset link.
              </p>
            </div>

            {message && (
              <div className="mb-4 p-4 rounded-xl bg-green-50 border border-green-200">
                <p className="text-green-700 text-sm">{message}</p>
              </div>
            )}

            {error && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-primary block mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                    placeholder="student@school.edu"
                    required
                  />
                </div>
                <p className="text-xs text-muted mt-1">
                  We'll send a password reset link to this email
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold shadow-button hover:shadow-button-hover transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Reset Link"
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
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}