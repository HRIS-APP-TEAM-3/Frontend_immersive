import React from "react";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";

const About = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <div className="w-[80vw] flex flex-col">
          <div className="bg-white mx-10 p-6 rounded-lg ">
            <div className="flex flex-row items-center">
              <div className="w-[40%] relative h-fit">
                <div className="bg-gray-100 w-[380px] h-[380px] rounded-full absolute bottom-[-40px]"></div>
                <div className="flex justify-end relative">
                  <img
                    src="../../../public/company.jpg"
                    alt=""
                    className="w-[70%] rounded-sm"
                  />
                </div>
                <div className="absolute bottom-[-20px] left-10">
                  <img
                    src="../../../public/company2.jpg"
                    alt=""
                    className="w-[50%]  rounded-sm"
                  />
                </div>
              </div>
              <div className="w-[60%] px-5">
                <div className="text-primary font-semibold">About Company</div>
                <div className="text-3xl font-semibold mt-3">
                  HRIS (Human Resource Information System)
                </div>
                <div className="text-gray-400 mt-3 leading-8">
                  Perusahaan HRIS App adalah inovator terkemuka dalam
                  pengembangan solusi perangkat lunak berbasis cloud untuk
                  manajemen sumber daya manusia. Kami didedikasikan untuk
                  membantu organisasi dari berbagai industri mengelola tenaga
                  kerja mereka dengan lebih efisien, efektif, dan berkelanjutan.
                </div>
                <div className="text-gray-400 leading-8 mt-4">Produk Unggulan kami : </div>
                <div className="text-gray-400 leading-8">
                  <div className="flex flex-row gap-2">
                    <div className="text-primary">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                    HRIS All-in-One: Solusi HRIS terintegrasi yang mencakup manajemen kehadiran, penggajian, manajemen kinerja, dan pelatihan dalam satu platform.
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="text-primary">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                    Aplikasi Mobile HR: Aplikasi mobile untuk akses mudah karyawan dan manajer ke data HR penting.
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="text-primary">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                    Penggajian Otomatis: Otomatisasi proses penggajian untuk akurasi dan efisiensi tinggi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
