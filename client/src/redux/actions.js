import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPES = "POST_RECIPES";
export const ERROR = "ERROR";
export const CLEAN = "CLEAN";
export const FILTER_STATE = "FILTER_STATE";
export const GET_RECIPE_ID = "GET_RECIPE_ID";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_SEARCH = "GET_SEARCH";
export const CLEAN_SEARCH = "CLEAN_SEARCH";
export const ORDER_STATE = "ORDER_STATE";
export const CLEAN_ORDER = "CLEAN_ORDER";
export const CLEAN_FILTER = "CLEAN_FILTER"
export const CLEAN_ERROR = "CLEAN_ERROR";

export const getRecipes = (type, name) => {
  return async function (dispatch) {
    try {
      if (type && name) {
        const response = await axios.get(`http://localhost:3001/recipes?${type}=${name}`);
        dispatch({
          type: GET_SEARCH,
          payload: response.data,
        });
      };
        const response = await axios.get(`http://localhost:3001/recipes`);
        dispatch({
          type: GET_RECIPES,
          payload: response.data,
        }); 
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/diets");
      dispatch({
        type: GET_DIETS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const postRecipes = (recipe) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/recipes",
        recipe
      );
      dispatch({
        type: POST_RECIPES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getRecipeById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);

      dispatch({
        type: GET_RECIPE_ID,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};


export const filterState = (filter) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_STATE,
      payload: filter,
    })
  }
}

export const orderState = (filter) => {
  return async function (dispatch) {
    dispatch({
      type: ORDER_STATE,
      payload: filter,
    })
  }
}

export const cleanState = () => {
  return async function (dispatch) {
    dispatch({
      type: CLEAN,
      payload: "",
    });
  };
};

export const cleanDetail = () => {
  return async function (dispatch) {
    dispatch({
      type: CLEAN_DETAIL,
      payload: "",
    });
  };
};

export const cleanSearch = () => {
  return async function (dispatch) {
    dispatch({
      type: CLEAN_SEARCH,
      payload: "",
    });
  };
};

export const cleanOrder = (clean) => {
  return async function (dispatch) {
    dispatch({
      type: CLEAN_ORDER,
      payload: clean,
    });
  };
};

export const cleanFilter = (clean) => {
  return async function (dispatch) {
    dispatch({
      type: CLEAN_FILTER,
      payload: clean,
    });
  };
};

export const cleanError = (clean) => {
  return async function (dispatch) {
    dispatch({
      type: CLEAN_ERROR,
      payload: clean,
    });
  };
};
