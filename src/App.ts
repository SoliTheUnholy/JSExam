import {Box} from "./Box.ts"
document.documentElement.classList.add('dark')
export const App = () => {
    return Box({element:"div",
        attr:{class:"h-screen flex items-center justify-center bg-slate-600"},
        children:
        Box({element:"form",
            attr:{class:"flex-col items-center justify-center"},
            children:
            [Box({
                element:"input",
                attr:{type:"number", id:"Number", class:"mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-purple-500 dark:focus:border-purple-500"}
            }),
            Box({element:"button",
                attr:{id:"Random", class:"w-full text-gray-100 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800", type:"button"},
                children: "Random"
            }),
            Box({element:"button",
                attr:{id:"Prime", class:"w-full text-gray-100 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800", type:"button"},
                children: "Prime"
            }),
            Box({element:"button",
                attr:{id:"Reset", class:"w-full text-gray-100 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800", type:"submit"},
                children: "Reset"
            })]
        })
    })
}