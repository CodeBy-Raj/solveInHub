import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

export default function LandingPage() {
  const features = [
    {
      icon: Target,
      title: "Real-World Challenges",
      description:
        "Access diverse challenges from organizations worldwide seeking innovative solutions.",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Global Community",
      description:
        "Connect with innovators, researchers, and problem-solvers from around the globe.",
      color: "bg-green-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Transform ideas into impactful solutions that make a real difference.",
      color: "bg-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Track Impact",
      description:
        "Monitor the success and implementation of your solutions in real-time.",
      color: "bg-orange-500",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Solvers", icon: Users },
    { number: "2,500+", label: "Challenges Solved", icon: CheckCircle },
    { number: "150+", label: "Countries", icon: Globe },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
              >
                <Target className="h-5 w-5" />
              </motion.div>
              <span className="text-xl font-bold text-foreground">
                SolveInHub
              </span>
            </div>

            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                to="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                Browse Challenges
              </Link>
              <Link
                to="/submit-challenge"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                Submit Challenge
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                About
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="hidden lg:flex"
                asChild
              >
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <Badge className="mb-4 px-3 py-1 text-xs sm:text-sm">
                <Zap className="h-3 w-3 mr-1" />
                Powered by Global Innovation
              </Badge>
            </motion.div>

            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
            >
              Transform{" "}
              <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
                Problems
              </span>{" "}
              into Solutions
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
            >
              Join the world's largest collaborative problem-solving platform.
              Connect with challenges that matter and create solutions that
              change the world.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            >
              <motion.div
                whileHover={scaleOnHover}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6"
                  asChild
                >
                  <Link
                    to="/dashboard"
                    className="flex items-center justify-center"
                  >
                    Browse Challenges
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={scaleOnHover}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6"
                  asChild
                >
                  <Link
                    to="/submit-challenge"
                    className="flex items-center justify-center"
                  >
                    Submit a Challenge
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        />
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-4 sm:p-6"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
              Why Choose SolveHub?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Discover the platform that's revolutionizing how we tackle global
              challenges
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} text-white mb-4 mx-auto`}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of innovators who are already solving tomorrow's
              challenges today. Your next breakthrough is just one click away.
            </p>
            <motion.div whileHover={scaleOnHover}>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/dashboard" className="flex items-center">
                  Start Solving Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Target className="h-5 w-5" />
                </div>
                <span className="text-xl font-bold">SolveHub</span>
              </div>
              <p className="text-muted-foreground">
                Connecting global innovators with real-world challenges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-foreground transition-colors"
                  >
                    Browse Challenges
                  </Link>
                </li>
                <li>
                  <Link
                    to="/submit-challenge"
                    className="hover:text-foreground transition-colors"
                  >
                    Submit Challenge
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-submissions"
                    className="hover:text-foreground transition-colors"
                  >
                    My Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SolveHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
