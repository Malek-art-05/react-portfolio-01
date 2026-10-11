import { useEffect, useState } from 'react';
import { heroData } from '../data/hero';
import BlurFade from './BlurFade';

const BLUR_FADE_DELAY = 0.04;

// Name animation: each step deletes back to the shared prefix, then types the rest.
// "Artem Machulenka" -> "Artem" -> "Artem or" -> "Art" -> "Art 👋"
const NAME_STEPS = [
    { text: "Artem Machulenka", pause: 1600 },
    { text: "Artem", pause: 350 },
    { text: "Artem or", pause: 900 },
    { text: "Art", pause: 300 },
    { text: "Art 👋", pause: 0 },
];
const TYPE_SPEED = 110;
const DELETE_SPEED = 60;

// Array.from keeps the emoji as one character instead of two halves.
const chars = (text) => Array.from(text);

const prefersReducedMotion = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = () => {
    const [name, setName] = useState(() => NAME_STEPS[prefersReducedMotion() ? NAME_STEPS.length - 1 : 0].text);
    const [step, setStep] = useState(() => (prefersReducedMotion() ? NAME_STEPS.length - 1 : 0));
    const done = step === NAME_STEPS.length - 1 && name === NAME_STEPS[step].text;

    useEffect(() => {
        if (done) return;
        const target = NAME_STEPS[step].text;

        // Reached this step's text: wait, then move to the next step.
        if (name === target) {
            const timeout = setTimeout(() => setStep(step + 1), NAME_STEPS[step].pause);
            return () => clearTimeout(timeout);
        }

        const current = chars(name);
        const goal = chars(target);
        const isPrefix = current.every((char, i) => goal[i] === char);
        const timeout = setTimeout(() => {
            setName(isPrefix ? goal.slice(0, current.length + 1).join("") : current.slice(0, -1).join(""));
        }, isPrefix ? TYPE_SPEED : DELETE_SPEED);
        return () => clearTimeout(timeout);
    }, [name, step, done]);

    return (
        <section id="hero">
            <div className="flex flex-col gap-2">
                <BlurFade delay={BLUR_FADE_DELAY} yOffset={8} blur={8}>
                    <h1
                        className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                        aria-label={`Hi, I'm ${heroData.name}`}
                    >
                        Hi, I'm {name}
                        {!done && <span className="ml-0.5 inline-block w-[3px] h-[0.9em] -mb-[0.1em] bg-black animate-pulse" aria-hidden />}
                    </h1>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY} yOffset={8} blur={8}>
                    <p className="text-gray-500 max-w-[600px] md:text-lg lg:text-xl">
                        {heroData.tagline}
                    </p>
                </BlurFade>
            </div>
        </section>
    );
};

export default Hero;
