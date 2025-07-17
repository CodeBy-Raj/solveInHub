import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Upload,
  X,
  Plus,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Building2,
} from "lucide-react";

interface ProposeSolutionModalProps {
  challengeId: string;
  challengeTitle: string;
  children: React.ReactNode;
}

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

export default function ProposeSolutionModal({
  challengeId,
  challengeTitle,
  children,
}: ProposeSolutionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    implementation: "",
    benefits: "",
    authorName: "",
    authorEmail: "",
    organization: "",
    tags: [] as string[],
    attachments: [] as File[],
  });

  const [currentTag, setCurrentTag] = useState("");

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

    // Reset form and close modal after success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        title: "",
        description: "",
        implementation: "",
        benefits: "",
        authorName: "",
        authorEmail: "",
        organization: "",
        tags: [],
        attachments: [],
      });
      setIsOpen(false);
    }, 2000);
  };

  const isFormValid =
    formData.title &&
    formData.description &&
    formData.implementation &&
    formData.authorName &&
    formData.authorEmail;

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      implementation: "",
      benefits: "",
      authorName: "",
      authorEmail: "",
      organization: "",
      tags: [],
      attachments: [],
    });
    setCurrentTag("");
    setShowSuccess(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          resetForm();
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {showSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <DialogTitle className="text-2xl text-green-800 mb-2">
              Solution Submitted!
            </DialogTitle>
            <DialogDescription className="text-green-700">
              Your solution has been successfully submitted and is now under
              review. You'll be notified once it's approved.
            </DialogDescription>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center text-2xl">
                <Lightbulb className="h-6 w-6 mr-2 text-primary" />
                Propose Solution
              </DialogTitle>
              <DialogDescription className="text-base">
                Submit your innovative solution for:{" "}
                <span className="font-semibold text-foreground">
                  {challengeTitle}
                </span>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <motion.div {...fadeInUp} className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="authorName">Your Name *</Label>
                      <Input
                        id="authorName"
                        placeholder="Full name"
                        value={formData.authorName}
                        onChange={(e) =>
                          handleInputChange("authorName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="authorEmail">Email Address *</Label>
                      <Input
                        id="authorEmail"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.authorEmail}
                        onChange={(e) =>
                          handleInputChange("authorEmail", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="organization" className="flex items-center">
                      <Building2 className="h-4 w-4 mr-1" />
                      Organization (Optional)
                    </Label>
                    <Input
                      id="organization"
                      placeholder="Your organization or company"
                      value={formData.organization}
                      onChange={(e) =>
                        handleInputChange("organization", e.target.value)
                      }
                    />
                  </div>
                </div>
              </motion.div>

              {/* Solution Details */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Solution Details
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Solution Title *</Label>
                      <Input
                        id="title"
                        placeholder="Brief, descriptive title for your solution"
                        value={formData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Solution Overview *</Label>
                      <Textarea
                        id="description"
                        placeholder="Provide a clear overview of your solution and how it addresses the challenge..."
                        className="min-h-24"
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="implementation">
                        Implementation Approach *
                      </Label>
                      <Textarea
                        id="implementation"
                        placeholder="Explain how your solution would be implemented, including technical details, timeline, and resources needed..."
                        className="min-h-24"
                        value={formData.implementation}
                        onChange={(e) =>
                          handleInputChange("implementation", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="benefits">Expected Benefits</Label>
                      <Textarea
                        id="benefits"
                        placeholder="Describe the expected impact, benefits, and outcomes of your solution..."
                        className="min-h-20"
                        value={formData.benefits}
                        onChange={(e) =>
                          handleInputChange("benefits", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tags and Attachments */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Additional Information
                  </h3>

                  {/* Tags */}
                  <div className="space-y-2 mb-4">
                    <Label>Tags (Optional)</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add a tag (e.g., AI, IoT, Sustainable)"
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
                    <Label htmlFor="attachments">Supporting Documents</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
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
                        size="sm"
                        onClick={() =>
                          document.getElementById("attachments")?.click()
                        }
                      >
                        Choose Files
                      </Button>
                      <p className="text-sm text-muted-foreground mt-1">
                        PDF, DOC, TXT, or image files
                      </p>
                    </div>
                    {formData.attachments.length > 0 && (
                      <div className="space-y-2">
                        {formData.attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-muted rounded text-sm"
                          >
                            <span>{file.name}</span>
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
                </div>
              </motion.div>

              {/* Validation Alert */}
              {!isFormValid && (
                <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Please fill in all required fields marked with *
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </form>

            <DialogFooter className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                className="min-w-32"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="loading loading-spinner loading-sm mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <>
                    <Lightbulb className="h-4 w-4 mr-2" />
                    Submit Solution
                  </>
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
