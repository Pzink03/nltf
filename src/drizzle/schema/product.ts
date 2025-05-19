import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { createdAt, id, updatedAt } from "../schemaHelpers"
import { ProductBundleTable } from "./productBundle"

export const ProductTable = pgTable("products", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  createdAt,
  updatedAt,
})

export const CourseRelationships = relations(ProductTable, ({ many }) => ({
 productBundle: many(ProductBundleTable),
}))
