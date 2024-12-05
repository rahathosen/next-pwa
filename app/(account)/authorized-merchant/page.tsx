import ComingSoon from "@/components/core/ComingSoon";
import Header from "@/components/core/Header";

const page = () => {
  return (
    <>
      <div className="p-4">
        <Header title="Authorized Merchant" />
      </div>
      <ComingSoon />
    </>
  );
};

export default page;
