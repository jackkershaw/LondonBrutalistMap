export default function StructuredData({ feature }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LandmarksOrHistoricalBuildings",
    name: feature.properties.Title,
    description: `Brutalist building in London designed by ${feature.properties.Designer}`,
    architect: feature.properties.Designer,
    yearBuilt: feature.properties.Completed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
