import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
export default function AddBilling() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        amount: "",
        target: "",
        due_date: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("bill.store"));
    };
    return (
        <div className="w-full flex justify-center flex-col">
            <header>
                <h1 className="text-3xl font-semibold text-center mb-10">
                    Tambah Tagihan Siswa
                </h1>
            </header>
            <form onSubmit={submit}>
                <div className="mb-10">
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        placeholder="Nama Item Pembayaran"
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mb-10">
                    <TextInput
                        id="amount"
                        name="amount"
                        value={data.amount}
                        className="mt-1 block w-full"
                        autoComplete="amount"
                        isFocused={true}
                        onChange={(e) => setData("amount", e.target.value)}
                        required
                        placeholder="Nominal"
                    />

                    <InputError message={errors.amount} className="mt-2" />
                </div>
                <div className="mb-10">
                    <TextInput
                        id="target"
                        name="target"
                        value={data.target}
                        className="mt-1 block w-full"
                        autoComplete="target"
                        isFocused={true}
                        onChange={(e) => setData("target", e.target.value)}
                        required
                        placeholder="Target yang siswa"
                    />

                    <InputError message={errors.target} className="mt-2" />
                </div>
                <div className="mb-10">
                    <TextInput
                        id="due_date"
                        name="due_date"
                        value={data.due_date}
                        className="mt-1 block w-full"
                        type="date"
                        onChange={(e) => setData("due_date", e.target.value)}
                        required
                    />

                    <InputError message={errors.due_date} className="mt-2" />
                </div>
                <div>
                    <PrimaryButton disabled={processing}>
                        Tambah Tagihan
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
