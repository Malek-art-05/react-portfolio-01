import globeTrackerImage from '../assets/globetracker.png';

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
        title: "Note App",
        description: "A note-taking app. Currently in progress.",
        tech: [],
        status: "In Progress",
    }
];
