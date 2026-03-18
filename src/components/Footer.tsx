export default function Footer() {
  const quickLinks = ["Home", "Feature", "How It Work", "User Role", "Find Doctor", "News", "FAQ"];
  const services = ["Virtual Consultations", "In-Person Appointments", "Urgent Care", "Digital Health Records", "Prescription Refills", "Family Care"];

  const SocialIcons = ({ size }: { size: number }) => (
    <div className="flex flex-row items-center" style={{ gap: size === 28 ? "24px" : "8px" }}>
      {/* Facebook */}
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <path d="M17 4h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9a1 1 0 0 1 1-1h3z" stroke="#F2F5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
      {/* Instagram */}
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="5" stroke="#F2F5FD" strokeWidth="2" fill="none"/>
        <circle cx="14" cy="14" r="4" stroke="#F2F5FD" strokeWidth="2" fill="none"/>
        <circle cx="19.5" cy="8.5" r="1" fill="#F2F5FD"/>
      </svg>
      {/* Twitter */}
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <path d="M4 5h4l3 4.5L15 5h4L13 13l7 10h-4l-3.5-5-4.5 5H4l7-9.5L4 5z" stroke="#F2F5FD" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      </svg>
      {/* LinkedIn */}
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="3" stroke="#F2F5FD" strokeWidth="2" fill="none"/>
        <path d="M8 12v8M8 8v1M12 20v-5a3 3 0 0 1 6 0v5M12 12v8" stroke="#F2F5FD" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );

  const GooglePlayIcon = ({ size }: { size: number }) => (
    <svg width={size} height={size * 89 / 80} viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_244_1074)">
        <path d="M37.3611 42.4292L0.332031 81.4713C0.747864 82.9543 1.49513 84.322 2.5167 85.4698C3.53828 86.6177 4.80711 87.5153 6.22622 88.094C7.64532 88.6727 9.17712 88.9173 10.7045 88.8089C12.2319 88.7006 13.7145 88.2422 15.0389 87.4689L56.7036 63.5886L37.3611 42.4292Z" fill="#EA4335"/>
        <path d="M74.8037 35.7929L56.7865 25.4072L36.5059 43.3173L56.869 63.5326L74.749 53.2583C76.3329 52.4236 77.6597 51.1685 78.5854 49.6291C79.5111 48.0898 80.0005 46.3247 80.0005 44.5254C80.0005 42.7261 79.5111 40.9611 78.5854 39.4217C77.6597 37.8823 76.3329 36.6272 74.749 35.7926L74.8037 35.7929Z" fill="#FBBC04"/>
        <path d="M0.331347 7.38623C0.107657 8.21897 -0.00375771 9.07819 9.66764e-05 9.94081V78.9165C0.00230545 79.7788 0.113617 80.6373 0.331347 81.4714L38.6298 43.429L0.331347 7.38623Z" fill="#4285F4"/>
        <path d="M37.637 44.4289L56.7864 25.4078L15.177 1.41616C13.6115 0.493515 11.8309 0.00488263 10.0167 1.92876e-05C5.51453 -0.00878637 1.55641 2.99834 0.332031 7.35871L37.637 44.4289Z" fill="#34A853"/>
      </g>
      <defs>
        <clipPath id="clip0_244_1074">
          <rect width="80" height="89" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <footer style={{ background: "#0F172A" }} className="w-full">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:flex justify-center" style={{ height: "336px" }}>
        {/* Added px-16 (64px) padding on both sides for the laptop view */}
        <div className="flex flex-row items-start justify-between w-full" style={{ maxWidth: "1440px", paddingTop: "50px", paddingLeft: "64px", paddingRight: "64px" }}>

          {/* Brand column */}
          <div className="flex flex-col items-start gap-8" style={{ width: "280px" }}>
            <div className="flex flex-col gap-8" style={{ width: "280px" }}>
              <p style={{
                fontWeight: 700,
                fontSize: "32px", lineHeight: "39px",
                background: "linear-gradient(90deg, #1DA7E7 5.98%, #0386C9 93.48%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                HealthConnect
              </p>
              <p style={{ fontWeight: 400, color: "#fff", fontSize: "16px", lineHeight: "24px" }}>
                Your trusted digital healthcare platform for secure consultations, easy appointments, and complete health management.
              </p>
            </div>
            <SocialIcons size={28} />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start gap-6">
            <p style={{ fontWeight: 700, color: "#F2F5FD", fontSize: "16px", lineHeight: "19px" }}>Quick Links</p>
            <div className="flex flex-col gap-[10px]">
              {quickLinks.map((link) => (
                <a key={link} href="#" className="hover:opacity-75 transition-opacity" style={{ fontWeight: 600, color: "#F2F5FD", fontSize: "16px", lineHeight: "19px" }}>{link}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start gap-6">
            <p style={{ fontWeight: 700, color: "#F2F5FD", fontSize: "16px", lineHeight: "19px" }}>Services</p>
            <div className="flex flex-col gap-[10px]">
              {services.map((s) => (
                <a key={s} href="#" className="hover:opacity-75 transition-opacity" style={{ fontWeight: 600, color: "#F2F5FD", fontSize: "16px", lineHeight: "19px" }}>{s}</a>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div className="flex flex-col items-start gap-6" style={{ width: "249px" }}>
            <div className="flex flex-col gap-4">
              <p style={{ fontWeight: 600, color: "#F2F5FD", fontSize: "16px", lineHeight: "19px" }}>Stay Connected</p>
              <p style={{ fontWeight: 400, color: "#F2F5FD", fontSize: "16px", lineHeight: "19px" }}>Subscribe to our newsletter</p>
            </div>
            <div className="relative flex items-center" style={{
              width: "249px", height: "32px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid #0DA1E5",
              borderRadius: "5px",
            }}>
              <span className="absolute" style={{ fontWeight: 300, color: "#C4C4C4", fontSize: "12px", left: "8px" }}>Enter Your Email</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute" style={{ right: "8px" }}>
                <path d="M2 8h10M8 4l6 4-6 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Coming Soon */}
            <div className="flex flex-row gap-4 items-center" style={{ marginTop: "8px" }}>
              <GooglePlayIcon size={50} />
              <p style={{ fontWeight: 600, color: "#fff", fontSize: "16px", lineHeight: "22px" }}>Coming Soon:<br/>Mobile App</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── TABLET (sm–lg) ── */}
      <div className="hidden sm:flex lg:hidden justify-between items-start w-full" style={{ paddingTop: "40px", paddingBottom: "40px", paddingLeft: "32px", paddingRight: "32px" }}>

        {/* Brand */}
        <div className="flex flex-col items-start gap-4" style={{ maxWidth: "200px" }}>
          <p style={{
            fontWeight: 700,
            fontSize: "22px", lineHeight: "27px",
            background: "linear-gradient(90deg, #1DA7E7 5.98%, #0386C9 93.48%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            HealthConnect
          </p>
          <p style={{ fontWeight: 400, color: "#fff", fontSize: "13px", lineHeight: "18px" }}>
            Your trusted digital healthcare platform for secure consultations, easy appointments, and complete health management.
          </p>
          <SocialIcons size={20} />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-4">
          <p style={{ fontWeight: 700, color: "#F2F5FD", fontSize: "14px", lineHeight: "17px" }}>Quick Links</p>
          <div className="flex flex-col gap-[8px]">
            {quickLinks.map((link) => (
              <a key={link} href="#" className="hover:opacity-75 transition-opacity" style={{ fontWeight: 600, color: "#F2F5FD", fontSize: "13px", lineHeight: "16px" }}>{link}</a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start gap-4">
          <p style={{ fontWeight: 700, color: "#F2F5FD", fontSize: "14px", lineHeight: "17px" }}>Services</p>
          <div className="flex flex-col gap-[8px]">
            {services.map((s) => (
              <a key={s} href="#" className="hover:opacity-75 transition-opacity" style={{ fontWeight: 600, color: "#F2F5FD", fontSize: "13px", lineHeight: "16px" }}>{s}</a>
            ))}
          </div>
        </div>

        {/* Stay Connected */}
        <div className="flex flex-col items-start gap-4" style={{ maxWidth: "180px" }}>
          <p style={{ fontWeight: 600, color: "#F2F5FD", fontSize: "14px", lineHeight: "17px" }}>Stay Connected</p>
          <p style={{ fontWeight: 400, color: "#F2F5FD", fontSize: "13px", lineHeight: "18px" }}>Subscribe to our newsletter</p>
          <div className="relative flex items-center" style={{
            width: "180px", height: "32px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid #0DA1E5",
            borderRadius: "5px",
          }}>
            <span className="absolute" style={{ fontWeight: 300, color: "#C4C4C4", fontSize: "11px", left: "8px" }}>Enter Your Email</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="absolute" style={{ right: "8px" }}>
              <path d="M2 8h10M8 4l6 4-6 4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-row gap-3 items-center" style={{ marginTop: "8px" }}>
            <GooglePlayIcon size={37} />
            <p style={{ fontWeight: 600, color: "#fff", fontSize: "13px", lineHeight: "18px" }}>Coming Soon:<br/>Mobile App</p>
          </div>
        </div>

      </div>

      {/* ── MOBILE (below sm) ── */}
      <div className="flex sm:hidden justify-center" style={{ paddingTop: "32px", paddingBottom: "32px", paddingLeft: "16px", paddingRight: "16px" }}>
        <div className="flex flex-row items-start justify-between w-full" style={{ maxWidth: "400px" }}>

          {/* Brand */}
          <div className="flex flex-col items-start gap-3" style={{ width: "140px" }}>
            <p style={{
              fontWeight: 700,
              fontSize: "16px", lineHeight: "19px",
              background: "linear-gradient(90deg, #1DA7E7 5.98%, #0386C9 93.48%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              HealthConnect
            </p>
            <p style={{ fontWeight: 400, color: "#fff", fontSize: "8px", lineHeight: "12px" }}>
              Your trusted digital healthcare platform for secure consultations, easy appointments, and complete health management.
            </p>
            <SocialIcons size={12} />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start gap-2">
            <p style={{ fontWeight: 700, color: "#F2F5FD", fontSize: "12px", lineHeight: "15px" }}>Quick Links</p>
            <div className="flex flex-col gap-[6px]">
              {quickLinks.map((link) => (
                <a key={link} href="#" style={{ fontWeight: 600, color: "#F2F5FD", fontSize: "8px", lineHeight: "10px" }}>{link}</a>
              ))}
            </div>
          </div>

          {/* Google Play + Coming Soon — stacked vertically, text on two lines */}
          <div className="flex flex-col items-start gap-2">
            <GooglePlayIcon size={37} />
            <p style={{ fontWeight: 600, color: "#fff", fontSize: "11px", lineHeight: "16px", maxWidth: "80px" }}>
              Coming Soon:<br />Mobile App
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}