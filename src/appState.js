import { createGlobalState } from 'react-hooks-global-state';

const initialState = { currentArticle: '' };

export const { useGlobalState } = createGlobalState(initialState);


