import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectsSection'

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 