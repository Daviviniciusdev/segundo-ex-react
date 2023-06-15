import { Student } from "@/types/Student";

type Props = {
    students: Student[];
}

export const StudentTable = ({students} : Props) => {
    return(
        <table className="w-full border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade1</th>
                    <th className="p-3">Grade2</th>
                    <th className="p-3">Final Grade</th>
                </tr>
            </thead>
            <tbody>
                {students.map(item => (
                    <tr className=" text-gray-800 border-gray-600 border-b bg-gray-400" key={item.id}>
                        <td className=" p-3 flex items-center">
                            <img className="w-20 h-20 rounded-full mr-3" src={item.avatar} alt={item.name} />
                           <div>
                            <div className="font-bold">{item.name}</div>
                            <div>{item.email}</div>
                           </div>
                        </td>
                        <td>
                            {item.active && <div className="px-2 py-1 inline-block bg-green-600 text-white rounded-md">Active</div>}
                            {!item.active &&<div className="px-2 py-1 inline-block bg-red-600 text-white rounded-md">Inactive</div>}
                        </td>
                        <td>{item.grade1.toFixed(1)}</td>
                        <td>{item.grade2}</td>
                        <td className="font-bold">{ item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '...'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}