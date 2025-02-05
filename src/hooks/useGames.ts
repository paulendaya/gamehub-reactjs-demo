import GameService, { Game } from "@/services/game-service";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";

const useGames = () => useData<Game>('/games');

export default useGames;