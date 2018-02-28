export interface State {
    token: string;
    authenticated: boolean;
}

const initialState = {
    token: null,
    authenticated: false
};


export function authReducer(state = initialState, action) {

}
