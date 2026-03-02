import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import LightPillar from '../components/LightPillar';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <LightPillar
                    topColor="#00F050"
                    bottomColor="#00F050"
                    intensity={1}
                    rotationSpeed={0.4}
                    glowAmount={0.003}
                    pillarWidth={4}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={25}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div>

            {/* Content Layer */}
            <div className="relative ">
                <Banner />
                <AboutMe />
                <Skills />
                <Experiences />
                <ProjectList />
            </div>
        </div>
    );
}

