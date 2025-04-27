import { mqqtApi } from "@/api/mqqt";
import { LampTopic } from "@/api/mqqt/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const SMART_LAMP_KEY = {
  getState: ["getState"] as const,
} as const;

export function useSmartLampQuery() {
  return useQuery({
    queryKey: SMART_LAMP_KEY.getState,
    queryFn: () => mqqtApi.getCurrentState(),
  });
}

export function useSwitchSmartLampQuery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (topic: LampTopic) => mqqtApi.switchCurrentState(topic),
    onSuccess: () => queryClient.invalidateQueries(SMART_LAMP_KEY.getState),
  });
}
