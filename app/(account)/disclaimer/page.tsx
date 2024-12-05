const page = () => {
  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white px-6 py-4">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">
        Finance Data Listing and Disclaimers
      </h1>
      <p className="mb-4 text-lg text-gray-700">A list of all Stock</p>
      <ul className="mb-6 list-inside list-disc text-gray-700">
        <li>
          Exchanges, Mutual Funds, Indexes and other financial data available in
          Google products
        </li>
        <li>Associated Disclaimers</li>
      </ul>

      <h1 className="mb-4 text-2xl font-semibold text-gray-800">Exchanges</h1>
      <ul className="list-inside list-disc text-gray-700">
        <li>
          End of day prices provided by Morningstar. Corporate actions and
          company metadata provided by Refinitiv.
        </li>
        <li>Intra-day data may be provided by ICE Data Services.</li>
        <li>Data for the Moscow Exchange is currently unavailable.</li>
      </ul>
    </div>
  );
};

export default page;
