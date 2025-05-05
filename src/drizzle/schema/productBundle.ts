import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core"
import { ProductTable } from "./product"
import { BundleTable } from "./bundle"
import { createdAt, updatedAt } from "../schemaHelpers"
import { relations } from "drizzle-orm"

export const ProductBundleTable = pgTable(
  "course_products",
  {
    productId: uuid()
      .notNull()
      .references(() => ProductTable.id, { onDelete: "restrict" }),
    bundleId: uuid()
      .notNull()
      .references(() => BundleTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
  },
  (t) => [primaryKey({ columns: [t.productId, t.bundleId] })]
)

export const ProductBunldeRelationships = relations(
  ProductBundleTable,
  ({ one }) => ({
    product: one(ProductTable, {
      fields: [ProductBundleTable.productId],
      references: [ProductTable.id],
    }),
    bundle: one(BundleTable, {
      fields: [ProductBundleTable.productId],
      references: [BundleTable.id],
    }),
  })
)
