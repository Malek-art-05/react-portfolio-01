import { projects } from '../data/projects';
import BlurFade from './BlurFade';
import ProjectCard from './ProjectCard';

const BLUR_FADE_DELAY = 0.04;

const Projects = () => {
    return (
        <section id="projects">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <div className="bg-black rounded-xl px-4 py-1">
                            <span className="text-white text-sm font-medium">My Projects</span>
                        </div>
                        <div className="flex flex-col gap-y-3 items-center justify-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                            <p className="text-gray-500 md:text-lg/relaxed text-balance text-center">
                                I&apos;ve worked on a variety of projects, from simple websites to complex web
                                applications. Here are a few of my favorites.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 auto-rows-fr">
                        {projects.map((project, index) => (
                            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + index * 0.05} className="h-full">
                                <ProjectCard project={project} />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </BlurFade>
        </section>
    );
};

export default Projects;
