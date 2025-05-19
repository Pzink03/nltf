import Link from "next/link"
import { Button } from "./ui/button"

const serviceCardInfo = [
  {
    id: 112345135,
    title: "Evergreen Shrubs, Groundcovers & Grasses:",
    image: "/assets/images/ServiceCardImage1.jpg",
    items: (
      <ul className="w-96 h-auto font-raleway md:px-4 px-8 pt-4 list-disc flex justify-start flex-col gap-y-2 font-roboto">
        {/* <p className="text-center  text-xl font-semibold pb-2 font-playfair">Sub Title:</p> */}
        <li className="text-lg ">Taxus - Dark Green Spreader</li>
        <li className="text-lg ">Juniper Blue Rug</li>
        <li className="text-lg ">Juniper Blue Star</li>
        <li className="text-lg ">Juniper Grey Owl</li>
        <li className="text-lg ">Juniper Sea Green</li>
        <li className="text-lg ">Lemon Thread Cypress</li>
        <li className="text-lg">Gold Mop Cypress</li>
        <li className="text-lg">Gracillimus Maiden Grass</li>
        <li className="text-lg">Karl Forester Feather Grass</li>
        <li className="text-lg">Adaijo Maiden Grass</li>
        <li className="text-lg">White Pampas</li>
        <li className="text-lg">Pink Pampas</li>
      </ul>
    ),
  },
  {
    id: 2123123,
    title: "Evergreen Trees, Conifers, and Deciduous Trees",
    image: "/assets/images/ServiceCardImage2.jpg",
    items: (
      <ul className="w-96 h-auto font-raleway list-disc md:px-4 px-8 flex flex-col gap-y-2 font-roboto">
        <p className="text-center font-playwrite font-semibold text-2xl underline pb-4"></p>
        <li className="text-lg ">Norway Spruce</li>
        <li className="text-lg ">White Spruce</li>
        <li className="text-lg ">Black Hills Spruce</li>
        <li className="text-lg ">Colorado Blue Spruce</li>
        <li className="text-lg ">Canaan Fir</li>
        <li className="text-lg ">
          Aborvitaes: Green Giants, Emerald Green, Blue Point Junipers
        </li>
        <h1 className="text-center font-semibold text-2xl underline font-playwrite pb-4">
          Deciduous Trees
        </h1>
        <li className="text-lg ">October Glory</li>
        <li className="text-lg ">Autumn Blaze</li>
        <li className="text-lg ">Red Maple</li>
        <li className="text-lg ">Sun Valley Maple</li>
        <li className="text-lg ">Japanese Bloodgood</li>
        <li className="text-lg ">Purple Leaf Plum</li>
        <li className="text-lg ">Okame Cherry</li>
        <li className="text-lg ">Akebono</li>
        <li className="text-lg ">Red Oak</li>
        <li className="text-lg ">Willow Oak</li>
        <li className="text-lg ">Burr Oak</li>
        <li className="text-lg ">Bald Cypress</li>
        <li className="text-lg ">Katsura Tree</li>
        <li className="text-lg ">Magnolias: Bracken Brown, Sweetbay, Jane</li>
        <li className="text-lg ">Weeping Willow</li>
        <li className="text-lg ">Corkscrew Willow</li>
        <li className="text-lg ">Cleveland Select Pear</li>
        <li className="text-lg ">Dogwoods</li>
      </ul>
    ),
  },
  {
    id: 32131,
    title: "Shrubs",
    image: "/assets/images/GalleryImage15.jpg",
    items: (
      <ul className="w-80 h-auto list-disc font-raleway flex pt-4 flex-col gap-y-2 font-roboto">
        {/* <p className="text-center text-xl font-semibold pb-2 font-playfair">Sub Title</p> */}
        <li className="text-lg ">Barberry</li>
        <li className="text-lg ">Boxwoods</li>
        <li className="text-lg ">Spirea</li>
        <li className="text-lg ">
          Hydrangeas: Anabelles, Incrediballs, Limelights, Little Limes, Quick
          Fires, Endless Summer...
        </li>
        <li className="text-lg ">Holly's</li>
        <li className="text-lg ">Viburnum</li>
        <li className="text-lg">Dappled Willow</li>
        <li className="text-lg">Burning Bush</li>
      </ul>
    ),
  },
]

export function ServiceCard() {
  return (
    <>
      <section className="md:p-4 flex justify-center w-full">
        <div className="flex flex-col max-w-screen-xl lg:flex-row justify-center w-full">
          <ul className="grid lg:grid-cols-3 ">
            {serviceCardInfo.map((info) => (
              <li
                className="flex flex-col h-auto justify-start odd:my-36 border-2 rounded items-center py-4 bg-secondary-green"
                key={info.id}
              >
                <div className="font-medium text-2xl p-2 font-playfair text-center">
                  {info.title}
                </div>
                <img
                  className=" w-96 h-80 object-cover object-center rounded border-2 border-primary-green p-1"
                  src={info.image}
                  alt=""
                />
                {info.items}
                <Link href="/pricing" className="mt-auto pt-4">
                  <Button className="bg-secondary-darkgreen hover:scale-110 transition ease-in-out">
                    See prices and availability
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
