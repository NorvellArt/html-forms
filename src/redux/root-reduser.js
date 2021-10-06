import { combineReducers } from "redux";
import itemsReduser from "./items/items.reduser";
import boxItemsReduser from "./box-items/box-items.reduser";

export default combineReducers({
    items: itemsReduser,
    boxItems: boxItemsReduser,
})