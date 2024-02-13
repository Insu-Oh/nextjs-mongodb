import getApplications from '@/lib/db/getApplications';

const getData = async () => {
  const applications = await getApplications();

  console.log(applications);
  return applications;
}

export default async function page() {
  const applications = await getData()
  return (
    <div>
      <h1>Your data!!</h1>
      {/* {data.map(item => (
        <div key={item._id}>{item.speciality_name}</div>
      ))} */}
    </div>
  )
}