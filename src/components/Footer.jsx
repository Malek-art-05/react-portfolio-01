import { heroData } from '../data/hero';

const Footer = () => {
    return (
        <footer className="relative z-10 max-w-2xl mx-auto px-6 pb-24 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {heroData.name}
        </footer>
    );
};

export default Footer;
