import { HandshakeIcon, NotebookPenIcon, TreePine } from "lucide-react"
import { TbGardenCart, TbTruckDelivery } from "react-icons/tb"

const frequentlyAskedQuestions = [
  {
    id: 1,
    title: "Do you offer delivery?",
    response: (
      <>
        <p>
          we hope to provide delivery in the near future. ( I hope Santa brings
          me a new box truck this year 😁).
        </p>
        <p>
          But seriously, special circumstances, larger orders could be
          considered for delivery, the delivery would be an additional cost and
          covered by the customer.
        </p>
      </>
    ),
    child: (
      <>
        <TbTruckDelivery size={70} color="orange" />
      </>
    ),
  },
  {
    id: 2,
    title: "What types of trees and plants do you offer?",
    response:
      "We specialize in trees and plants that are well-suited for our local climate. Whether you’re looking for shade trees, ornamental plants, or native species, we have something for every garden or landscape.",
    child: (
      <>
        <TreePine size={70} color="green" />
      </>
    ),
  },
  {
    id: 3,
    title: "How do you ensure sustainability in your practices?",
    response:
      "We follow eco-friendly practices such as water conservation, using organic fertilizers, and promoting biodiversity. We’re committed to reducing our environmental footprint while providing top-quality products.",
    child: (
      <>
        <HandshakeIcon size={70} color="black" />
      </>
    ),
  },
  {
    id: 4,
    title: "Can you help with landscaping advice?",
    response:
      "Sure, we can help in several ways: Plant or Tree selection based on the USDA Plant Hardiness Zone Map Kentucky falls into zones 6 or 7 depending on location. Additional information from customers helps us direct them to the proper plant: ",
    subresponse: (
      <ul className="list-disc px-6">
        <li>Type of plant or tree desired.</li>
        <li>
          Location of where to plant on their property: full sun, partial
          sun/shade…etc!
        </li>
        <li>Best time to plant, water, fertilize…etc!</li>
        <li>Companion plants</li>
        <li>
          For more critical issues, insect damage, diseases, plant stress…we
          recommend customers to consider contacting their respective local
          county extension offices for soil testing and insect or disease
          identification.
        </li>
        <li>We always recommend soil testing prior to planting!</li>
      </ul>
    ),
    child: (
      <>
        <TbGardenCart size={70} color="red" />
      </>
    ),
  },
  {
    id: 5,
    title: "How can I place an order?",
    response:
      "You can place an order by contacting us directly at our farm, via phone, or email. We’re here to make the process as easy as possible.",
    child: (
      <>
        <NotebookPenIcon size={70} color="blue" />
      </>
    ),
  },
]

export function Faq() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] w-full md:max-w-6xl">
      {frequentlyAskedQuestions.map((question) => (
        <li
          key={question.id}
          className="py-10 md:p-10 gap-2 border-b-2 odd:border-r-2 flex flex-col justify-start items-center"
        >
          <div className=" rounded-full p-4">{question.child}</div>
          <h1 className="text-2xl font-playwrite text-center font-semibold">
            {question.title}
          </h1>
          <div className="text-lg text-gray-500 font-raleway ">
            {question.response}
          </div>
          <div className="text-lg text-gray-500 font-raleway ">
            {question.subresponse}
          </div>
        </li>
      ))}
    </ul>
  )
}
