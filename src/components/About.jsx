import { heroData } from '../data/hero';
import BlurFade from './BlurFade';

const BLUR_FADE_DELAY = 0.04;

const About = () => {
    return (
        <section id="about">
            <div className="flex flex-col gap-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">About</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <p className="text-pretty leading-relaxed text-gray-500">
                        {heroData.summary}
                    </p>
                </BlurFade>
            </div>
        </section>
    );
};

export default About;
