
import HomeSection from "@/components/HomeSection";
import RootClientLayout from "./RootClientLayout";
import Navbar from '../components/Navbar'

export default function Page() {
  return (
    <main>
      <RootClientLayout>
        <Navbar/>
        <HomeSection/>
      </RootClientLayout>
    </main>
  );
}