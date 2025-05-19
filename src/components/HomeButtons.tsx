import Link from "next/link"
import { Button } from "./ui/button"

export function HomeButtons() {
  return (
    <>
      <div className="flex">
        <div className="border-b-2 border-r-2 px-6 py-4 mt-4 z-60">
          <Link href="/about">
            <Button
              variant={"outline"}
              size={"lg"}
              className="bg-transparent text-lg text-white"
            >
              About Us
            </Button>
          </Link>
        </div>
        <div className="border-b-2 px-6 py-4 mt-4 z-60">
          <Link href="/contact">
            <Button
              variant={"outline"}
              size={"lg"}
              className="bg-transparent text-lg text-white"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
