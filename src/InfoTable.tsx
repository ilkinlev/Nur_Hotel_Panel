import "./index.css";

function InfoTable() {
  return (
    <>
      <div className="flex justify-center w-auto overflow-x-auto mt-10">
        <table className="  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Otaq
              </th>
              <th scope="col" className="px-6 py-3">
                Giris
              </th>
              <th scope="col" className="px-6 py-3">
                Cixis
              </th>
              <th scope="col" className="px-6 py-3">
                Mebleg
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                105
              </th>
              <td className="px-6 py-4">30.06.25</td>
              <td className="px-6 py-4">10.07.26</td>
              <td className="px-6 py-4">300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InfoTable;
