import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { ImageLink } from "~/components/image-link";

export const getImage = (index: number) => {
  return `https://raw.githubusercontent.com/sashafirsov/pokeapi-sprites/master/sprites/pokemon/other/dream-world/${index}.svg`;
};

export const meta: MetaFunction = () => {
  return [
    { title: "Pokemon!" },
    { name: "description", content: "Transitioning the view!" },
  ];
};

const PokemonSchema = z.object({
  name: z.string(),
});
const PokemonListSchema = z.array(PokemonSchema);

export const loader = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=152&offset=0"
  );
  const json = await response.json();
  return PokemonListSchema.parse(json?.results);
};

export default function Index() {
  const pokemonList = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>POKEDEX!</h1>
      <div
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        {pokemonList.map((pokemon, index) => (
          <ImageLink
            key={pokemon.name}
            src={getImage(index + 1)}
            alt={pokemon.name}
            to={`pokemon/${pokemon.name}`}
          />
        ))}
      </div>
    </div>
  );
}
