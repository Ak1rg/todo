import { filterItemsLeft } from "@/modules/BottomButtons/BottomButtons";
import { describe, expect, test } from "vitest";

const list = [
    {
        string:'Something1',
        check:false
    },
    {
        string:'Something2',
        check:true
    },
    {
        string:'Something3',
        check:false
    },
    {
        string:'Something4',
        check:true
    },
    {
        string:'Something5',
        check:true
    },
]

describe('filter items left',() => {
    test('all test',() => {
        expect(filterItemsLeft('All',list)).toBe(2)
    })
    test('active test',() => {
        expect(filterItemsLeft('Active',list)).toBe(2)
    })
    test('completed test',() => {
        expect(filterItemsLeft('Completed',list)).toBe(0)
    })
})