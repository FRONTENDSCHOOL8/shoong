import { Circle } from 'rc-progress';

export default function DragonSphere({ phocaInfo, phocaData, group }) {
  return (
    <>
      <div className="absolute bottom-5 left-[50%] z-10 flex h-100pxr w-280pxr translate-x-[-50%] rounded-[10px] bg-white opacity-95 shadow">
        <div className="m-auto flex items-center gap-8">
          <div className="relative">
            <Circle
              percent={Math.round((phocaInfo.length / phocaData.length) * 100)}
              strokeWidth={15}
              trailColor="#DCD6FA"
              trailWidth={13}
              strokeColor="#6662C9"
              className="absolute -left-5 -top-4 z-10 h-65pxr w-65pxr"
            />
            <img src="/icons/드래곤볼.jpg" alt="드볼 이미지" />
          </div>

          <div className="inline-flex flex-col items-start justify-start gap-px">
            <div className="inline-flex items-center justify-center gap-2.5">
              <div className="text-base font-bold leading-snug text-neutral-800">
                {phocaData.length}개 중 {phocaInfo.length}
              </div>
            </div>

            <div className="text-sm font-semibold leading-tight text-gray-500">
              {group} 드볼{' '}
              {Math.round((phocaInfo.length / phocaData.length) * 100)}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
