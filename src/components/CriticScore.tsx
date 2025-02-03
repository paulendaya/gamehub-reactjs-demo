import { Tag } from "./ui/tag";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  const colorPalette = metacritic >= 80 ? "green" : "red";
  return (
    <div>
      {metacritic && (
        <Tag size="sm" colorPalette={colorPalette}>
          {metacritic}
        </Tag>
      )}
    </div>
  );
};

export default CriticScore;
