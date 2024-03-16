import { JSX, type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';


export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};