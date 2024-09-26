import Intro from '@/components/Intro'
import About from '@/components/About'
import Skills from '@/components/Skills'


const Main: React.FC = () => {
    return (
        <div className="lg-mx-32 md:mx-4 ">
        <Intro />
        <About />
        <Skills />
        </div>
    )
}

export default Main