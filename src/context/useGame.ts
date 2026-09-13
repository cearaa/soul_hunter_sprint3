import { useContext } from "react";
import { GameContext, type GameContextValue } from "./gameContextDefinition";

export function useGame(): GameContextValue {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame precisa ser usado dentro de um GameProvider");
  }
  return context;
}