// "use server"

// import { z } from "zod"
// import { courseSchema } from "../schemas/schema"
// import { redirect } from "next/navigation"

// export async function createProduct(unsafeData: z.infer<typeof courseSchema>) {
//   const { success, data } = courseSchema.safeParse(unsafeData)

//   if (!success) {
//     return { error: true, message: "There was an error creating the product" }
//   }

//   // const product = await insertProduct(data)

//   redirect(`/admin/products/${product.id}/edit`)
// }
