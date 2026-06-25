import {
    ArrowRight,
    MapPin,
    Clock,
    Calendar,
    Wallet,
    Building2,
    CheckCircle2,
    Leaf
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { OPPORTUNITIES, FUND_COLOR } from "../data/data";
import { formatDate } from "../data/formatDate";
import "../style/detail.css";
import Form from "../componant/Form";

export default function OpportunityDetail() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const navigate = useNavigate();
    const { id } = useParams();
    const [showForm, setShowForm] = useState(false);
    const o = OPPORTUNITIES.find(
        (item) => item.id === Number(id)
    );

    if (!o) {
        return <h2>{t("opportunityNotFound")}</h2>;
    }

    return (
        <div className="fk-root">
            <header className="fk-detail-header">
                <div className="fk-detail-top-row">
                    <button
                        className="fk-back-btn"
                        onClick={() => navigate("/opportunities")}
                    >
                        <ArrowRight size={16} />
                        {t("backToOpportunities")}
                    </button>

                    <span className="fk-detail-type">
                        {o.type[lang]}
                    </span>
                </div>
                <h1 className="fk-detail-title">
                    {o.title[lang]}
                </h1>

                <p className="fk-detail-org">
                    {t("organizedBy")} {o.organizer[lang]}
                </p>

            </header>

            <div className="fk-detail-body">
                <div className="fk-detail-stats">
                    <div className="fk-stat">
                        <span className="fk-stat-icon">
                            <MapPin size={16} />
                        </span>

                        <div>
                            <div className="fk-stat-label">
                                {t("country")}
                            </div>

                            <div className="fk-stat-value">
                                {o.country[lang]}
                            </div>
                        </div>
                    </div>

                    <div className="fk-stat">
                        <span className="fk-stat-icon">
                            <Calendar size={16} />
                        </span>

                        <div>
                            <div className="fk-stat-label">
                                {t("openDate")}
                            </div>

                            <div className="fk-stat-value">
                                {formatDate(o.openDate, lang)}
                            </div>
                        </div>
                    </div>

                    <div className="fk-stat">
                        <span className="fk-stat-icon">
                            <Clock size={16} />
                        </span>

                        <div>
                            <div className="fk-stat-label">
                                {t("deadline")}
                            </div>

                            <div className="fk-stat-value">
                                {formatDate(o.deadline, lang)}
                            </div>
                        </div>
                    </div>

                    <div className="fk-stat">
                        <span className="fk-stat-icon">
                            <Wallet size={16} />
                        </span>

                        <div>
                            <div className="fk-stat-label">
                                {t("supportValue")}
                            </div>

                            <div className="fk-stat-value">
                                {o.value[lang]}
                            </div>
                        </div>
                    </div>

                    <div className="fk-stat">
                        <span className="fk-stat-icon">
                            <Building2 size={16} />
                        </span>

                        <div>
                            <div className="fk-stat-label">
                                {t("fundingStatus")}
                            </div>

                            <div
                                className="fk-stat-value"
                                style={{
                                    color:
                                        FUND_COLOR[o.funded[lang]],
                                }}
                            >
                                {o.funded[lang]}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fk-detail-section">
                    <h3>{t("aboutOpportunity")}</h3>

                    <p>{o.description[lang]}</p>
                </div>

                <div className="fk-detail-section">
                    <h3>{t("requirements")}</h3>

                    <ul className="fk-list-clean">
                        {o.requirements[lang].map(
                            (r, i) => (
                                <li key={i}>
                                    <CheckCircle2 size={16} />
                                    <span>{r}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="fk-detail-section">
                    <h3>{t("benefits")}</h3>

                    <ul className="fk-list-clean">
                        {o.benefits[lang].map(
                            (b, i) => (
                                <li key={i}>
                                    <Leaf size={16} />
                                    <span>{b}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="fk-detail-actions">
                    {showForm && <Form onClose={() => setShowForm(false)} />}
                    <button className="fk-apply-btn" onClick={() => setShowForm(true)}>
                        {t("applyNow")}
                    </button>
                </div>
            </div>
        </div>
    );
}