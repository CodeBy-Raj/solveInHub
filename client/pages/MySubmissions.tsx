import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Plus,
  Eye,
  Edit,
  Trash2,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  MessageCircle,
  ThumbsUp,
  TrendingUp,
  Calendar,
  MapPin,
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

// Mock data
const mockChallenges = [
  {
    id: "c1",
    title: "AI-Powered Urban Traffic Optimization",
    description:
      "Seeking innovative AI solutions to reduce traffic congestion in metropolitan areas.",
    sector: "Transportation",
    urgency: "high" as const,
    region: "North America",
    status: "approved" as const,
    createdAt: "2024-01-10",
    solutionCount: 8,
    budget: "$75K - $150K",
  },
  {
    id: "c2",
    title: "Sustainable Packaging for E-commerce",
    description:
      "Need eco-friendly packaging solutions for online retail businesses.",
    sector: "Environment",
    urgency: "medium" as const,
    region: "Global",
    status: "pending" as const,
    createdAt: "2024-01-15",
    solutionCount: 0,
    budget: "$25K - $50K",
  },
  {
    id: "c3",
    title: "Remote Learning Platform Enhancement",
    description:
      "Improving accessibility and engagement in online education platforms.",
    sector: "Education",
    urgency: "low" as const,
    region: "Asia",
    status: "rejected" as const,
    createdAt: "2024-01-05",
    solutionCount: 0,
    rejectionReason: "Insufficient detail provided",
  },
];

const mockSolutions = [
  {
    id: "s1",
    challengeId: "external1",
    challengeTitle: "Urban Water Management Crisis",
    title: "Smart IoT Water Distribution Network",
    description:
      "Comprehensive IoT solution for real-time water distribution monitoring and optimization.",
    status: "approved" as const,
    submittedAt: "2024-01-12",
    upvotes: 24,
    comments: 8,
    rating: 4.8,
  },
  {
    id: "s2",
    challengeId: "external2",
    challengeTitle: "Healthcare Access in Rural Areas",
    title: "Telemedicine Mobile App Platform",
    description:
      "Mobile-first telemedicine platform designed for low-bandwidth rural environments.",
    status: "pending" as const,
    submittedAt: "2024-01-16",
    upvotes: 0,
    comments: 0,
    rating: 0,
  },
  {
    id: "s3",
    challengeId: "external3",
    challengeTitle: "Food Waste Reduction Initiative",
    title: "AI-Powered Expiry Prediction System",
    description:
      "Machine learning system to predict food expiry and optimize inventory management.",
    status: "rejected" as const,
    submittedAt: "2024-01-08",
    upvotes: 3,
    comments: 2,
    rating: 3.2,
    rejectionReason: "Technical feasibility concerns",
  },
];

export default function MySubmissions() {
  const [activeTab, setActiveTab] = useState("challenges");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                My Submissions
              </h1>
              <p className="text-xl text-muted-foreground">
                Track your submitted challenges and solutions
              </p>
            </div>
            <Button asChild>
              <Link to="/submit-challenge" className="flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Submit New Challenge
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Challenges
                  </p>
                  <p className="text-2xl font-bold">{mockChallenges.length}</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Solutions
                  </p>
                  <p className="text-2xl font-bold">{mockSolutions.length}</p>
                </div>
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Upvotes</p>
                  <p className="text-2xl font-bold">
                    {mockSolutions.reduce((sum, s) => sum + s.upvotes, 0)}
                  </p>
                </div>
                <div className="p-2 bg-accent/10 rounded-lg">
                  <ThumbsUp className="h-5 w-5 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                  <p className="text-2xl font-bold">
                    {(
                      mockSolutions
                        .filter((s) => s.rating > 0)
                        .reduce((sum, s) => sum + s.rating, 0) /
                      mockSolutions.filter((s) => s.rating > 0).length
                    ).toFixed(1)}
                  </p>
                </div>
                <div className="p-2 bg-warning/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="challenges">My Challenges</TabsTrigger>
              <TabsTrigger value="solutions">My Solutions</TabsTrigger>
            </TabsList>

            {/* Challenges Tab */}
            <TabsContent value="challenges" className="mt-6">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {mockChallenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg leading-tight">
                            {challenge.title}
                          </CardTitle>
                          <Badge
                            className={`text-xs border ${getStatusColor(
                              challenge.status,
                            )}`}
                          >
                            {getStatusIcon(challenge.status)}
                            <span className="ml-1 capitalize">
                              {challenge.status}
                            </span>
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {challenge.sector}
                          </Badge>
                          <Badge
                            className={`text-xs border ${getUrgencyColor(
                              challenge.urgency,
                            )}`}
                          >
                            {challenge.urgency.charAt(0).toUpperCase() +
                              challenge.urgency.slice(1)}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {challenge.region}
                          </Badge>
                        </div>

                        <CardDescription className="line-clamp-3">
                          {challenge.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(
                                challenge.createdAt,
                              ).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {challenge.solutionCount} solutions
                            </div>
                          </div>

                          {challenge.budget && (
                            <div className="text-sm text-muted-foreground">
                              Budget: {challenge.budget}
                            </div>
                          )}

                          {challenge.status === "rejected" &&
                            challenge.rejectionReason && (
                              <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                                Reason: {challenge.rejectionReason}
                              </div>
                            )}

                          <div className="flex gap-2 pt-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link
                                to={`/challenge/${challenge.id}`}
                                className="flex items-center"
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Link>
                            </Button>
                            {challenge.status === "pending" && (
                              <>
                                <Button variant="outline" size="sm">
                                  <Edit className="h-4 w-4 mr-1" />
                                  Edit
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4 mr-1" />
                                  Delete
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Solutions Tab */}
            <TabsContent value="solutions" className="mt-6">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                {mockSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">
                                {solution.title}
                              </CardTitle>
                              <Badge
                                className={`text-xs border ${getStatusColor(
                                  solution.status,
                                )}`}
                              >
                                {getStatusIcon(solution.status)}
                                <span className="ml-1 capitalize">
                                  {solution.status}
                                </span>
                              </Badge>
                            </div>
                            <CardDescription className="text-sm text-muted-foreground mb-2">
                              For: {solution.challengeTitle}
                            </CardDescription>
                            <p className="text-muted-foreground">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(
                                solution.submittedAt,
                              ).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {solution.upvotes} upvotes
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {solution.comments} comments
                            </div>
                            {solution.rating > 0 && (
                              <div className="flex items-center text-amber-600">
                                <TrendingUp className="h-4 w-4 mr-1" />
                                {solution.rating}/5.0
                              </div>
                            )}
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                            {solution.status === "pending" && (
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                            )}
                          </div>
                        </div>

                        {solution.status === "rejected" &&
                          solution.rejectionReason && (
                            <div className="mt-3 text-sm text-red-600 bg-red-50 p-2 rounded">
                              Rejection reason: {solution.rejectionReason}
                            </div>
                          )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Empty State */}
        {activeTab === "challenges" && mockChallenges.length === 0 && (
          <motion.div
            {...fadeInUp}
            className="text-center py-12"
            transition={{ delay: 0.3 }}
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">No challenges yet</h3>
            <p className="text-muted-foreground mb-4">
              Start by submitting your first challenge to the community.
            </p>
            <Button asChild>
              <Link to="/submit-challenge">Submit Challenge</Link>
            </Button>
          </motion.div>
        )}

        {activeTab === "solutions" && mockSolutions.length === 0 && (
          <motion.div
            {...fadeInUp}
            className="text-center py-12"
            transition={{ delay: 0.3 }}
          >
            <div className="text-6xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">No solutions yet</h3>
            <p className="text-muted-foreground mb-4">
              Explore challenges and propose your innovative solutions.
            </p>
            <Button asChild>
              <Link to="/dashboard">Browse Challenges</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
