import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
// import SectionHeader from '@/components/SectionHeader'
export default function Home() {
  return (
    <main className="min-h-screen bg-[#EEF4FB]">
      <Navbar />
      <HeroSection />
      <br />
      {/* <SectionHeader /> */}
    </main>
  )
}