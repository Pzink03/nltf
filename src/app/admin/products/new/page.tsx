import CourseForm from "@/components/CourseForm"
import PageHeader from "@/components/PageHeader"

export default function NewProductPage() {
  return (
    <div className="container pt-44">
      <PageHeader title="New Product" />
      <CourseForm />
    </div>
  )
}
