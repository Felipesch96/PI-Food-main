import { CLEAN, CLEAN_DETAIL, CLEAN_ERROR, CLEAN_FILTER, CLEAN_ORDER, CLEAN_SEARCH, ERROR, FILTER_STATE, GET_DIETS, GET_RECIPES, GET_RECIPE_ID, GET_SEARCH, ORDER_STATE, POST_RECIPES } from "./actions";

const initialState = {
  detail: {},
  recipes: [],
  filter: false,
  diets: [],
  error: {},
  success:{},
  search: false,
  order: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_SEARCH:
      return {
        ...state,
        search: true,
        recipes: action.payload,
      }

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    
    case POST_RECIPES:
      return {
        ...state,
        success: action.payload,        
      };

    case GET_RECIPE_ID:
      return {
        ...state,
        detail: action.payload,
      }

    case FILTER_STATE: 
      return {
        ...state,
        recipes: action.payload,
        filter: true,
      };

    case ORDER_STATE:
      return {
        ...state,
        recipes: action.payload,
        order: true,
      }

    case CLEAN:
      return {
        ...state,
        recipes: action.payload,
        success: action.payload,
        error: action.payload,
        filter: action.payload,
        detail: action.payload,
        search: action.payload,
      };
    
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: action.payload,
      }
    
    case CLEAN_SEARCH:
      return {
        ...state,
        search: action.payload,
        recipes: action.payload,
      }

    case CLEAN_ORDER:
      return {
        ...state,
        order: action.payload,
      }
    
    case CLEAN_FILTER:
      return {
        ...state,
        filter: action.payload,
      }

    case CLEAN_ERROR:
      return {
        ...state,
        filter: action.payload,
      }


    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
    };
};

export default rootReducer;
