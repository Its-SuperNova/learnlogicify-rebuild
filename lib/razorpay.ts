// Type definition for Razorpay options
export interface RazorpayOptions {
    key: string
    amount: number
    currency: string
    name: string
    description: string
    image?: string
    order_id?: string
    handler: (response: any) => void
    prefill: {
      name: string
      email: string
      contact: string
    }
    notes?: {
      [key: string]: string
    }
    theme?: {
      color: string
    }
  }
  
  // Type definition for the Razorpay instance
  declare global {
    interface Window {
      Razorpay: any
    }
  }
  
  // Function to load the Razorpay script
  export const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }
  
  // Function to initialize Razorpay payment
  export const initializeRazorpayPayment = async (options: RazorpayOptions): Promise<void> => {
    const res = await loadRazorpayScript()
  
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your internet connection.")
      return
    }
  
    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }
  
  