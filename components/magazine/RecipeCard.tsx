import { useTranslations } from "next-intl";

/**
 * The signature recipe card. A printed recipe-card unit:
 *  · Top meta strip (Yield · Active · Total · Difficulty)
 *  · Two-column body on desktop — Ingredients left, numbered Method right
 *  · Notes block (italic serif) + Storage block (sans, tomato rule)
 *
 * Renders a complete card from the i18n dictionary — this is the
 * Larderlab issue 04 cover dish so it ships fully-translated in every
 * locale. Subsequent issues will accept a `recipe` prop.
 */
export function RecipeCard() {
  const t = useTranslations("recipeCard");

  const ingredients = [
    t("ingredient1"),
    t("ingredient2"),
    t("ingredient3"),
    t("ingredient4"),
    t("ingredient5"),
    t("ingredient6"),
    t("ingredient7"),
    t("ingredient8"),
  ];

  const method = [
    t("method1"),
    t("method2"),
    t("method3"),
    t("method4"),
    t("method5"),
  ];

  return (
    <article className="recipe-card my-12">
      <div className="dept-label mb-2">Recipe</div>
      <h3 className="font-display italic font-normal text-3xl md:text-4xl text-ink leading-[1.04]">
        {t("title")}
      </h3>

      <div className="recipe-card-meta">
        <div className="recipe-meta-cell">
          <span className="recipe-meta-label">{t("yieldLabel")}</span>
          <span className="recipe-meta-value">{t("yieldValue")}</span>
        </div>
        <div className="recipe-meta-cell">
          <span className="recipe-meta-label">{t("activeLabel")}</span>
          <span className="recipe-meta-value">{t("activeValue")}</span>
        </div>
        <div className="recipe-meta-cell">
          <span className="recipe-meta-label">{t("totalLabel")}</span>
          <span className="recipe-meta-value">{t("totalValue")}</span>
        </div>
        <div className="recipe-meta-cell">
          <span className="recipe-meta-label">{t("difficultyLabel")}</span>
          <span className="recipe-meta-value">{t("difficultyValue")}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12">
        <div>
          <h4 className="recipe-section-title">{t("ingredientsHeading")}</h4>
          <ul className="recipe-ingredients">
            {ingredients.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="recipe-section-title">{t("methodHeading")}</h4>
          <ol className="recipe-method">
            {method.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-2">
        <div>
          <div className="dept-label mt-2 mb-1">{t("notesHeading")}</div>
          <div className="recipe-notes">{t("notes")}</div>
        </div>
        <div>
          <div className="dept-label mt-2 mb-1">{t("storageHeading")}</div>
          <div className="recipe-storage">{t("storage")}</div>
        </div>
      </div>
    </article>
  );
}
