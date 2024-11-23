import InputError from "@/Components/InputError";
import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function RegisterStudents() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        nis: "",
        class_origin: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("students.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50 p-6 min-w-[1280px]">
            <div className="container bg-white rounded-lg shadow-lg overflow-hidden">
                <Head title="Tambah Siswa" />
                <NavLink />
                <form onSubmit={submit} className="pt-6 mx-20 mb-10">
                    <header>
                        <h1 className="text-3xl font-semibold text-center mb-5">
                            Tambah Siswa
                        </h1>
                    </header>
                    <div>
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            placeholder="Nama Siswa"
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            id="nis"
                            name="nis"
                            value={data.nis}
                            className="mt-1 block w-full"
                            type="number"
                            onChange={(e) => setData("nis", e.target.value)}
                            required
                            placeholder="NIS"
                        />

                        <InputError message={errors.nis} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            id="class_origin"
                            name="class_origin"
                            value={data.class_origin}
                            className="mt-1 block w-full"
                            autoComplete="class_origin"
                            isFocused={true}
                            onChange={(e) =>
                                setData("class_origin", e.target.value)
                            }
                            required
                            placeholder="Kelas"
                        />

                        <InputError
                            message={errors.class_origin}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            placeholder="Email"
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                            placeholder="Konfirmasi Password"
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-end">
                        <input
                            type="hidden"
                            name="_token"
                            value={document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute("content")}
                        />
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
