import React, { useState, useEffect } from 'react';

export default function userData() {
  // 컴포넌트의 상태로 model 객체를 관리합니다.
  const [model, setModel] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 데이터를 가져옵니다.
    const storedValue = localStorage.getItem('pocketbase_auth');
    if (storedValue) {
      // 저장된 JSON 문자열을 객체로 변환하여 상태에 설정합니다.
      setModel(JSON.parse(storedValue));
    }
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 마운트될 때만 실행됩니다.

  if (!model) {
    return <div>Loading...</div>; // model이 없는 경우 로딩 표시
  }

  return (
    <div>
      {/* model 데이터를 사용한 렌더링 로직 */}
      <p>{model.id}</p>
    </div>
  );
}
