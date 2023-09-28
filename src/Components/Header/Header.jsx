import ToggleTheme from "../ToggleTheme/ToggleTheme.jsx/ToggleTheme"

const Headers = ({User}) => {
    return <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
        <span className="text-gray-100 "> Olá, {User?.name || "Usuário"}</span>
        <h1  className="text-gray-100 text-xl hover:text-2xl sm:cursor-pointer">Newsletter</h1>
        <ToggleTheme />
    </div>
}

export default Headers