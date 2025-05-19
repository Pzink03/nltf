"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { TiSocialFacebookCircular } from "react-icons/ti"

export default function ConsumerLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

function NavBar() {
  const [nav, setNav] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const links = [
    {
      id: 1,
      link: "/",
      title: "home",
    },
    {
      id: 2,
      link: "/about",
      title: "about",
    },
    {
      id: 23,
      link: "/gallery",
      title: "gallery",
    },
    {
      id: 4,
      link: "/contact",
      title: "contact",
    },
    // {
    //   id: 5,
    //   link: "/christmasPage",
    //   title: "More Than A Christmas Tree!"
    // },
    // {
    //   id: 6,
    //   link: "/specialEvents",
    //   title: "Special Events"
    // },
    {
      id: 7,
      link: "/products",
      title: "Pricing & Availability",
    },
  ]
  return (
    <div className="flex font-helvetica justify-between z-50 shadow-lg items-center w-full h-24 text-primary-green bg-secondary-green fixed pr-2 ">
      <div className="w-20 h-20 lg:hidden">
        <img src="/assets/images/TreeFarmLogo.jpg" alt="Logo" className="" />
      </div>
      <div className="w-24 h-24 hidden lg:flex ">
        <img src="/assets/images/TreeFarmLogo.jpg" alt="Logo" className="" />
      </div>

      <div className="flex ">
        <ul className="hidden text-primary-green lg:flex gap-4">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="p-2 cursor-pointer capitalize font-bold text-lg hover:text-gray-400"
            >
              <Link onClick={() => setIsActive(!isActive)} href={`${link}`}>
                {title}
              </Link>
            </li>
          ))}
          {/* <DropDown /> */}
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-10 z-50 lg:hidden"
      >
        {nav ? (
          <FaTimes size={30} />
        ) : (
          <FaBars size={30} style={{ color: "#4E7B5E" }} />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center z-70 items-center absolute p-10 top-0 left-0 w-full h-screen bg-secondary-green">
          <img
            src="/assets/images/Treefarmlogo2.svg"
            alt="Logo"
            className="w-56 h-56 mb-6 ml-3"
          />
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl"
            >
              <div onClick={() => setNav(false)}>
                <Link
                  href={`${link}`}
                  className={`${
                    location.pathname === `${link}`
                      ? "text-secondary-darkgreen border-b-4 border-secondary-darkgreen"
                      : ""
                  }`}
                >
                  {title}
                </Link>
              </div>
            </li>
          ))}
          {/* <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
          <div
                onClick={() => setNav(false)}
              >
                <Link to='/services' className={`${location.pathname === '/services' ? 'text-blue-500 border-b-4': ''}`}>
                Services
              </Link>
              </div>
          </li> */}
        </ul>
      )}
      {/* { isOpen && (
        <div className="bg-white p-4 w-52 absolute top-16 right-10">
          <Link>Services</Link>
            <ul>
                {menus.map((menu) => (
                    <li onClick={() => setIsOpen(false)} className="p-2 text-lg cursor-pointer rounded" key={menu}>{menu}</li>
                ))}
            </ul>
        </div>
        )} */}
    </div>
  )
}

function Footer() {
  return (
    <div className="w-full h-full py-6 bg-secondary-green">
      <div className=" ">
        <p className=" font-playwrite text-xl text-center font-semibold text-black">
          Still have questions? Don't hesitate to get in contact with us
        </p>
        <div className="flex flex-col md:flex-row md:items-start justify-center items-center gap-4 md:gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/assets/images/Treefarmlogo2.svg"
              className="w-64 h-auto md:pl-12"
            />
            <div className="flex">
              <img
                src="/assets/images/BBBlogo.png"
                className="w-44 h-28 pt-6 justify-items-center"
              />
              <img
                src="/assets/images/KYproud.png "
                className="w-56 h-32 justify-items-center bg-transparent"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
            <div className="flex flex-col text-black text-lg items-center justify-center">
              <h1 className="text-xl text-black font-semibold border-b-4 border-primary-green px-4 pb-1 mb-1 font-playwrite ">
                Contacts
              </h1>
              <p className=" font-raleway px-2 black font-medium">
                Phone: (859) 300-1249 | (859) 433-0095
              </p>
              <p className=" font-raleway px-2 black font-medium">
                Email: Nelsonleetreefarm@gmail.com
              </p>
              <p className=" font-raleway px-2 black font-medium">
                Address: 10125 Troy Pike, Versailles KY, 40383{" "}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 text-sm">
              <header className="text-xl font-playwrite text-black font-semibold ">
                Follow Us:
              </header>
              <a href="/" className="z-40">
                <p className="text-white flex justify-center items-center">
                  <TiSocialFacebookCircular color="black" size={70} />
                </p>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-col text-sm pt-4">
            <header className="text-xl font-playwrite text-center text-black border-primary-green font-semibold border-b-4 px-4 pb-1 mb-1 ">
              Current Store Hours
            </header>
            <ul className="flex flex-col justify-center text-black  text-lg items-center gap-2">
              <li className="flex gap-2 items-center justify-center">
                <p className="font-raleway px-2 black font-medium">Monday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-8 pl-4 font-medium font-raleway">
                  Closed (Call if you need to make an appointment. We are on the
                  property.)
                </p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className="font-raleway px-2 black font-medium">Tuesday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-8 pl-4 font-medium font-raleway">
                  Closed (Call if you need to make an appointment. We are on the
                  property.)
                </p>
              </li>
              <li className="flex gap-2 items-center  justify-center">
                <p className="font-raleway px-2 black font-medium">Wednesday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className=" font-medium font-raleway pr-8">
                  10:00am - 5:00pm
                </p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className="font-raleway px-2 black font-medium">Thursday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-8 pl-4 font-medium font-raleway">
                  10:00am - 5:00pm
                </p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className=" pr-3 font-raleway font-medium">Friday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="pl-4 font-medium font-raleway">
                  10:00am - 5:00pm
                </p>
              </li>
              <li className="flex gap-2 items-center justify-center">
                <p className="px-2 font-raleway font-medium">Saturday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className=" px-8 pl-4 font-medium font-raleway">
                  10:00am - 5:00pm
                </p>
              </li>
              <li className="flex  gap-2 items-center justify-center">
                <p className="px-2 font-raleway font-medium">Sunday</p>
                <div className="pt-2 border-b border-black w-6"></div>
                <p className="px-9 font-medium font-raleway">1:00pm - 5:00pm</p>
              </li>
              <p className="text-base text-center font-medium text-red-500">
                Hours subject to change based on Seasonal times & conditions!
              </p>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-5 px-2 flex-col text-sm pt-4">
            <header className="text-xl font-playwrite  text-black border-primary-green font-semibold border-b-4 px-4 pb-1">
              Quick Links
            </header>
            <Link className="text-black text-lg font-raleway" href="/">
              Home
            </Link>
            <Link className="text-black text-lg font-raleway" href="/contact">
              Contact
            </Link>
            <Link className="text-black text-lg font-raleway" href="/about">
              About
            </Link>
            <Link className="text-black text-lg font-raleway" href="/gallery">
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
