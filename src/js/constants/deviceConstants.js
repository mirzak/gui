module.exports = {
  SELECT_GROUP: 'SELECT_GROUP',
  SELECT_DEVICE: 'SELECT_DEVICE',
  SELECT_DEVICES: 'SELECT_DEVICES',

  ADD_TO_GROUP: 'ADD_TO_GROUP',
  REMOVE_FROM_GROUP: 'REMOVE_FROM_GROUP',
  ADD_GROUP: 'ADD_GROUP',
  RECEIVE_GROUPS: 'RECEIVE_GROUPS',
  RECEIVE_ALL_DEVICE_IDS: 'RECEIVE_ALL_DEVICE_IDS',
  RECEIVE_DEVICE: 'RECEIVE_DEVICE',
  RECEIVE_DEVICES: 'RECEIVE_DEVICES',
  RECEIVE_DEVICE_AUTH: 'RECEIVE_DEVICE_AUTH',
  ADD_DEVICE_AUTHSET: 'ADD_DEVICE_AUTHSET',
  UPDATE_DEVICE_AUTHSET: 'UPDATE_DEVICE_AUTHSET',
  REMOVE_DEVICE_AUTHSET: 'REMOVE_DEVICE_AUTHSET',
  DECOMMISION_DEVICE: 'DECOMMISION_DEVICE',
  RECEIVE_DEVICES_LIST: 'RECEIVE_DEVICE_LIST',
  RECEIVE_GROUP_DEVICES: 'RECEIVE_GROUP_DEVICES',
  SET_TOTAL_DEVICES: 'SET_TOTAL_DEVICES',
  SET_ACCEPTED_DEVICES_COUNT: 'SET_ACCEPTED_DEVICES_COUNT',
  SET_PENDING_DEVICES_COUNT: 'SET_PENDING_DEVICES_COUNT',
  SET_REJECTED_DEVICES_COUNT: 'SET_REJECTED_DEVICES_COUNT',
  SET_PREAUTHORIZED_DEVICES_COUNT: 'SET_PREAUTHORIZED_DEVICES_COUNT',
  SET_FILTER_ATTRIBUTES: 'SET_FILTER_ATTRIBUTES',
  SET_DEVICE_FILTERS: 'SET_DEVICE_FILTERS',

  SET_ACCEPTED_DEVICES: 'SET_ACCEPTED_DEVICES',
  SET_PENDING_DEVICES: 'SET_PENDING_DEVICES',
  SET_REJECTED_DEVICES: 'SET_REJECTED_DEVICES',
  SET_PREAUTHORIZED_DEVICES: 'SET_PREAUTHORIZED_DEVICES',

  SET_UNGROUPED_DEVICES: 'SET_UNGROUPED_DEVICES',
  SET_INACTIVE_DEVICES: 'SET_INACTIVE_DEVICES',

  SET_DEVICE_LIMIT: 'SET_DEVICE_LIMIT',

  DEVICE_LIST_MAXIMUM_LENGTH: 50,
  DEVICE_STATES: {
    accepted: 'accepted',
    pending: 'pending',
    preauth: 'preauthorized',
    rejected: 'rejected'
  },
  // workaround to support showing ungrouped devices, relying on the fact that
  // '*', '|', '=' should not be whitelisted characters in a group name
  UNGROUPED_GROUP: { id: '*|=ungrouped=|*', name: 'Ungrouped' }
};
