
// Authentication Reducer
const defaultStateAuthenticationReducer = [];

export default (state = defaultStateAuthenticationReducer,action) => {

    switch(action.type){
        case "ADD_AUTH":
            console.log("In Auth Reducer :  "+action.authentication);
            return [...state,action.authentication];
        case "REMOVE_AUTH":
            return state.filter(({id}) => {
                return id != action.id;
            });
         default:
            return state;   
    }

};