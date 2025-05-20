import { Banner } from "@/components/Banner"
import Image from "next/image"
import Link from "next/link"
import { TiSocialFacebookCircular } from "react-icons/ti"

const companyInfo = [
  {
    address: {
      title: "Address",
      info: "10125 Troy Pike, Versailles KY, 40383",
    },
    contact: {
      title: "Contact",
      phone: "(859) 300-1249 | (859) 433-0095",
      email: "Nelsonleetreefarm@gmail.com",
    },
    hoursOfOperation: [
      {
        id: 1,
        day: "Monday",
        hours: "Closed (Call to make an appointment)",
      },
      {
        id: 2,
        day: "Tuesday",
        hours: "Closed (Call to make an appointment)",
      },
      {
        id: 3,
        day: "Wednesday",
        hours: "10:00am - 5:00pm",
      },
      {
        id: 4,
        day: "Thursday",
        hours: "10:00am - 5:00pm",
      },
      {
        id: 5,
        day: "Friday",
        hours: "10:00am - 5:00pm",
      },
      {
        id: 6,
        day: "Saturday",
        hours: "10:00am - 5:00pm",
      },
      {
        id: 7,
        day: "Sunday",
        hours: "1:00pm - 5:00pm",
      },
    ],
  },
]

export default function Contact() {
  return (
    <>
      <Banner
        title="Come see us, or give us a call and we will get back to you."
        image="/assets/images/ContactBanner.png"
      />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex items-center justify-center m-10 w-full h-full">
          <div className=" flex flex-col-reverse relative xl:w-5/6 w-full mx- xl:mx-0 h-full ">
            <Image
              src="/assets/images/ContactBackground.png"
              width={1200}
              height={1200}
              className="absolute inset-0 w-full h-full object-cover rounded"
              alt="Contact Background"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded"></div>
            <div className="flex lg:flex-row flex-col justify-center py-10 items-center">
              {/* <div className="flex flex-col justify-center lg:w-6/12 md:w-8/12 w-full px-4 items-center z-50 lg:border-b-0 border-b-2 lg:border-r-2 border-r-0 border-gray-400">
                                <img
                                    src="/assets/images/TreeFarmLogo.jpg"
                                    className="relative z-50 max-w-xs max-h-xs p-4 rounded-full"
                                    alt="Tree Farm Logo"
                                />
                            <form className='flex flex-col xl:w-5/6 w-full gap-y-2 mt-4 z-50'>
                                <input type='text' name='user_name' placeholder='Enter your name' className='p-2 z-50 rounded mt-4 border-gray-300 border-2 text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
                                <input type='text' name='user_email' placeholder='Enter your email' className='rounded z-50 my-4 p-2 border-gray-300 border-2  text-subtext focus:outline-none  hover:border-secondary-pink focus:border-secondary-pink transition duration-300' />
                                <textarea name='message' placeholder='Enter your message' rows={10} className='p-2 z-50 bg-white border-2 border-gray-300 rounded text-subtext focus:outline-none hover:border-secondary-pink focus:border-secondary-pink transition duration-300'></textarea>
                                <button className='text-white bg-gradient-to-b from-gray-300 to-primary-green z-50 px-6 py-3 my-8 mx-auto flex items-center rounded hover:scale-110 duration-300'>
                                Let's Talk
                                </button>
                            </form>
                        </div> */}
              <div className="flex flex-col w-6/12 justify-center items-center z-40 pt-10 lg:pt-0">
                <Link
                  className=" px-4 w-[420px]"
                  href={
                    "https://www.google.com/maps/place/10125+Troy+Pike,+Versailles,+KY+40383/@37.9208116,-84.7060002,17z/data=!4m5!3m4!1s0x884263c2d4e2837b:0xaea619bac66ffc8a!8m2!3d37.92106!4d-84.7007703?entry=ttu"
                  }
                >
                  <Image
                    src="/assets/images/NelsonLeeMap.JPG"
                    alt="Google Map"
                    width={400}
                    height={400}
                    className=" w-full h-full rounded-lg cursor-pointer hover:scale-110 transition"
                  />
                </Link>
                <div className="flex flex-col mt-10">
                  <div className="flex lg:flex-row flex-col  gap-x-10  ">
                    <div className="flex flex-col lg:items-start items-center justify-center text-white z-50">
                      <h1 className="font-playwrite text-2xl">
                        {companyInfo[0]?.address?.title}
                      </h1>
                      <p className="text-lg lg:text-start font-raleway ">
                        {companyInfo[0]?.address?.info}{" "}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-start items-center justify-center text-white z-50">
                      <h1 className="font-playwrite text-2xl">
                        {companyInfo[0]?.contact?.title}
                      </h1>
                      <p className="text-lg lg:text-start text-center font-raleway">
                        Phone: {companyInfo[0]?.contact?.phone}
                      </p>
                      <p className="text-lg lg:text-start text-center whitespace-nowrap font-raleway">
                        Email: {companyInfo[0]?.contact?.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col justify-center gap-x-14 items-center lg:justify-start lg:items-start mt-6">
                    <div className="flex flex-col lg:items-start items-center text-white z-50 justify-center">
                      <h1 className="text-2xl pb-2 font-playwrite">Hours</h1>
                      {companyInfo[0]?.hoursOfOperation?.map(
                        ({ id, day, hours }) => (
                          <p key={id} className="text-lg font-raleway">
                            {day}:{" "}
                            <span className="text-base font-raleway">
                              {hours}
                            </span>
                          </p>
                        )
                      )}
                      <p className="text-lg font-medium text-center md:text-left text-red-500 font-raleway">
                        Hours subject to change based on Seasonal times &
                        conditions!
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-start items-center justify-center pt-4 text-white z-50">
                      <h1 className="text-2xl text-center font-playwrite whitespace-nowrap">
                        Follow Us:
                      </h1>
                      <a href="/">
                        <p className="flex justify-center items-center">
                          <TiSocialFacebookCircular size={70} />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
