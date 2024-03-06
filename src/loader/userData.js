import pb from "@/api/pocketbase";

export default async function userData() {
  return await pb.collection('users').getOne('cuak4ufrqm7s8bi')
}