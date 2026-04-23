import { useState } from 'react';
import { Link } from 'react-router-dom';

const GrowthIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-64 md:h-64" fill="none">
    {/* Background circle */}
    <circle cx="100" cy="100" r="70" fill="#FF00C8" fillOpacity="0.07" />
    {/* Chart bars */}
    <rect x="40" y="130" width="20" height="40" rx="6" fill="#00F5D4" fillOpacity="0.5" />
    <rect x="68" y="110" width="20" height="60" rx="6" fill="#FF00C8" fillOpacity="0.5" />
    <rect x="96" y="85"  width="20" height="85" rx="6" fill="#00F5D4" fillOpacity="0.6" />
    <rect x="124" y="60" width="20" height="110" rx="6" fill="#FF00C8" fillOpacity="0.7" />
    {/* Trend arrow */}
    <path d="M38 140 Q70 80 150 50" stroke="#A6FF00" strokeWidth="2.5" strokeDasharray="5 3" strokeLinecap="round" />
    <polygon points="150,50 140,58 156,62" fill="#A6FF00" />
    {/* Star sparkle */}
    <path d="M160 38 l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#FF00C8" />
    <path d="M45 68 l1.5 3.5 3.5 1.5-3.5 1.5-1.5 3.5-1.5-3.5-3.5-1.5 3.5-1.5z" fill="#00F5D4" />
  </svg>
);

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-[#c8b6f5] to-[#7BC8F6] p-4 md:p-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row-reverse rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] min-h-[580px]">

        {/* Left Panel – Form (visually right on desktop via row-reverse) */}
        <div className="flex-1 relative flex flex-col justify-center px-8 py-12 md:px-14 md:py-16"
          style={{
            background: 'linear-gradient(135deg, rgba(80,210,220,0.55) 0%, rgba(180,130,240,0.55) 50%, rgba(100,180,255,0.55) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] bg-[#A6FF00]/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[180px] h-[180px] bg-[#FF00C8]/20 rounded-full blur-[70px] pointer-events-none" />

          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 mb-8 w-fit">
              <div className="bg-[#FF00C8] text-white w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg shadow-md">T</div>
              <span className="text-white font-extrabold text-xl tracking-wide" style={{ fontFamily: 'cursive' }}>TikyTop</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest mb-8 uppercase">Register</h1>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/40 rounded-full px-6 py-3.5 text-[15px] font-medium outline-none focus:border-white focus:bg-white/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
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
                    placeholder="Create a password"
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/40 rounded-full px-6 py-3.5 text-[15px] font-medium outline-none focus:border-white focus:bg-white/30 transition-all pr-14"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-2">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/40 rounded-full px-6 py-3.5 text-[15px] font-medium outline-none focus:border-white focus:bg-white/30 transition-all pr-14"
                  />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-[#020A1B] font-black text-[15px] rounded-full hover:bg-[#FF00C8] hover:text-white transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest mt-2"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-white/60 text-sm font-medium mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-white font-black hover:text-[#A6FF00] transition-colors underline underline-offset-4">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Right Panel – Illustration */}
        <div className="hidden md:flex w-[420px] flex-col items-center justify-center bg-white px-10 py-16 relative overflow-hidden">
          <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-[#FF00C8]/8 rounded-full blur-[60px]" />
          <div className="absolute bottom-[-40px] right-[-40px] w-[160px] h-[160px] bg-[#00F5D4]/10 rounded-full blur-[50px]" />

          <GrowthIllustration />

          <div className="mt-10 text-center space-y-3 relative z-10">
            <h2 className="text-2xl font-black text-[#020A1B] tracking-tight">Start Growing Today!</h2>
            <p className="text-[#75819A] text-[15px] font-medium leading-relaxed max-w-[260px] mx-auto">
              Join thousands of creators and brands already growing their social presence with TikyTop.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-col gap-3 relative z-10 w-full max-w-[220px]">
            {[
              { icon: '🔒', text: 'SSL Secured & Safe' },
              { icon: '⚡', text: 'Instant Delivery' },
              { icon: '🔄', text: 'Refill Guarantee' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-[13px] text-[#64748B] font-bold">
                <span className="text-lg">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
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
