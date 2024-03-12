import pb from '@/api/pocketbase';

export default async function likeData() {
  return await pb.collection('groups').getFullList({
    expand: 'photoCards',
  });
}
