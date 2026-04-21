/**
 * Macro calculator math. Pure functions, evidence-led defaults.
 *
 * References:
 *   - Morton RW et al. 2018 (Br J Sports Med) — meta-analysis, 1.6 g/kg/day protein target
 *   - Phillips SM 2017 — senior adults, 1.2-1.6 g/kg
 *   - Jäger R et al. 2017 ISSN Position Stand — 1.4-2.0 g/kg for resistance-trained
 *   - IOM DRI (RDA) — 0.8 g/kg as the floor
 */

export type ActivityLevel = "sedentary" | "light" | "moderate" | "very-active";
export type Goal = "cut" | "maintain" | "bulk";

export type MacroInputs = {
  bodyweightKg: number;
  activity: ActivityLevel;
  goal: Goal;
};

export type MacroRange = {
  label: string;
  source: string;
  proteinG: number;
  proteinGPerKg: number;
};

export type MacroCalcOutput = {
  proteinRanges: MacroRange[];
  recommendedProteinG: number;
  fatG: number;
  carbsG: number;
  totalCalories: number;
  perMeal3: { proteinG: number; calories: number };
  perMeal4: { proteinG: number; calories: number };
  perMeal5: { proteinG: number; calories: number };
};

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  "very-active": 1.725,
};

const goalAdjustment: Record<Goal, number> = {
  cut: -500, // ~1 lb/week deficit
  maintain: 0,
  bulk: 300, // modest surplus
};

export function calculateMacros(inputs: MacroInputs): MacroCalcOutput {
  const { bodyweightKg, activity, goal } = inputs;

  // Estimated TDEE using a simplified BMR + activity factor
  // (Mifflin-St Jeor assumes age + sex; we approximate by treating BMR as 22 kcal/kg)
  const bmrEstimate = bodyweightKg * 22;
  const maintenanceCalories = bmrEstimate * activityMultipliers[activity];
  const totalCalories = Math.round(maintenanceCalories + goalAdjustment[goal]);

  // Protein ranges from 4 authoritative sources
  const proteinRanges: MacroRange[] = [
    {
      label: "IOM RDA (floor)",
      source: "Institute of Medicine DRI",
      proteinGPerKg: 0.8,
      proteinG: Math.round(bodyweightKg * 0.8),
    },
    {
      label: "Phillips 2017 (seniors / maintenance)",
      source: "Phillips SM 2017",
      proteinGPerKg: 1.2,
      proteinG: Math.round(bodyweightKg * 1.2),
    },
    {
      label: "Morton 2018 (resistance-trained)",
      source: "Morton RW et al. 2018 Br J Sports Med",
      proteinGPerKg: 1.6,
      proteinG: Math.round(bodyweightKg * 1.6),
    },
    {
      label: "ISSN Position Stand (ceiling)",
      source: "Jäger R et al. 2017 J Int Soc Sports Nutr",
      proteinGPerKg: 2.0,
      proteinG: Math.round(bodyweightKg * 2.0),
    },
  ];

  // Our default recommendation: Morton 1.6 for most trainees, adjusted up on cut
  const baseProteinGPerKg = goal === "cut" ? 1.8 : 1.6;
  const recommendedProteinG = Math.round(bodyweightKg * baseProteinGPerKg);

  // Fat: 0.8 g/kg floor for hormonal health
  const fatG = Math.round(bodyweightKg * 0.9);
  const fatCalories = fatG * 9;

  // Carbs fill remainder
  const proteinCalories = recommendedProteinG * 4;
  const remainingCalories = Math.max(totalCalories - proteinCalories - fatCalories, 0);
  const carbsG = Math.round(remainingCalories / 4);

  const perMeal = (n: number) => ({
    proteinG: Math.round(recommendedProteinG / n),
    calories: Math.round(totalCalories / n),
  });

  return {
    proteinRanges,
    recommendedProteinG,
    fatG,
    carbsG,
    totalCalories,
    perMeal3: perMeal(3),
    perMeal4: perMeal(4),
    perMeal5: perMeal(5),
  };
}

// Cost chart — $/g of protein at representative retail prices
// These are illustrative benchmarks; real prices drift (document in post).
export const proteinSources = [
  { name: "Whey concentrate (bulk)", gPerServing: 24, costPerServing: 0.4, note: "Cheapest per-gram protein" },
  { name: "Whole chicken (Costco)", gPerServing: 31, costPerServing: 0.55, note: "Per 100g cooked" },
  { name: "Eggs (large, dozen)", gPerServing: 6, costPerServing: 0.35, note: "Per egg" },
  { name: "Chicken thighs bone-in", gPerServing: 28, costPerServing: 0.5, note: "Per 100g cooked, Costco" },
  { name: "Canned tuna (chunk light)", gPerServing: 22, costPerServing: 1.0, note: "Per can" },
  { name: "Greek yogurt (bulk tub)", gPerServing: 17, costPerServing: 0.75, note: "Per 175g" },
  { name: "Cottage cheese (4%)", gPerServing: 14, costPerServing: 0.65, note: "Per 113g serving" },
  { name: "Sardines", gPerServing: 23, costPerServing: 1.3, note: "Per can" },
  { name: "Ground turkey (93/7)", gPerServing: 28, costPerServing: 1.2, note: "Per 100g cooked" },
  { name: "Ground beef (93/7)", gPerServing: 28, costPerServing: 1.3, note: "Per 100g cooked" },
  { name: "Salmon (farmed)", gPerServing: 26, costPerServing: 2.5, note: "Per 100g cooked" },
  { name: "Milk (whole, gallon)", gPerServing: 8, costPerServing: 0.35, note: "Per cup" },
] as const;

export function calculateCostPerGram(gPerServing: number, costPerServing: number): number {
  if (gPerServing <= 0) return 0;
  return costPerServing / gPerServing;
}
