import { skills } from '../data/skills';
import BlurFade from './BlurFade';

const BLUR_FADE_DELAY = 0.04;

const Skills = () => {
    return (
        <section id="skills">
            <div className="flex flex-col gap-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-xl font-bold">Skills</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
                            <div className="bg-white border border-gray-200 ring-2 ring-gray-200/20 rounded-xl h-8 w-fit px-4 flex items-center">
                                <span className="text-sm font-medium">{skill}</span>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
