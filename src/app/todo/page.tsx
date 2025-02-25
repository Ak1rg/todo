import TodoCreater from "@/modules/TodoCreater/TodoCreater"

const page = () => {
    return (
        <main className="pt-[50px] flex flex-col justify-center items-center">
            <h1 className="text-[60px] text-center">Todos</h1>
            <TodoCreater/>
        </main>
    )
}

export default page