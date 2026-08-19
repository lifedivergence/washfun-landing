export const STATS_ENDPOINT =
  "https://wash.life-divergence.com/api/v1/statistics/totals";

export type Totals = {
  totalWashCount: number;
  totalWashDurationSeconds: number;
  totalUserCount: number;
};

export function parseTotals(json: unknown): Totals | null {
  const d = (json as { data?: Partial<Totals> } | null)?.data;
  if (
    typeof d?.totalWashCount !== "number" ||
    typeof d?.totalWashDurationSeconds !== "number" ||
    typeof d?.totalUserCount !== "number"
  ) {
    return null;
  }
  return d as Totals;
}
