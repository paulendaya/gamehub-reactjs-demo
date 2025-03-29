import useGame from "@/hooks/useGame";
import React from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <p>Loading ...</p>;
  if (error || !game) throw error;

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description_raw}</p>
    </div>
  );
};

export default GameDetail;
