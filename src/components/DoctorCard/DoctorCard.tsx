import React from "react";

import style from "./DoctorCard.module.css";
import Image from "next/image";

function DoctorCard({
  name,
  // image,
  averageRating,
  address,
  brief,
}: Readonly<{
  id: string;
  name: string;
  image: string;
  averageRating: number;
  address: string;
  brief: string;
}>) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.left}>
          <Image
            className={style.avatar}
            src="/6183533.png"
            alt="example image"
            width={190}
            height={190}
          />
        </div>
        <div className={style.right}>
          <h1 className={style.name}>{name}</h1>
          <p className={style.brief}>{brief}</p>
          <p className={style.address}>
            <span className={style.span}>آدرس :</span> {address}
          </p>
          <p>
            <span className={style.span}>امتیاز :</span> {averageRating}
          </p>
          <button className={style.reserveButton}>مشاهده و رزرو نوبت</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
