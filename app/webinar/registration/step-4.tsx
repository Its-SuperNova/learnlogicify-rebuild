"use client"

import type { UseFormReturn } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

interface Step4Props {
  form: UseFormReturn<any>
}

const topics = [
  { id: "git-basics", label: "Git Basics" },
  { id: "github-actions", label: "GitHub Actions" },
  { id: "collaboration", label: "Collaboration" },
  { id: "advanced-git", label: "Advanced Git" },
]

export default function Step4({ form }: Step4Props) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="learningExpectations"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What do you hope to learn in this workshop?</FormLabel>
            <FormControl>
              <Textarea placeholder="Share your expectations..." className="min-h-[100px] resize-none" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="needGitSetupHelp"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Do you need help with installation/setup of Git?</FormLabel>
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
        name="interestedTopics"
        render={({ field }) => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Which topics are you most interested in?</FormLabel>
            </div>
            <div className="space-y-2">
              {topics.map((topic) => (
                <FormField
                  key={topic.id}
                  control={form.control}
                  name="interestedTopics"
                  render={({ field }) => {
                    return (
                      <FormItem key={topic.id} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(topic.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, topic.id])
                                : field.onChange(field.value?.filter((value: string) => value !== topic.id))
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{topic.label}</FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="gitKnowledgeLevel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rate Your Git/GitHub Knowledge</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your knowledge level" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

