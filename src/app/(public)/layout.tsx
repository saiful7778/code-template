import { layoutPropTypes } from "@/types";

const PublicLayout: React.FC<Readonly<layoutPropTypes>> = ({ children }) => {
  return <div>{children}</div>;
};

export default PublicLayout;
