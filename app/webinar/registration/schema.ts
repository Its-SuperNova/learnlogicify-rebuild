import { z } from "zod"

// Define the form schema with Zod
export const formSchema = z.object({
  // Step 1: Personal Details
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(10, { message: "Valid phone number is required" }),
  referralSource: z.string().min(1, { message: "Please select how you heard about us" }),

  // Step 2: Educational Details
  yearOfStudy: z.string().min(1, { message: "Please select your year of study" }),
  graduationYear: z.number().min(2000).max(2030),
  collegeName: z.string().min(2, { message: "College name is required" }),
  department: z.string().min(2, { message: "Department is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  status: z.enum(["student", "working"], {
    required_error: "Please select your status",
  }),
  linkedinProfile: z.string().url({ message: "Invalid URL" }).optional().or(z.literal("")),

  // Step 3: Workshop Interest
  willingToLearnFullStack: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),
  interestedIn30DayWorkshop: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),
  expectedPriceRange: z.number().min(0, { message: "Please enter a valid price" }),

  // Step 4: Workshop Expectations
  learningExpectations: z.string().min(10, { message: "Please share your expectations" }),
  needGitSetupHelp: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),
  interestedTopics: z.array(z.string()).min(1, { message: "Select at least one topic" }),
  gitKnowledgeLevel: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Please select your knowledge level",
  }),

  // Step 5: Confirmation & Payment
  needInvoice: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
})

