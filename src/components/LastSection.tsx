export default function CTABanner() {
  return (
    <section className="w-full flex justify-center px-4 py-8">
      <div
        className="w-full flex items-center justify-center rounded-[25px]"
        style={{
          maxWidth: "1064px",
          height: "250px",
          background: "linear-gradient(89.99deg, #0F172A 43.14%, #0DA1E5 99.99%)",
        }}
      >
        <div className="flex flex-col items-center gap-3" style={{ width: "460px", maxWidth: "100%" }}>

          <h2
            className="font-bold text-white text-center"
            style={{ fontSize: "24px", lineHeight: "30px", maxWidth: "420px" }}
          >
            Get the Care You Need, When You Need It
          </h2>

          <p
            className="font-normal text-white text-center"
            style={{ fontSize: "13px", lineHeight: "17px" }}
          >
            Connect with certified doctors, manage your health records, and receive trusted medical care all from one secure platform.
          </p>

          <button
            className="flex items-center justify-center font-medium text-[#0F172A] rounded-[28px] transition-opacity hover:opacity-90"
            style={{
              padding: "6px 12px",
              width: "110px",
              height: "32px",
              fontSize: "15px",
              lineHeight: "20px",
              background: "linear-gradient(91.05deg, #FFFFFF 8.82%, #C1C6C8 79.38%)",
            }}
          >
            Get Started
          </button>

        </div>
      </div>
    </section>
  );
}