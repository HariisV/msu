import React, { useEffect, useState } from 'react';

export default function TableFilterPrice({ allMenu, formatRupiah }) {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData([]);
    allMenu.filter(
      (e) => e.harga > 12500 && setAllData((prev) => [...prev, e])
    );
  }, [allMenu]);

  return (
    <>
      <table class="table">
        <thead class="table__thead">
          <tr>
            <th scope="col" class="table__thead-th">
              Id
            </th>
            <th scope="col" class="table__thead-th">
              Nama Makanan
            </th>

            <th scope="col" class="table__thead-th">
              Harga
            </th>
          </tr>
        </thead>
        <tbody>
          {allData.map((e) => (
            <tr
              className={`border-b ${e.id % 2 === 1 ? 'bg-white' : 'bg-white'}`}
              key={e.id}
            >
              <td class="table__tbody-td">{e.id}</td>
              <td class="table__tbody-td">{e.nama}</td>
              <td class="table__tbody-td">{formatRupiah(e.harga)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
