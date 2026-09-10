import { createContext } from "react";

export interface PointsToast {
  id: number;
  message: string;
}

export interface GameContextValue {
  username: string;
  setUsername: (name: string) => void;
  points: number;
  missionsCompleted: number;
  answeredMissionIds: string[];
  awardPoints: (missionId: string, amount: number, message?: string) => void;
  toasts: PointsToast[];
  dismissToast: (id: number) => void;
}

export const GameContext = createContext<GameContextValue | undefined>(undefined);