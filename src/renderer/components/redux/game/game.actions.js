import GameActionTypes from './game.types';

// export const getCalendarEvents = (start, end) => async dispatch => {
//   getCalEvents(start, end).then(events => {
//     dispatch({
//       type: CalendarActionTypes.QUERY_CALENDAR_EVENTS,
//       payload: { start, end, events }
//     });
//   });
// };

export const getGameData = (event) => ({
  type: GameActionTypes.GET_GAME_DATA,
  payload: event,
});

// export const updateCalendarEvent = (eventID, event) => ({
//   type: CalendarActionTypes.UPDATE_CALENDAR_EVENT,
//   payload: { eventID, event }
// });

// export const deleteCalendarEvent = eventID => ({
//   type: CalendarActionTypes.DELETE_CALENDAR_EVENT,
//   payload: eventID
// });

// export const checkIfAvailable = event => ({
//   type: CalendarActionTypes.CHECK_IF_AVAILABLE,
//   payload: event
// });

// export const getFreeSlots = dates => ({
//   type: CalendarActionTypes.GET_FREE_SLOTS,
//   payload: dates
// });
