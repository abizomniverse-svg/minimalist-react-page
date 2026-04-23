import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAVBAR_CONTENT = {
  brand: "TikyTop",
  loginText: "Login",
  navItems: [
    { 
        title: "TikTok", 
        isMega: false, 
        items: ["TikTok Likes", "TikTok Views", "TikTok Followers", "TikTok Shares", "TikTok Comments"] 
    },
    { 
        title: "Instagram", 
        isMega: false, 
        items: ["Instagram Likes", "Instagram Views", "Instagram Followers", "Instagram Reels", "Story Views"] 
    },
    { 
        title: "YouTube", 
        isMega: false, 
        items: ["YouTube Views", "YouTube Subscribers", "YouTube Likes", "Shorts Views"] 
    },
    { title: "All Services", active: true, isMega: true }
  ],
  megaMenu: {
    tabs: ["Instagram", "Tiktok", "Youtube", "Other Services"],
    categories: {
      Instagram: [
        { label: "Instagram", items: ["Likes", "Views", "Followers", "Story Views", "Impressions & Reach"] },
        { label: "IG Reels", items: ["Likes", "Views", "Saves", "Impressions"] }
      ],
      Tiktok: [
        { label: "TikTok", items: ["Likes", "Views", "Followers", "Shares", "Comments", "Saves"] }
      ],
      Youtube: [
        { label: "YouTube", items: ["Views", "Subscribers", "Likes", "Comments", "Shares"] },
        { label: "YT Shorts", items: ["Views", "Likes"] }
      ],
      "Other Services": [
        { label: "Facebook", items: ["Page Likes", "Post Likes", "Followers", "Views"] },
        { label: "Twitter / X", items: ["Followers", "Retweets", "Likes"] }
      ]
    },
    trending: [
      { text: "Buy TikTok Likes", icon: "heart", color: "#FF00C8" },
      { text: "Buy TikTok Followers", icon: "user", color: "#00F5D4" },
      { text: "Buy TikTok Views", icon: "eye", color: "#A6FF00" }
    ]
  }
};

const MegaMenu = ({ isOpen }) => {
    const { megaMenu } = NAVBAR_CONTENT;
    const [activeTab, setActiveTab] = useState(megaMenu.tabs[0]);

    const getTrendingIcon = (type, color) => {
        switch (type) {
            case 'heart':
                return (
                    <svg className="w-[18px] h-[18px]" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                );
            case 'user':
                return (
                    <svg className="w-[18px] h-[18px]" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                );
            case 'eye':
                return (
                    <svg className="w-[18px] h-[18px]" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`absolute top-[110%] left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${isOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-4'}`}>
            <div className="p-10">
                <div className="flex justify-center gap-4 mb-10">
                    {megaMenu.tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full border-2 font-bold transition-all uppercase tracking-widest text-[13px] ${activeTab === tab
                                ? 'border-[#FF00C8] text-[#FF00C8] bg-[#FF00C8]/5 shadow-sm'
                                : 'border-gray-100 text-[#75819A] hover:bg-gray-50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-10 pl-4 min-h-[220px]">
                    {megaMenu.categories[activeTab]?.map((cat, idx) => (
                        <div key={idx} className="flex flex-col space-y-5">
                            <h3 className="font-extrabold text-[#020A1B] border-b-2 border-gray-50 pb-3 inline-block w-fit uppercase text-xs tracking-widest">{cat.label}</h3>
                            <div className="flex flex-col space-y-4">
                                {cat.items.map((item, i) => (
                                    <Link key={i} to={`/order/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[15px] text-[#75819A] hover:text-[#FF00C8] transition-colors font-medium flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-100 group-hover:bg-[#FF00C8]" />
                                        {cat.label} <span className="text-[#FF00C8] font-black">{item}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#fcfcff] relative mt-2 pt-12 pb-8 px-8 border-t border-gray-100">
                <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#FF00C8] text-white text-[11px] tracking-[0.2em] font-black px-8 py-2 rounded-full shadow-lg shadow-pink-100 uppercase">
                        Trending Services
                    </span>
                </div>
                <div className="flex justify-between items-center px-16">
                    {megaMenu.trending.map((item, idx) => (
                        <Link key={idx} to={`/order/${item.text.toLowerCase().replace(/ /g, '-')}`} className="flex items-center gap-2.5 text-[15px] font-bold text-[#020A1B] hover:text-[#FF00C8] transition-colors">
                            {getTrendingIcon(item.icon, item.color)}
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ title, active, isMega, dropdownItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`group ${isMega ? 'lg:static' : 'relative'}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className={`relative flex items-center gap-1 text-[15px] font-medium transition-colors ${active
                ? 'text-[#FF00C8] border border-[#FF00C8] rounded-full px-5 py-1.5 bg-[#FF00C8]/5'
                : 'text-[#020A1B] hover:text-[#FF00C8] px-3 py-1.5'
                }`}>
                {title}
                <svg className={`w-[14px] h-[14px] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FF00C8]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isMega ? (
                <MegaMenu isOpen={isOpen} />
            ) : (
                <div className={`absolute top-[110%] left-0 w-56 bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50 overflow-hidden transition-all duration-200 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="py-4">
                        {dropdownItems?.map((item) => (
                            <Link key={item} to={`/order/${item.toLowerCase().replace(/ /g, '-')}`} className="block px-6 py-2.5 text-[14px] text-[#75819A] hover:bg-gray-50 hover:text-[#FF00C8] font-bold transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl z-50">
            <div className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-8 py-3.5 flex items-center justify-between border border-gray-50 relative">

                <a href="/" className="text-2xl font-bold tracking-tight text-[#FF00C8]">
                    <span style={{ fontFamily: 'cursive' }}>TikyTop</span>
                </a>

                <nav className="hidden lg:flex items-center gap-6">
                    {NAVBAR_CONTENT.navItems.map((item, idx) => (
                        <NavItem key={idx} title={item.title} active={item.active} isMega={item.isMega} dropdownItems={item.items} />
                    ))}
                </nav>

                <div className="flex items-center gap-6">
                    <button className="text-[#020A1B] hover:text-[#FF00C8] transition-colors relative" aria-label="Cart">
                        <svg className="w-[26px] h-[26px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="absolute -top-1 -right-2 bg-[#FF00C8] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                            0
                        </span>
                    </button>

                    <Link to="/login" className="hidden sm:flex px-8 py-2.5 text-[15px] font-semibold text-white bg-[#020A1B] hover:bg-[#FF00C8] rounded-full transition-all shadow-sm">
                        {NAVBAR_CONTENT.loginText}
                    </Link>
                    
                    <button className="lg:hidden text-[#020A1B]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
