"use client"

import type { UseFormReturn } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

interface Step3Props {
  form: UseFormReturn<any>
}

export default function Step3({ form }: Step3Props) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="willingToLearnFullStack"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Are you willing to learn full-stack development?</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="interestedIn30DayWorkshop"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>If we organize a 30-day full-stack workshop, would you be interested?</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expectedPriceRange"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What price range would you expect for the 30-day workshop? (₹)</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={1999}
                step={500}
                placeholder="Enter expected price (min ₹1999)"
                {...field}
                onChange={(e) => {
                  // Ensure the value is at least 1999 and increments by 500
                  let value = Number.parseInt(e.target.value)
                  if (isNaN(value) || value < 1999) {
                    value = 1999
                  } else {
                    // Round to nearest 500
                    const remainder = value % 500
                    if (remainder !== 0) {
                      value = remainder < 250 ? value - remainder : value + (500 - remainder)
                    }
                  }
                  field.onChange(value)
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

