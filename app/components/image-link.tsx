import { Link } from "@remix-run/react";

export const ImageLink = ({
  to,
  src,
  alt,
}: {
  to: string;
  src: string;
  alt: string;
}) => {
  return (
    <Link
      style={{
        display: "grid",
        gridTemplateColumns: `120px min-content`,
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
      }}
      to={to}
    >
      <img src={src} alt={alt} />
      <p>{alt}</p>
    </Link>
  );
};
