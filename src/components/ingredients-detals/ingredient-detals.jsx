import React from "react";
import styles from "./ingredient-detals.module.css";
import ingredientPropType from "../../utils/prop-types";

const IngredientDetails = ({ingredient}) => {
    return (
        <div className={styles.container}>
            <img className='mt-3' src={ingredient.image_large} alt={ingredient.name}/>
                <h3 className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</h3>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <span className="text text_type_main-default text_color_inactive">Калории,ккал</span>
                        <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
                    </li>
                    <li className={styles.item}>
                        <span className="text text_type_main-default text_color_inactive">Белки, г</span>
                        <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
                    </li>
                    <li className={styles.item}>
                        <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
                        <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
                    </li>
                    <li className={styles.item}>
                        <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
                        <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
                    </li>
                </ul>
        </div>
    );
};

IngredientDetails.propTypes = {
    ingredient: ingredientPropType,
};


export default IngredientDetails;