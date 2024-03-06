import pb from '@/api/pocketbase';

export default async function exchangeData({ params }) {
  const { id } = params;
  const value = await pb.collection('exchangeList').getOne(id, {
    expand: 'writer',
  });

  return value;
}
