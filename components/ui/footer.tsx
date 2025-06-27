export default function Footer() {
    return (
        <footer className="w-full p-4 bg-gray-800 text-white">
            <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} MentalFusion. All rights reserved.
            </p>
            <p className="text-center text-xs mt-2">
                Built with Next.js and Tailwind CSS.
            </p>
        </footer>
    );
}