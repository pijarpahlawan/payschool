import { Link, usePage } from "@inertiajs/react";

export default function NavLink() {
    const user = usePage().props?.auth?.user;
    return (
        <div className="bg-secondary text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">
                {" "}
                <Link href={route("dashboard")}>Admin Payschool</Link>
            </h1>
            <div className="flex gap-5 items-center">
                <span className="text-primary font-semibold text-xl">
                    {user.name}
                </span>
                <Link href={route("logout")} method="post" as="button">
                    <svg
                        fill="#ffffff"
                        height="20px"
                        width="20px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 489.1 498.1"
                        xmlSpace="preserve"
                    >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                                {" "}
                                <g>
                                    {" "}
                                    <path d="M303.4,159.15c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l55.9,55.9H12.2c-6.8,0-12.2,5.5-12.2,12.2 c0,6.8,5.5,12.3,12.2,12.3h329.7l-55.9,55.9c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l76.8-76.8 c2.3-2.3,3.6-5.4,3.6-8.7c0-3.2-1.3-6.4-3.6-8.7L303.4,159.15z"></path>{" "}
                                    <path d="M489.1,476.15V12.95c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v463.2c0,6.8,5.5,12.3,12.3,12.3 S489.1,482.95,489.1,476.15z"></path>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    );
}
