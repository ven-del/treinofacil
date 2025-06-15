import HeroSection from "../../sections/HeroSection";
import StudentSection from "../../sections/StudentSection";
import TeacherSection from "../../sections/TeacherSection";

const Home = () => {
    return (
      <main>
        <section>
          <HeroSection />
        </section>
        <section>
          <StudentSection />
        </section>
        <section>
          <TeacherSection />
        </section>
      </main>
    );
}
 
export default Home;