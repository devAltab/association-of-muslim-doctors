import React from "react";

const activities = [
    {
        title: "Annual Conferences",
        image: "/images/annual.jpg",
    },
    {
        title: "CMEs",
        image: "/images/cmes.jpg",
    },
    {
        title: "Workshops",
        image: "/images/workshop.png",
    },
    {
        title: "Health Camps",
        image: "/images/health.jpg",
    },
    {
        title: "Blood Donation Camps",
        image: "/images/blood.jpg",
    },
];

export default function ActivitySection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">


                <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
                    Our Activity
                </h2>

                <div className="mt-3 w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>


                <p className="text-center text-gray-600 mt-6 text-lg font-medium">
                    Medical Education & Health Awareness
                </p>


                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">

                    {activities.map((act, index) => (
                        <div
                            key={index}
                            className="bg-white w-full max-w-[300px] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-1 cursor-pointer"
                        >

                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={act.image}
                                    alt={act.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                                />
                            </div>


                            <div className="py-4 px-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {act.title}
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
