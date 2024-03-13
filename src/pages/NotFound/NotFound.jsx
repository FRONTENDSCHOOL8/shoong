import { useRouteError } from 'react-router';
import { Link } from 'react-router-dom';

export default function NotFound() {
  // @ts-ignore
  const { statusText, status, data } = useRouteError();

  return (
    <div id="error-page" className="flex flex-col gap-5">
      <div className="flex items-center justify-center gap-5 pt-200pxr">
        <p className="text-center text-60pxr font-extrabold text-primary">
          {status}
        </p>
        <p className="text-center text-30pxr font-bold text-primary">
          {statusText}
        </p>
      </div>
      <p className="m-auto max-w-330pxr text-center text-15pxr font-bold text-primary">
        {data}
      </p>
      <div className="text-center">
        <Link
          to="/"
          className="rounded-full bg-primary px-20pxr py-10pxr text-sm font-medium leading-tight text-white duration-200 hover:bg-[#36346d] hover:text-[#949494]"
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
}
