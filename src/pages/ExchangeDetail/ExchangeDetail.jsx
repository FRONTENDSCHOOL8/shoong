import ExchangeList from '@/components/ExchangeList/ExchangeList';
import { useLocation, useLoaderData } from 'react-router-dom';

/**
 * data : string;
 * @returns
 */

export default function ExchangeDetail() {
  const data = useLoaderData();
  console.log('data', data);
  return (
    <div>
      <ExchangeList data={data} />
    </div>
  );
}
