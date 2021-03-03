# Notes React Redux

**_ Notes _**

- minutes = 00:36:12
- <Provider> first then <BrowserRouter>
- Don't put logic in reducer, make logic in actions

**_ Step on working _**

- npm i react-redux redux
- touch store.js
  - import { createStore } from 'redux
  - const initialState = {<state>}
  - function reducer(state = initialState, action) {
      const {type, payload} = action
      switch(type) {
        case <nameOfType>:
          return <wywtd> (use spread operator) w/ payload
        break;
        default:
          return state
      }
    }
  - const store = createStore(reducer)
  - export default store
- in index.js
  - import {provider} = from 'react-redux'
  - import store from './store'
  - add <Provider store={store}> in reactDOM.render
- accessing state in component using hooks: useSelector = ccomputed
  - import {useSelector} from 'react-redux'
  - in function:
    - const <keyState> = useSelector(state => state.<keyState>)
  - render in component as usual
- emitting event to store for changing store
  - import useDispatch from 'react-redux'
  - const dispatch = useDispatch()
  - use in eventHandling:
   - dispatch({ type: <caseNameInReducer>, payload: <dataToSendToReducer> }) (STATE/WYWTD)
- touch actions.js
  - export function <nameFunction> (payload) {
      return { type: <caseNameInReducer>, payload }
    }
- import in {function} from '../store/actions'
- use it in dispatch: dispatch(<function>(payload))
- 