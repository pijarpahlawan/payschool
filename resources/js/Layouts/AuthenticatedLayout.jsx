import NavLink from "@/Components/NavLink";
import TabBar from "@/Components/TabBar";

export default function AuthenticatedLayout({
    children,
    activeTab,
    setActiveTab,
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50 p-6 min-w-[1280px]">
            <div className="container bg-white rounded-lg shadow-lg overflow-hidden">
                <NavLink />
                <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="pt-6 mx-20 mt-10 mb-32">{children}</main>
            </div>
        </div>
    );
}
