import pb from '@/api/pocketbase';
import { redirect } from 'react-router-dom';

export default async function detailData(param) {
  const value = await pb.collection('photoCards').getOne(param.id);
  console.log(param.id);
  return null;
}
