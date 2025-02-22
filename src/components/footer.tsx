import VisitedCount from "../components/visitedCount.tsx";

export function Footer() {
  return (
    <div
      className="fixed left-0 bottom-0 w-full py-5 text-2xl font-bold flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 sm:px-10 bg-white
  "
    >
      <VisitedCount></VisitedCount>
      <a
        href="https://github.com/jackkershaw/LondonBrutalistMap"
        target="_blank"
        className="font-bold hover:underline"
      >
        View on Github
      </a>
    </div>
  );
}

export default Footer;
