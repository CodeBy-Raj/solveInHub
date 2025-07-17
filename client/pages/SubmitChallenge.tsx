import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Upload,
  X,
  Plus,
  Building2,
  Globe,
  Clock,
  DollarSign,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function SubmitChallenge() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    sector: "",
    urgency: "",
    region: "",
    budget: "",
    deadline: "",
    organization: "",
    contactEmail: "",
    tags: [] as string[],
    attachments: [] as File[],
  });

  const [currentTag, setCurrentTag] = useState("");

  const sectors = [
    "Environment",
    "Healthcare",
    "Agriculture",
    "Education",
    "Energy",
    "Transportation",
    "Technology",
    "Finance",
    "Social Impact",
  ];

  const urgencyLevels = ["low", "medium", "high"];

  const regions = [
    "North America",
    "South America",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Global",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const removeFile = (fileToRemove: File) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((file) => file !== fileToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/dashboard");
    }, 3000);
  };

  const isFormValid =
    formData.title &&
    formData.description &&
    formData.sector &&
    formData.urgency &&
    formData.region &&
    formData.organization &&
    formData.contactEmail;

  if (showSuccess) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center"
          >
            <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
              <CardContent className="pt-6">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                  Challenge Submitted!
                </h2>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  Your challenge has been successfully submitted and is now
                  under review. You'll be notified once it's approved.
                </p>
                <Button onClick={() => navigate("/dashboard")}>
                  View All Challenges
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/dashboard" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Submit New Challenge
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your organization's challenges with our global community of
              innovators and problem-solvers.
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>
                    Provide the essential details about your challenge
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name *</Label>
                      <Input
                        id="organization"
                        placeholder="Your organization name"
                        value={formData.organization}
                        onChange={(e) =>
                          handleInputChange("organization", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Contact Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="contact@organization.com"
                        value={formData.contactEmail}
                        onChange={(e) =>
                          handleInputChange("contactEmail", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Challenge Title *</Label>
                    <Input
                      id="title"
                      placeholder="Brief, descriptive title for your challenge"
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a comprehensive description of the challenge, including context, requirements, and desired outcomes..."
                      className="min-h-32"
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      required
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Challenge Details */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Challenge Details
                  </CardTitle>
                  <CardDescription>
                    Categorize and specify the challenge parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sector">Sector *</Label>
                      <Select
                        value={formData.sector}
                        onValueChange={(value) =>
                          handleInputChange("sector", value)
                        }
                        required
                      >
                        <SelectTrigger>
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level *</Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) =>
                          handleInputChange("urgency", value)
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level.charAt(0).toUpperCase() + level.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Region *</Label>
                      <Select
                        value={formData.region}
                        onValueChange={(value) =>
                          handleInputChange("region", value)
                        }
                        required
                      >
                        <SelectTrigger>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Budget Range
                      </Label>
                      <Input
                        id="budget"
                        placeholder="e.g., $50K - $100K"
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline" className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Deadline
                      </Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={(e) =>
                          handleInputChange("deadline", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tags and Attachments */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                  <CardDescription>
                    Add tags and attach relevant documents
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="space-y-2">
                    <Label>Tags</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a tag"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addTag}
                        disabled={!currentTag.trim()}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            {tag}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => removeTag(tag)}
                            />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="attachments">Attachments</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <input
                        id="attachments"
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          document.getElementById("attachments")?.click()
                        }
                      >
                        Choose Files
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">
                        PDF, DOC, TXT, or image files
                      </p>
                    </div>
                    {formData.attachments.length > 0 && (
                      <div className="space-y-2">
                        {formData.attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-muted rounded"
                          >
                            <span className="text-sm">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(file)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Submit */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {!isFormValid && (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please fill in all required fields marked with *
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" asChild>
                  <Link to="/dashboard">Cancel</Link>
                </Button>
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="min-w-32"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="loading loading-spinner loading-sm mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Submit Challenge"
                  )}
                </Button>
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
