import ExchangeList from '@/components/ExchangeList/ExchangeList';
import { useLocation, useLoaderData } from 'react-router-dom';

/**
 * @typedef {Object} PhotoCardData
 * @typedef {Object} ExchangeListData
 * @typedef {Object} WriterData
 * @returns {JSX.Element}
 */

export default function ExchangeDetail() {
  // @ts-ignore
  const photoCardData = useLoaderData();
  return (
    <div>
      <ExchangeList
        // @ts-ignore
        phocaData={photoCardData}
      />
    </div>
  );
}
