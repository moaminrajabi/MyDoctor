"use client";

import DoctorCard from "@/components/DoctorCard/DoctorCard";
import { doctors } from "@/data/doctors";
import React, { useState } from "react";

function Page() {
  // تعداد دکترها در هر صفحه
  const doctorsPerPage = 3;
  // صفحه‌ی فعلی
  const [currentPage, setCurrentPage] = useState(1);

  // محاسبه‌ی دکترها برای نمایش در صفحه‌ی فعلی
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  // تغییر صفحه با کلیک روی دکمه‌های صفحه‌بندی
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // محاسبه تعداد کل صفحات
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(doctors.length / doctorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {currentDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
      <div>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Page;
