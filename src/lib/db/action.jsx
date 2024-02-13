"use server";

import Card from "@/app/components/Card";
import { getMongoDb } from "../connectToDB";

const MAX_LIMIT = 50;

export async function getApplicationsByPage(page=1) {
  const db = await getMongoDb();
  const collection = db.collection('current_applications');

  
  const result = await collection.find({})
    .skip((page - 1) * MAX_LIMIT)
    .limit(MAX_LIMIT)
    .toArray();

  console.log(`get page(${page})`)

  return result.map((item, index) => (
    <Card key={item._id} item={item} index={index}/>
  ))
}