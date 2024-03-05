// usePhocaDataByLikeCount.js
import { useLoaderData } from 'react-router';

export function usePhocaDataByLikeCount() {
  const phoca = useLoaderData();
  return phoca.reduce((acc, group) => acc.concat(group.expand.photoCards), [])
              .sort((a, b) => b.likeCount - a.likeCount)
              .slice(0, 10);
}

// usePhocaDataByCreated.js
export function usePhocaDataByCreated() {
  const phoca = useLoaderData();
  return phoca.reduce((acc, group) => acc.concat(group.expand.photoCards), [])
              .sort((a, b) => new Date(b.created) - new Date(a.created))
              .slice(0, 10);
}
