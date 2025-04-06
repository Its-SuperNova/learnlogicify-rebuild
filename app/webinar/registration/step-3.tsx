"use client"

import type { UseFormReturn } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { FormValues, expectedPriceOptions } from "./schema"

interface Step3Props {
  form: UseFormReturn<FormValues>
}

export default function Step3({ form }: Step3Props) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="willingToLearnFullStack"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Are you willing to learn full-stack development?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="interestedIn30DayWorkshop"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Are you interested in the 30-day workshop?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expectedPriceRange"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What price range do you expect for this program?</FormLabel>
            <Select
              onValueChange={(value) => field.onChange(Number(value))}
              defaultValue={field.value?.toString()}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a price range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {expectedPriceOptions.map((price) => (
                  <SelectItem key={price} value={price.toString()}>
                    ₹{price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
