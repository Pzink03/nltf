import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"

export const ICON_LINKS = [
  {
    id: 1,
    child: (
      <>
        <HiOutlineMail />
      </>
    ),

    text: "Nelsonleetreefarm@gmail.com",
    href: "mailto:Nelsonleetreefarm@gmail.com",
  },
  {
    id: 2,
    child: (
      <>
        <FaPhone />
      </>
    ),
    style: "",
    text: "859-433-0095",
    href: "tel:859 433 0095",
  },
  {
    id: 3,
    child: (
      <>
        <FaLocationDot />
      </>
    ),
    style: "",
    text: "10125 Troy Pike, Versailles KY, 40383",
    href: "https://www.google.com/maps/place/10125+Troy+Pike,+Versailles,+KY+40383/@37.9189441,-84.700309,17z/data=!3m1!4b1!4m6!3m5!1s0x884263b35698f469:0xdd9d3cb53261b2ab!8m2!3d37.9189441!4d-84.700309!16s%2Fg%2F11whf_cvjf?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D",
  },
]
