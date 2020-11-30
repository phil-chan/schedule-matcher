//needs to recieve events as array
export function recieveEvent(event) {
  return {
    type: 'RECIEVE_EVENT',
    event
  }
}
