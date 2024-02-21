// 문서 제목 변경
// 리액트 렌더링 연관성이 있다????
// 사이드 이펙트
// 이펙트 훅
// - useEffect
// - useLayoutEffect

import { useLayoutEffect } from 'react';

export default function useDocumentTitle(headlineContent) {
  useLayoutEffect(() => {
    document.title = { headlineContent };
  }, [headlineContent]);
}
