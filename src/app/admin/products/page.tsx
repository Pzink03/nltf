import PageHeader from "@/components/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="container py-44">
      <PageHeader title="Products">
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </PageHeader>
    </div>
  )
}
