import { Client, Databases } from "appwrite"

const client = new Client()

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Setzen Sie hier Ihre Appwrite-Endpoint-URL ein
  .setProject("67cb075100288857cc02")

export const databases = new Databases(client)

export const DATABASE_ID = "67cb076b00365e81d70e"
export const COLLECTION_ID = "67cb077600144b746d2c"

