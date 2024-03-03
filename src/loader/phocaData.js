import pb from '@/api/pocketbase';

export default async function phocaData() {
  return await pb.collection('groups').getFullList({
    expand: 'photoCards',
  });
}
