import { ArrowUpRight } from 'lucide-react';
import { heroData } from '../data/hero';
import BlurFade from './BlurFade';

const BLUR_FADE_DELAY = 0.04;

const Education = () => {
    return (
        <section id="education">
            <div className="flex flex-col gap-y-6">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-xl font-bold">Education</h2>
                </BlurFade>
                <div className="flex flex-col gap-8">
                    {heroData.education.map((education, index) => (
                        <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                            <a
                                href={education.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-x-3 justify-between group"
                            >
                                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                                    {education.logoUrl ? (
                                        <img
                                            src={education.logoUrl}
                                            alt={education.school}
                                            className="size-8 md:size-10 p-1 bg-white border border-gray-200 rounded-full shadow ring-2 ring-gray-200 object-contain flex-none"
                                        />
                                    ) : (
                                        <div className="size-8 md:size-10 border border-gray-200 rounded-full shadow ring-2 ring-gray-200 bg-gray-100 flex-none" />
                                    )}
                                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                                        <div className="font-semibold leading-none flex items-center gap-2">
                                            {education.school}
                                            <ArrowUpRight className="h-3.5 w-3.5 text-gray-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                                        </div>
                                        <div className="text-sm text-gray-500">{education.degree}</div>
                                    </div>
                                </div>
                                {(education.start || education.end) && (
                                    <div className="text-xs tabular-nums text-gray-500 text-right flex-none">
                                        {education.start} - {education.end}
                                    </div>
                                )}
                            </a>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
