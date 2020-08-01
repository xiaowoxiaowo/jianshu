import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const setList = (list) => ({
  type: constants.SET_LIST,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage = (number) => ({
  type: constants.CHANGE_PAGE,
  number
})

export const getList = () => {
  return (dispatch) => {
    axios.post('/mock').then((res) => {
      console.log(res)
      dispatch(setList(res.data.data))
    })
  }
}
