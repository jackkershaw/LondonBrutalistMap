import { FormEvent } from "react";
import { FeaturesData } from "../data/geoJSONData";

export default function Game() {
  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const guess: string = (formData.get("guess") || "").toString().trim();

    console.log("guess is:", guess);
    console.log("building is actually:", buildingName); // This will log the previous value of buildingName, not the updated one
    console.log("submitted value:", guess);

    if (guess === "") {
      alert("Please enter a guess.");
      return;
    }
    if (buildingName.toLowerCase().includes(guess.toLowerCase())) {
      alert("Correct!");
      window.location.reload();
    } else {
      alert("Incorrect.");
    }
  };

  const features = FeaturesData.features;
  // Pick a random building on launch //
  const feature = features[Math.floor(Math.random() * features.length)];
  const buildingName = feature.properties.Title;

  return (
    <div className="flex justify-center">
      <div className="bg-gray-100 flex w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg">
        <img
          alt="A brutalist building in black and white"
          src={`./images/buildings/${feature.properties.Image}.webp`}
          width={400}
          height={400}
          sizes="100vw"
          className="h-[400px] w-[400px] w-full object-cover grayscale filter"
        />
        <div className="h-40 w-full p-4">
          <h1 className="mb-2 text-xl font-bold">What building is this?</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input type="text" name="guess" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
