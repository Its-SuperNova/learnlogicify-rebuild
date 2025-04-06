import { z } from "zod"

export const expectedPriceOptions = [2499, 2999, 3499, 3999] as const
export type ExpectedPrice = typeof expectedPriceOptions[number]

export const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(10, { message: "Valid phone number is required" }),
  referralSource: z.string().min(1, { message: "Please select how you heard about us" }),

  yearOfStudy: z.string().min(1, { message: "Please select your year of study" }),
  graduationYear: z.coerce.number().min(2000).max(2030),
  collegeName: z.string().min(2, { message: "College name is required" }),
  department: z.string().min(2, { message: "Department is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  status: z.enum(["student", "working"], {
    required_error: "Please select your status",
  }),
  linkedinProfile: z.string().url({ message: "Invalid URL" }).optional().or(z.literal("")),

  willingToLearnFullStack: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),
  interestedIn30DayWorkshop: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),

  expectedPriceRange: z.union(
    expectedPriceOptions.map((price) => z.literal(price)) as [
      z.ZodLiteral<2499>,
      z.ZodLiteral<2999>,
      z.ZodLiteral<3499>,
      z.ZodLiteral<3999>
    ]
  ),

  learningExpectations: z.string().min(10, { message: "Please share your expectations" }),
  needGitSetupHelp: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),
  interestedTopics: z.array(z.string()).min(1, { message: "Select at least one topic" }),
  gitKnowledgeLevel: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Please select your knowledge level",
  }),

  needInvoice: z.enum(["yes", "no"], {
    required_error: "Please make a selection",
  }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
})

export type FormValues = z.infer<typeof formSchema>
