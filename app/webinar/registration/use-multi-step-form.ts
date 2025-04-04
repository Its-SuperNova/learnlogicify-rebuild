"use client"

import { useState } from "react"

export default function useMultiStepForm(steps: any[]) {
  const [currentStep, setCurrentStep] = useState(0)

  function next() {
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStep((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index: number) {
    setCurrentStep(index)
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    next,
    back,
    goTo,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    progress,
  }
}

