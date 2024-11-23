import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListSiswa() {
    const [students, setStudents] = useState([]);

    console.log("data:", students);

    useEffect(() => {
        axios
            .get(route("students.index"))
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, []);
    return (
        <div>
            <div>
                <PrimaryButton>
                    <Link href={route("students.create")}>Tambah Siswa</Link>
                </PrimaryButton>
            </div>
            <table className="w-full text-left">
                <thead className="text-xl text-white font-semibold bg-secondary">
                    <tr>
                        <th className="p-3">NO</th>
                        <th className="p-3">NAMA</th>
                        <th className="p-3">NIS</th>
                        <th className="p-3">KELAS</th>
                        <th className="p-3">EMAIL</th>
                        <th className="p-3">PASSWORD</th>
                    </tr>
                </thead>
                <tbody className="text-xl">
                    {students.map((student, index) => (
                        <tr key={index} className="bg-blue-100">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{student.name}</td>
                            <td className="p-3">{student.nis}</td>
                            <td className="p-3">{student.class_origin}</td>
                            <td className="p-3">{student.email}</td>
                            <td className="p-3">{student.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
