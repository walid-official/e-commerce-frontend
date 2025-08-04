"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Gem, Leaf, Users } from "lucide-react"

export const About = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div className="max-w-3xl mx-auto  md:px-6 text-center">
            <div className=" space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About DenialFashion: Redefining Style, Empowering You
              </h1>
              <p className="text-lg md:text-xl">
                At DenialFashion, we believe that fashion is more than just clothing—it's a form of self-expression, a
                statement of individuality, and a journey of discovery.
              </p>
              <Link href="/all-products">
                <Button className="mt-6 cursor-pointer bg-white text-teal-700 hover:bg-gray-100 hover:text-teal-800 transition-colors">
                  Explore Our Collections
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-700">Our Story</h2>
              <p className="text-muted-foreground md:text-lg">
                DenialFashion was born from a passion for bringing high-quality, trend-setting, and accessible fashion
                to everyone. We started with a simple idea: to create an online destination where style meets
                convenience, and where every customer feels confident and inspired. From humble beginnings, we&apos;ve
                grown into a thriving community of fashion enthusiasts, constantly evolving to meet the diverse needs of
                our clientele.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Our journey is marked by a relentless pursuit of excellence, a commitment to ethical sourcing, and a
                deep understanding of what makes fashion truly impactful. We curate our collections with care, ensuring
                each piece reflects our dedication to quality, design, and value.
              </p>
            </div>
            <Image
              src="/images/person1.jpg"
              width={600}
              height={500}
              alt="DenialFashion Story"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="max-w-7xl mx-auto  px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-700">
                Our Mission & Values
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Our mission is to empower individuals through fashion, offering curated collections that blend
                contemporary trends with timeless elegance, all while championing ethical practices and sustainability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="flex flex-col items-center space-y-3">
                  <Gem className="h-12 w-12 text-teal-600" />
                  <h3 className="text-xl font-semibold text-teal-700">Quality Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    We meticulously select garments and accessories known for their superior quality and durability.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Leaf className="h-12 w-12 text-teal-600" />
                  <h3 className="text-xl font-semibold text-teal-700">Sustainable Practices</h3>
                  <p className="text-muted-foreground">
                    Committed to reducing our environmental footprint through responsible sourcing and operations.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Users className="h-12 w-12 text-teal-600" />
                  <h3 className="text-xl font-semibold text-teal-700">Customer Centricity</h3>
                  <p className="text-muted-foreground">
                    Your satisfaction is our priority. We strive to provide an exceptional shopping experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <Image
              src="/logo-2.jpg"
              width={600}
              height={400}
              alt="Why Choose DenialFashion"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-700">
                Why Choose DenialFashion?
              </h2>
              <ul className="grid gap-4 text-muted-foreground md:text-lg">
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                  <span>
                    **Curated Collections:** Hand-picked styles that reflect the latest trends and timeless classics.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                  <span>
                    **Exceptional Customer Service:** Our dedicated team is here to ensure your shopping experience is
                    seamless and enjoyable.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                  <span>
                    **Secure & Convenient Shopping:** A user-friendly platform with secure payment options and fast
                    delivery.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-teal-600 shrink-0 mt-1" />
                  <span>
                    **Commitment to Community:** We believe in giving back and fostering a positive impact through
                    fashion.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-700 to-teal-900 text-white text-center">
          <div className="container px-4 md:px-6 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Discover Your Next Favorite Outfit?
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl">
              Join the DenialFashion community and experience a new era of online shopping.
            </p>
            <Link href="/all-products">
              <Button className="mt-6 cursor-pointer bg-white text-teal-700 hover:bg-gray-100 hover:text-teal-800 transition-colors">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
