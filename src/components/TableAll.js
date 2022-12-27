import React, { useEffect, useState } from 'react';

export default function TableAll({ allMenu, setAllMenu, formatRupiah }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [newMenu, setNewMenu] = useState('');

  const onDeleteMenu = (id) => {
    const newMenu = allMenu.filter((e) => e.id !== id);
    setAllMenu(newMenu);
  };

  useEffect(() => {
    const getAllPrice = () => {
      let total = 0;
      allMenu.forEach((e) => {
        total = total + Number(e.harga);
      });
      return setTotalPrice(total);
    };

    getAllPrice();
  }, [allMenu]);

  const onEnterKey = (event) => {
    if (event.key === 'Enter' && newMenu.nama && newMenu.harga) {
      const newMenuId = allMenu.length + 1;
      const newMenuData = {
        id: newMenuId,
        nama: newMenu.nama,
        harga: newMenu.harga,
      };
      setAllMenu([...allMenu, newMenuData]);
      setNewMenu({ nama: '', harga: '' });
    }
  };

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
            <th scope="col" class="table__thead-th"></th>
          </tr>
        </thead>
        <tbody>
          {allMenu.map((e) => (
            <tr
              className={`border-b ${e.id % 2 === 1 ? 'bg-white' : 'bg-white'}`}
              key={e.id}
            >
              <td class="table__tbody-td">{e.id}</td>
              <td class="table__tbody-td">{e.nama}</td>
              <td class="table__tbody-td">{formatRupiah(e.harga)}</td>
              <td class="table__tbody-td">
                <button
                  style={{ width: 18 }}
                  onClick={() => onDeleteMenu(e.id)}
                >
                  <img src="icons/delete.svg" alt="icon deleted" />
                </button>
              </td>
            </tr>
          ))}

          <tr class="bg-white border-b ">
            <th
              scope="row"
              colSpan={2}
              class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap "
            >
              Total Harga
            </th>
            <td colSpan={2} class="py-4 px-6 font-bold text-gray-900">
              {formatRupiah(totalPrice)}
            </td>
          </tr>
          <tr class="bg-white border-b ">
            <th scope="row" colSpan={4} class="py-4 px-6  whitespace-nowrap ">
              <input
                type="text"
                placeholder="Input Name"
                className="border border-gray-300 w-1/2 h-full p-1.5 text-sm font-normal text-black"
                value={newMenu.nama}
                onChange={(e) =>
                  setNewMenu({ ...newMenu, nama: e.target.value })
                }
                onKeyDown={onEnterKey}
              />
              <input
                type="number"
                placeholder="Input Price & Enter"
                className="border border-gray-300 w-1/2 h-full p-1.5 text-sm font-normal text-black"
                value={newMenu.harga}
                onChange={(e) =>
                  setNewMenu({ ...newMenu, harga: e.target.value })
                }
                onKeyDown={onEnterKey}
              />
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
