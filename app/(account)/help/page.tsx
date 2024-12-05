import ComingSoon from "@/components/core/ComingSoon";
import Header from "@/components/core/Header";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-4">
        <Header title="Help" />
      </div>
      <ComingSoon />
    </>
  );
};

export default page;
