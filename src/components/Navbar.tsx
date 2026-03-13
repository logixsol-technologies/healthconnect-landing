'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full px-3 sm:px-4 xl:px-6 pt-4 xl:pt-5">
      <nav
        className="flex items-center justify-between w-full box-border
          h-[45px] xl:h-[55px]
          rounded-[47px]
          px-4 xl:px-8
          border border-[rgba(13,161,229,0.3)] xl:border-[rgba(13,161,229,0.9)]"
        style={{ background: '#0F172A' }}
      >

        {/* Logo */}
        <span
          className="font-bold shrink-0 text-[22px] sm:text-[24px] xl:text-[32px]"
          style={{
            fontFamily: 'Inter',
            background: 'linear-gradient(90deg, #1DA7E7 5.98%, #0386C9 93.48%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          HealthConnect
        </span>

        {/* Nav Links — xl and above only */}
        <ul
          className="hidden xl:flex items-center gap-7"
          style={{ listStyle: 'none', margin: 0, padding: 0 }}
        >
          <li><a href="#" className="text-[18px] font-medium text-[#F2F5FD] no-underline px-2 py-1 whitespace-nowrap hover:text-[#0DA1E5] transition-colors" style={{ fontFamily: 'Inter' }}>Home</a></li>
          <li><a href="#" className="text-[18px] font-medium text-[#F2F5FD] no-underline px-2 py-1 whitespace-nowrap hover:text-[#0DA1E5] transition-colors" style={{ fontFamily: 'Inter' }}>Feature</a></li>
          <li><a href="#" className="text-[18px] font-medium text-[#F2F5FD] no-underline px-2 py-1 whitespace-nowrap hover:text-[#0DA1E5] transition-colors" style={{ fontFamily: 'Inter' }}>How It Works</a></li>
          <li><a href="#" className="text-[18px] font-medium text-[#F2F5FD] no-underline px-2 py-1 whitespace-nowrap hover:text-[#0DA1E5] transition-colors" style={{ fontFamily: 'Inter' }}>User Role</a></li>
          <li><a href="#" className="text-[18px] font-medium text-[#F2F5FD] no-underline px-2 py-1 whitespace-nowrap hover:text-[#0DA1E5] transition-colors" style={{ fontFamily: 'Inter' }}>Find Doctor</a></li>
        </ul>

        {/* Buttons — xl and above only */}
        <div className="hidden xl:flex items-center gap-[18px]">
        <button
            className="text-[18px] text-[#F2F5FD] whitespace-nowrap font-medium"
            style={{
            height: '38px',
            borderRadius: '47px',
            padding: '8px 17px',
            border: '1px solid rgba(49, 65, 88, 0.7)',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontFamily: 'Inter',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            Sign In
        </button>
        <button
            className="text-[18px] text-[#F2F5FD] whitespace-nowrap font-medium"
            style={{
            height: '38px',
            borderRadius: '28px',
            padding: '8px 12px',
            border: 'none',
            background: 'linear-gradient(91.05deg, #00A3F1 8.82%, #0DA1E5 79.39%)',
            cursor: 'pointer',
            fontFamily: 'Inter',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            Get Started
        </button>
        </div>
        {/* Hamburger — everything below xl */}
        <button
          className="flex xl:hidden items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '8px',
            padding: '0px',
            cursor: 'pointer',
            width: '24px',
            height: '24px',
          }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="5" y1="5" x2="19" y2="19" stroke="#0DA1E5" strokeWidth="2" strokeLinecap="round"/>
              <line x1="19" y1="5" x2="5" y2="19" stroke="#0DA1E5" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 18C3.71667 18 3.47934 17.904 3.288 17.712C3.09667 17.52 3.00067 17.2827 3 17C2.99934 16.7173 3.09534 16.48 3.288 16.288C3.48067 16.096 3.718 16 4 16H20C20.2833 16 20.521 16.096 20.713 16.288C20.905 16.48 21.0007 16.7173 21 17C20.9993 17.2827 20.9033 17.5203 20.712 17.713C20.5207 17.9057 20.2833 18.0013 20 18H4ZM4 13C3.71667 13 3.47934 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C2.99934 11.7173 3.09534 11.48 3.288 11.288C3.48067 11.096 3.718 11 4 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H4ZM4 8C3.71667 8 3.47934 7.904 3.288 7.712C3.09667 7.52 3.00067 7.28267 3 7C2.99934 6.71733 3.09534 6.48 3.288 6.288C3.48067 6.096 3.718 6 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71733 21 7C20.9993 7.28267 20.9033 7.52033 20.712 7.713C20.5207 7.90567 20.2833 8.00133 20 8H4Z" fill="#0DA1E5"/>
            </svg>
          )}
        </button>

      </nav>

      {/* Dropdown — everything below xl */}
      {menuOpen && (
        <div
          className="flex xl:hidden flex-col gap-3 mt-2 rounded-[20px] p-4"
          style={{ backgroundColor: '#0F172A' }}
        >
          <a href="#" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#ffffff', textDecoration: 'none', padding: '8px 12px' }}>Home</a>
          <a href="#" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#ffffff', textDecoration: 'none', padding: '8px 12px' }}>Feature</a>
          <a href="#" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#ffffff', textDecoration: 'none', padding: '8px 12px' }}>How It Works</a>
          <a href="#" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#ffffff', textDecoration: 'none', padding: '8px 12px' }}>User Role</a>
          <a href="#" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#ffffff', textDecoration: 'none', padding: '8px 12px' }}>Find Doctor</a>

          <div className="flex gap-3 mt-2">
            <button style={{ flex: 1, height: '38px', borderRadius: '47px', border: '1px solid #314158B2', backgroundColor: 'transparent', color: '#ffffff', fontFamily: 'Inter', fontSize: '14px', cursor: 'pointer' }}>
              Sign In
            </button>
            <button style={{ flex: 1, height: '38px', borderRadius: '28px', border: 'none', background: 'linear-gradient(91.05deg, #00A3F1 8.82%, #0DA1E5 79.39%)', color: '#ffffff', fontFamily: 'Inter', fontSize: '14px', cursor: 'pointer' }}>
              Get Started
            </button>
          </div>
        </div>
      )}

    </div>
  )
}