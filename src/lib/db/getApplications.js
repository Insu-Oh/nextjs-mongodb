import { getMongoDb } from "../connectToDB"

export default async function getApplications() {
  const db = await getMongoDb();
  const collection = db.collection("current_applications");

  const result = collection.find({}).toArray();
  return result;
}