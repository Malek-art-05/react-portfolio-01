import { ArrowUpRight, Globe } from 'lucide-react';
import { Github } from './BrandIcons';

const ProjectImage = ({ project }) =>
    project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    ) : (
        <div className="w-full h-48 bg-gray-100" />
    );

// Optional project fields: image, dates, demo, github, status (e.g. "In Progress").
const ProjectCard = ({ project }) => {
    const href = project.demo || project.github;
    const links = [
        project.demo && { type: "Website", href: project.demo, icon: <Globe className="size-3" /> },
        project.github && { type: "Source", href: project.github, icon: <Github className="size-3" /> },
    ].filter(Boolean);

    return (
        <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:ring-2 hover:ring-gray-100 transition-all duration-200">
            <div className="relative shrink-0">
                {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                        <ProjectImage project={project} />
                    </a>
                ) : (
                    <ProjectImage project={project} />
                )}
                {project.status && (
                    <div className="absolute top-2 left-2 rounded-md px-2 py-0.5 text-xs font-semibold bg-white text-black border border-gray-200">
                        {project.status}
                    </div>
                )}
                {links.length > 0 && (
                    <div className="absolute top-2 right-2 flex flex-wrap gap-2">
                        {links.map((link) => (
                            <a
                                key={link.type}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold bg-black text-white hover:bg-black/90"
                            >
                                {link.icon}
                                {link.type}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold">{project.title}</h3>
                        {project.dates && <time className="text-xs text-gray-500">{project.dates}</time>}
                    </div>
                    {href && <a
                        href={project.github || href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black transition-colors"
                        aria-label={`${project.title} on GitHub`}
                    >
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>}
                </div>
                <p className="text-xs flex-1 text-pretty leading-relaxed text-gray-500">
                    {project.description}
                </p>
                {project.tech?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                        {project.tech.map((tag) => (
                            <span key={tag} className="inline-flex items-center rounded-md border border-gray-200 h-6 px-2 text-[11px] font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
