import { Link, unstable_useViewTransitionState } from "@remix-run/react";

export const pokemonTransitionName = "poke-transition";
export const headlineTransitionName = "headline-transition";
export const ImageLink = ({
  to,
  src,
  alt,
}: {
  to: string;
  src: string;
  alt: string;
}) => {
  const isTransitioning = unstable_useViewTransitionState(to);
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
      unstable_viewTransition
    >
      <img
        src={src}
        alt={alt}
        style={{
          viewTransitionName: isTransitioning ? pokemonTransitionName : "",
        }}
      />
      <p
        style={{
          viewTransitionName: isTransitioning ? headlineTransitionName : "",
        }}
      >
        {alt}
      </p>
    </Link>
  );
};
