import NavigasiBar from "./NavigasiBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <NavigasiBar></NavigasiBar> */}
      {children}
    </>
  );
}
