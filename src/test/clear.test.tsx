import '@testing-library/jest-dom'; 
import BottomButtons from "@/modules/BottomButtons/BottomButtons";
import { store } from "@/store/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { expect, test } from "vitest";
import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from '@/store/reducers/appSlice/appSlice';

test('clear completed',() => {
    const testStore = configureStore({
        reducer: { app: appSlice.reducer },
        preloadedState: {
            app: {
                todosList: [
                    { string: 'Task 1', check: true },
                    { string: 'Task 2', check: false },
                ],
                listValue: '',
            },
        } 
    });
    render(
        <Provider store={testStore}>
            <BottomButtons />
        </Provider>
    )
    const btn = screen.getByTestId('clear')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    const list = testStore.getState().app.todosList
    expect(list).toEqual([{ string: 'Task 2', check: false }])
})