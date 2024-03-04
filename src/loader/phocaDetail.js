import pb from '@/api/pocketbase';

export default async function detailData({ params }) {
  const { id } = params;
  const value = await pb.collection('photoCards').getOne(id);
  return value;
}
