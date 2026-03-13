
export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">

      {/* ===== DESKTOP xl+ ===== */}
      <div
        className="hidden xl:flex items-start justify-between mx-auto px-8"
        style={{ maxWidth: '1320px', width: '100%', marginTop: '60px' }}
      >
        {/* LEFT COLUMN */}
        <div style={{ width: '546px', marginTop: '47px', display: 'flex', flexDirection: 'column', gap: '52px' }}>

          {/* AI Badge */}
          <div
            style={{
              width: 'fit-content',
              height: '45px',
              border: '1px solid #0F172A',
              borderRadius: '0px',
              padding: '0 12px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Top-left corner */}
            <svg style={{ position: 'absolute', top: '-4px', left: '-4px' }} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="7" height="7" fill="#0F172A"/>
            </svg>
            {/* Top-right corner */}
            <svg style={{ position: 'absolute', top: '-4px', right: '-4px' }} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="7" height="7" fill="#0F172A"/>
            </svg>
            {/* Bottom-left corner */}
            <svg style={{ position: 'absolute', bottom: '-4px', left: '-4px' }} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="7" height="7" fill="#0F172A"/>
            </svg>
            {/* Bottom-right corner */}
            <svg style={{ position: 'absolute', bottom: '-4px', right: '-4px' }} width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="7" height="7" fill="#0F172A"/>
            </svg>
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#0F172A',
                whiteSpace: 'nowrap',
              }}
            >
              AI-Powered Healthcare Platform
            </span>
          </div>

          {/* Frame 46 */}
          <div style={{ width: '546px', display: 'flex', flexDirection: 'column', gap: '38px' }}>

            {/* Headings */}
            <div style={{ width: '467px', display: 'flex', flexDirection: 'column' }}>
              <h1 style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '58px',
                lineHeight: '70px',
                color: '#0F172A',
                margin: 0,
                }}>
                The Future of <span style={{ whiteSpace: 'nowrap' }}>Personal Health</span>,
              </h1>
              <h1 style={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '58px',
                lineHeight: '70px',
                background: 'linear-gradient(90deg, #0DA1E5 0%, #A63FCD 71.61%, #9C3ED5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0,
              }}>
                Powered by AI.
              </h1>
            </div>

            {/* Description */}
            <p style={{
              width: '546px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '29px',
              color: '#5B697E',
              margin: 0,
            }}>
              Manage your entire{' '}
              <span style={{ fontWeight: 600, color: '#0DA1E5' }}>medical history</span>
              , track medications with caretaker alerts, and{' '}
              <span style={{ fontWeight: 600, color: '#0DA1E5' }}>consult</span>
              {' '}top doctors all in one secure platform.
            </p>

          </div>

          {/* Buttons */}
          <div style={{ width: '431px', height: '55px', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button style={{ width: '192px', height: '54px', borderRadius: '28px', padding: '10px 18px', border: 'none', background: 'linear-gradient(91.05deg, #00A3F1 8.82%, #0DA1E5 79.39%)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '28px', lineHeight: '34px', color: '#F2F5FD', whiteSpace: 'nowrap' }}>Get Started</span>
            </button>
            <button style={{ width: '215px', height: '55px', borderRadius: '47px', padding: '8px 18px', border: '1px solid rgba(49, 65, 88, 0.7)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '32px', lineHeight: '39px', color: '#314158', whiteSpace: 'nowrap' }}>Find Doctor</span>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ width: '642px', height: '520px', position: 'relative' }}>
          <div style={{ position: 'absolute', width: '409px', height: '466px', left: '212px', top: '40px', background: 'linear-gradient(97.48deg, #0DA1E5 48.91%, #DFE9FD 93.59%)', borderRadius: '250px 0px 0px 0px' }} />

          {/* Doctor Image */}
          <img
            src="/doctor.png"
            alt="Doctor"
            style={{
              position: 'absolute',
              width: '420px',
              height: '520px',
              left: '200px',
              top: '0px',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />

          <div style={{ position: 'absolute', width: '51px', height: '52px', left: '591px', top: '47px', background: '#D7E2FF', boxShadow: '2px 1px 4px rgba(13, 161, 229, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: '#0F172A', fontSize: '20px', fontWeight: 'bold' }}>›</span>
          </div>

          {/* Card 1 - Instant Doctor Access */}
          <div style={{ position: 'absolute', width: '322px', height: '90px', left: '57px', top: '144px' }}>
            <div style={{ position: 'absolute', width: '322px', height: '90px', background: '#FDFDFD', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', width: '70px', height: '71px', left: '12px', top: '9px', background: '#0F172A', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8743 32.9417V34.2292C19.8744 36.8648 20.9213 39.3924 22.785 41.2561C24.6486 43.1197 27.1763 44.1667 29.8119 44.1667C32.4474 44.1667 34.9751 43.1197 36.8387 41.2561C38.7024 39.3924 39.7494 36.8648 39.7494 34.2292V30.5413C38.2753 30.0203 37.0329 28.995 36.2417 27.6466C35.4506 26.2981 35.1616 24.7134 35.4259 23.1725C35.6901 21.6316 36.4907 20.2338 37.6859 19.2261C38.8812 18.2183 40.3943 17.6656 41.9577 17.6656C43.5211 17.6656 45.0341 18.2183 46.2294 19.2261C47.4247 20.2338 48.2252 21.6316 48.4895 23.1725C48.7538 24.7134 48.4648 26.2981 47.6736 27.6466C46.8825 28.995 45.6401 30.0203 44.166 30.5413V34.2292C44.166 38.0362 42.6537 41.6872 39.9618 44.3791C37.2698 47.071 33.6188 48.5834 29.8119 48.5834C26.0049 48.5834 22.3538 47.071 19.6619 44.3791C16.97 41.6872 15.4577 38.0362 15.4577 34.2292V32.9417C12.3699 32.4198 9.56676 30.8211 7.54551 28.4291C5.52425 26.0372 4.41554 23.0066 4.41602 19.875V8.83335C4.41602 7.66198 4.88134 6.53858 5.70963 5.7103C6.53791 4.88201 7.66131 4.41669 8.83268 4.41669H11.041C11.6267 4.41669 12.1884 4.64935 12.6025 5.06349C13.0167 5.47764 13.2493 6.03933 13.2493 6.62502C13.2493 7.21071 13.0167 7.77241 12.6025 8.18655C12.1884 8.60069 11.6267 8.83335 11.041 8.83335H8.83268V19.875C8.83268 22.2178 9.76333 24.4646 11.4199 26.1211C13.0765 27.7777 15.3233 28.7084 17.666 28.7084C20.0088 28.7084 22.2556 27.7777 23.9121 26.1211C25.5687 24.4646 26.4993 22.2178 26.4994 19.875V8.83335H24.291C23.7053 8.83335 23.1436 8.60069 22.7295 8.18655C22.3153 7.77241 22.0827 7.21071 22.0827 6.62502C22.0827 6.03933 22.3153 5.47764 22.7295 5.06349C23.1436 4.64935 23.7053 4.41669 24.291 4.41669H26.4994C27.6707 4.41669 28.7941 4.88201 29.6224 5.7103C30.4507 6.53858 30.916 7.66198 30.916 8.83335V19.875C30.9165 23.0066 29.8078 26.0372 27.7865 28.4291C25.7653 30.8211 22.9621 32.4198 19.8743 32.9417ZM41.9577 26.5C42.5434 26.5 43.1051 26.2674 43.5192 25.8532C43.9334 25.4391 44.166 24.8774 44.166 24.2917C44.166 23.706 43.9334 23.1443 43.5192 22.7302C43.1051 22.316 42.5434 22.0834 41.9577 22.0834C41.372 22.0834 40.8103 22.316 40.3962 22.7302C39.982 23.1443 39.7494 23.706 39.7494 24.2917C39.7494 24.8774 39.982 25.4391 40.3962 25.8532C40.8103 26.2674 41.372 26.5 41.9577 26.5Z" fill="#EFF5FC"/>
              </svg>
            </div>
            <span style={{ position: 'absolute', width: '128px', height: '44px', left: '99px', top: '23px', fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '22px', color: '#314158' }}>Instant Doctor Access</span>
          </div>

          {/* Card 2 - Easy Appointment Booking */}
          <div style={{ position: 'absolute', width: '322px', height: '90px', left: '11px', top: '260px' }}>
            <div style={{ position: 'absolute', width: '322px', height: '90px', background: 'rgba(137, 187, 250, 0.2)', border: '1px solid #FFFFFF', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', width: '70px', height: '71px', left: '11px', top: '9px', background: '#EFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_244_972)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.5004 0.979186C22.1844 0.979186 21.0858 1.07514 20.2496 1.18873C18.5155 1.42177 17.1554 2.53704 16.4308 3.95977C15.8825 5.03489 15.1246 6.61821 14.6223 8.07423C11.1874 8.27985 8.67584 8.58535 6.89963 8.87714C3.86813 9.37652 1.84713 11.846 1.56317 14.7267C0.736755 23.1358 0.736755 30.7184 1.56317 39.1275C1.84713 42.0082 3.86813 44.4777 6.89963 44.9771C9.94876 45.4794 15.1658 46.0209 23.5014 46.0209C31.837 46.0209 37.054 45.4794 40.1022 44.9771C43.1347 44.4777 45.1557 42.0082 45.4386 39.1275C46.266 30.7184 46.266 23.1358 45.4386 14.7267C45.1557 11.846 43.1347 9.37652 40.1022 8.87714C38.326 8.58437 35.8134 8.27887 32.3766 8.07423C31.8743 6.61821 31.1154 5.03489 30.568 3.95977C29.8435 2.53704 28.4834 1.42177 26.7503 1.18873C25.6725 1.04678 24.5875 0.976775 23.5004 0.979186ZM28.0986 7.8921C27.7801 7.16352 27.4395 6.44481 27.0773 5.73696C26.8648 5.32081 26.5368 5.11225 26.2254 5.07014C25.322 4.95173 24.4116 4.89351 23.5004 4.89585C22.3763 4.89585 21.453 4.9781 20.7734 5.07014C20.4621 5.11225 20.134 5.32081 19.9216 5.73598C19.5598 6.44473 19.2193 7.16408 18.9003 7.89308C20.3162 7.85391 21.8476 7.83335 23.5024 7.83335C25.1552 7.83335 26.6847 7.85489 28.1005 7.8921M23.5014 11.75C15.3293 11.75 10.3297 12.2817 7.53707 12.7419C6.42669 12.925 5.58853 13.8141 5.46123 15.1105C4.6593 23.264 4.6593 30.5902 5.46123 38.7437C5.58853 40.0401 6.42669 40.9292 7.53707 41.1123C10.3297 41.5725 15.3293 42.1042 23.5004 42.1042C31.6716 42.1042 36.6712 41.5725 39.4648 41.1123C40.5742 40.9292 41.4133 40.0401 41.5406 38.7437C42.3425 30.5902 42.3425 23.264 41.5406 15.1105C41.4133 13.8141 40.5742 12.925 39.4648 12.7419C36.6722 12.2817 31.6735 11.75 23.5014 11.75ZM23.5004 16.1563C22.5213 16.1563 21.7311 16.2189 21.1162 16.3031C19.6347 16.5029 18.7701 17.7699 18.7221 19.0791C18.6957 19.8037 18.6663 20.7926 18.6438 22.0704C17.3659 22.093 16.377 22.1223 15.6524 22.1488C14.3433 22.1967 13.0762 23.0614 12.8755 24.5428C12.773 25.3334 12.7242 26.13 12.7296 26.9271C12.7296 27.9063 12.7923 28.6965 12.8765 29.3114C13.0762 30.7929 14.3433 31.6575 15.6524 31.7054C16.377 31.7319 17.3659 31.7612 18.6438 31.7838C18.6663 33.0616 18.6957 34.0505 18.7221 34.7751C18.7701 36.0852 19.6347 37.3513 21.1162 37.552C21.7311 37.6353 22.5203 37.6979 23.5004 37.6979C24.4796 37.6979 25.2698 37.6353 25.8847 37.5511C27.3662 37.3513 28.2308 36.0843 28.2788 34.7751C28.3052 34.0505 28.3346 33.0616 28.3571 31.7838C29.6349 31.7612 30.6239 31.7319 31.3484 31.7054C32.6586 31.6575 33.9246 30.7929 34.1254 29.3114C34.2086 28.6965 34.2713 27.9072 34.2713 26.9271C34.2713 25.9479 34.2086 25.1577 34.1244 24.5428C33.9246 23.0614 32.6576 22.1967 31.3484 22.1488C30.6239 22.1223 29.6349 22.093 28.3571 22.0704C28.3403 21.0731 28.3142 20.0759 28.2788 19.0791C28.2308 17.7699 27.3662 16.5029 25.8847 16.3022C25.0942 16.1997 24.2976 16.1509 23.5004 16.1563Z" fill="#0F172A"/>
                </g>
                <defs>
                  <clipPath id="clip0_244_972">
                    <rect width="47" height="47" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span style={{ position: 'absolute', width: '162px', height: '44px', left: '95px', top: '27px', fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '22px', color: '#0F172A' }}>Easy Appointment Booking</span>
          </div>

          {/* Card 3 - Secure Digital Health Records */}
          <div style={{ position: 'absolute', width: '322px', height: '90px', left: '-27px', top: '376px' }}>
            <div style={{ position: 'absolute', width: '322px', height: '90px', background: 'rgba(137, 187, 250, 0.2)', border: '1px solid #FFFFFF', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', width: '70px', height: '71px', left: '11px', top: '9px', background: '#EFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1909 13.6376L40.2286 10.2314C39.9845 9.80723 39.5819 9.49739 39.1094 9.37004C38.6368 9.24268 38.133 9.30824 37.7088 9.5523L25.9866 16.3433C25.9138 16.3853 25.8312 16.4074 25.7472 16.4072C25.6632 16.407 25.5807 16.3846 25.5081 16.3423C25.4356 16.2999 25.3755 16.2392 25.334 16.1661C25.2924 16.0931 25.271 16.0103 25.2717 15.9263L25.2813 2.40625C25.2813 1.90068 25.0804 1.41582 24.7229 1.05833C24.3654 0.700837 23.8806 0.5 23.375 0.5H19.5625C19.0569 0.5 18.5721 0.700837 18.2146 1.05833C17.8571 1.41582 17.6563 1.90068 17.6563 2.40625L17.6646 15.9371C17.6653 16.0211 17.6439 16.1038 17.6024 16.1768C17.5608 16.2499 17.5007 16.3106 17.4282 16.353C17.3556 16.3953 17.2731 16.4177 17.1891 16.4179C17.1051 16.4181 17.0225 16.3961 16.9497 16.354L5.2275 9.56303C4.80329 9.31897 4.2995 9.2534 3.82696 9.38076C3.35441 9.50811 2.9518 9.81795 2.70768 10.2421L0.746622 13.6496C0.625551 13.859 0.547038 14.0903 0.515589 14.3302C0.484141 14.57 0.500376 14.8137 0.563364 15.0473C0.626352 15.2809 0.734851 15.4997 0.882634 15.6913C1.03042 15.8828 1.21457 16.0432 1.42453 16.1634L13.1587 22.964C13.2304 23.006 13.2898 23.0661 13.3311 23.1382C13.3724 23.2103 13.3941 23.2919 13.3941 23.375C13.3941 23.4581 13.3724 23.5397 13.3311 23.6118C13.2898 23.6839 13.2304 23.744 13.1587 23.786L1.42453 30.5866C1.00336 30.832 0.695964 31.2336 0.569048 31.7042C0.442132 32.1749 0.505939 32.6766 0.746622 33.1004L2.70887 36.5067C2.95299 36.9309 3.3556 37.2407 3.82815 37.368C4.3007 37.4954 4.80448 37.4298 5.22869 37.1858L16.9509 30.3948C17.0237 30.3528 17.1063 30.3307 17.1903 30.3309C17.2743 30.3311 17.3568 30.3535 17.4294 30.3958C17.5019 30.4382 17.562 30.4989 17.6036 30.572C17.6451 30.645 17.6665 30.7277 17.6658 30.8118L17.6563 44.3438C17.6563 44.8493 17.8571 45.3342 18.2146 45.6917C18.5721 46.0492 19.0569 46.25 19.5625 46.25H23.375C23.8806 46.25 24.3654 46.0492 24.7229 45.6917C25.0804 45.3342 25.2813 44.8493 25.2813 44.3438L25.2729 30.801C25.2722 30.717 25.2936 30.6343 25.3351 30.5613C25.3767 30.4882 25.4368 30.4274 25.5093 30.3851C25.5819 30.3428 25.6644 30.3204 25.7484 30.3202C25.8324 30.32 25.915 30.342 25.9878 30.384L37.71 37.1751C38.1342 37.4191 38.638 37.4847 39.1105 37.3573C39.5831 37.23 39.9857 36.9201 40.2298 36.496L42.1921 33.0897C42.3131 32.8803 42.3917 32.649 42.4231 32.4091C42.4545 32.1693 42.4383 31.9255 42.3753 31.692C42.3123 31.4584 42.2038 31.2396 42.0561 31.048C41.9083 30.8565 41.7241 30.696 41.5142 30.5759L29.78 23.7753C29.7083 23.7333 29.6489 23.6732 29.6076 23.6011C29.5663 23.529 29.5446 23.4474 29.5446 23.3643C29.5446 23.2812 29.5663 23.1995 29.6076 23.1274C29.6489 23.0553 29.7083 22.9953 29.78 22.9532L41.5142 16.1527C41.9362 15.9078 42.2442 15.5058 42.3709 15.0347C42.4977 14.5635 42.433 14.0613 42.1909 13.6376Z" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ position: 'absolute', width: '132px', height: '44px', left: '96px', top: '27px', fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '22px', color: '#0F172A' }}>Secure Digital Health Records</span>
          </div>

        </div>
      </div>

      {/* ===== MOBILE & TABLET below xl ===== */}
      <div
        className="flex xl:hidden flex-col items-center mx-auto"
        style={{ maxWidth: '390px', width: '100%', gap: '24px', marginTop: '48px' }}
>
        {/* Headings */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '258px' }}>
          <h1 style={{ 
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '39px',
            textAlign: 'center',
            color: '#0F172A',
            margin: 0
            }}>
            The Future of <span style={{ whiteSpace: 'nowrap' }}>Personal Health</span>,
           </h1>
          <h1 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '32px', lineHeight: '39px', textAlign: 'center', background: 'linear-gradient(90deg, #0DA1E5 0%, #A63FCD 71.61%, #9C3ED5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: 0 }}>
            Powered by AI.
          </h1>
        </div>

        {/* Description */}
        <p style={{ width: '100%', fontFamily: 'Inter', fontWeight: 600, fontSize: '16px', lineHeight: '19px', textAlign: 'center', color: '#5B697E', margin: 0 }}>
          Manage your entire{' '}
          <span style={{ color: '#0DA1E5' }}>medical history</span>
          , track medications with caretaker alerts, and{' '}
          <span style={{ color: '#0DA1E5' }}>consult</span>
          {' '}top doctors all in one secure platform.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
          <button style={{ width: '136px', height: '42px', borderRadius: '28px', padding: '10px 18px', border: 'none', background: 'linear-gradient(91.05deg, #00A3F1 8.82%, #0DA1E5 79.39%)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '22px', color: '#F2F5FD', whiteSpace: 'nowrap' }}>Get Started</span>
          </button>
          <button style={{ width: '137px', height: '38px', borderRadius: '47px', padding: '8px 18px', border: '1px solid rgba(49, 65, 88, 0.7)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '22px', color: '#314158', whiteSpace: 'nowrap' }}>Find Doctor</span>
          </button>
        </div>

        {/* Mobile Doctor Image + Cards */}
        <div style={{ position: 'relative', width: '100%', height: '400px', marginTop: '76px' }}>

          {/* Blue shape background behind doctor */}
          <svg
            width="264"
            height="264"
            viewBox="0 0 264 264"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              left: 'calc(50% - 264px/2 + 37px)',
              top: '30px',
              zIndex: 0
            }}
          >
            <path d="M0 132C0 59.0984 60.2758 0 133.177 0V0C204.79 0 264 58.0535 264 129.666V129.666C264 203.857 203.857 264 129.666 264H0V132Z" fill="url(#paint0_linear_244_1528)"/>
            <defs>
              <linearGradient id="paint0_linear_244_1528" x1="132.323" y1="104.807" x2="263.488" y2="122.022" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0DA1E5"/>
                <stop offset="1" stopColor="#DFE9FD"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Doctor image */}
          <img
            src="/doctor.png"
            alt="Doctor"
            style={{
              position: 'absolute',
              width: '280px',
              height: '370px',
              left: '100px',
              top: '-50px',
              objectFit: 'cover',
              objectPosition: 'top center',
              zIndex: 2
            }}
          />

          {/* Arrow button */}
          <svg
            width="61"
            height="63"
            viewBox="0 0 61 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              right: '6px',
              top: '76px',
              zIndex: 2,
              cursor: 'pointer'
            }}
          >
            <g filter="url(#filter0_dd_244_1553)">
              <rect x="4" y="3" width="51" height="52" rx="9" fill="#D7E2FF"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M34.8491 29.8295L28.2493 36.4293L26.5996 34.7796L32.3746 29.0046L26.5996 23.2296L28.2493 21.58L34.8491 28.1798C35.0678 28.3986 35.1907 28.6953 35.1907 29.0046C35.1907 29.314 35.0678 29.6107 34.8491 29.8295Z" fill="#0F172A"/>
            <defs>
              <filter id="filter0_dd_244_1553" x="0" y="0" width="61" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_244_1553"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="2" dy="1"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.631373 0 0 0 0 0.898039 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_244_1553" result="effect2_dropShadow_244_1553"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_244_1553" result="shape"/>
              </filter>
            </defs>
          </svg>

          {/* Card 1 */}
          <div style={{ position: 'absolute', width: '172px', height: '62px', left: '22px', top: '80px', zIndex: 1 }}>
            <div style={{ position: 'absolute', width: '172px', height: '62px', background: '#FDFDFD', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', width: '42px', height: '42px', left: '10px', top: '10px' }}>
              <svg width="42" height="42" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="70" height="71" rx="5" fill="#0F172A"/>
                <path d="M27.8743 41.9417V43.2292C27.8744 45.8648 28.9213 48.3924 30.785 50.2561C32.6486 52.1197 35.1763 53.1667 37.8119 53.1667C40.4474 53.1667 42.9751 52.1197 44.8387 50.2561C46.7024 48.3924 47.7494 45.8648 47.7494 43.2292V39.5413C46.2753 39.0203 45.0329 37.995 44.2417 36.6466C43.4506 35.2981 43.1616 33.7134 43.4259 32.1725C43.6901 30.6316 44.4907 29.2338 45.6859 28.2261C46.8812 27.2183 48.3943 26.6656 49.9577 26.6656C51.5211 26.6656 53.0341 27.2183 54.2294 28.2261C55.4247 29.2338 56.2252 30.6316 56.4895 32.1725C56.7538 33.7134 56.4648 35.2981 55.6736 36.6466C54.8825 37.995 53.6401 39.0203 52.166 39.5413V43.2292C52.166 47.0362 50.6537 50.6872 47.9618 53.3791C45.2698 56.071 41.6188 57.5834 37.8119 57.5834C34.0049 57.5834 30.3538 56.071 27.6619 53.3791C24.97 50.6872 23.4577 47.0362 23.4577 43.2292V41.9417C20.3699 41.4198 17.5668 39.8211 15.5455 37.4291C13.5243 35.0372 12.4155 32.0066 12.416 28.875V17.8334C12.416 16.662 12.8813 15.5386 13.7096 14.7103C14.5379 13.882 15.6613 13.4167 16.8327 13.4167H19.041C19.6267 13.4167 20.1884 13.6494 20.6025 14.0635C21.0167 14.4776 21.2493 15.0393 21.2493 15.625C21.2493 16.2107 21.0167 16.7724 20.6025 17.1865C20.1884 17.6007 19.6267 17.8334 19.041 17.8334H16.8327V28.875C16.8327 31.2178 17.7633 33.4646 19.4199 35.1211C21.0765 36.7777 23.3233 37.7084 25.666 37.7084C28.0088 37.7084 30.2556 36.7777 31.9121 35.1211C33.5687 33.4646 34.4993 31.2178 34.4994 28.875V17.8334H32.291C31.7053 17.8334 31.1436 17.6007 30.7295 17.1865C30.3153 16.7724 30.0827 16.2107 30.0827 15.625C30.0827 15.0393 30.3153 14.4776 30.7295 14.0635C31.1436 13.6494 31.7053 13.4167 32.291 13.4167H34.4994C35.6707 13.4167 36.7941 13.882 37.6224 14.7103C38.4507 15.5386 38.916 16.662 38.916 17.8334V28.875C38.9165 32.0066 37.8078 35.0372 35.7865 37.4291C33.7653 39.8211 30.9621 41.4198 27.8743 41.9417ZM49.9577 35.5C50.5434 35.5 51.1051 35.2674 51.5192 34.8532C51.9334 34.4391 52.166 33.8774 52.166 33.2917C52.166 32.706 51.9334 32.1443 51.5192 31.7302C51.1051 31.316 50.5434 31.0834 49.9577 31.0834C49.372 31.0834 48.8103 31.316 48.3962 31.7302C47.982 32.1443 47.7494 32.706 47.7494 33.2917C47.7494 33.8774 47.982 34.4391 48.3962 34.8532C48.8103 35.2674 49.372 35.5 49.9577 35.5Z" fill="#EFF5FC"/>
              </svg>
            </div>
            <span style={{ position: 'absolute', left: '60px', top: '16px', fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', lineHeight: '15px', color: '#314158' }}>Instant Doctor Access</span>
          </div>

          {/* Card 2 */}
          <div style={{ position: 'absolute', width: '178px', height: '62px', left: '0px', top: '158px', zIndex: 1 }}>
            <div style={{ position: 'absolute', width: '178px', height: '62px', background: 'rgba(137, 187, 250, 0.2)', border: '1px solid #FFFFFF', borderRadius: '16px' }} />
            <div style={{ position: 'absolute', width: '42px', height: '42px', left: '11px', top: '10px', background: '#EFFFFF', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip_card2_mobile)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.0009 0.500031C11.3289 0.500031 10.7679 0.549031 10.3409 0.607031C9.45542 0.726031 8.76092 1.29553 8.39092 2.02203C8.11092 2.57103 7.72392 3.37953 7.46742 4.12303C5.71342 4.22803 4.43092 4.38403 3.52392 4.53303C1.97592 4.78803 0.943922 6.04903 0.798922 7.52003C0.376922 11.814 0.376922 15.686 0.798922 19.98C0.943922 21.451 1.97592 22.712 3.52392 22.967C5.08092 23.2235 7.74492 23.5 12.0014 23.5C16.2579 23.5 18.9219 23.2235 20.4784 22.967C22.0269 22.712 23.0589 21.451 23.2034 19.98C23.6259 15.686 23.6259 11.814 23.2034 7.52003C23.0589 6.04903 22.0269 4.78803 20.4784 4.53303C19.5714 4.38353 18.2884 4.22753 16.5334 4.12303C16.2769 3.37953 15.8894 2.57103 15.6099 2.02203C15.2399 1.29553 14.5454 0.726031 13.6604 0.607031C13.1101 0.534545 12.556 0.498799 12.0009 0.500031ZM14.3489 4.03003C14.1863 3.65799 14.0124 3.29099 13.8274 2.92953C13.7189 2.71703 13.5514 2.61053 13.3924 2.58903C12.9311 2.52857 12.4662 2.49883 12.0009 2.50003C11.4269 2.50003 10.9554 2.54203 10.6084 2.58903C10.4494 2.61053 10.2819 2.71703 10.1734 2.92903C9.98871 3.29095 9.8148 3.65828 9.65192 4.03053C10.3749 4.01053 11.1569 4.00003 12.0019 4.00003C12.8459 4.00003 13.6269 4.01103 14.3499 4.03003M12.0014 6.00003C7.82842 6.00003 5.27542 6.27153 3.84942 6.50653C3.28242 6.60003 2.85442 7.05403 2.78942 7.71603C2.37992 11.8795 2.37992 15.6205 2.78942 19.784C2.85442 20.446 3.28242 20.9 3.84942 20.9935C5.27542 21.2285 7.82842 21.5 12.0009 21.5C16.1734 21.5 18.7264 21.2285 20.1529 20.9935C20.7194 20.9 21.1479 20.446 21.2129 19.784C21.6224 15.6205 21.6224 11.8795 21.2129 7.71603C21.1479 7.05403 20.7194 6.60003 20.1529 6.50653C18.7269 6.27153 16.1744 6.00003 12.0014 6.00003ZM12.0009 8.25003C11.5009 8.25003 11.0974 8.28203 10.7834 8.32503C10.0269 8.42703 9.58542 9.07403 9.56092 9.74253C9.54742 10.1125 9.53242 10.6175 9.52092 11.27C8.86842 11.2815 8.36342 11.2965 7.99342 11.31C7.32492 11.3345 6.67792 11.776 6.57542 12.5325C6.52308 12.9362 6.49819 13.343 6.50092 13.75C6.50092 14.25 6.53292 14.6535 6.57592 14.9675C6.67792 15.724 7.32492 16.1655 7.99342 16.19C8.36342 16.2035 8.86842 16.2185 9.52092 16.23C9.53242 16.8825 9.54742 17.3875 9.56092 17.7575C9.58542 18.4265 10.0269 19.073 10.7834 19.1755C11.0974 19.218 11.5004 19.25 12.0009 19.25C12.5009 19.25 12.9044 19.218 13.2184 19.175C13.9749 19.073 14.4164 18.426 14.4409 17.7575C14.4544 17.3875 14.4694 16.8825 14.4809 16.23C15.1334 16.2185 15.6384 16.2035 16.0084 16.19C16.6774 16.1655 17.3239 15.724 17.4264 14.9675C17.4689 14.6535 17.5009 14.2505 17.5009 13.75C17.5009 13.25 17.4689 12.8465 17.4259 12.5325C17.3239 11.776 16.6769 11.3345 16.0084 11.31C15.6384 11.2965 15.1334 11.2815 14.4809 11.27C14.4723 10.7608 14.459 10.2516 14.4409 9.74253C14.4164 9.07403 13.9749 8.42703 13.2184 8.32453C12.8147 8.27219 12.408 8.2473 12.0009 8.25003Z" fill="#0F172A"/>
                </g>
                <defs>
                  <clipPath id="clip_card2_mobile">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span style={{ position: 'absolute', left: '64px', top: '16px', fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', lineHeight: '15px', color: '#0F172A' }}>Easy Appointment Booking</span>
          </div>

        </div>

      </div>

    </section>
  )
}