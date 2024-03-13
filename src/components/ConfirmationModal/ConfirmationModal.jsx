/**
 *
 * @param {{
 * isOpen?:boolean,
 * onClose?:() => void,
 * onConfirm?:() => void,
 * message?:string,
 * }} props
 * @returns
 */

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  message,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-bold">확인</h2>
        <p>{message}</p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
