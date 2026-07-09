/** Round portrait chip. Shared by the nav, hero greeting, and About. */
export default function Avatar({
  size = 36,
  alt = "",
}: {
  size?: number;
  alt?: string;
}) {
  return (
    <img
      src="/anup.jpg"
      alt={alt}
      width={size}
      height={size}
      className="shrink-0 rounded-full border border-black/5 object-cover"
      style={{ width: size, height: size }}
    />
  );
}
