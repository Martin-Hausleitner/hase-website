import { redirect } from "next/navigation"

export default function FeaturesPage() {
  // Redirect to the features section on the home page
  redirect("/#features")
}