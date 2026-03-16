export default function HeroHeading() {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[38px] px-4 py-8 md:py-14">
      
      {/* Title Block */}
      <div className="flex flex-col items-center justify-center text-center gap-1">
        
        {/* Line 1: "Everything You Need" */}
        <h1 className="font-bold text-[#0F172A] leading-tight
          text-[28px]
          sm:text-4xl
          md:text-5xl
          lg:text-[58px] lg:leading-[70px]">
          Everything You Need
        </h1>

        {/* Line 2: "for Better Health" — gradient */}
        <h1
          className="font-bold leading-tight bg-clip-text text-transparent
            text-[28px]
            sm:text-4xl
            md:text-5xl
            lg:text-[58px] lg:leading-[70px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #0DA1E5 0%, #A63FCD 71.61%, #9C3ED5 100%)",
          }}
        >
          for Better Health
        </h1>
      </div>

      {/* Body Text */}
      <p className="font-normal text-[#5B697E] text-center
        text-[14px] leading-[22px] max-w-[300px]
        sm:text-base sm:leading-relaxed sm:max-w-[420px]
        md:text-lg md:max-w-[560px]
        lg:text-[24px] lg:leading-[29px] lg:max-w-[646px]">
        Our platform combines cutting-edge{" "}
        <span className="text-[#0DA1E5] font-bold">AI technology</span>{" "}
        with experienced healthcare professionals to provide comprehensive care.
      </p>

    </section>
  );
}