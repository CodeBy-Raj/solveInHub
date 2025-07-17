import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import ProposeSolutionModal from "@/components/ProposeSolutionModal";
import { useApp } from "@/contexts/AppContext";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Target,
  ThumbsUp,
  MessageCircle,
  Lightbulb,
  Share2,
  Bookmark,
  BookmarkCheck,
  TrendingUp,
  Users,
  UserPlus,
  UserCheck,
} from "lucide-react";

// Mock challenge data
const mockChallenge = {
  id: "1",
  title: "Urban Water Management Crisis",
  description: `Major city facing severe water shortage due to aging infrastructure and climate change. 

The challenge involves developing innovative solutions for:
• Water conservation techniques for urban environments
• Smart distribution systems to minimize waste
• Real-time monitoring and leak detection
• Public engagement strategies for water conservation
• Integration with existing infrastructure

We're looking for scalable, cost-effective solutions that can be implemented within 18 months and serve a population of 2+ million residents.`,
  sector: "Environment",
  urgency: "high" as const,
  region: "North America",
  createdAt: "2024-01-15",
  organization: "Metropolitan Water Authority",
  budget: "$5M - $10M",
  deadline: "2024-06-15",
  solutions: [
    {
      id: "1",
      title: "AI-Powered Water Distribution Network",
      author: "TechFlow Solutions",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      upvotes: 28,
      comments: 12,
      description:
        "Implementation of machine learning algorithms to optimize water distribution and predict maintenance needs. This solution uses predictive analytics to forecast demand patterns and optimize distribution routes, potentially reducing water waste by up to 35%.",
      rating: 4.8,
      timeAgo: "2 days ago",
    },
    {
      id: "2",
      title: "Community-Based Water Harvesting System",
      author: "Green Urban Collective",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b25a4c72?w=32&h=32&fit=crop&crop=face",
      upvotes: 22,
      comments: 8,
      description:
        "Integrated rainwater harvesting and greywater recycling system for residential buildings. This community-driven approach combines traditional knowledge with modern technology to create sustainable water solutions.",
      rating: 4.6,
      timeAgo: "5 days ago",
    },
    {
      id: "3",
      title: "Smart Sensor Network for Leak Detection",
      author: "AquaTech Innovations",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      upvotes: 19,
      comments: 6,
      description:
        "IoT-based sensor network for real-time leak detection and automated shut-off systems. Advanced acoustic sensors detect even minor leaks, enabling rapid response and maintenance scheduling.",
      rating: 4.4,
      timeAgo: "1 week ago",
    },
  ],
};

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

export default function ChallengeDetail() {
  const { id } = useParams();
  const {
    toggleUpvote,
    toggleSave,
    toggleFollow,
    shareChallenge,
    isUpvoted,
    isSaved,
    isFollowing,
    getVoteCount,
  } = useApp();

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

  const completionPercentage = Math.ceil(
    ((new Date().getTime() - new Date(mockChallenge.createdAt).getTime()) /
      (new Date(mockChallenge.deadline).getTime() -
        new Date(mockChallenge.createdAt).getTime())) *
      100,
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Challenges
            </Link>
          </Button>
        </div>

        {/* Challenge Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{mockChallenge.sector}</Badge>
            <Badge
              className={`border ${getUrgencyColor(mockChallenge.urgency)}`}
            >
              {mockChallenge.urgency.charAt(0).toUpperCase() +
                mockChallenge.urgency.slice(1)}{" "}
              Priority
            </Badge>
            <Badge variant="outline">
              <MapPin className="h-3 w-3 mr-1" />
              {mockChallenge.region}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4">
            {mockChallenge.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Posted: {new Date(mockChallenge.createdAt).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Budget: {mockChallenge.budget}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Deadline: {new Date(mockChallenge.deadline).toLocaleDateString()}
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Posted by:{" "}
              <span className="font-medium">{mockChallenge.organization}</span>
            </p>
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    shareChallenge(mockChallenge.id, mockChallenge.title)
                  }
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={isSaved(mockChallenge.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSave(mockChallenge.id)}
                  className={
                    isSaved(mockChallenge.id)
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }
                >
                  {isSaved(mockChallenge.id) ? (
                    <BookmarkCheck className="h-4 w-4 mr-1 fill-current" />
                  ) : (
                    <Bookmark className="h-4 w-4 mr-1" />
                  )}
                  {isSaved(mockChallenge.id) ? "Saved" : "Save"}
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Challenge Progress</span>
              <span>{Math.min(completionPercentage, 100)}% complete</span>
            </div>
            <Progress
              value={Math.min(completionPercentage, 100)}
              className="h-2"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Challenge Description */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Challenge Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    {mockChallenge.description
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Solutions */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Submitted Solutions ({mockChallenge.solutions.length})
                  </CardTitle>
                  <CardDescription>
                    Community-proposed solutions for this challenge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-6"
                  >
                    {mockChallenge.solutions.map((solution, index) => (
                      <motion.div
                        key={solution.id}
                        variants={fadeInUp}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.01 }}
                        className="border rounded-lg p-6 hover:bg-muted/50 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={solution.avatar}
                                alt={solution.author}
                              />
                              <AvatarFallback>
                                {solution.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold text-lg mb-1">
                                {solution.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-1">
                                by {solution.author} • {solution.timeAgo}
                              </p>
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center text-amber-600">
                                  <TrendingUp className="h-4 w-4 mr-1" />
                                  {solution.rating}/5.0
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {getVoteCount(solution.id, solution.upvotes)}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {solution.comments}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {solution.description}
                        </p>

                        <Separator className="my-4" />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                size="sm"
                                variant={
                                  isUpvoted(solution.id) ? "default" : "outline"
                                }
                                onClick={() =>
                                  toggleUpvote(solution.id, solution.upvotes)
                                }
                                className={
                                  isUpvoted(solution.id)
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }
                              >
                                <ThumbsUp
                                  className={`h-4 w-4 mr-1 ${isUpvoted(solution.id) ? "fill-current" : ""}`}
                                />
                                {isUpvoted(solution.id) ? "Upvoted" : "Upvote"}{" "}
                                ({getVoteCount(solution.id, solution.upvotes)})
                              </Button>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button size="sm" variant="outline">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                Comment
                              </Button>
                            </motion.div>
                          </div>
                          <Button size="sm" variant="ghost">
                            View Details
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Card */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Take Action</CardTitle>
                  <CardDescription>
                    Join the challenge and contribute your solution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ProposeSolutionModal
                      challengeId={mockChallenge.id}
                      challengeTitle={mockChallenge.title}
                    >
                      <Button className="w-full" size="lg">
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Propose Solution
                      </Button>
                    </ProposeSolutionModal>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={
                        isFollowing(mockChallenge.id) ? "default" : "outline"
                      }
                      className="w-full"
                      onClick={() => toggleFollow(mockChallenge.id)}
                    >
                      {isFollowing(mockChallenge.id) ? (
                        <UserCheck className="h-4 w-4 mr-2" />
                      ) : (
                        <UserPlus className="h-4 w-4 mr-2" />
                      )}
                      {isFollowing(mockChallenge.id)
                        ? "Following"
                        : "Follow Challenge"}
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        shareChallenge(mockChallenge.id, mockChallenge.title)
                      }
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Challenge
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Challenge Stats */}
            <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Challenge Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Total Solutions
                    </span>
                    <span className="font-semibold text-lg">
                      {mockChallenge.solutions.length}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Votes</span>
                    <span className="font-semibold text-lg">
                      {mockChallenge.solutions.reduce(
                        (sum, s) => sum + s.upvotes,
                        0,
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Total Comments
                    </span>
                    <span className="font-semibold text-lg">
                      {mockChallenge.solutions.reduce(
                        (sum, s) => sum + s.comments,
                        0,
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">
                      Days Remaining
                    </span>
                    <span className="font-semibold text-lg text-orange-600">
                      {Math.ceil(
                        (new Date(mockChallenge.deadline).getTime() -
                          new Date().getTime()) /
                          (1000 * 60 * 60 * 24),
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
