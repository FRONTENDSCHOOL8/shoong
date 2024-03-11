export default function Modal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 rounded-lg bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose}>×</button>
        </div>
        <p className="my-4">{content}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded bg-purple-500 px-4 py-2 text-white transition duration-300 hover:bg-purple-600"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
