export default function Image({ src, width, height }) {
  return (
    <div>
      <img
        style={{ objectFit: "cover", borderRadius: "0.5rem" }}
        src={src}
        width={width}
        height={height}
        alt="error"
      />
    </div>
  );
}
