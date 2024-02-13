import { getApplicationsByPage } from '@/lib/db/action';
import{ getApplications, getTotalApplication } from '@/lib/db/getApplications';
import LoadMore from '../components/LoadMore';

const getData = async () => {
  const applications = await getApplications();

  return applications;
}

export default async function page() {
  const totalCount = await getTotalApplication();
  const data = await getApplicationsByPage(1);

  return (
    <div>
      <h1>Your data!!</h1>
      <ul>
        {data}
        <LoadMore totalPage={totalCount / 50}/>
      </ul>
    </div>
  )
}