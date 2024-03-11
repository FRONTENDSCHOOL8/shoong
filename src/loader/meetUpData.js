import pb from '@/api/pocketbase';

export default async function meetUpData() {
  return await pb.collection('meetUps').getFullList();
}
