import CustomDashboardLayout from "@/components/common/custom_dashboard_layout/CustomDashboardLayout";
import React from "react";

const AllAppsContent: React.FC = () => {
  return (
    <>
      <CustomDashboardLayout
        customLayoutContent={<div>contenido de las apps</div>}
      />
    </>
  );
};

export default AllAppsContent;
