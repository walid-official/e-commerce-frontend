import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden py-12 md:py-24  bg-white">
        <section className="mx-auto max-w-7xl">
        <svg
            className="absolute bottom-0 right-0 w-full h-full z-0"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            fill="#E0F2F7"
            d="M1000,500 L1000, 200 C 900, 50 700, 0 500, 50 C 300, 100 100, 250 0, 350 L 0, 500 Z"
            ></path>
        </svg>

        <div className="container px-4 md:px-6 relative ">
            <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                <p className="text-sm font-semibold text-teal-500 uppercase tracking-wider">Up to 50% Off</p>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none">
                    We Print Best Designs.
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl italic">
                    Discover our exclusive collection of high-quality t-shirts, designed for comfort, durability, and
                    unmatched style. Find your perfect fit today.
                </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link href="#" passHref>
                    <Button size="lg" className="px-8 py-3 text-lg bg-rose-500 hover:bg-rose-600 text-white">
                    Shop Now
                    </Button>
                </Link>
                </div>
            </div>
            <Image
                src="/t-shirt.jpg"
                width={600}
                height={600}
                alt="Stylish t-shirt on a hanger"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                priority
            />
            </div>
        </div>
        </section>
    </div>
  )
}