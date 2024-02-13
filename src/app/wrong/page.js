import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {}; 

if (!process.env.MONGODB_URI) {
  throw new Error("Please add you Mongo URI to .env.local")
}

async function getData() {
  try {
    const mongoClient = await (new MongoClient(uri, options)).connect();
    console.log("Just connected!");
    const db = mongoClient.db("test");
    const collection = db.collection('current_applications');
    const result = await collection.find({}).toArray();
   
    console.log(result)
    return result;
  } catch(e) {
    return e;
  }
}

export default async function page() {
  const data = await getData()
  return (
    <div>
      <h1>Your data!!</h1>
      {data.map(item => (
        <div key={item._id}>{item.speciality_name}</div>
      ))}
    </div>
  )
}