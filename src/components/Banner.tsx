"use client"

import { cn } from "@/app/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { JSX } from "react"

type BannerProps = {
  title?: string
  subtitleButton?: JSX.Element
  subtitle?: string
  image: string
  style?: string
}

export function Banner({
  title,
  subtitle,
  subtitleButton,
  image,
  style,
}: BannerProps) {
  const pathname = usePathname()
  return (
    <div
      className={`w-full flex justify-center relative shadow-2xl px-4 ${style}`}
    >
      <Image
        src={image}
        width={1240}
        height={1240}
        alt="My Image"
        className={cn(
          "h-full object-cover lg:object-center object-bottom w-full absolute",
          style
        )}
      />
      <div
        className={cn("absolute inset-0 bg-black opacity-40 h-full", style)}
      ></div>
      <div
        className={cn(
          "max-w-lg font-helvetica md:max-w-5xl h-full pt-[150px] flex flex-col justify-center items-center z-40",
          pathname === "/" && "md:pt-[300px]"
        )}
      >
        <h1 className="z-50 text-white font-black font-playwrite text-3xl md:text-5xl text-center">
          {title}
        </h1>
        <p className="z-50 text-white font-raleway font-bold text-lg md:text-2xl pt-4 text-center">
          {subtitle}
        </p>
        <div className="pt-8 font-raleway">{subtitleButton}</div>
        {pathname === "/" && (
          <>
            <div className="z-40 flex flex-col justify-center items-center ">
              <div className="lg:flex md:pb-10 hidden">
                <Image
                  src="/assets/images/BBBlogo.png"
                  alt="BBB Logo"
                  width={180}
                  height={120}
                  className="pt-0 mt-4 justify-items-center"
                />
                <Image
                  src="/assets/images/KYproud.png"
                  alt="KY Proud Logo"
                  width={180}
                  height={100}
                  className="justify-items-center invert brightness-0 transition"
                />
              </div>
              <div className="absolute bottom-0 flex flex-col justify-center items-center">
                <p className="text-white font-raleway my-10 font-semibold text-xl md:text-3xl">
                  See What's In Stock!
                </p>
                <Image
                  src="/assets/images/Arrow.svg"
                  alt="Arrow Down"
                  width={56}
                  height={80}
                  className=" animate-bounce pb-4"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
