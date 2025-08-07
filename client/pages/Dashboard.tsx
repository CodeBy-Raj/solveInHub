import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import { Search, Eye, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Challenge {
  id: string;
  title: string;
  description: string;
  sector: string;
  urgency: "low" | "medium" | "high";
  region: string;
  createdAt: string;
  solutionCount: number;
}

// Mock data for demonstration
const mockChallenges: Challenge[] = [
  {
    id: "1",
    title: "Urban Water Management Crisis",
    description:
      "Major city facing severe water shortage due to aging infrastructure and climate change. Need innovative solutions for water conservation and distribution.",
    sector: "Environment",
    urgency: "high",
    region: "North America",
    createdAt: "2024-01-15",
    solutionCount: 12,
  },
  {
    id: "2",
    title: "Healthcare Access in Rural Areas",
    description:
      "Remote communities lack adequate healthcare services. Seeking technology-driven solutions to bridge the healthcare gap.",
    sector: "Healthcare",
    urgency: "medium",
    region: "Asia",
    createdAt: "2024-01-14",
    solutionCount: 8,
  },
  {
    id: "3",
    title: "Food Waste Reduction in Supply Chain",
    description:
      "Large-scale food distributor looking for innovative approaches to minimize food waste throughout the supply chain.",
    sector: "Agriculture",
    urgency: "medium",
    region: "Europe",
    createdAt: "2024-01-13",
    solutionCount: 15,
  },
  {
    id: "4",
    title: "Digital Education Platform for Underserved Communities",
    description:
      "Educational gaps in low-income areas need addressing through accessible digital learning solutions.",
    sector: "Education",
    urgency: "high",
    region: "Africa",
    createdAt: "2024-01-12",
    solutionCount: 6,
  },
  {
    id: "5",
    title: "Renewable Energy Storage Optimization",
    description:
      "Solar energy company needs efficient storage solutions to handle peak demand fluctuations.",
    sector: "Energy",
    urgency: "low",
    region: "South America",
    createdAt: "2024-01-11",
    solutionCount: 9,
  },
  {
    id: "6",
    title: "Smart Traffic Management System",
    description:
      "Metropolitan area struggling with traffic congestion. Looking for AI-driven traffic optimization solutions.",
    sector: "Transportation",
    urgency: "medium",
    region: "Asia",
    createdAt: "2024-01-10",
    solutionCount: 11,
  },
];

const sectors = [
  "All Sectors",
  "Environment",
  "Healthcare",
  "Agriculture",
  "Education",
  "Energy",
  "Transportation",
];
const urgencyLevels = ["All Urgency", "low", "medium", "high"];
const regions = [
  "All Regions",
  "North America",
  "South America",
  "Europe",
  "Asia",
  "Africa",
];

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

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [selectedUrgency, setSelectedUrgency] = useState("All Urgency");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredChallenges = useMemo(() => {
    return mockChallenges.filter((challenge) => {
      const matchesSearch =
        challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        challenge.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector =
        selectedSector === "All Sectors" || challenge.sector === selectedSector;
      const matchesUrgency =
        selectedUrgency === "All Urgency" ||
        challenge.urgency === selectedUrgency;
      const matchesRegion =
        selectedRegion === "All Regions" || challenge.region === selectedRegion;

      return matchesSearch && matchesSector && matchesUrgency && matchesRegion;
    });
  }, [searchTerm, selectedSector, selectedUrgency, selectedRegion]);

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
        {/* Hero Section */}
        <motion.div {...fadeInUp} className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Challenge Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore active challenges from organizations worldwide. Find
            problems that match your expertise and make a difference.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-4"
        >
            <div className="relative mb-4">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" /> */}
            <Input
              placeholder="Search challenges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            </div>

          <div className="flex flex-wrap gap-4">
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-58 ">
                <SelectValue placeholder="Select sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map((sector) => (
                  <SelectItem key={sector} value={sector}>
                    {sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedUrgency} onValueChange={setSelectedUrgency}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select urgency" />
              </SelectTrigger>
              <SelectContent>
                {urgencyLevels.map((urgency) => (
                  <SelectItem key={urgency} value={urgency}>
                    {urgency === "All Urgency"
                      ? urgency
                      : urgency.charAt(0).toUpperCase() + urgency.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredChallenges.length} challenge
            {filteredChallenges.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Challenge Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              variants={fadeInUp}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg leading-tight">
                      {challenge.title}
                    </CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {challenge.sector}
                    </Badge>
                    <Badge
                      className={cn(
                        "text-xs border",
                        getUrgencyColor(challenge.urgency),
                      )}
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {new Date(challenge.createdAt).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {challenge.solutionCount} solution
                      {challenge.solutionCount !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} className="mt-4">
                    <Button asChild className="w-full">
                      <Link
                        to={`/challenge/${challenge.id}`}
                        className="flex items-center"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredChallenges.length === 0 && (
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No challenges found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms to find more
              challenges.
            </p>
          </motion.div>
        )}
           {/* Space for footer */}
        <div className="h-20 "></div>
        {/* end of space */}
      </div>
    </Layout>
  );
}
