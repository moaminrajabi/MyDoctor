import FilterCard from "@/components/filterCard/FilterCard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
        <FilterCard />
      </div>
      <div style={{ width: "80%" }}> {children} </div>
    </div>
  );
}
