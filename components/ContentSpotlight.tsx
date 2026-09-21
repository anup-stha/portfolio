/** Clears the dotted page background into a soft vertical band behind the
    content column, so long detail pages read like one continuous spotlight. */
export default function ContentSpotlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "linear-gradient(90deg, rgba(250,250,250,0) 0%, var(--background) 18%, var(--background) 82%, rgba(250,250,250,0) 100%)",
      }}
    />
  );
}
