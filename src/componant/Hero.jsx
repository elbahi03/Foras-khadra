import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import '../style/hero.css';
import hero1 from '../asset/hero/hero1.jpg';
import hero2 from '../asset/hero/hero2.jpg';
import hero3 from '../asset/hero/hero3.jpg';
import hero4 from '../asset/hero/hero4.jpg';
import hero5 from '../asset/hero/hero5.jpg';


import { Pagination, Autoplay } from 'swiper/modules';

export default function Hero() {
    const { t } = useTranslation();
    return (
        <div className="hero-wrapper">
            <Swiper
                dir="ltr"
                pagination={{ dynamicBullets: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={hero1} /></SwiperSlide>
                <SwiperSlide><img src={hero2} /></SwiperSlide>
                <SwiperSlide><img src={hero3} /></SwiperSlide>
                <SwiperSlide><img src={hero4} /></SwiperSlide>
                <SwiperSlide><img src={hero5} /></SwiperSlide>
            </Swiper>

            <div className="hero-content">
                <h1 className="hero-site-name">
                    {t("siteName")}
                </h1>

                <h3 className="hero-title">
                    {t("heroTitle")}
                </h3>

                <button className="hero-btn" onClick={() => window.location.href = "/opportunities"}>
                    {t("volunteerNow")}
                </button>
            </div>
        </div>
    );
}