"use client";
import SiteLogo from "@/components/SiteLogo";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

const Topbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <SiteLogo />
      <Button variant="default" size="icon">
        <EllipsisVertical />
      </Button>
    </div>
  );
};

export default Topbar;
