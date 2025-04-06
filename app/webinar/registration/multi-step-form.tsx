"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { formSchema, FormValues } from "./schema"
import { z } from "zod"
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
import { useRouter } from "next/navigation"

const PAYMENT_FLAG_KEY = "paymentInitiatedEmail"

export default function MultiStepForm() {
  const [formData, setFormData] = useState<Partial<FormValues>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

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
      expectedPriceRange: 2499 as 2499, // Important: use literal
      learningExpectations: "",
      needGitSetupHelp: "yes",
      interestedTopics: [],
      gitKnowledgeLevel: "beginner",
      needInvoice: "no",
      agreeToTerms: true,
    },
    mode: "onChange",
  })

  useEffect(() => {
    const initiatedEmail = localStorage.getItem(PAYMENT_FLAG_KEY)
    if (initiatedEmail) {
      Swal.fire({
        title: "Payment Incomplete?",
        text: "It looks like you may have started the payment process but didn't complete it. Your registration details were saved.",
        icon: "warning",
        confirmButtonText: "OK",
      }).finally(() => setIsSubmitting(false))

      localStorage.removeItem(PAYMENT_FLAG_KEY)
    }
  }, [])

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
    localStorage.setItem(PAYMENT_FLAG_KEY, formData.email)

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_your_key_here",
      amount: Math.round(199 * 1.18 * 100),
      currency: "INR",
      name: "Git & GitHub Workshop Registration",
      description: "Ultimate Webinar on Mastering Git & GitHub",
      handler: (response: any) => {
        localStorage.removeItem(PAYMENT_FLAG_KEY)
        sessionStorage.setItem("paymentVerified", "true")
        setIsSubmitting(false)
        router.push("/webinar/registration/success")
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
        color: "#6A0DAD",
      },
      modal: {
        ondismiss: () => {
          localStorage.removeItem(PAYMENT_FLAG_KEY)
          setIsSubmitting(false)
          Swal.fire({
            title: "Payment Cancelled",
            text: "You closed the payment window. Your registration details were saved, but payment was not completed.",
            icon: "warning",
            confirmButtonText: "OK",
          })
        },
      },
    }

    initializeRazorpayPayment(options)
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true)
    try {
      await saveRegistration(data)
      redirectToPayment(data)
    } catch (error) {
      let errorMessage = "There was an error submitting your registration. Please try again."
      if (error instanceof Error) {
        errorMessage += ` Details: ${error.message}`
      }
      Swal.fire({
        title: "Registration Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      })
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
        <ThemeToggle />
      </div>

      <div className="px-6 pt-4">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          {steps.map((step, index) => (
            <span
              key={step.id}
              className={index <= currentStep ? "text-primary font-medium" : ""}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="contents">
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
              disabled={isFirstStep || isSubmitting}
            >
              Back
            </Button>
            <Button type="button" onClick={handleNext} disabled={isSubmitting}>
              {isLastStep ? (isSubmitting ? "Processing..." : "Submit & Pay ₹235") : "Next"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
