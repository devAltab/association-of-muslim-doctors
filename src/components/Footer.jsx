import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-200 pt-14 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">


                <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                        Association of Muslim Doctors
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        Working together to serve humanity through healthcare, education, and
                        community support. AMD organizes conferences, medical camps, and
                        academic programs across India.
                    </p>
                </div>


                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Important Links
                    </h4>

                    <ul className="space-y-2 text-sm">
                        <li>
                            <button className="hover:text-emerald-400 transition text-left w-full bg-transparent">
                                Milestone
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-emerald-400 transition text-left w-full bg-transparent">
                                Gallery
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-emerald-400 transition text-left w-full bg-transparent">
                                Contact Us
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-emerald-400 transition text-left w-full bg-transparent">
                                About Us
                            </button>
                        </li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                        Registered Office
                    </h4>

                    <div className="space-y-4 text-sm">
                        <p className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-emerald-400 mt-1" />
                            Hussain Cottage, Ramna Road,
                            Patna 800004 (Bihar) India
                        </p>

                        <p className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-emerald-400 mt-1" />
                            Secretariat : White House,
                            Opp. Hari Kripa Hospital, Rukunpura,
                            Bailey Road, Patna - 800025
                        </p>

                        <p className="flex items-center gap-3">
                            <FaPhoneAlt className="text-emerald-400" />
                            +91 9431057091
                        </p>

                        <p className="flex items-center gap-3">
                            <FaEnvelope className="text-emerald-400" />
                            infoamd2009@gmail.com
                        </p>
                    </div>
                </div>

            </div>


            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Association of Muslim Doctors — All Rights Reserved.
            </div>
        </footer>
    );
}
