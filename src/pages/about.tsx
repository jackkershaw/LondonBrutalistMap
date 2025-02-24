export default function AboutPage() {
  return (
    <div>
      <div className="mx-5 grid grid-cols-1 gap-16 space-y-5 py-10 sm:mx-0 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <section>
            <h1 className="text-2xl">What is Brutalism?</h1>
            <p className="py-4 text-xl">
              Brutalism is an architectural style that emerged in the 1950s. It
              1950s. It is characterized by its use of raw, unfinished concrete,
              concrete, bold geometric shapes, and an expressive design
              approach. The term "brutalism" originates from Le Corbusier's
              Corbusier's phrase in French: "béton brut," which means "raw
              concrete."
            </p>
          </section>
          <section>
            <h1 className="text-2xl font-bold">Why London?</h1>
            <p className="py-4 text-xl">
              London has some of the best examples of Brutalism in the world.
              After World War II, a group of idealists began to rebuild the city
              in concrete. What remain are some of the most striking civic and
              housing projects ever built.
            </p>
          </section>
          <section>
            <p className="py-10 text-xl">
              This website was created by Jack Kershaw and the code can be
              viewed{" "}
              <a
                href="https://github.com/jackkershaw/brutalist-buildings-guesser"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . You can contact me by email here: {""}
              <a
                href="mailto:hello@jackkershaw.net"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                hello@jackkershaw.net
              </a>
            </p>
          </section>
        </div>
        <img
          src="/images/AboutPage.webp"
          alt="building"
          className="col-span-1 h-[70vh] w-full object-contain grayscale filter md:col-start-2 lg:col-start-3"
        />
      </div>
    </div>
  );
}
