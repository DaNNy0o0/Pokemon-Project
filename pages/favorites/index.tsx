import { MainLayout } from "@/components/layouts";
import { NoFavorites } from "../../components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "@/utils";
import FavoritePokemons from "@/components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <MainLayout title="Pokemons - Favorites">

    {favoritePokemons.length === 0 ? 
    <NoFavorites /> :  <FavoritePokemons pokemons={favoritePokemons}/>}

      
    </MainLayout>
  );
};

export default FavoritesPage;
