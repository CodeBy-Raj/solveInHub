import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Globe,
  Lightbulb,
  Award,
  TrendingUp,
  Heart,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
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

export default function About() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Solvers",
      color: "text-primary",
    },
    {
      icon: Target,
      value: "10K+",
      label: "Challenges Solved",
      color: "text-secondary",
    },
    { icon: Globe, value: "150+", label: "Countries", color: "text-accent" },
    { icon: Award, value: "95%", label: "Success Rate", color: "text-warning" },
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Connect with brilliant minds and transform ideas into reality",
      gradient: "from-primary to-primary-focus",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Join a worldwide network of problem-solvers and innovators",
      gradient: "from-secondary to-secondary-focus",
    },
    {
      icon: TrendingUp,
      title: "Impact Tracking",
      description:
        "Monitor real-world impact and measure solution effectiveness",
      gradient: "from-accent to-accent-focus",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description:
        "Enterprise-grade security protecting your intellectual property",
      gradient: "from-info to-info-focus",
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description:
        "Rapid solution implementation with our proven methodologies",
      gradient: "from-warning to-warning-focus",
    },
    {
      icon: Heart,
      title: "Social Impact",
      description:
        "Make a difference in communities and environments worldwide",
      gradient: "from-error to-error-focus",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b25a4c72?w=400&h=400&fit=crop&crop=face",
      bio: "Former tech executive with 15+ years in innovation management.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "AI researcher and system architect passionate about scalable solutions.",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Chief Science Officer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Systems Engineering with expertise in complex problem solving.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every solution serves a meaningful purpose",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Better solutions emerge through collaboration",
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for excellence in everything we do",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Local solutions with global implications",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
                  <Sparkles className="w-4 h-4" />
                  About SolveHub
                </div>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-base-content mb-6 leading-tight"
              >
                Transforming Ideas Into{" "}
                <span className="premium-gradient bg-clip-text text-transparent">
                  Global Solutions
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-base-content/70 mb-8 leading-relaxed"
              >
                We're building the world's most advanced collaborative platform
                where innovators, organizations, and communities come together
                to solve humanity's greatest challenges.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <button className="btn btn-primary btn-lg premium-gradient shadow-lg hover:shadow-xl border-0 group">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Background Effects */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-base-200/50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={scaleOnHover}
                    className="card bg-base-100/80 glass-effect shadow-lg border border-white/10 text-center"
                  >
                    <div className="card-body p-6">
                      <div
                        className={`mx-auto mb-3 w-12 h-12 ${stat.color} bg-current/10 rounded-xl flex items-center justify-center`}
                      >
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-3xl font-bold text-base-content">
                        {stat.value}
                      </div>
                      <div className="text-base-content/60">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                Why Choose SolveHub?
              </h2>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                Discover the platform features that make collaboration seamless
                and innovation unstoppable
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={scaleOnHover}
                    className="card bg-base-100/80 glass-effect shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="card-body p-8">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="card-title text-xl text-base-content mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base-content/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-base-200/50">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                Passionate innovators dedicated to solving the world's most
                pressing challenges
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={scaleOnHover}
                  className="card bg-base-100/80 glass-effect shadow-lg border border-white/10"
                >
                  <figure className="px-8 pt-8">
                    <div className="avatar">
                      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </figure>
                  <div className="card-body text-center">
                    <h3 className="card-title justify-center text-base-content">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-base-content/70 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we
                create
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={scaleOnHover}
                    className="text-center"
                  >
                    <div className="card bg-base-100/80 glass-effect shadow-lg border border-white/10 h-full">
                      <div className="card-body p-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-base-content mb-2">
                          {value.title}
                        </h3>
                        <p className="text-base-content/70 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join thousands of innovators who are already solving tomorrow's
                challenges today. Be part of the solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={scaleOnHover}
                  className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-0 shadow-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  Start Solving Today
                </motion.button>
                <motion.button
                  whileHover={scaleOnHover}
                  className="btn btn-outline btn-lg text-white border-white/30 hover:bg-white/10 hover:border-white"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
