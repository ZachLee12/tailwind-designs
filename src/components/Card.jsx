import { VscAccount } from "react-icons/vsc";
const Card = ({ users }) => {

    return (
        <div id="card" className="bg-white rounded-lg align-center shadow-lg max-w-xl">
            <header className="px-10 py-5 flex flex-col md:flex-row items-center justify-between">
                <div className="text-2xl font-semibold">Who to follow</div>
                <div className="text-blue-600 font-semibold">Refresh • See all</div>
            </header>

            <ul className="users bg-blue-50 p-5 rounded-b-lg text-center">
                {users.map((user, index) => (
                    <li key={index} className={`sm:flex-row sm:items-center sm:px-14  px-5 user flex flex-col gap-4 justify-between items-center p-7 ${index !== users.length - 1 ? 'border-b-2' : 'border-gray-300'}`}>
                        <VscAccount size={40} className="" />
                        <div className="user-details">
                            <div className="name font-bold tracking-wide">{user.name}</div>
                            <div className="friends text-gray-500">{user.friends} mutual friends</div>
                        </div>
                        <button className="border-2 rounded-2xl font-semibold border-gray-300 py-1 px-3 tracking-wide text-xs">FOLLOW</button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Card