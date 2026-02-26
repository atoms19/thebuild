export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold tracking-tight mb-6">BUILD</h2>
                        <p className="text-zinc-400 max-w-sm font-light leading-relaxed">
                            Elevating communication. <br />
                            Empowering leadership.<br />
                            Creating impact.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm tracking-widest uppercase text-zinc-500 mb-6">Methodology</h4>
                        <ul className="space-y-4 text-zinc-300 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Executive Presence</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Strategic Narrative</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Vocal Dynamics</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm tracking-widest uppercase text-zinc-500 mb-6">Company</h4>
                        <ul className="space-y-4 text-zinc-300 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Client Roster</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-zinc-500 text-sm font-light">
                    <p>&copy; {new Date().getFullYear()} BUILD Leadership. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
