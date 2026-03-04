import { ParkNav } from "./ParkNav";

export default function CapilanoRvParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ParkNav />
      {children}
    </>
  );
}
