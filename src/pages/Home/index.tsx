import HeroSection from "../../sections/HeroSection";
import StudentSection from "../../sections/StudentSection";
import TeacherSection from "../../sections/TeacherSection";

const Home = () => {
    return (
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="alunos">
          <StudentSection />
        </section>
        <section id="professores">
          <TeacherSection />
        </section>
      </main>
    );
}
 
export default Home;