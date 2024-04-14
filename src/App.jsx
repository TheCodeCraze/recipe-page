import styles from "./App.module.css";

export const App = () => {
  return (
    <article className={styles.container}>
      <img
        className={styles.image}
        src="images/image-omelette.jpeg"
        alt="Omelette"
      />
      <div className={styles.details}>
        <div className={styles.main}>
          <h1 className={styles.title}>Simple Omelette Recipe</h1>
          <p className={styles.description}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className={styles.prep}>
          <h5 className={styles.title}>Preparation time</h5>
          <ul className={styles.info}>
            <li>
              <span>Total:</span> Approximately 10 minutes
            </li>
            <li>
              <span>Preparation:</span> 5 minutes
            </li>
            <li>
              <span>Cooking:</span> 5 minutes
            </li>
          </ul>
        </div>
        <div className={styles.ingredients}>
          <h3 className={styles.subTitle}>Ingredients</h3>
          <ul className={styles.info}>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <hr className={styles.line} />
        <div className={styles.instructions}>
          <h3 className={styles.subTitle}>Instructions</h3>
          <ol className={styles.info}>
            <li>
              <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan:</span> Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <span>Cook the omelette:</span> Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <span>Add fillings (optional):</span> When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li>
              <span>Fold and serve:</span> As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <span>Enjoy:</span> span Serve hot, with additional salt and
              pepper if needed.
            </li>
          </ol>
        </div>
        <hr className={styles.line} />
        <div className={styles.nutrition}>
          <h3 className={styles.subTitle}>Nutrition</h3>
          <p className={styles.description}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className={styles.info}>
            <div className={styles.sub}>
              <p className={styles.heading}>Calories</p>
              <p className={styles.value}>277kcal</p>
            </div>
            <hr className={styles.line} />
            <div className={styles.sub}>
              <p className={styles.heading}>Carbs</p>
              <p className={styles.value}>0g</p>
            </div>
            <hr className={styles.line} />
            <div className={styles.sub}>
              <p className={styles.heading}>Protein</p>
              <p className={styles.value}>20g</p>
            </div>
            <hr className={styles.line} />
            <div className={styles.sub}>
              <p className={styles.heading}>Fat</p>
              <p className={styles.value}>22g</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
