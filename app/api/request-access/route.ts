import { NextResponse } from "next/server"
import { Client, Databases, ID } from "appwrite"

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Set your Appwrite endpoint
  .setProject("67cb075100288857cc02")

const databases = new Databases(client)

const DATABASE_ID = "67cb076b00365e81d70e"
const COLLECTION_ID = "67cb077600144b746d2c"

export async function POST(request: Request) {
  try {
    const { name, email, option } = await request.json()

    const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), { name, email, option })

    return NextResponse.json({ success: true, data: response })
  } catch (error) {
    console.error("Error submitting request:", error)
    return NextResponse.json({ success: false, error: "Failed to submit request" }, { status: 500 })
  }
}

