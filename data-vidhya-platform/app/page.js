import  DataVidhyaLanding from '../src/components/landing/DataVidhyaLanding';
import  CoursesSection  from '../src/components/landing/CoursesSection';
import ProjectsComponent from '../src/components/landing/ProjectsComponent';
import CodePlatformComponent from '../src/components/landing/CodePlatformComponent';
import CustomerTestimonials from '../src/components/landing/CustomerTestimonials';
import FAQSection from '@/src/components/landing/FAQSection';
import Footer from '@/src/components/landing/Footer';
export default function Home() {
  return (
    <main>
      <DataVidhyaLanding />
      <CoursesSection />
      <ProjectsComponent/>
      <CodePlatformComponent/>
      <CustomerTestimonials/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}