import SearchBar from "./SearchBar";

const Header = () => {

    return (
        <header className="bg-white border-b border-slate-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                    Explore All{' '}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-green-700 to-green-800">Premium</span>{' '}
                    Facilities
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Discover premium football turfs, badminton courts, tennis courts and more. Find the perfect venue for your next game and book instantly with ease.
                </p>

                <div className="max-w-2xl mx-auto pt-4">
                    <SearchBar />
                </div>
            </div>
        </header>
    );
};

export default Header;