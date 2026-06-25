import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search, Leaf, SlidersHorizontal, X } from "lucide-react";
import { OPPORTUNITIES } from "../data/data";
import Cart from "../componant/cart";
import "../style/opport.css";

const TYPES   = ["all", "scholarship", "training", "competition"];
const FUNDING = ["all", "fullyFunded", "partiallyFunded", "unfunded"];

const TYPE_MAP = {
  scholarship:  "Scholarship",
  training:     "Training",
  competition:  "Competition",
};

const FUND_MAP = {
  fullyFunded:      "Fully Funded",
  partiallyFunded:  "Partially Funded",
  unfunded:         "Unfunded",
};

export default function OpportunitiesPage() {
  const { t } = useTranslation();

  const [query,       setQuery]       = useState("");
  const [typeFilter,  setTypeFilter]  = useState("all");
  const [fundFilter,  setFundFilter]  = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    return OPPORTUNITIES.filter((o) => {
      const matchesQuery = Object.values(o.title).some((title) =>
        title.toLowerCase().includes(query.trim().toLowerCase())
      );
      const matchesType = typeFilter === "all" || o.type.en === TYPE_MAP[typeFilter];
      const matchesFund = fundFilter === "all" || o.funded.en === FUND_MAP[fundFilter];
      return matchesQuery && matchesType && matchesFund;
    });
  }, [query, typeFilter, fundFilter]);

  const activeFilterCount =
    (typeFilter !== "all" ? 1 : 0) + (fundFilter !== "all" ? 1 : 0);

  return (
    <div className="fk-root">

      <header className="fk-header">
        <div className="fk-leaf-row">
          <Leaf size={18} />
          <span>{t("greenOpportunities")}</span>
        </div>
        <h1 className="fk-title">{t("opportunitiesTitle")}</h1>
        <p className="fk-subtitle">{t("opportunitiesSubtitle")}</p>
      </header>

      <div className="fk-search-wrap">
        <div className="fk-search-card">
          <div className="fk-search-input-box">
            <Search size={18} color="#1F6B3F" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button className="fk-filter-btn" onClick={() => setFiltersOpen((v) => !v)}>
            <SlidersHorizontal size={16} />
            {t("filter")}
            {activeFilterCount > 0 && (
              <span className="badge">{activeFilterCount}</span>
            )}
          </button>
        </div>
      </div>

      {filtersOpen && (
        <div className="fk-filters-panel">

          <div className="fk-filter-group">
            <span className="fk-filter-label">{t("type")}</span>
            <div className="fk-chip-row">
              {TYPES.map((tp) => (
                <button
                  key={tp}
                  className={`fk-chip ${typeFilter === tp ? "active" : ""}`}
                  onClick={() => setTypeFilter(tp)}
                >
                  {t(tp)}
                </button>
              ))}
            </div>
          </div>

          <div className="fk-filter-group">
            <span className="fk-filter-label">{t("fundingStatus")}</span>
            <div className="fk-chip-row">
              {FUNDING.map((fd) => (
                <button
                  key={fd}
                  className={`fk-chip ${fundFilter === fd ? "active" : ""}`}
                  onClick={() => setFundFilter(fd)}
                >
                  {t(fd)}
                </button>
              ))}
            </div>
          </div>

          {activeFilterCount > 0 && (
            <div className="fk-filter-group">
              <span className="fk-filter-label">&nbsp;</span>
              <div className="fk-chip-row">
                <button
                  className="fk-chip fk-chip-clear"
                  onClick={() => { setTypeFilter("all"); setFundFilter("all"); }}
                >
                  <X size={12} />
                  {t("clearFilters")}
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      <div className="fk-results-bar">
        <span>{results.length} {t("availableOpportunities")}</span>
      </div>

      {results.length > 0 ? (
        <div className="fk-grid">
          {results.map((o) => (
            <Cart key={o.id} opportunity={o} />
          ))}
        </div>
      ) : (
        <div className="fk-empty">
          <Leaf size={28} />
          <p>{t("noResults")}</p>
        </div>
      )}

    </div>
  );
}