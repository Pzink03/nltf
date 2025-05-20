import { Banner } from "@/components/Banner"
import { Faq } from "@/components/Faq"
import Image from "next/image"

export default function About() {
  return (
    <>
      <Banner
        title={"Family Owned and Operated"}
        image="/assets/images/MainPic.png"
        subtitle="Nelson Lee Tree Farm is rooted in Kentucky, providing trees and plants that thrive in our climate. As a family-owned business, we’re passionate about nurturing the environment and helping our community grow. Our sustainable practices ensure that every tree, plant, and product we offer not only beautifies your space but also contributes to a greener, healthier world."
      />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-7xl">
          <div className=" md:max-w-7xl w-full px-4 flex items-center justify-start pb-10">
            <div className="gap-10 mt-10 flex flex-col bg-secondary-green md:p-10 p-4 lg:flex-row max-w-7xl items-center lg:items-center">
              <Image
                src="/assets/images/AboutImg.JPG"
                alt="About Image"
                width={350}
                height={450}
                className=" object-cover object-top rounded"
              />
              <div>
                <div className="flex flex-col justify-center text-center items-center lg:items-start">
                  <header className="text-3xl font-playwrite font-base border-b-4 border-primary-green pb-1 mb-4">
                    Meet the Owners
                  </header>
                  <p className=" pt-10 font-raleway text-center  lg:text-left text-xl ">
                    The owners/managers of Nelson Lee Tree Farm, LLC are local,
                    originally from Lexington, Kentucky, eventually
                    transplanting to Southern Woodford County where they now
                    find themselves deeply rooted on a 30+ acre farm on the
                    corner of Troy Pike (Hwy 33) and Cummins Ferry Road.
                    <br></br>
                    <br></br>
                    What began as a dream, a vision, lots of prayer, moments of
                    uncertainty and admittedly some doubt, the tree farm turned
                    into a reality with lots of hard work and the blessings of
                    God!
                    <br></br>
                    <br></br>
                    The owner has worked in a few of the local garden centers
                    over the years and on his previous mini-farm, planted and
                    maintained various trees and shrubs while managing vegetable
                    gardens with modest success. This tree farm is a new kind of
                    business, but he has significant experience in other
                    business ventures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-11 pb-2 text-center border-b-4 border-primary-green md:text-3xl text-xl font-medium">
          Frequently Asked Questions
        </h1>
        <Faq />
        <p className="max-w-5xl font-helvetica text-center text-base py-10 md:px-20 px-4">
          The owners of Nelson Lee Tree Farm have been avid supporters of the
          Lexington Rescue Mission since 2002, therefore Nelson Lee Tree Farm
          will direct a percentage of their profits to the Rescue Mission and
          their respective ministries!
        </p>
      </div>
    </>
  )
}
