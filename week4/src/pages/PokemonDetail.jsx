import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        console.log(res.data);
        await setPokemon(res.data);
      } catch (error) {
        console.error(`${name}을 불러오는 데 실패했습니다.`, error);
      }
    };

    fetchData();
  }, [name]);

  if (!pokemon) return <div>로딩중</div>;

  return (
    <div>
      <Link to="/">목록으로</Link>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="포켓몬 이미지" />
      <p>
        type : {""}
        {pokemon.types.map(({ slot, type }) => (
          <span key={slot}>{type.name} </span>
        ))}
      </p>
    </div>
  );
};

export default PokemonDetail;
