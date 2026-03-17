"use client";

import React from "react";

const MedicineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.6776 9.66224L9.64457 17.6602C8.57396 18.7055 7.13403 19.2859 5.63781 19.2753C4.14158 19.2648 2.71001 18.664 1.65431 17.6037C0.598599 16.5434 0.00409114 15.1092 2.1036e-05 13.6129C-0.00404907 12.1167 0.582648 10.6793 1.63257 9.61324L9.66557 1.61524C10.7362 0.569976 12.1761 -0.0104496 13.6723 0.000142463C15.1686 0.0107346 16.6001 0.611488 17.6558 1.67181C18.7115 2.73213 19.3061 4.1663 19.3101 5.66256C19.3142 7.15881 18.7275 8.5962 17.6776 9.66224ZM16.2776 3.04424C15.5892 2.35383 14.655 1.96479 13.6801 1.96254C12.7051 1.96029 11.7691 2.34502 11.0776 3.03224L3.04357 11.0302C2.35228 11.7185 1.96271 12.6531 1.96056 13.6286C1.9584 14.6041 2.34383 15.5405 3.03207 16.2317C3.72031 16.923 4.65497 17.3126 5.63044 17.3148C6.60591 17.3169 7.54228 16.9315 8.23357 16.2432L16.2666 8.24524C16.9573 7.55684 17.3465 6.62241 17.3488 5.64723C17.351 4.67204 16.9661 3.73583 16.2786 3.04424H16.2776Z" fill="#0DA1E5"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.92169 5.88629C6.10922 5.69882 6.36353 5.59351 6.62869 5.59351C6.89386 5.59351 7.14816 5.69882 7.33569 5.88629L13.3857 11.9363C13.5679 12.1249 13.6686 12.3775 13.6664 12.6397C13.6641 12.9019 13.5589 13.1527 13.3735 13.3381C13.1881 13.5235 12.9373 13.6287 12.6751 13.631C12.4129 13.6332 12.1603 13.5325 11.9717 13.3503L5.92169 7.30029C5.73422 7.11276 5.62891 6.85846 5.62891 6.59329C5.62891 6.32813 5.73422 6.07382 5.92169 5.88629Z" fill="#0DA1E5"/>
  </svg>
);
const TimeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#0DA1E5" strokeWidth="2"/>
    <path d="M12 7V12L15 14" stroke="#0DA1E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NotificationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 10C6 6.686 8.686 4 12 4C15.314 4 18 6.686 18 10V15L20 17H4L6 15V10Z" fill="#0DA1E5" fillOpacity="0.2" stroke="#0DA1E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 17C10 18.105 10.895 19 12 19C13.105 19 14 18.105 14 17" stroke="#0DA1E5" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="6" width="14" height="12" rx="2" stroke="#0DA1E5" strokeWidth="2"/>
    <path d="M16 10L22 7V17L16 14V10Z" stroke="#0DA1E5" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const steps = [
  {
    number: "01",
    icon: <MedicineIcon />,
    title: "Add Your Medicines",
    description: "Enter medicine name, dosage, frequency & purchase quantity",
  },
  {
    number: "02",
    icon: <TimeIcon />,
    title: "Set Your Schedule",
    description: "Define when to take each medicine - morning, afternoon, or night",
  },
  {
    number: "03",
    icon: <NotificationIcon />,
    title: "Stay Notified",
    description: "Receive alerts for low stock & missed doses via Email/WhatsApp",
  },
  {
    number: "04",
    icon: <VideoIcon />,
    title: "Consult When Needed",
    description: "Book appointments with doctors for online or in-person consultations",
  },
];

const VerticalConnector = () => (
  <div className="flex justify-center">
    <div className="h-[60px] border-l-[3px] border-[rgba(49,65,88,0.3)]" />
  </div>
);
// Icons
const AlertIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 2L2 19h19L11.5 2zm0 3.5L19 18H4L11.5 5.5z" fill="#FF8A04"/>
    <rect x="10.75" y="9" width="1.5" height="5" rx="0.75" fill="#FF8A04"/>
    <circle cx="11.5" cy="16" r="0.75" fill="#FF8A04"/>
  </svg>
);

const TimeIconPink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#E34692" strokeWidth="2"/>
    <path d="M12 7V12L15 14" stroke="#E34692" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#01FF01" fillOpacity="0.3" stroke="#01CC01" strokeWidth="1.5"/>
    <path d="M8.5 8.5c.5 1 1.5 3 3.5 4.5s3.5 2.5 4.5 2.5" stroke="#01AA01" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#0DA1E5" strokeWidth="1.5"/>
    <path d="M2 8l10 6 10-6" stroke="#0DA1E5" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function HowItWorks() {
  return (
    <>
    <section className="w-full flex flex-col items-center px-6 py-12">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:flex items-start justify-between w-full max-w-[1266px]">
        {steps.map((step, i) => (
          <React.Fragment key={step.number}>

            {/* Single card column — badge, icon, title, desc all centered */}
            <div className="flex flex-col items-center text-center w-[220px]">
              {/* Badge */}
              <div className="w-[57px] h-[57px] flex items-center justify-center bg-[#0F172A] rounded-full z-10">
                <span className="text-white font-medium text-[28px] leading-none">{step.number}</span>
              </div>
              {/* Icon circle */}
              <div className="w-[45px] h-[45px] bg-[#E4EBFF] rounded-full flex items-center justify-center mt-4">
                {step.icon}
              </div>
              {/* Title */}
              <h3 className="text-[#0F172A] font-bold text-[18px] leading-snug mt-3">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-[#5B697E] text-[14px] leading-[22px] mt-2">
                {step.description}
              </p>
            </div>

            {/* Connector line between cards, vertically centered at badge height (57/2 = 28.5px) */}
            {i < steps.length - 1 && (
              <div className="flex-1 flex items-start" style={{ paddingTop: "28.5px" }}>
                <div className="w-full border-t-[3px] border-[rgba(49,65,88,0.3)]" />
              </div>
            )}

          </React.Fragment>
        ))}
      </div>

      {/* ── MOBILE / TABLET (<lg) ── */}
      <div className="flex lg:hidden flex-col items-center w-[276px]">
        {steps.map((step, i) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center w-full">
              <div className="w-[57px] h-[57px] flex items-center justify-center bg-[#0F172A] rounded-full">
                <span className="text-white font-medium text-[28px] leading-none">{step.number}</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full mt-4">
                <div className="w-[45px] h-[45px] bg-[#E4EBFF] rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-[#0F172A] font-bold text-2xl leading-tight text-center w-full mt-1">
                  {step.title}
                </h3>
                <p className="text-[#5B697E] text-base leading-[19px] text-center w-full">
                  {step.description}
                </p>
              </div>
            </div>
            {i < steps.length - 1 && <VerticalConnector />}
          </React.Fragment>
        ))}
      </div>

    </section>

    <section className="w-full flex flex-col items-center px-6 py-12">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:flex flex-col items-center gap-[14px]">
        {/* Title row */}
        <div className="flex flex-row items-center">
          <span
            className="font-bold text-[58px] leading-[70px] text-[#0F172A]"
            style={{ fontFamily: 'Inter' }}
          >
            Alerts That Actually
          </span>
          <span
            className="font-bold text-[58px] leading-[70px] text-center ml-3"
            style={{
              fontFamily: 'Inter',
              background: 'linear-gradient(90deg, #0DA1E5 0%, #A63FCD 71.61%, #9C3ED5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Help
          </span>
        </div>
        {/* Subtitle */}
        <p
          className="font-normal text-[24px] leading-[29px] text-center text-[#5B697E] w-[717px]"
          style={{ fontFamily: 'Inter' }}
        >
          Get timely notifications via Email and WhatsApp for both you and your caretaker.
        </p>
      </div>

      {/* ── MOBILE / TABLET (<lg) ── */}
      <div className="flex lg:hidden flex-col items-center gap-[8px] w-[355px]">
        {/* Line 1 */}
        <span
          className="font-bold text-[32px] leading-[39px] text-center text-[#0F172A] w-full"
          style={{ fontFamily: 'Inter' }}
        >
          Alerts That Actually
        </span>
        {/* Line 2: gradient */}
        <span
          className="font-bold text-[32px] leading-[39px] text-center"
          style={{
            fontFamily: 'Inter',
            background: 'linear-gradient(90deg, #0DA1E5 0%, #A63FCD 71.61%, #9C3ED5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Help
        </span>
        {/* Subtitle */}
        <p
          className="font-normal text-[16px] leading-[19px] text-center text-[#5B697E] w-full"
          style={{ fontFamily: 'Inter' }}
        >
          Get timely notifications via Email and WhatsApp for both you and your caretaker.
        </p>
      </div>

    </section>
 
    <section className="w-full flex flex-col items-center px-4 py-8 overflow-x-hidden">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:flex flex-col gap-[16px] w-full max-w-[1290px]">
        {/* Row 1: Low Stock Alert + Missed Dose Alert */}
        <div className="flex flex-row gap-[12px] w-full">

          {/* Low Stock Alert */}
          <div className="flex-1 h-[91px] bg-[#FFF7DB] border border-[#FF8A04] rounded-[12px] flex items-center px-[32px]">
            <div className="flex flex-row items-center gap-[24px] w-full">
              <div className="shrink-0 w-[45px] h-[45px] bg-[#FFEBA8] rounded-full flex items-center justify-center">
                <AlertIcon />
              </div>
              <div className="flex flex-col gap-[12px]">
                <span className="font-bold text-[18px] leading-[22px] text-[#BC6400]" style={{ fontFamily: 'Inter' }}>
                  Low Stock Alert
                </span>
                <span className="font-normal text-[16px] leading-[19px] text-[#FF8A04]" style={{ fontFamily: 'Inter' }}>
                  "Metformin 500mg will run out tomorrow. Only 2 tablets remaining."
                </span>
              </div>
            </div>
          </div>

          {/* Missed Dose Alert */}
          <div className="flex-1 h-[91px] bg-[#FEE3F8] border border-[#FD9CE4] rounded-[12px] flex items-center px-[32px]">
            <div className="flex flex-row items-center gap-[24px] w-full">
              <div className="shrink-0 w-[45px] h-[45px] bg-[#FEB2D7] rounded-full flex items-center justify-center">
                <TimeIconPink />
              </div>
              <div className="flex flex-col gap-[12px]">
                <span className="font-bold text-[18px] leading-[22px] text-[#E34692]" style={{ fontFamily: 'Inter' }}>
                  Missed Dose Alert
                </span>
                <span className="font-normal text-[16px] leading-[19px] text-[#F07AB3]" style={{ fontFamily: 'Inter' }}>
                  "Morning dose of Amlodipine missed at 9:00 AM. Please take it now."
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Row 2: WhatsApp Alert + Email Notification */}
        <div className="flex flex-row gap-[12px] w-full">

          {/* WhatsApp Alert */}
          <div className="flex-1 h-[138px] bg-white border border-[#0DA1E5] rounded-[12px] flex items-center px-[32px]">
            <div className="flex flex-col gap-[12px] w-full">
              <div className="flex flex-row items-start gap-[24px]">
                <div className="shrink-0 w-[45px] h-[45px] bg-[#DAFFDA] rounded-full flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div className="flex flex-col gap-[0px]">
                  <span className="font-semibold text-[18px] leading-[22px] text-[#0F172A]" style={{ fontFamily: 'Inter' }}>
                    WhatsApp Alert
                  </span>
                  <span className="font-normal text-[12px] leading-[15px] text-[#314158]" style={{ fontFamily: 'Inter' }}>
                    To patient & caretaker
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#EFF5FC] rounded-[8px] px-[12px] py-[7px]">
                <p className="font-semibold text-[14px] leading-[17px] text-black" style={{ fontFamily: 'Inter' }}>
                  Medicine Alert: Your Metformin 500mg stock is running low. Only 2 tablets remaining. Please restock today!
                </p>
              </div>
            </div>
          </div>

          {/* Email Notification */}
          <div className="flex-1 h-[138px] bg-white border border-[#0DA1E5] rounded-[12px] flex items-center px-[32px]">
            <div className="flex flex-col gap-[12px] w-full">
              <div className="flex flex-row items-start gap-[24px]">
                <div className="shrink-0 w-[45px] h-[45px] bg-[#E4EBFF] rounded-full flex items-center justify-center">
                  <EmailIcon />
                </div>
                <div className="flex flex-col gap-[0px]">
                  <span className="font-semibold text-[18px] leading-[22px] text-[#0F172A]" style={{ fontFamily: 'Inter' }}>
                    Email Notification
                  </span>
                  <span className="font-normal text-[12px] leading-[15px] text-[#314158]" style={{ fontFamily: 'Inter' }}>
                    Detailed summary
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#EFF5FC] rounded-[8px] px-[12px] py-[7px]">
                <p className="font-normal text-[14px] leading-[17px] text-black" style={{ fontFamily: 'Inter' }}>
                  Daily health summary with upcoming refills, missed doses, and health insights delivered to your inbox.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── MOBILE / TABLET (<lg): stacked ── */}
      <div className="flex lg:hidden flex-col gap-[12px] w-full max-w-[400px]">

        {/* Low Stock Alert */}
        <div className="w-full bg-[#FFF7DB] border border-[#FF8A04] rounded-[12px] flex items-center px-[16px] py-[16px]">
          <div className="flex flex-row items-center gap-[16px] w-full">
            <div className="shrink-0 w-[45px] h-[45px] bg-[#FFEBA8] rounded-full flex items-center justify-center">
              <AlertIcon />
            </div>
            <div className="flex flex-col gap-[6px]">
              <span className="font-bold text-[16px] leading-[20px] text-[#BC6400]" style={{ fontFamily: 'Inter' }}>
                Low Stock Alert
              </span>
              <span className="font-normal text-[13px] leading-[17px] text-[#FF8A04]" style={{ fontFamily: 'Inter' }}>
                "Metformin 500mg will run out tomorrow. Only 2 tablets remaining."
              </span>
            </div>
          </div>
        </div>

        {/* Missed Dose Alert */}
        <div className="w-full bg-[#FEE3F8] border border-[#FD9CE4] rounded-[12px] flex items-center px-[16px] py-[16px]">
          <div className="flex flex-row items-center gap-[16px] w-full">
            <div className="shrink-0 w-[45px] h-[45px] bg-[#FEB2D7] rounded-full flex items-center justify-center">
              <TimeIconPink />
            </div>
            <div className="flex flex-col gap-[6px]">
              <span className="font-bold text-[16px] leading-[20px] text-[#E34692]" style={{ fontFamily: 'Inter' }}>
                Missed Dose Alert
              </span>
              <span className="font-normal text-[13px] leading-[17px] text-[#F07AB3]" style={{ fontFamily: 'Inter' }}>
                "Morning dose of Amlodipine missed at 9:00 AM. Please take it now."
              </span>
            </div>
          </div>
        </div>

        {/* WhatsApp Alert */}
<div className="w-full bg-white border border-[#0DA1E5] rounded-[12px] px-[16px] py-[10px]">
  <div className="flex flex-col gap-[6px]">
    <div className="flex flex-row items-start gap-[16px]">
      <div className="shrink-0 w-[45px] h-[45px] bg-[#DAFFDA] rounded-full flex items-center justify-center">
        <WhatsAppIcon />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-[16px] leading-[20px] text-[#0F172A]" style={{ fontFamily: 'Inter' }}>
          WhatsApp Alert
        </span>
        <span className="font-normal text-[12px] leading-[15px] text-[#314158]" style={{ fontFamily: 'Inter' }}>
          To patient & caretaker
        </span>
      </div>
    </div>
    <div className="w-full bg-[#EFF5FC] rounded-[8px] px-[12px] py-[6px]">
      <p className="font-normal text-[13px] leading-[17px] text-black" style={{ fontFamily: 'Inter' }}>
  <span className="font-semibold">Medicine Alert:</span> Your Metformin 500mg stock is running low. Only 2 tablets remaining. Please restock today!
</p>
    </div>
  </div>
</div>

{/* Email Notification */}
<div className="w-full bg-white border border-[#0DA1E5] rounded-[12px] px-[16px] py-[10px]">
  <div className="flex flex-col gap-[6px]">
    <div className="flex flex-row items-start gap-[16px]">
      <div className="shrink-0 w-[45px] h-[45px] bg-[#E4EBFF] rounded-full flex items-center justify-center">
        <EmailIcon />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-[16px] leading-[20px] text-[#0F172A]" style={{ fontFamily: 'Inter' }}>
          Email Notification
        </span>
        <span className="font-normal text-[12px] leading-[15px] text-[#314158]" style={{ fontFamily: 'Inter' }}>
          Detailed summary
        </span>
      </div>
    </div>
    <div className="w-full bg-[#EFF5FC] rounded-[8px] px-[12px] py-[6px]">
      <p className="font-normal text-[13px] leading-[17px] text-black" style={{ fontFamily: 'Inter' }}>
        Daily health summary with upcoming refills, missed doses, and health insights delivered to your inbox.
      </p>
    </div>
  </div>
</div>
      </div>
    </section>

    <section className="w-full flex flex-col items-center px-6 py-12">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:flex flex-col items-center gap-[14px]">
        {/* Title row */}
        <div className="flex flex-row items-center">
          <span
            className="font-bold text-[58px] leading-[70px] text-[#0F172A]"
            style={{ fontFamily: 'Inter' }}
          >
            Perfect For&nbsp;
          </span>
          <span
            className="font-bold text-[58px] leading-[70px]"
            style={{
              fontFamily: 'Inter',
              background: 'linear-gradient(90deg, #0DA1E5 0%, #A63FCD 71.61%, #9C3ED5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Everyone
          </span>
        </div>
        {/* Subtitle */}
        <p
          className="font-normal text-[32px] leading-[39px] text-center text-[#5B697E]"
          style={{ fontFamily: 'Inter' }}
        >
          Whether you're managing your own health or caring for someone else
        </p>
      </div>

      {/* ── MOBILE / TABLET (<lg) ── */}
      <div className="flex lg:hidden flex-col items-center gap-[8px] w-full max-w-[388px]">
        {/* "Perfect For" */}
        <span
          className="font-bold text-[32px] leading-[39px] text-center text-[#0F172A] w-full"
          style={{ fontFamily: 'Inter' }}
        >
          Perfect For
        </span>
        {/* "Everyone" gradient */}
        <span
          className="font-bold text-[32px] leading-[39px] text-center w-full"
          style={{
            fontFamily: 'Inter',
            background: 'linear-gradient(90deg, #0DA1E5 0%, #A63FCD 71.61%, #9C3ED5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Everyone
        </span>
        {/* Subtitle */}
        <p
          className="font-normal text-[16px] leading-[19px] text-center text-[#5B697E] w-full"
          style={{ fontFamily: 'Inter' }}
        >
          Whether you're managing your own health or caring for someone else
        </p>
      </div>

    </section>
  
  
</>
  );
}