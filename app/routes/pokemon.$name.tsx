import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { z } from "zod";
import { getImage } from "./_index";

const PokemonDetailsSchema = z.object({
  name: z.string(),
  id: z.number(),
  order: z.number(),
  sprites: z.object({
    front_default: z.string(),
  }),
});

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { name } = params;
  if (!name) {
    throw Error("no name");
  }
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return json(PokemonDetailsSchema.parse(data));
};

export default function PokemonDetails() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={getImage(data.id)} alt={data.name} />
      <p>
        Toffee dessert candy canes cheesecake sweet roll pie cheesecake
        liquorice topping. Fruitcake tiramisu muffin pudding dragée pastry.
        Caramels sugar plum croissant chocolate bar sugar plum biscuit pudding
        tootsie roll. Bonbon jelly beans jelly-o marzipan biscuit gummies sweet
        bonbon wafer. Tootsie roll muffin chocolate candy toffee jelly-o dessert
        caramels ice cream. Marzipan chupa chups halvah sweet roll lollipop
        carrot cake cupcake gummies. Chupa chups halvah chocolate bar jelly-o
        sesame snaps tootsie roll gummi bears chocolate cake chocolate cake.
        Muffin jujubes wafer cake cotton candy croissant. Cookie danish
        marshmallow fruitcake dessert danish. Lollipop tiramisu chocolate cake
        lemon drops topping bear claw topping sesame snaps soufflé. Lemon drops
        marzipan candy lemon drops pudding shortbread bonbon bear claw. Dessert
        shortbread pie muffin cheesecake. Cheesecake gummi bears toffee cookie
        pie shortbread candy muffin marzipan. Marzipan sweet jelly beans pastry
        cake jelly gummies. Marshmallow cupcake gummies apple pie jelly beans
        candy canes jujubes cake. Chocolate bar ice cream sweet roll biscuit
        tiramisu candy sweet cotton candy.
      </p>
      <p>
        Halvah cupcake icing powder dragée muffin candy chocolate cake lemon
        drops. Ice cream pastry chocolate bar topping marzipan. Dragée candy
        biscuit bonbon soufflé jujubes croissant. Oat cake marshmallow danish
        muffin donut sweet roll halvah. Pastry tart toffee sweet tootsie roll.
        Marshmallow cookie pastry powder chocolate cake gingerbread. Wafer
        toffee sesame snaps brownie gummi bears cotton candy icing. Jelly beans
        jelly donut jelly beans danish liquorice. Pastry pudding dragée toffee
        cotton candy. Marshmallow bear claw pastry bear claw shortbread tart
        liquorice tiramisu. Cake macaroon chocolate cake icing cheesecake
        cheesecake halvah cotton candy. Shortbread apple pie tart tart soufflé
        toffee. Ice cream pie oat cake donut cheesecake. Candy canes bonbon
        sweet roll candy chupa chups chocolate ice cream caramels danish. Pastry
        muffin jelly-o marshmallow biscuit dessert toffee tiramisu tootsie roll.
        Cake caramels oat cake wafer powder jelly-o. Marzipan jujubes carrot
        cake fruitcake gummi bears chupa chups jelly. Liquorice topping halvah
        pudding sugar plum cheesecake. Ice cream jelly cookie lollipop jujubes
        oat cake sweet roll macaroon. Ice cream jelly beans sugar plum dragée
        wafer. Cotton candy gingerbread wafer marzipan tootsie roll cake
        topping. Chocolate bar carrot cake pudding cake pudding gummies toffee
        pastry. Brownie biscuit tart cupcake caramels. Bear claw caramels
        jujubes tootsie roll jelly jelly candy canes chupa chups liquorice.
        Dessert biscuit bonbon carrot cake pie cookie cotton candy. Marzipan
        toffee cheesecake oat cake gummi bears cake soufflé tiramisu wafer.
        Jelly oat cake brownie tootsie roll jelly-o bonbon sesame snaps topping
        cheesecake. Bear claw biscuit sweet liquorice caramels jelly-o brownie
        cotton candy pastry. Cheesecake pie tart lollipop sesame snaps pie
        shortbread. Biscuit jujubes muffin lollipop croissant. Macaroon tiramisu
        croissant carrot cake jujubes gummi bears topping tart. Muffin candy
        canes tart pudding cake donut donut sweet toffee. Bonbon gingerbread
        tart bonbon bonbon chocolate bar halvah marzipan pastry. Halvah marzipan
        sugar plum powder oat cake. Jelly chocolate bar gummi bears sweet roll
        chocolate fruitcake. Lollipop sweet muffin cupcake cookie icing powder.
        Cheesecake dessert sweet sweet roll dragée liquorice sugar plum.
        Croissant pie cheesecake cupcake toffee cake biscuit jelly pie. Jelly
        beans soufflé icing biscuit pastry. Candy canes bear claw topping
        jujubes shortbread cotton candy liquorice ice cream tiramisu. Bear claw
        bear claw oat cake gingerbread sugar plum pastry soufflé jelly halvah.
        Biscuit toffee pudding gummi bears halvah muffin. Cake jelly sesame
        snaps lemon drops lollipop croissant croissant pudding cookie. Fruitcake
        toffee donut cheesecake chocolate ice cream topping sugar plum. Cake
        dragée dragée croissant marshmallow. Jujubes wafer icing jujubes sesame
        snaps marzipan cupcake pastry. Cookie sugar plum wafer danish apple pie
        jelly caramels.
      </p>
    </div>
  );
}
