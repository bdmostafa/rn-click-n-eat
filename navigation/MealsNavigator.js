import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from "react-navigation-stack";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { CategoryMealsScreen } from "../screens/CategoryMealsScreen";
import { MealDetailScreen } from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: {
    screen: MealDetailScreen,
  },
});

export default createAppContainer(MealsNavigator);