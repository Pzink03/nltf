import { Banner } from "@/components/Banner"
import { HomeButtons } from "@/components/HomeButtons"
import { OurPromiseCards } from "@/components/OurPromiseCards"
import { ServiceCard } from "@/components/ServiceCard"
import SpringCollageInfo from "@/components/SpringCollageInfo"
import { Handshake, Leaf, Sprout } from "lucide-react"

export default function Home() {
  return (
    <>
      <Banner
        title="Welcome to Nelson Lee Tree Farm"
        style="min-h-screen"
        image="/assets/images/MainPic.png"
        subtitleButton={<HomeButtons />}
        subtitle="At Nelson Lee Tree Farm, we believe in cultivating more than just trees and plants. As a family-owned and operated farm, we take pride in providing trees, plants, bulk mulch, and topsoil with a commitment to sustainability and honesty. Whether you're a passionate gardener, a professional landscaper, or a homeowner looking to enhance your space, we’re here to help you grow."
      />
      <div className="flex bg-stone-100 flex-col justify-center items-center">
        <SpringCollageInfo />
        <h1 className="mt-24 md:pb-10 font-semibold text-center text-2xl md:text-3xl font-playwrite">
          Please, be sure to call to check on current availability and pricing!
        </h1>
        <ServiceCard />
        <h1 className="text-center md:text-4xl font-semibold text-2xl border-primary-green border-b-4 pb-2 font-playwrite">
          Our Promise
        </h1>
        <div className="w-full md:px-10">
          <OurPromiseCards
            image={"/assets/images/Sustainability.JPG"}
            title={"Sustainability First"}
            icon={<Sprout size={60} color="green" />}
            cardInfo={
              "We prioritize eco-friendly practices, ensuring that every tree and plant we grow supports a healthier environment."
            }
          />
          <OurPromiseCards
            image={"/assets/images/Hydrangea1.jpg"}
            title={"Passion for Green"}
            icon={<Leaf size={60} color="green" />}
            cardInfo={
              "We’re dedicated to our craft, bringing years of knowledge and passion to every product we offer."
            }
            style={true}
          />
          <OurPromiseCards
            image={"/assets/images/Plants.jpg"}
            title={"Honest Service"}
            icon={<Handshake size={60} color="green" />}
            cardInfo={
              "You can trust us to provide the highest quality and most reliable service, with transparency and integrity at every step. "
            }
          />
        </div>
      </div>
    </>
  )
}
