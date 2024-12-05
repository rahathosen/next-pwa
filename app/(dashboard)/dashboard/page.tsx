import Header from "@/components/core/Header";
import GoldWalletDashboard from "@/components/GoldWalletDashboard";
const Page = () => {
  return (
    <>
      <div className="container mx-auto mt-5">
        <div className="px-4 md:flex md:items-center md:justify-between md:space-x-5">
          {/* Header */}
          <Header title="Welcome" />
          {/* Dashboard contents */}
          <GoldWalletDashboard />
        </div>
      </div>
    </>
  );
};

export default Page;
