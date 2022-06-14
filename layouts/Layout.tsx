import { TopMenu } from "@/features/index";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <TopMenu />
      {children}
    </>
  );
};

export default Layout;
