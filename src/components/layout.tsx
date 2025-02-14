import Header from "./header.tsx";
import Footer from "./footer.tsx";
import StructuredData from "./StructuredData.tsx";

export default function Layout({
  children: children,
  buildingData,
}: {
  children: React.ReactNode;
  buildingData?: GeoJSON.Feature;
}) {
  return (
    <>
      <div className="sm:mx-10">
        <Header />
        <div className="py-28 sm:py-0">
          {buildingData && <StructuredData feature={buildingData} />}
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
