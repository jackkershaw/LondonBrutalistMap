import Header from "./header.tsx";
import Footer from "./footer.tsx";

export default function Layout({
  children: children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="sm:mx-10">
        <Header />
        <div className="py-28 sm:py-0">{children}</div>
        <Footer />
      </div>
    </>
  );
}
