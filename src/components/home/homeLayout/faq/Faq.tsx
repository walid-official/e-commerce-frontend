"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to the most common questions about our product and services.
          </p>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">General Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">What is your product?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Our product is a comprehensive platform designed to streamline your workflow, enhance collaboration,
                  and boost productivity for teams of all sizes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">How do I get started?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Getting started is easy! Simply sign up for a free account, and you'll be guided through our
                  onboarding process. We also have detailed tutorials available in our documentation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Is there a free trial?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Yes, we offer a 14-day free trial with full access to all premium features. No credit card is required
                  to start your trial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also
                  support payments via PayPal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  Can I cancel my subscription anytime?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  You can cancel your subscription at any time directly from your account settings. There are no hidden
                  fees or long-term contracts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
