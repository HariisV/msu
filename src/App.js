import React, { useState } from 'react';
import TableAll from './components/TableAll';
import TableFilterPrice from './components/TableFilterPrice';

export default function App() {
  const [allMenu, setAllMenu] = useState([
    {
      id: 1,
      nama: 'Bakso',
      harga: 10000,
    },
    {
      id: 2,
      nama: 'Ayam Bakar',
      harga: 15000,
    },
    {
      id: 3,
      nama: 'Mie Ayam',
      harga: 40000,
    },
  ]);
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'idr',
    }).format(angka);
  };

  return (
    <div className="App flex justify-between flex-col h-screen">
      <div className="">
        <h1 className="table__title mt-4">List Menu</h1>
        <p className="text-center text-xs mb-5 mt-2">Daftar Semua Menu</p>
        <div class="table__header  ">
          <TableAll
            allMenu={allMenu}
            setAllMenu={setAllMenu}
            formatRupiah={formatRupiah}
          />
        </div>
      </div>
      <div className="">
        <h1 className="table__title mt-10">Expensive Menu</h1>
        <p className="text-center text-xs mb-5 mt-2">
          Harga yang lebih dari Rp. 12.500
        </p>
        <div class="table__header  ">
          <TableFilterPrice
            allMenu={allMenu}
            setAllMenu={setAllMenu}
            formatRupiah={formatRupiah}
          />
        </div>
      </div>
      <section id="footer">
        <p className="text-center p-5 mt-10">
          © 2019-2022 Menu Kita | All right reserved
        </p>
      </section>
    </div>
  );
}
