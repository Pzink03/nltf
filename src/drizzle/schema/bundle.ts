import { relations } from "drizzle-orm"
import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core"
import { createdAt, id, updatedAt } from "../schemaHelpers"

export const bundleStatuses = ["public", "private"] as const
export type BundleStatuses = (typeof bundleStatuses)[number]
export const bundleStatusEnum = pgEnum("bundle_status", bundleStatuses)

export const BundleTable = pgTable("bundles", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  imageUrl: text().notNull(),
  priceInDollars: integer().notNull(),
  status: bundleStatusEnum().notNull().default("private"),
  createdAt,
  updatedAt,
})

export const CourseRelationships = relations(ProductTable, ({ one, many }) => ({
  test: one(),
}))
