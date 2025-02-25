import { filterList } from "@/modules/TodoCreater/components/filterList/filterList";
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

describe('todoList',() => {
    const activeArr = [list[0],list[2]]
    const completedArr = [list[1],list[3],list[4]]
    test('all test',() => {
        expect(filterList('All',list)).toEqual(list)
    })
    test('active test',() => {
        expect(filterList('Active',list)).toEqual(activeArr)
    })
    test('completed test',() => {
        expect(filterList('Completed',list)).toEqual(completedArr)
    })
})