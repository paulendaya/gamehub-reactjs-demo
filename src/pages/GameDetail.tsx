import CriticScore from "@/components/CriticScore";
import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import React from "react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <p>Loading ...</p>;
  if (error || !game) throw error;

  return (
    <>
      <div>
        <h1>{game.name}</h1>

        <ExpandableText maxChars={500}>{game.description_raw}</ExpandableText>
      </div>
      {/* game attributes here */}
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="d-flex flex-column gap-5">
            {/* Metascore */}
            {game.metacritic && (
              <div>
                <h6>Metascore</h6>
                <CriticScore metacritic={game.metacritic} />
              </div>
            )}
            <div>
              {/* Publishers */}
              {game.publishers.length && (
                <>
                  <h6>Publishers</h6>

                  {game.publishers.map((publisher, index) => (
                    <span key={publisher.id}>
                      {publisher.name}
                      {index !== game.publishers.length - 1 && ", "}
                    </span>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
