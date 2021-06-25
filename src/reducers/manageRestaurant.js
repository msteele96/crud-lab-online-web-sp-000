import cuid from 'cuid';

export default function manageRestaurants(state = [], action) {
    
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.text,
                id: cuid()
            }
            return state.concat(restaurant)

        case '':
            return
        default:
            return state
    }
}
