//state

const initial_state = {
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    image: '',
    loan: null,
    mortgage: null,
    rent: null    
}

//action types

const NAME = 'NAME'
const DESCRIPTION = 'DESCRIPTION'
const ADDRESS = 'ADDRESS'
const CITY = 'CITY'
const STATE = 'STATE'
const ZIP = 'ZIP'
const IMAGE = 'IMAGE'
const LOAN = 'LOAN'
const MORTGAGE = 'MORTGAGE'
const RENT = 'RENT'

//reducer

export default function reducer(state = initial_state, action){
    switch(action.type){
        case NAME:
            return Object.assign({}, state, {name: action.payload})
        case DESCRIPTION:
            return Object.assign({}, state, {description: action.payload})
        case ADDRESS:
            return Object.assign({}, state, {address: action.payload})
        case CITY:
            return Object.assign({}, state, {city: action.payload})
        case STATE:
            return Object.assign({}, state, {state: action.payload})
        case ZIP:
            return Object.assign({}, state, {zip: action.payload})
        case IMAGE:
            return Object.assign({}, state, {image: action.payload})
        case LOAN:
            return Object.assign({}, state, {loan: action.payload})
        case MORTGAGE:
            return Object.assign({}, state, {mortgage: action.payload})
        case RENT:
            return Object.assign({}, state, {rent: action.payload})
        default:
            return state
    }
}


//actions


//action builder is the function itself this is the mailman
export function handleName(value){
    //this is the action and that is analgous to the shipping package
    return{
        type: NAME,
        payload: value
    }
}

export function handleDescription(value){
    return{
        type: DESCRIPTION,
        payload: value
    }
}
export function handleAddress(value){
    console.log(value)
    return{
        type: ADDRESS,
        payload: value
    }
}
export function handleCity(value){
    return{
        type: CITY,
        payload: value
    }
}
export function handleState(value){
    return{
        type: STATE,
        payload: value
    }
}
export function handleZip(value){
    return{
        type: ZIP,
        payload: value
    }
}
export function handleImage(value){
    return{
        type: IMAGE,
        payload: value
    }
}
export function handleLoan(value){
    return{
        type: LOAN,
        payload: value
    }
}
export function handleMortgage(value){
    return{
        type: MORTGAGE,
        payload: value
    }
}
export function handleRent(value){
    return{
        type: RENT,
        payload: value
    }
}