export default (state, action) => {
  switch (action.type) {
    case "SET_LOADED":
      return {
        ...state,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_VINYLS":
      return {
        ...state,
        vinyls: action.payload.vinyls,
      };

    case "SET_PAGES":
      return {
        ...state,
        pages: action.payload.pages,
      };

    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload.totalPages,
      };

    case "SET_LIMIT":
      return {
        ...state,
        limit: action.payload.limit,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload.search,
      };

    case "SET_SORT":
      return {
        ...state,
        sort: action.payload.sort,
      };

    case "SET_ORDER":
      return {
        ...state,
        order: action.payload.order,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
      };

    case "SET_ERRORMSG":
      return {
        ...state,
        errMsg: action.payload.errMsg,
      };

    default:
      return state;
  }
};
