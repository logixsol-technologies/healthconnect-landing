import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SectionHeader from '@/components/SectionHeader'
import FeatureCards from '@/components/FeatureCards'
import HowItWorks from '@/components/HowItWorks'
import PerfectForCards from '@/components/PerfectForCards'
export default function Home() {
  return (
    <main className="w-full overflow-x-hidden min-h-screen bg-[#EEF4FB]">
      <Navbar />
      <HeroSection />
      <br />
      <SectionHeader />
      <FeatureCards />
      <HowItWorks />
      <PerfectForCards />
    </main>
  )
}