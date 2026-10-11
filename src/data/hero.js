import psuLogo from '../assets/psuLogo.jpg';
import harritonLogo from '../assets/HarritonLogo.png';

export const heroData = {
    name: "Artem Machulenka",

    // One-liner under "Hi, I'm Artem"
    tagline: "I like building stuff for the web. Slightly addicted to tea.",

    // About section
    summary: "I’m a Computer Science student at Penn State passionate about technology, software development, and problem-solving. I’m continuously expanding my skills by learning new technologies and building projects, and I’m looking for opportunities to gain hands-on experience, collaborate with other developers, and apply my knowledge to real-world challenges.",

    // Education section. To add a logo: put the image in src/assets, import it at the
    // top of this file, then set logoUrl to the imported name.
    education: [
        {
            school: "Penn State University",
            degree: "Computer Science",
            href: "https://www.psu.edu",
            logoUrl: psuLogo,
            start: "2023",
            end: "Present"
        },
        {
            school: "Harriton Senior High School",
            degree: "High School Diploma",
            href: "https://www.lmsd.org",
            logoUrl: harritonLogo,
            start: "2019",
            end: "2023"
        }
    ]
}
