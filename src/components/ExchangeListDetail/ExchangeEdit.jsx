import pb from '@/api/pocketbase';
import { useState } from 'react';

export default function ExchangeEdit({
  photoCardData,
  exchangeListData,
  setExchangeListData,
}) {
  const [comment, setComment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCancel = () => {
    setComment('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      alert('교환 글 내용을 입력해주세요.');
      return;
    }

    const newExchangeData = {
      writer: 'sg01ds76ccvmji7',
      description: comment,
      status: '교환대기중',
    };

    try {
      // exchangeList에 새로운 교환 글을 추가
      const newRecord = await pb
        .collection('exchangeList')
        .create(newExchangeData);

      // 현재 포토카드의 exchangeList 필드에 새 레코드 ID 추가
      if (newRecord) {
        await pb.collection('photoCards').update(photoCardData.id, {
          'exchangeList+': newRecord.id,
        });
      }

      setExchangeListData([...exchangeListData, newRecord]);
      setComment(''); // 코멘트 초기화
      alert('교환 글이 성공적으로 저장되었습니다.');
    } catch (error) {
      console.error('데이터를 저장하는 중 에러가 발생했습니다:', error);
      alert('데이터를 저장하는 데 실패했습니다.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto overflow-hidden rounded-xl bg-white p-5 shadow-meetUp"
    >
      <fieldset>
        <legend className="sr-only">교환글 작성 폼</legend>
        <div className="flex items-start space-x-4">
          <div className="relative flex-1">
            <label htmlFor="exchangeArticle" className="sr-only">
              교환 글을 입력하세요
            </label>
            <textarea
              id="exchangeArticle"
              name="exchangeArticle"
              className="relative w-full rounded border border-gray-300 p-2 text-sm"
              placeholder="코멘트를 입력하세요"
              rows={3}
              maxLength={150}
              value={comment}
              onChange={handleCommentChange}
              onKeyDown={handleKeyDown}
              aria-required="true"
            ></textarea>
            <span className="absolute bottom-60pxr right-2 text-xs text-gray-500">
              {comment.length}/150
            </span>
            <div className="mt-2 flex items-center justify-end">
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="rounded bg-primary px-4 py-2 text-white transition duration-300 hover:bg-violet-700"
                >
                  저장
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded bg-primary px-4 py-2 text-white transition duration-300 hover:bg-violet-700"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
