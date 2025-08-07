import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {Button }from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Edit,
  Trash2,
  Users,
  TrendingUp,
  AlertTriangle,
  Calendar,
  MapPin,
  MessageCircle,
  ThumbsUp,
  Ban,
  Flag,
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

// Mock data for admin panel
const mockPendingChallenges = [
  {
    id: "pc1",
    title: "Smart City Infrastructure Optimization",
    organization: "Metro City Council",
    sector: "Technology",
    urgency: "high" as const,
    region: "North America",
    submittedAt: "2024-01-20",
    description:
      "Comprehensive smart city solution for traffic, utilities, and public services optimization.",
    budget: "$500K - $1M",
  },
  {
    id: "pc2",
    title: "Sustainable Agriculture Innovation",
    organization: "GreenTech Farms",
    sector: "Agriculture",
    urgency: "medium" as const,
    region: "Europe",
    submittedAt: "2024-01-19",
    description:
      "Innovative farming techniques to increase yield while reducing environmental impact.",
    budget: "$100K - $250K",
  },
];

const mockPendingSolutions = [
  {
    id: "ps1",
    challengeTitle: "Urban Water Management Crisis",
    title: "Blockchain-Based Water Distribution System",
    author: "WaterTech Solutions",
    submittedAt: "2024-01-18",
    description:
      "Decentralized water distribution tracking using blockchain technology.",
  },
  {
    id: "ps2",
    challengeTitle: "Healthcare Access in Rural Areas",
    title: "Drone Medical Delivery Network",
    author: "SkyMed Innovations",
    submittedAt: "2024-01-17",
    description:
      "Autonomous drone network for delivering medical supplies to remote areas.",
  },
];

const mockFlaggedContent = [
  {
    id: "fc1",
    type: "solution" as const,
    title: "Inappropriate Solution Title",
    author: "BadActor123",
    reason: "Spam content",
    flaggedAt: "2024-01-16",
    flags: 3,
  },
  {
    id: "fc2",
    type: "challenge" as const,
    title: "Fake Challenge Post",
    author: "FakeOrg",
    reason: "Misleading information",
    flaggedAt: "2024-01-15",
    flags: 5,
  },
];

const mockUsers = [
  {
    id: "u1",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "solver" as const,
    joinedAt: "2023-12-01",
    challengesSubmitted: 2,
    solutionsSubmitted: 8,
    reputation: 85,
    status: "active" as const,
  },
  {
    id: "u2",
    name: "TechCorp Inc.",
    email: "contact@techcorp.com",
    role: "organization" as const,
    joinedAt: "2023-11-15",
    challengesSubmitted: 5,
    solutionsSubmitted: 0,
    reputation: 92,
    status: "active" as const,
  },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("pending-challenges");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

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

  const handleApprove = (id: string, type: string) => {
    console.log(`Approving ${type} with id: ${id}`);
    // Implement approval logic
  };

  const handleReject = (id: string, type: string) => {
    console.log(`Rejecting ${type} with id: ${id}`);
    // Implement rejection logic
  };

  const handleBanUser = (userId: string) => {
    console.log(`Banning user: ${userId}`);
    // Implement user ban logic
  };

  const handleRemoveFlag = (contentId: string) => {
    console.log(`Removing flag from: ${contentId}`);
    // Implement flag removal logic
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Admin Panel
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage challenges, solutions, and platform content
              </p>
            </div>
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
                    Pending Challenges
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {mockPendingChallenges.length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Pending Solutions
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {mockPendingSolutions.length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Flagged Content
                  </p>
                  <p className="text-2xl font-bold text-red-600">
                    {mockFlaggedContent.length}
                  </p>
                </div>
                <Flag className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-green-600">
                    {mockUsers.length}k+
                  </p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mb-6"
        >
          <div className="relative flex-1">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
            <Input
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Main Content Tabs */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="border-b border-gray-200 mb-4 items-center flex">
              <TabsTrigger className="border rounded-md hover:bg-gray-100" value="pending-challenges">Challenges</TabsTrigger>
              <TabsTrigger className="border rounded-md hover:bg-gray-100 " value="pending-solutions">Solutions</TabsTrigger>
              <TabsTrigger className="border rounded-md hover:bg-gray-100" value="flagged-content">Flagged</TabsTrigger>
              <TabsTrigger className="border rounded-md hover:bg-gray-100" value="user-management">Users</TabsTrigger>
            </TabsList>

            {/* Pending Challenges */}
            <TabsContent value="pending-challenges" className="mt-6">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {mockPendingChallenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">
                                {challenge.title}
                              </CardTitle>
                              <Badge
                                className={`text-xs border ${getUrgencyColor(
                                  challenge.urgency,
                                )}`}
                              >
                                {challenge.urgency.charAt(0).toUpperCase() +
                                  challenge.urgency.slice(1)}
                              </Badge>
                            </div>
                            <CardDescription className="mb-2">
                              By: {challenge.organization} • Budget:{" "}
                              {challenge.budget}
                            </CardDescription>
                            <div className="flex gap-2 mb-3">
                              <Badge variant="secondary" className="text-xs">
                                {challenge.sector}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <MapPin className="h-3 w-3 mr-1" />
                                {challenge.region}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(
                                  challenge.submittedAt,
                                ).toLocaleDateString()}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm">
                              {challenge.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleApprove(challenge.id, "challenge")
                            }
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 border-red-600 hover:bg-red-50"
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Reject Challenge
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to reject this
                                  challenge? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() =>
                                    handleReject(challenge.id, "challenge")
                                  }
                                >
                                  Reject
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit Tags
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Pending Solutions */}
            <TabsContent value="pending-solutions" className="mt-6">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {mockPendingSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">
                              {solution.title}
                            </CardTitle>
                            <CardDescription className="mb-2">
                              For: {solution.challengeTitle} • By:{" "}
                              {solution.author}
                            </CardDescription>
                            <div className="flex gap-2 mb-3">
                              <Badge variant="outline" className="text-xs">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(
                                  solution.submittedAt,
                                ).toLocaleDateString()}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground text-sm">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleApprove(solution.id, "solution")
                            }
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              handleReject(solution.id, "solution")
                            }
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Flagged Content */}
            <TabsContent value="flagged-content" className="mt-6">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {mockFlaggedContent.map((content, index) => (
                  <motion.div
                    key={content.id}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 border-red-200">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">
                                {content.title}
                              </CardTitle>
                              <Badge variant="destructive" className="text-xs">
                                <Flag className="h-3 w-3 mr-1" />
                                {content.flags} flags
                              </Badge>
                            </div>
                            <CardDescription className="mb-2">
                              By: {content.author} • Type:{" "}
                              {content.type.charAt(0).toUpperCase() +
                                content.type.slice(1)}
                            </CardDescription>
                            <div className="flex gap-2 mb-3">
                              <Badge
                                variant="outline"
                                className="text-xs text-red-600 border-red-200"
                              >
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                {content.reason}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(
                                  content.flaggedAt,
                                ).toLocaleDateString()}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveFlag(content.id)}
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Remove Flag
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete Content
                          </Button>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Content
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* User Management */}
            <TabsContent value="user-management" className="mt-6">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {mockUsers.map((user, index) => (
                  <motion.div
                    key={user.id}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-lg">
                                {user.name}
                              </CardTitle>
                              <Badge
                                variant={
                                  user.role === "organization"
                                    ? "default"
                                    : "secondary"
                                }
                                className="text-xs"
                              >
                                {user.role.charAt(0).toUpperCase() +
                                  user.role.slice(1)}
                              </Badge>
                              <Badge
                                variant={
                                  user.status === "active"
                                    ? "default"
                                    : "destructive"
                                }
                                className="text-xs"
                              >
                                {user.status.charAt(0).toUpperCase() +
                                  user.status.slice(1)}
                              </Badge>
                            </div>
                            <CardDescription className="mb-2">
                              {user.email} • Joined:{" "}
                              {new Date(user.joinedAt).toLocaleDateString()}
                            </CardDescription>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <span>{user.challengesSubmitted} challenges</span>
                              <span>{user.solutionsSubmitted} solutions</span>
                              <span>Reputation: {user.reputation}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          {user.status === "active" && (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-red-600 border-red-600 hover:bg-red-50"
                                >
                                  <Ban className="h-4 w-4 mr-1" />
                                  Ban User
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Ban User</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to ban this user? They
                                    will lose access to the platform.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleBanUser(user.id)}
                                  >
                                    Ban User
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
           {/* Space for footer */}
        <div className="h-20 "></div>
        {/* end of space */}
      </div>
    </Layout>
  );
}
