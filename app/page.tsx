import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ValuesSection from "@/components/sections/values-section"
import FeaturedSection from "@/components/sections/featured-section"
import ProductSection from "@/components/products-carousel"
import AboutJeevosSection from "@/components/about-jeevos-section"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ValuesSection />
      <ProductSection />
      <FeaturedSection />
      <AboutJeevosSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

