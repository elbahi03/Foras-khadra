import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../style/valide.css";

export default function Validee({ onClose }) {
    const { t } = useTranslation();

    return (
        <div className="fk-valid-overlay">
            <div className="fk-valid-card">

                <div className="fk-valid-icon">
                    <CheckCircle2 size={48} color="#1F6B3F" />
                </div>

                <h2 className="fk-valid-title">{t("successTitle")}</h2>
                <p className="fk-valid-subtitle">{t("successMessage")}</p>

                <button className="fk-valid-btn" onClick={onClose}>
                    {t("backToOpportunities")}
                </button>

            </div>
        </div>
    );
}