import pb from '@/api/pocketbase';

export default async function biasPhocaData() {
  return await pb.collection('groups').getFullList({
    expand: 'photoCards',
  });
}
