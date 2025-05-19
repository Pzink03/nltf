import { Banner } from "@/components/Banner"
import { ICON_LINKS } from "@/constants/data"

export default function Pricing() {
  return (
    <>
      <Banner
        title="Current Availability and Pricing"
        image="/assets/images/MainPic.png"
        subtitle="All prices and availability are updated regularly, but are subject to change. For most up to date inventory please call."
      />
      <div className="w-full text-2xl">
        <header className="flex flex-col justify-center items-center mt-10 py-4">
          <h1>Nelson Lee Tree Farm</h1>
          <h3 className="border-b-2 border-secondary-darkgreen px-4 pb-1">
            Current Pricing and Availability
          </h3>
          <ul className="flex flex-col md:flex-row justify-center items-start gap-2 text-lg py-2">
            {ICON_LINKS.map(({ id, child, style, text, href }) => (
              <li
                key={id}
                className="hover:bg-secondary-green hover:scale-105 transition rounded-full duration-300 hover:cursor-pointer"
              >
                <a
                  href={href}
                  className={
                    "flex gap-2 items-center justify-center" + " " + style
                  }
                >
                  <p className="text-white flex justify-center items-center bg-secondary-darkgreen rounded-full w-7 h-7 md:w-10 md:h-10">
                    {" "}
                    {child}
                  </p>
                  <p className="px-2 text-black font-medium font-raleway">
                    {text}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </header>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/assets/images/NLTFPricing.JPG"
            className="w-full max-w-5xl h-full"
            alt="pricing"
          />

          <img
            src="/assets/images/NLTFPricing2.JPG"
            alt="pricing2"
            className="w-full max-w-5xl h-full"
          />
        </div>
      </div>
    </>
  )
}
