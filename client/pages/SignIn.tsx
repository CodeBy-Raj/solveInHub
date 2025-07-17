import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Target,
  Mail,
  Lock,
  ArrowRight,
  Github,
  Shield,
  Sparkles,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    // Handle sign in logic here
    console.log("Sign in:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative w-full max-w-md"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg"
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
          </Link>
          <h1 className="text-3xl font-bold text-base-content mb-2">
            Welcome Back
          </h1>
          <p className="text-base-content/70">
            Sign in to continue your problem-solving journey
          </p>
        </motion.div>

        {/* Sign In Card */}
        <motion.div
          variants={fadeInUp}
          className="card bg-base-100/80 glass-effect shadow-2xl border border-white/10"
        >
          <div className="card-body p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="form-control ">
                <label className="label mb-3">
                  <span className="label-text text-base-content/80 font-medium">
                    Email Address
                  </span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/50" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full pl-10 bg-base-200/50 border-base-300/30 focus:border-primary/50 focus:bg-base-100/80 transition-all duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label mb-3">
                  <span className="label-text text-base-content/80 font-medium">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/50" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pl-10 pr-10 bg-base-200/50 border-base-300/30 focus:border-primary/50 focus:bg-base-100/80 transition-all duration-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="label cursor-pointer ">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm mr-2 bg-slate-50"
                  />
                  <span className="label-text text-sm text-base-content/70">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/forgot-password"
                  className="link link-primary text-sm hover:link-hover"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
                <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full premium-gradient shadow-lg hover:shadow-xl border-0 group rounded-xl "
                >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <>
                  Sign In
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                </motion.button>
            </form>

            {/* Divider */}
            <div className="divider text-base-content/50">or continue with</div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-outline border-base-300/30 hover:border-primary/50 hover:bg-primary/10"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-outline border-base-300/30 hover:border-secondary/50 hover:bg-secondary/10"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={fadeInUp} className="text-center mt-6">
          <p className="text-base-content/70">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="link link-primary font-medium hover:link-hover"
            >
              Sign up for free
            </Link>
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-3 gap-4 mt-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs text-base-content/60">Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4 text-secondary" />
            </div>
            <span className="text-xs text-base-content/60">Premium</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
              <Target className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs text-base-content/60">Focused</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
