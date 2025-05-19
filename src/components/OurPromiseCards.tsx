import { cn } from "@/lib/utils"

type PromiseCardsProps = {
  image: string
  title: string
  cardInfo: string
  icon: React.ReactNode
  style?: boolean
}

export function OurPromiseCards({
  image,
  title,
  icon,
  cardInfo,
  style,
}: PromiseCardsProps) {
  return (
    <div
      className={cn(
        "w-full px-4 flex items-center justify-start pb-10",
        style && "items-end justify-end"
      )}
    >
      <div
        className={cn(
          "gap-10 flex flex-col bg-gray-100 shadow-md md:p-2 p-4 lg:flex-row max-w-6xl items-center lg:items-center",
          style && "lg:flex-row-reverse bg-secondary-green"
        )}
      >
        <img
          src={image}
          className=" w-[550px] h-[350px] object-cover object-top rounded"
        />
        <div>
          <div className="flex flex-col p-2 justify-center text-center items-center lg:items-center">
            <div className="px-2 mb-8">{icon}</div>
            <h1 className="md:text-2xl font-playwrite text-xl  font-semibold border-b-2 text-center mb-2">
              {title}
            </h1>
            <p className=" pt-10 font-raleway text-center text-lg ">
              {cardInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
