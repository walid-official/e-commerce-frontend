import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';
import Image from "next/image"

export const Services = () => {
    return (
        <div>
             {/* Custom Design Section */}
      <div className='relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden'>
      <section className="mx-auto max-w-7xl px-3">
        {/* Abstract, playful shapes */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#E0F2F7" // Light blue/grey
            fillOpacity="0.7"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,202.7C672,203,768,181,864,170.7C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <circle cx="100" cy="250" r="30" fill="#F0F8FF" opacity="0.5" />
          <circle cx="1300" cy="50" r="40" fill="#F0F8FF" opacity="0.5" />
        </svg>
        <div className="container px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Design Your Own T-Shirt</h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Unleash your creativity! Create unique t-shirts with your own designs, logos, and text.
            </p>
            <Link href="#" passHref>
              <Button size="lg" className="px-8 py-3 text-lg bg-teal-500 hover:bg-teal-600 text-white">
                Start Designing
              </Button>
            </Link>
          </div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="Custom Design Illustration"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>
      </div>
        {/* Offers/Promotions Section */}
        <div className='relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-rose-50 to-purple-50 overflow-hidden'>
            <section className="mx-auto max-w-7xl px-3">
                {/* Large, bold blob shape in the background */}
                <svg
                className="absolute top-0 left-0 w-full h-full z-0"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill="#FCE7F3" // Very light pink
                    d="M0,250C0,111.9,111.9,0,250,0S500,111.9,500,250S388.1,500,250,500S0,388.1,0,250Z"
                    transform="translate(250 0)"
                ></path>
                </svg>
                <div className="container px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                <div className="space-y-4 max-w-2xl">
                    <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-rose-700">
                    Limited Time Offer!
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-xl">
                    Get 20% off on all orders over $50. Don't miss out on these amazing savings!
                    </p>
                </div>
                <Link href="#" passHref>
                    <Button size="lg" className="px-10 py-4 cursor-pointer text-xl bg-rose-600 hover:bg-rose-700 text-white shadow-lg">
                    Claim Your Discount
                    </Button>
                </Link>
                </div>
            </section>
        </div>

     

      {/* Testimonials Section */}
      <div className="relative w-full py-12 md:py-24 lg:py-32 bg-neutral-50 overflow-hidden">
        <section className="mx-auto max-w-7xl px-3">
            {/* Overlapping circles/blobs */}
            <svg
            className="absolute top-0 left-0 w-full h-full z-0"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill="#F0F8FF" // Very light blue
                fillOpacity="0.6"
                d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,208C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                transform="scale(1, -1) translate(0, -320)" // Flip vertically to place at top
            ></path>
            <circle cx="800" cy="400" r="80" fill="#E0F2F7" opacity="0.7" />
            <circle cx="200" cy="100" r="60" fill="#E0F2F7" opacity="0.7" />
            </svg>
            <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from happy customers who love our t-shirts.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                {
                    name: "Jane Doe",
                    quote: "The quality of these t-shirts is incredible! So soft and the print is perfect.",
                    avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                    name: "John Smith",
                    quote: "Fast shipping and exactly what I ordered. My new favorite place for tees!",
                    avatar: "/placeholder.svg?height=60&width=60",
                },
                {
                    name: "Emily White",
                    quote: "I love the unique designs. Always get compliments when I wear them.",
                    avatar: "/placeholder.svg?height=60&width=60",
                },
                ].map((testimonial, index) => (
                <Card key={index} className="p-6 flex flex-col items-center text-center shadow-md">
                    <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    width={60}
                    height={60}
                    alt={`${testimonial.name}'s avatar`}
                    className="rounded-full mb-4 object-cover"
                    />
                    <p className="text-lg italic mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                    <p className="font-semibold text-primary">- {testimonial.name}</p>
                </Card>
                ))}
            </div>
            </div>
        </section>
      </div>

      {/* Instagram Feed Section */}
      <div className='relative w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden'>

       <section className="mx-auto max-w-7xl px-3">
            {/* Simple, clean background with subtle dots */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(203,213,225,0.1)_1px,transparent_1px)] [background-size:20px_20px] z-0" />
            <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">#OurTeesInTheWild</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow us on Instagram and share your style!
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Link key={item} href="#" passHref>
                    <div className="relative aspect-square overflow-hidden rounded-lg group">
                    <Image
                        src={`/placeholder.svg?height=300&width=300&query=Instagram post ${item}`}
                        width={300}
                        height={300}
                        alt={`Instagram Post ${item}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram text-white w-8 h-8"
                        >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
                        </svg>
                    </div>
                    </div>
                </Link>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <Link href="#" passHref>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent">
                    Follow Us on Instagram
                </Button>
                </Link>
            </div>
            </div>
       </section>
    
      </div>
      {/* Newsletter Signup Section */}
      <div className='relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden'>
        <section className="mx-auto max-w-7xl px-3">
            {/* Large, inviting blob shape */}
            <svg
            className="absolute top-0 left-0 w-full h-full z-0"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                fill="#E0F2F7" // Light blue/grey
                fillOpacity="0.8"
                d="M0,250C0,111.9,111.9,0,250,0S500,111.9,500,250S388.1,500,250,500S0,388.1,0,250Z"
                transform="translate(250 0)"
            ></path>
            </svg>
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated!</h2>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Subscribe to our newsletter for exclusive offers, new arrivals, and design tips.
            </p>
            <div className="w-full max-w-md flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white">
                Subscribe
                </Button>
            </div>
            </div>
        </section>
      </div>
        </div>
    );
};