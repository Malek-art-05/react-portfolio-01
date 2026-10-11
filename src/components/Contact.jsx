import { useState } from "react";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { contactLinks } from '../data/contact';
import BlurFade from './BlurFade';

const BLUR_FADE_DELAY = 0.04;
const ICONS = { Email: Mail, GitHub: Github, LinkedIn: Linkedin };

const Contact = () => {
    const email = contactLinks.find((link) => link.label === "Email");
    const [copied, setCopied] = useState(false);

    // mailto: does nothing on computers without a mail app set up, so also copy the address.
    const copyEmail = () => {
        navigator.clipboard?.writeText(email.href.replace("mailto:", "")).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }, () => {});
    };

    return (
        <section id="contact">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="bg-white/60 border border-gray-200 rounded-xl p-10 relative">
                    <div className="absolute -top-4 bg-black z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
                        <span className="text-white text-sm font-medium">Contact</span>
                    </div>
                    <div className="relative flex flex-col items-center gap-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                        <p className="mx-auto max-w-lg text-gray-500 text-balance">
                            Want to chat? Just{" "}
                            <a href={email?.href} onClick={copyEmail} className="text-blue-500 hover:underline underline-offset-4">
                                send me an email
                            </a>{" "}
                            or connect with me below, and I&apos;ll get back to you as soon as I can.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 pt-2">
                            {contactLinks.map((link) => {
                                const Icon = ICONS[link.label];
                                const isEmail = link.href.startsWith("mailto:");
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={isEmail ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        onClick={isEmail ? copyEmail : undefined}
                                        className="flex items-center gap-2 bg-black text-white rounded-xl h-9 px-4 text-sm font-medium hover:bg-black/80 transition-colors"
                                    >
                                        {Icon && <Icon className="size-4" />}
                                        {isEmail && copied ? "Copied!" : link.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </BlurFade>
        </section>
    );
};

export default Contact;
