import '@testing-library/jest-dom';
import TodoInput  from '@/modules/TodoCreater/components/TodoInput/TodoInput';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

describe('todo input', () => {
    test('check input value and press enter', () => {
        render(
            <Provider store={store}>
                <TodoInput />
            </Provider>
        );
        const input = screen.getByPlaceholderText('What need to be done?');
        expect(input).toBeInTheDocument();

        fireEvent.change(input,{target:{value:'Test todo'}});
        expect(input).toHaveValue('Test todo');
        
        fireEvent.keyDown(input,{key:'Enter',code:'Enter'});
        const updatedList = store.getState().app.todosList;
        expect(updatedList).toEqual([{string:'Test todo',check:false}])
    });
});