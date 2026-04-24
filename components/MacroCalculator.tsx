"use client";

import { useState } from "react";
import {
  calculateMacros,
  proteinSources,
  calculateCostPerGram,
  type ActivityLevel,
  type Goal,
} from "@/lib/calculators/macro-math";

export function MacroCalculator() {
  const [bodyweight, setBodyweight] = useState<string>("80");
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [goal, setGoal] = useState<Goal>("maintain");

  const bodyweightKg =
    unit === "kg"
      ? Number(bodyweight) || 0
      : (Number(bodyweight) || 0) * 0.453592;

  const result = calculateMacros({ bodyweightKg, activity, goal });

  const sortedSources = [...proteinSources]
    .map((s) => ({
      ...s,
      costPerG: calculateCostPerGram(s.gPerServing, s.costPerServing),
    }))
    .sort((a, b) => a.costPerG - b.costPerG);

  return (
    <section className="my-8 border border-ink/20 rounded-lg bg-white/60 overflow-hidden">
      <div className="px-6 py-3 bg-ink text-paper">
        <p className="font-serif text-sm uppercase tracking-widest">
          Macro Calculator
        </p>
      </div>

      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-xl text-ink mb-4">Inputs</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="ll-bodyweight" className="block text-sm text-charcoal mb-1">
                Bodyweight
              </label>
              <div className="flex gap-2">
                <input
                  id="ll-bodyweight"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step="0.1"
                  value={bodyweight}
                  onChange={(e) => setBodyweight(e.target.value)}
                  aria-describedby="ll-bodyweight-unit"
                  className="flex-1 rounded-md border border-ink/30 px-3 py-2 font-mono bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:border-copper"
                />
                <div
                  id="ll-bodyweight-unit"
                  role="radiogroup"
                  aria-label="Bodyweight unit"
                  className="flex rounded-md overflow-hidden border border-ink/30"
                >
                  <button
                    type="button"
                    role="radio"
                    aria-checked={unit === "kg"}
                    onClick={() => setUnit("kg")}
                    className={`px-3 text-sm font-mono cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-inset ${unit === "kg" ? "bg-ink text-paper" : "bg-white text-charcoal"}`}
                  >
                    kg
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={unit === "lb"}
                    onClick={() => setUnit("lb")}
                    className={`px-3 text-sm font-mono cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-inset ${unit === "lb" ? "bg-ink text-paper" : "bg-white text-charcoal"}`}
                  >
                    lb
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="ll-activity" className="block text-sm text-charcoal mb-1">
                Activity
              </label>
              <select
                id="ll-activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value as ActivityLevel)}
                className="w-full rounded-md border border-ink/30 px-3 py-2 bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:border-copper"
              >
                <option value="sedentary">Sedentary (desk job, no training)</option>
                <option value="light">Light (1-3 training days/week)</option>
                <option value="moderate">Moderate (3-5 training days/week)</option>
                <option value="very-active">Very active (6-7 training days/week)</option>
              </select>
            </div>

            <div>
              <label htmlFor="ll-goal" className="block text-sm text-charcoal mb-1">
                Goal
              </label>
              <select
                id="ll-goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value as Goal)}
                className="w-full rounded-md border border-ink/30 px-3 py-2 bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:border-copper"
              >
                <option value="cut">Cut (~1 lb/week deficit)</option>
                <option value="maintain">Maintain</option>
                <option value="bulk">Slow bulk (modest surplus)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl text-ink mb-4">Daily targets</h3>
          <div className="space-y-3 font-mono text-sm">
            <OutputRow
              label="Protein (recommended)"
              value={`${result.recommendedProteinG}g`}
              emphasis
            />
            <OutputRow label="Fat" value={`${result.fatG}g`} />
            <OutputRow label="Carbs" value={`${result.carbsG}g`} />
            <OutputRow
              label="Total calories"
              value={`${result.totalCalories} kcal`}
            />
          </div>

          <div className="mt-6 pt-6 border-t border-ink/10">
            <p className="font-mono text-xs uppercase tracking-wider text-copper-deep mb-2">
              Per-meal split
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <PerMeal n={3} protein={result.perMeal3.proteinG} cal={result.perMeal3.calories} />
              <PerMeal n={4} protein={result.perMeal4.proteinG} cal={result.perMeal4.calories} />
              <PerMeal n={5} protein={result.perMeal5.proteinG} cal={result.perMeal5.calories} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 pb-8">
        <h3 className="font-serif text-xl text-ink mb-4">
          The four expert ranges, compared
        </h3>
        <table className="w-full font-mono text-sm">
          <thead>
            <tr className="border-b border-ink/10 text-left">
              <th className="py-2 text-charcoal/70 font-normal">Source</th>
              <th className="py-2 text-charcoal/70 font-normal text-right">g/kg/day</th>
              <th className="py-2 text-charcoal/70 font-normal text-right">g/day for you</th>
            </tr>
          </thead>
          <tbody>
            {result.proteinRanges.map((range) => (
              <tr key={range.label} className="border-b border-ink/5">
                <td className="py-2">
                  <div className="font-sans text-charcoal/90">{range.label}</div>
                  <div className="text-xs text-steel">{range.source}</div>
                </td>
                <td className="py-2 text-right">{range.proteinGPerKg.toFixed(1)}</td>
                <td className="py-2 text-right text-copper-deep font-semibold">
                  {range.proteinG}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-6 md:px-8 pb-8">
        <h3 className="font-serif text-xl text-ink mb-4">
          Cost per gram of protein — 12 sources ranked
        </h3>
        <table className="w-full font-mono text-sm">
          <thead>
            <tr className="border-b border-ink/10 text-left">
              <th className="py-2 text-charcoal/70 font-normal">Source</th>
              <th className="py-2 text-charcoal/70 font-normal text-right">$/g</th>
              <th className="py-2 text-charcoal/70 font-normal text-right hidden md:table-cell">
                Per serving
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedSources.map((s) => (
              <tr key={s.name} className="border-b border-ink/5">
                <td className="py-2">
                  <div className="font-sans text-charcoal/90">{s.name}</div>
                  <div className="text-xs text-steel">{s.note}</div>
                </td>
                <td className="py-2 text-right text-copper-deep font-semibold">
                  ${s.costPerG.toFixed(3)}
                </td>
                <td className="py-2 text-right text-charcoal/70 hidden md:table-cell">
                  {s.gPerServing}g · ${s.costPerServing.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-xs text-steel font-sans">
          Prices are benchmarks (Costco / regional grocery, 2026). Rates drift —
          verify at your store before budgeting. To hit 150g of protein at $5/day,
          the cheapest feasible combination is whey concentrate + eggs + chicken.
        </p>
      </div>
    </section>
  );
}

function OutputRow({
  label,
  value,
  emphasis,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between py-2 border-b border-ink/10 ${
        emphasis ? "text-lg md:text-xl text-ink font-semibold" : ""
      }`}
    >
      <span className="font-sans text-charcoal/70">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function PerMeal({ n, protein, cal }: { n: number; protein: number; cal: number }) {
  return (
    <div className="p-3 bg-paper/50 border border-ink/10 rounded text-center">
      <div className="text-copper-deep text-xs uppercase tracking-wider mb-1 font-medium">{n} meals</div>
      <div className="text-charcoal">{protein}g prot</div>
      <div className="text-steel text-xs">{cal} kcal</div>
    </div>
  );
}
