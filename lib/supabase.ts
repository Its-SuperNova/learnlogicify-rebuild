import { createClient } from "@supabase/supabase-js"

// Use the provided environment variables
const supabaseUrl = "https://glwciwabjdhjcdyfndjh.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdsd2Npd2FiamRoamNkeWZuZGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NzQwOTAsImV4cCI6MjA1OTI1MDA5MH0.ctbBte0ixRYS46-f77o7YCWGnZkeaszQV6e3A61zIwg"

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type for the workshop registration data
export type WorkshopRegistration = {
  id?: string
  fullName: string
  email: string
  phoneNumber: string
  referralSource: string
  yearOfStudy: string
  graduationYear: number
  collegeName: string
  department: string
  address: string
  status: string
  linkedinProfile?: string
  willingToLearnFullStack: string
  interestedIn30DayWorkshop: string
  expectedPriceRange: number
  learningExpectations: string
  needGitSetupHelp: string
  interestedTopics: string[]
  gitKnowledgeLevel: string
  needInvoice: string
  createdAt?: string
}

// Function to save registration data to Supabase
export async function saveRegistration(data: WorkshopRegistration) {
  try {
    const { data: result, error } = await supabase
      .from("workshop_registrations")
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone_number: data.phoneNumber,
          referral_source: data.referralSource,
          year_of_study: data.yearOfStudy,
          graduation_year: data.graduationYear,
          college_name: data.collegeName,
          department: data.department,
          address: data.address,
          status: data.status,
          linkedin_profile: data.linkedinProfile,
          willing_to_learn_full_stack: data.willingToLearnFullStack,
          interested_in_30_day_workshop: data.interestedIn30DayWorkshop,
          expected_price_range: data.expectedPriceRange,
          learning_expectations: data.learningExpectations,
          need_git_setup_help: data.needGitSetupHelp,
          interested_topics: data.interestedTopics,
          git_knowledge_level: data.gitKnowledgeLevel,
          need_invoice: data.needInvoice,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Error saving registration:", error)
      throw error
    }

    return result
  } catch (error) {
    console.error("Error in saveRegistration:", error)
    throw error
  }
}

