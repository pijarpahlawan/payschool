import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function ListSiswa() {
    return (
        <div>
            <div>
                <PrimaryButton>
                    <Link href={route("addStudent")}>Tambah Siswa</Link>
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
                    <tr className="bg-blue-100">
                        <td className="p-3">1</td>
                        <td className="p-3">Nama siswa</td>
                        <td className="p-3">100001</td>
                        <td className="p-3">XII RPL 1</td>
                        <td className="p-3">siswa@students.ac.id</td>
                        <td className="p-3">siswa123</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
