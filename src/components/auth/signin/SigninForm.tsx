import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { GithubIcon, ChromeIcon, AppleIcon } from "lucide-react" 

export const  SigninForm  = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
      {/* <Separator className="my-6" /> */}
      {/* <div className="space-y-2">
        <Button variant="outline" className="w-full bg-transparent">
          <ChromeIcon className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          <GithubIcon className="mr-2 h-4 w-4" /> 
          Sign in with Facebook
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          <AppleIcon className="mr-2 h-4 w-4" />
          Sign in with Apple
        </Button>
      </div> */}
    </div>
  )
}
