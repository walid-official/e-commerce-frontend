import { Card, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
export const Category = () => {
    return (
        <div>
    <section className="relative w-full py-12 md:py-20 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
        {/* Subtle wave shape at the bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[100px] z-0"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F0F8FF" // Very light blue
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,59,576,53.3C672,48,768,53,864,58.7C960,64,1056,70,1152,69.3C1248,69,1344,64,1392,61.3L1440,59L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Shop by Category</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse range of t-shirt categories.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Men's", "Women's", "Kids'", "Graphic Tees", "Sports", "Vintage", "Custom", "Sale"].map(
              (category, index) => (
                <Link key={index} href="#" passHref>
                  <Card className="group flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&query=${category} t-shirt icon`}
                      width={80}
                      height={80}
                      alt={`${category} category icon`}
                      className="mb-4 rounded-full bg-neutral-100 p-2 group-hover:scale-105 transition-transform"
                    />
                    <CardTitle className="text-lg font-semibold">{category}</CardTitle>
                  </Card>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

        </div>
    )
}