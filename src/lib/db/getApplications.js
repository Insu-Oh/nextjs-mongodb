import { getMongoDb } from "../connectToDB"

export async function getApplications() {
  const db = await getMongoDb();
  const collection = db.collection("current_applications");

  const result = await collection.find({}).toArray();
  return result;
}

export async function getTotalApplication() {
  const db = await getMongoDb();
  const collection = db.collection('current_applications')

  const totalCount = await collection.count();
  return totalCount;
}
