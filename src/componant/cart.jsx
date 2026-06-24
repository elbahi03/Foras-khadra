import { MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FUND_COLOR } from "../data/data";
import { formatDate } from "../data/formatDate";
import "../style/cart.css";


export default function Cart({opportunity}) {

    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <div className="fk-card">
            <div className="fk-card-top">
                <span className="fk-type-tag">
                    {opportunity.type[lang]}
                </span>
            </div>
            <div className="fk-card-title">
                {opportunity.title[lang]}
            </div>
            <div className="fk-meta-row">
                <MapPin size={14} />
                <span>
                    {opportunity.country[lang]}
                </span>
            </div>
            <div className="fk-meta-row">
                <Clock size={14} />
                <span>
                    {t("deadline")}:{" "}
                    {formatDate(opportunity.deadline, lang)}
                </span>
            </div>
            <div className="fk-card-footer">
                <div className="fk-fund-dot">
                    <span
                        className="dot"
                        style={{
                            background:
                                FUND_COLOR[opportunity.funded[lang]]
                        }}
                    />
                    <span
                        style={{
                            color:
                                FUND_COLOR[opportunity.funded[lang]]
                        }}
                    >
                        {opportunity.funded[lang]}
                    </span>
                </div>
                <button className="fk-card-btn">
                    {t("viewDetails")}
                </button>
            </div>
        </div>
    );
}