import pb from '@/api/pocketbase';

export default async function exchangeDetailData({ params }) {
  const { id } = params;
  try {
    const photoCardData = await pb.collection('photoCards').getOne(id, {
      expand: 'exchangeList',
    });

    // const exchangeListId = photoCardData.exchangeList.id;

    // const exchangeListData = await pb
    //   .collection('exchangeList')
    //   .getOne(exchangeListId, {
    //     expand: 'writer',
    //   });

    // const writerData = exchangeListData.writer;
    return photoCardData;
  } catch (error) {
    console.error('Error Loading Data:', error);

    throw error;
  }
}
