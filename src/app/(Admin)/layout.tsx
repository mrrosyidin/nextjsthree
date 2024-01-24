import SideNavigation from "./SideNavigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SideNavigation></SideNavigation>
    </>
  );
}
