export interface IAppStore{
    // interface definuje ake budeme mat properties v nasom stores


}

export function rootReducer(state: string = 'Skuska', action){
    // tu bude SWITCH pre Reducer
    console.log(action);
    return state;
}