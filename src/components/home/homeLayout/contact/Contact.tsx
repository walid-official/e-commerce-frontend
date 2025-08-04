import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react"
import Image from "next/image"

export const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-teal-600 sm:text-5xl">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-teal-600">Business Information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-6 w-6 text-teal-500" />
                <div>
                  <h3 className="font-medium text-lg">Our Office</h3>
                  <p className="text-muted-foreground">123 Business Rd, Suite 400</p>
                  <p className="text-muted-foreground">Cityville, State 12345</p>
                  <p className="text-muted-foreground">Country</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-6 w-6 text-teal-500" />
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MailIcon className="h-6 w-6 text-teal-500" />
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-muted-foreground">info@yourbusiness.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <ClockIcon className="h-6 w-6 text-teal-500" />
                <div>
                  <h3 className="font-medium text-lg">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/contact.jpg"
                alt="Office Location"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
