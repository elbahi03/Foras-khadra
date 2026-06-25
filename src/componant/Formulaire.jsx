import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/form.css";
import Validee from "./Valide";

export default function Form({ onClose }) {
    const { t } = useTranslation();

    const [values, setValues] = useState({
        fullName: "",
        phone: "",
        email: "",
        country: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function validate() {
        const newErrors = {};

        if (!values.fullName.trim())
            newErrors.fullName = t("errorRequired");

        if (!values.phone.trim())
            newErrors.phone = t("errorRequired");
        else if (!/^\+\d{7,15}$/.test(values.phone.trim()))
            newErrors.phone = t("errorPhone");

        if (!values.email.trim())
            newErrors.email = t("errorRequired");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
            newErrors.email = t("errorEmail");

        if (!values.country.trim())
            newErrors.country = t("errorRequired");

        return newErrors;
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    function handleSubmit() {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log("Form submitted:", values);
        setSubmitted(true);
    }
    if (submitted) return <Validee onClose={onClose} />;

    return (
        <div className="fk-form-overlay">
            <div className="fk-form-card">

                <h2 className="fk-form-title">{t("applyNow")}</h2>
                <p className="fk-form-subtitle">{t("fillForm")}</p>

                {/* Nom complet */}
                <div className="fk-form-group">
                    <label className="fk-form-label">{t("fullName")}</label>
                    <input
                        className={`fk-form-input ${errors.fullName ? "input-error" : ""}`}
                        type="text"
                        name="fullName"
                        placeholder={t("fullNamePlaceholder")}
                        value={values.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && (
                        <span className="fk-form-error">{errors.fullName}</span>
                    )}
                </div>

                {/* Téléphone */}
                <div className="fk-form-group">
                    <label className="fk-form-label">{t("phone")}</label>
                    <input
                        className={`fk-form-input ${errors.phone ? "input-error" : ""}`}
                        type="tel"
                        name="phone"
                        placeholder={t("phonePlaceholder")}
                        value={values.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && (
                        <span className="fk-form-error">{errors.phone}</span>
                    )}
                </div>

                {/* Email */}
                <div className="fk-form-group">
                    <label className="fk-form-label">{t("email")}</label>
                    <input
                        className={`fk-form-input ${errors.email ? "input-error" : ""}`}
                        type="email"
                        name="email"
                        placeholder={t("emailPlaceholder")}
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="fk-form-error">{errors.email}</span>
                    )}
                </div>

                {/* Pays */}
                <div className="fk-form-group">
                    <label className="fk-form-label">{t("country")}</label>
                    <input
                        className={`fk-form-input ${errors.country ? "input-error" : ""}`}
                        type="text"
                        name="country"
                        placeholder={t("countryPlaceholder")}
                        value={values.country}
                        onChange={handleChange}
                    />
                    {errors.country && (
                        <span className="fk-form-error">{errors.country}</span>
                    )}
                </div>

                <div className="fk-form-actions">
                    <button className="fk-form-submit" onClick={handleSubmit}>
                        {t("submit")}
                    </button>
                    <button className="fk-form-cancel" onClick={onClose}>
                        {t("cancel")}
                    </button>
                </div>

            </div>
        </div>
    );
}