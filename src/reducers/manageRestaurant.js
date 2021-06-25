import cuid from 'cuid';

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                text: action.text,
                id: cuid()
            }
            return {...state, restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT':
            return {...state, restaurants: [...state.restaurants.filter(restaurant => restaurant.id !== action.id)]}

        default:
            return state
    }
}
