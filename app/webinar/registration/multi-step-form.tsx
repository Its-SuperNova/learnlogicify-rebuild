"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { formSchema } from "./schema"
import Step1 from "./step-1"
import Step2 from "./step-2"
import Step3 from "./step-3"
import Step4 from "./step-4"
import Step5 from "./step-5"
import useMultiStepForm from "./use-multi-step-form"
import { ThemeToggle } from "@/components/theme-toggle"
import { saveRegistration } from "@/lib/supabase"
import { initializeRazorpayPayment } from "@/lib/razorpay"
import Swal from "sweetalert2"
import { Form } from "@/components/ui/form"

type FormValues = z.infer<typeof formSchema>

export default function MultiStepForm() {
  const [formData, setFormData] = useState<Partial<FormValues>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      referralSource: "",
      yearOfStudy: "",
      graduationYear: new Date().getFullYear(),
      collegeName: "",
      department: "",
      address: "",
      status: "student",
      linkedinProfile: "",
      willingToLearnFullStack: "yes",
      interestedIn30DayWorkshop: "yes",
      expectedPriceRange: 1999, // Updated default value to 1999
      learningExpectations: "",
      needGitSetupHelp: "yes",
      interestedTopics: [],
      gitKnowledgeLevel: "beginner",
      needInvoice: "no",
      agreeToTerms: false,
    },
    mode: "onChange",
  })

  const steps = [
    { id: "step-1", name: "Personal Details", component: <Step1 form={form} /> },
    { id: "step-2", name: "Educational Details", component: <Step2 form={form} /> },
    { id: "step-3", name: "Workshop Interest", component: <Step3 form={form} /> },
    { id: "step-4", name: "Workshop Expectations", component: <Step4 form={form} /> },
    { id: "step-5", name: "Confirmation & Payment", component: <Step5 form={form} /> },
  ]

  const { step, next, back, isFirstStep, isLastStep, progress } = useMultiStepForm(steps)

  const handleNext = async () => {
    const fieldsToValidate = getFieldsToValidate(currentStep)

    const result = await form.trigger(fieldsToValidate as any)
    if (!result) return

    if (isLastStep) {
      await form.handleSubmit(onSubmit)()
      return
    }

    // Save current step data
    setFormData({ ...formData, ...form.getValues() })
    next()
    setCurrentStep((prev) => prev + 1)
  }

  const getFieldsToValidate = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return ["fullName", "email", "phoneNumber", "referralSource"]
      case 1:
        return ["yearOfStudy", "graduationYear", "collegeName", "department", "address", "status"]
      case 2:
        return ["willingToLearnFullStack", "interestedIn30DayWorkshop", "expectedPriceRange"]
      case 3:
        return ["learningExpectations", "needGitSetupHelp", "interestedTopics", "gitKnowledgeLevel"]
      case 4:
        return ["needInvoice", "agreeToTerms"]
      default:
        return []
    }
  }

  const redirectToPayment = (formData: FormValues) => {
    const options = {
      key: "rzp_live_72F0ktzbrHtyfp", // Razorpay Key ID
      amount: formData.expectedPriceRange * 100, // Amount in paisa
      currency: "INR",
      name: "Workshop Registration",
      description: "30-Day Full-Stack Workshop Registration",
      handler: (response: any) => {
        // Handle successful payment
        console.log("Payment successful", response)
        // You can add additional logic here to update payment status in Supabase
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phoneNumber,
      },
      notes: {
        address: formData.address,
      },
      theme: {
        color: "#3399cc",
      },
    }

    initializeRazorpayPayment(options)
  }

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true)

      // Save data to Supabase
      await saveRegistration({
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        referralSource: data.referralSource,
        yearOfStudy: data.yearOfStudy,
        graduationYear: data.graduationYear,
        collegeName: data.collegeName,
        department: data.department,
        address: data.address,
        status: data.status,
        linkedinProfile: data.linkedinProfile,
        willingToLearnFullStack: data.willingToLearnFullStack,
        interestedIn30DayWorkshop: data.interestedIn30DayWorkshop,
        expectedPriceRange: data.expectedPriceRange,
        learningExpectations: data.learningExpectations,
        needGitSetupHelp: data.needGitSetupHelp,
        interestedTopics: data.interestedTopics,
        gitKnowledgeLevel: data.gitKnowledgeLevel,
        needInvoice: data.needInvoice,
      })

      // Show success message with SweetAlert2
      Swal.fire({
        title: "Success!",
        text: "Your registration has been successfully submitted.",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading()
          const timer = Swal.getPopup()?.querySelector("b")
          if (timer) {
            const timerInterval = setInterval(() => {
              if (timer) {
                timer.textContent = `${Swal.getTimerLeft()}`
              }
            }, 100)
            Swal.getPopup()?.addEventListener("mouseenter", () => {
              clearInterval(timerInterval)
            })
          }
        },
        willClose: () => {
          // Show redirection message
          Swal.fire({
            title: "Redirecting...",
            text: "Redirecting to payment gateway...",
            icon: "info",
            showConfirmButton: false,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
              // Redirect to Razorpay after a short delay
              setTimeout(() => {
                redirectToPayment(data)
              }, 1500)
            },
          })
        },
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting your registration. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl shadow-lg overflow-hidden bg-card">
      <div className="p-6 border-b flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Workshop Registration</h2>
          <p className="text-muted-foreground">Complete all steps to register for the workshop</p>
        </div>

        {/* Theme toggle button */}
        <ThemeToggle />
      </div>

      {/* Progress bar */}
      <div className="px-6 pt-4">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          {steps.map((step, index) => (
            <span key={step.id} className={`${index <= currentStep ? "text-primary font-medium" : ""}`}>
              {index + 1}
            </span>
          ))}
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-medium">{step.name}</h3>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step.component}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 border-t flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              back()
              setCurrentStep((prev) => Math.max(0, prev - 1))
            }}
            disabled={isFirstStep}
          >
            Back
          </Button>
          <Button type="button" onClick={handleNext} disabled={isSubmitting}>
            {isLastStep ? (isSubmitting ? "Submitting..." : "Submit") : "Next"}
          </Button>
        </div>
      </Form>
    </div>
  )
}

