export default function entryReducer(state={entries: []}, action) 
{
    switch (action.type) 
    {
		case "LOAD_ENTRIES": {
			return {...state, fetching: true}
		}
		case "LOAD_ENTRIES_FULFILLED": {
			return {
				...state,
				fetching: false,
				fetched: true,
				entries: action.payload,
			}
		}
	}

	return state;
}
