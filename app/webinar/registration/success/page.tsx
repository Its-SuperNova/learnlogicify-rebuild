"use client"; // Add this for useEffect and useRouter

import React, { useEffect, useState } from 'react'; // Import useEffect, useState
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from 'lucide-react'; // Example icon
import { useRouter } from 'next/navigation'; // Import useRouter
import { Loader2 } from 'lucide-react'; // Import Loader

const RegistrationSuccessPage = () => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // IMPORTANT: Replace with your actual WhatsApp group link
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/JWSATUpYjUb0UTSike9XbH";

  useEffect(() => {
    const paymentVerified = sessionStorage.getItem('paymentVerified');
    if (paymentVerified === 'true') {
      sessionStorage.removeItem('paymentVerified'); // Remove flag after verification
      setIsVerified(true);
    } else {
      // Redirect if not verified
      console.warn("Payment not verified. Redirecting...");
      router.replace('/webinar/registration'); // Or router.replace('/')
    }
    setIsLoading(false); // Set loading to false after check
  }, [router]); // Add router to dependency array

  if (isLoading) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh]">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Verifying payment...</p>
      </div>
    );
  }

  if (!isVerified) {
    // Although redirection happens in useEffect, this prevents momentary flashing
    return null;
  }

  // Verified: Show success content
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-10">
      <CheckCircleIcon className="w-16 h-16 text-green-500 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Registration Successful!</h1>
      <p className="text-lg text-muted-foreground mb-2">Thank you for registering for the Git & GitHub Workshop.</p>
      <p className="text-lg text-muted-foreground mb-8">Your payment has been confirmed.</p>

      <p className="text-md mb-4">Join our WhatsApp group for workshop updates, Q&A, and community interaction:</p>

      <Link href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer">
        <Button size="lg">
          Join Workshop WhatsApp Group
        </Button>
      </Link>

      <p className="mt-8 text-sm text-muted-foreground">
        If the button doesn&apos;t work, copy and paste this link into your browser: <br />
        <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="underline break-all">{WHATSAPP_GROUP_LINK}</a>
      </p>

      <Link href="/" className="mt-10">
        <Button variant="outline">Go to Homepage</Button>
      </Link>
    </div>
  );
};

export default RegistrationSuccessPage; 