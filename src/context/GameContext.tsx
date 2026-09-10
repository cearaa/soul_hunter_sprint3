import { useCallback, useMemo, useReducer, type ReactNode } from "react";
import { GameContext, type GameContextValue } from "./gameContextDefinition";

interface PointsToast {
  id: number;
  message: string;
}

interface GameState {
  username: string;
  points: number;
  answeredMissionIds: string[];
  toasts: PointsToast[];
}

type GameAction =
  | { type: "SET_USERNAME"; name: string }
  | { type: "AWARD_POINTS"; missionId: string; amount: number; message?: string }
  | { type: "DISMISS_TOAST"; id: number };

const initialState: GameState = {
  username: "Visitante",
  points: 0,
  answeredMissionIds: [],
  toasts: [],
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "SET_USERNAME": {
      const trimmed = action.name.trim();
      return { ...state, username: trimmed === "" ? "Visitante" : trimmed };
    }
    case "AWARD_POINTS": {
      // Atualização atômica: se a missão já foi respondida, não faz nada.
      // Isso evita duplicidade mesmo se o React invocar o reducer mais de
      // uma vez (ex: StrictMode em desenvolvimento), pois o reducer é puro.
      if (state.answeredMissionIds.includes(action.missionId)) {
        return state;
      }
      const toastMessage = action.message ?? `+${action.amount} pontos!`;
      return {
        ...state,
        points: state.points + action.amount,
        answeredMissionIds: [...state.answeredMissionIds, action.missionId],
        toasts: [
          ...state.toasts,
          { id: Date.now() + Math.random(), message: toastMessage },
        ],
      };
    }
    case "DISMISS_TOAST": {
      return { ...state, toasts: state.toasts.filter((toast) => toast.id !== action.id) };
    }
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const setUsername = useCallback((name: string) => {
    dispatch({ type: "SET_USERNAME", name });
  }, []);

  const awardPoints = useCallback(
    (missionId: string, amount: number, message?: string) => {
      dispatch({ type: "AWARD_POINTS", missionId, amount, message });
    },
    [],
  );

  const dismissToast = useCallback((id: number) => {
    dispatch({ type: "DISMISS_TOAST", id });
  }, []);

  const value = useMemo<GameContextValue>(
    () => ({
      username: state.username,
      setUsername,
      points: state.points,
      missionsCompleted: state.answeredMissionIds.length,
      answeredMissionIds: state.answeredMissionIds,
      awardPoints,
      toasts: state.toasts,
      dismissToast,
    }),
    [state, setUsername, awardPoints, dismissToast],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}