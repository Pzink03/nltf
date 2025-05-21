import { db } from "@/drizzle/db"
import { ProductTable } from "@/drizzle/schema"

export async function insertProduct(data: typeof ProductTable.$inferSelect) {
  const [newProduct] = await db.insert(ProductTable).values(data).returning()

  if (newProduct == null) throw new Error("Failed to create Product")

  //   revalidateProductCache(newProduct.id)

  return newProduct
}
