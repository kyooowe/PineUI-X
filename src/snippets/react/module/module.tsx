import { memo, useMemo } from "react";
import MainCard from "@/components/cards/main-card.component";

const Main = memo(() => {

    //#region UseMemo
    const MainCardHeader = useMemo(() => {
        return (
            <div className="flex justify-between">
                <div>
                    <p className="text-sm text-gray-700 dark:text-gray-400">Card Header Name</p>
                </div>
                <div>
                    <p className="text-sm text-gray-700 dark:text-gray-400">Card Header Button</p>
                </div>
            </div>
        )
    }, [])

    const MainCardBody = useMemo(() => {
        return (
            <div className="px-3 py-3">
                <p className="text-md font-light text-gray-600 dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        )
    }, [])

    const MainCardFooter = useMemo(() => {
        return (
            <p className="text-sm text-gray-700 dark:text-gray-400">Last view 2h ago</p>
        )
    }, [])
    //#endregion

    return (
        <div>
            <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-violet-600 text-4xl font-bold'>Starter Page</span>
            <MainCard className="mt-5" header={MainCardHeader} body={MainCardBody} footer={MainCardFooter} />
        </div>
    )
})

export default Main;