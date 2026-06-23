import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/Header.css"
import logo from "../asset/logo/white.png";


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";
    };

    return (
        <header className="header">
            <a href="/" className="header-logo">
                <img src={logo} alt="Logo" />
            </a>

            <div
                className={`menu-toggle ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`nav ${isOpen ? "show" : ""}`}>
                <a href="/" className="nav-link">{t("home")}</a>

                <a href="/opportunities" className="nav-link">
                    {t("opportunities")}
                </a>

                <a href="/about" className="nav-link">
                    {t("about")}
                </a>

                <a href="/contact" className="nav-link">
                    {t("contact")}
                </a>

                <select
                    className="lang-select"
                    value={i18n.language}
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    <option value="en">{t("en")}</option>
                    <option value="ar">{t("ar")}</option>
                    <option value="fr">{t("fr")}</option>
                </select>
            </nav>
        </header>
    );
}

export default Header;

