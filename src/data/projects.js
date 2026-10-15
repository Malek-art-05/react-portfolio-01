import globeTrackerImage from '../assets/globetracker.png';
import igsaveImage from '../assets/igsaver.png';
import akashaImage from '../assets/akasha.png';

// To add a project image: put it in src/assets, import it at the top of this file
// (like globeTrackerImage above), then add image: <imported name> to the project.
// Optional: dates: "2025", demo: "https://..." (adds a "Website" badge).
export const projects = [
    {
        title: "Globe Tracker",
        description: "Interactive 3D globe tracking satellites, rocket launches, aircraft and ships in near real time. Built with JavaScript, Vite and CesiumJS.",
        tech: ["JavaScript", "Vite", "CesiumJS", "satellite.js", "HTML", "CSS"],
        github: "https://github.com/Malek-art-05/globe-tracker",
        image: globeTrackerImage,
    },
    {
        title: "Akasha - Note App",
        description: "A desktop note-taking app for creating, organizing and managing notes in a focused workspace.",
        tech: ["JavaScript", "React", "Electron", "Vite", "Node.js", "HTML", "CSS"],
        github: "https://github.com/Malek-art-05/akasha",
        image: akashaImage,
    },
    {
        title: "IGsaver",
        description: "A web app for downloading public Instagram Reels in HD without an Instagram login, app or watermark.",
        tech: ["Python", "yt-dlp", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/Malek-art-05/instasnap",
        demo: "https://instasnap-1nw4.onrender.com/",
        image: igsaveImage,
    }
];
