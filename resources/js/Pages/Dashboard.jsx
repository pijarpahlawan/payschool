import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddBilling from "@/Contents/AddBilling";
import BillingReport from "@/Contents/BillingReport";
import ListSiswa from "@/Contents/ListSiswa";
import { useState } from "react";

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("billingReport");
    const getContent = () => {
        switch (activeTab) {
            case "billingReport":
                return <BillingReport />;
            case "addBilling":
                return <AddBilling />;
            case "listSiswa":
                return <ListSiswa />;
            default:
                return null;
        }
    };
    return (
        <AuthenticatedLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            <Head title="Dashboard" />
            {getContent()}
        </AuthenticatedLayout>
    );
}
