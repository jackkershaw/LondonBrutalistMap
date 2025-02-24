import VisitedCount from "../components/visitedCount.tsx";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full flex-col items-center justify-center space-y-4 bg-white py-5 text-center text-2xl font-bold sm:flex-row sm:items-end sm:justify-between sm:space-x-4 sm:space-y-0 sm:px-10 sm:text-left">
      <VisitedCount></VisitedCount>
      <a
        href="https://github.com/jackkershaw/LondonBrutalistMap"
        target="_blank"
        className="font-bold hover:underline"
      >
        View on Github
      </a>
    </footer>
  );
}

export default Footer;
