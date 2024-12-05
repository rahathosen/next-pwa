export default function OffersCard() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="pb-5 pt-10  text-2xl font-semibold">Offers</h1>
      <div className="grid gap-6 pb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 duration-300">
        {[
          {
            img: "https://www.grameenphone.com/_next/image?url=https%3A%2F%2Fcdn01da.grameenphone.com%2Fsites%2Fdefault%2Ffiles%2F2024-11%2F210_min_1060x764.jpg&w=640&q=75",
            title: "Limitless Internet",
            subtitle: "Upto 10Mbps",
            price: "269 BDT",
          },
          {
            img: "https://www.grameenphone.com/_next/image?url=https%3A%2F%2Fcdn01da.grameenphone.com%2Fsites%2Fdefault%2Ffiles%2F2024-10%2Ftitle%20image1060x764.jpg&w=640&q=75",
            title: "Limitless Internet",
            subtitle: "Upto 10Mbps",
            price: "269 BDT",
          },
          {
            img: "https://www.grameenphone.com/_next/image?url=https%3A%2F%2Fcdn01da.grameenphone.com%2Fsites%2Fdefault%2Ffiles%2F2024-10%2FWEB_1060X764.jpg&w=640&q=75",
            title: "Limitless Internet",
            subtitle: "Upto 10Mbps",
            price: "269 BDT",
          },
        ].map((offer, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
          >
            <img
              src={offer.img}
              alt={offer.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{offer.title}</h2>
              <p className="mt-1 text-gray-600">{offer.subtitle}</p>
              <p className="mt-2 font-semibold text-blue-600">{offer.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
