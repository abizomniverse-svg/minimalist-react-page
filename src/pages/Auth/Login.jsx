import { useState } from 'react';
import { Link } from 'react-router-dom';

const LockIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-64 md:h-64" fill="none">
    {/* Cloud */}
    <ellipse cx="110" cy="95" rx="55" ry="38" fill="#00F5D4" fillOpacity="0.18" />
    <ellipse cx="75" cy="108" rx="38" ry="30" fill="#00F5D4" fillOpacity="0.18" />
    <ellipse cx="140" cy="112" rx="30" ry="24" fill="#00F5D4" fillOpacity="0.18" />
    {/* Lock body */}
    <rect x="78" y="105" width="54" height="46" rx="10" fill="#00F5D4" fillOpacity="0.55" />
    <rect x="78" y="105" width="54" height="46" rx="10" stroke="#00F5D4" strokeWidth="2" />
    {/* Lock shackle */}
    <path d="M93 105V88a12 12 0 0124 0v17" stroke="#00F5D4" strokeWidth="4" strokeLinecap="round" />
    {/* Check circle */}
    <circle cx="105" cy="128" r="12" fill="white" fillOpacity="0.9" />
    <path d="M99 128l4 4 8-8" stroke="#00F5D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-[#c8b6f5] to-[#7BC8F6] p-4 md:p-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] min-h-[520px]">

        {/* Left Panel – Form */}
        <div className="flex-1 relative flex flex-col justify-center px-8 py-12 md:px-14 md:py-16"
          style={{
            background: 'linear-gradient(135deg, rgba(100,180,255,0.55) 0%, rgba(180,130,240,0.55) 50%, rgba(80,210,220,0.55) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Mesh blobs */}
          <div className="absolute top-[-60px] left-[-60px] w-[220px] h-[220px] bg-[#FF00C8]/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-40px] right-[-40px] w-[180px] h-[180px] bg-[#00F5D4]/25 rounded-full blur-[70px] pointer-events-none" />

          <div className="relative z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-10 w-fit">
              <div className="bg-[#FF00C8] text-white w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg shadow-md">T</div>
              <span className="text-white font-extrabold text-xl tracking-wide" style={{ fontFamily: 'cursive' }}>TikyTop</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-10 uppercase">Login</h1>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-2">User Name</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  autoComplete="username"
                  placeholder="Enter your username"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/40 rounded-full px-6 py-3.5 text-[15px] font-medium outline-none focus:border-white focus:bg-white/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/40 rounded-full px-6 py-3.5 text-[15px] font-medium outline-none focus:border-white focus:bg-white/30 transition-all pr-14"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <a href="#" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Forgot Password?</a>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-[#020A1B] font-black text-[15px] rounded-full hover:bg-[#FF00C8] hover:text-white transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest mt-2"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-white/60 text-sm font-medium mt-8">
              Don't have an account?{' '}
              <Link to="/register" className="text-white font-black hover:text-[#A6FF00] transition-colors underline underline-offset-4">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel – Illustration */}
        <div className="hidden md:flex w-[420px] flex-col items-center justify-center bg-white px-10 py-16 relative overflow-hidden">
          <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-[#00F5D4]/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[160px] h-[160px] bg-[#FF00C8]/5 rounded-full blur-[50px]" />

          <LockIllustration />

          <div className="mt-10 text-center space-y-3 relative z-10">
            <h2 className="text-2xl font-black text-[#020A1B] tracking-tight">Welcome Back!</h2>
            <p className="text-[#75819A] text-[15px] font-medium leading-relaxed max-w-[260px] mx-auto">
              Login to manage your social media growth and track your orders.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-2 relative z-10">
            <div className="w-8 h-8 bg-[#FF00C8] rounded-xl flex items-center justify-center shadow-md shadow-pink-100">
              <span className="text-white font-black text-sm">T</span>
            </div>
            <span className="text-[#020A1B] font-extrabold text-lg" style={{ fontFamily: 'cursive' }}>TikyTop</span>
          </div>
        </div>

      </div>
    </div>
  );
}
