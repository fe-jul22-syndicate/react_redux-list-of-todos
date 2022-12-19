import { Status } from '../types/Status';

type QueryAction = {
  type: 'filter/QUERY';
  payload: string;
};

type StatusAction = {
  type: 'filter/STATUS';
  payload: Status;
};

const query = (value: string): QueryAction => ({
  type: 'filter/QUERY',
  payload: value,
});

const status = (value: Status): StatusAction => ({
  type: 'filter/STATUS',
  payload: value,
});

type State = {
  query: string;
  status: Status;
};

const defaultState = {
  query: '',
  status: Status.ALL,
};

type Action = QueryAction | StatusAction;

const filterReducer = (state = defaultState, action: Action): State => {
  switch (action.type) {
    case 'filter/QUERY':
      return { ...state, query: action.payload };
    case 'filter/STATUS':
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export const actions = { query, status };
export default filterReducer;
