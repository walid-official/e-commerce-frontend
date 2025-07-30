import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { GithubIcon, ChromeIcon, AppleIcon } from "lucide-react" // Using ChromeIcon for Google

export const SignupForm = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
      {/* <Separator className="my-6" /> */}
      {/* <div className="space-y-2">
        <Button variant="outline" className="w-full bg-transparent">
          <ChromeIcon className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          <GithubIcon className="mr-2 h-4 w-4" />
          Sign up with Facebook
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          <AppleIcon className="mr-2 h-4 w-4" />
          Sign up with Apple
        </Button>
      </div> */}
    </div>
  )
}