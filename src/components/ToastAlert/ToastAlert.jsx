// @ts-nocheck
import { forwardRef } from 'react';
import toast from 'react-hot-toast';
import ToastButton from '../ToastButton/ToastButton';

export default forwardRef(function Toast({ phocaID, addID, id }, ref) {
  const handleToast = (ment, result) => {
    toast.dismiss();
    if (result === 'success') toast.success(ment, { duration: 1000 });
    else toast.error(ment, { duration: 1000 });
    ref.current.disabled = false;
  };

  return (
    <div role="alert">
      <div className="text-base font-bold leading-snug ">저장하시겠습니까</div>
      <div className="mt-2 flex gap-2">
        <ToastButton
          phocaID={phocaID}
          addID={addID}
          id={id}
          handleToast={handleToast}
          ment="취소되었습니다"
          result="error"
          name="취소"
          buttonStyle="border border-indigo-500"
          textStyle="text-indigo-500"
        />
        <ToastButton
          phocaID={phocaID}
          addID={addID}
          id={id}
          handleToast={handleToast}
          ment="저장되었습니다"
          result="success"
          name="저장"
          buttonStyle="bg-indigo-500"
          textStyle="text-white"
        />
      </div>
    </div>
  );
});
