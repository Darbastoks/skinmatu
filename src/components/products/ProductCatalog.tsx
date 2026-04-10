"use client";

import { useState, useMemo } from "react";
import { Product, ProductCategory } from "@/types";
import { products, categoryLabels, brandList } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

const ITEMS_PER_PAGE = 12;

const sortLabels: Record<SortOption, string> = {
  "name-asc": "Pavadinimas A–Ž",
  "name-desc": "Pavadinimas Ž–A",
  "price-asc": "Kaina: mažiausia",
  "price-desc": "Kaina: didžiausia",
};

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("name-asc");
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return Array.from(cats).sort();
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedBrand !== "all") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    result.sort((a, b) => {
      switch (sort) {
        case "name-asc":
          return a.name.localeCompare(b.name, "lt");
        case "name-desc":
          return b.name.localeCompare(a.name, "lt");
        case "price-asc":
          return (a.price ?? 0) - (b.price ?? 0);
        case "price-desc":
          return (b.price ?? 0) - (a.price ?? 0);
      }
    });

    return result;
  }, [selectedCategory, selectedBrand, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
    setSort("name-asc");
    setPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="lg:hidden flex items-center justify-center gap-2 border border-sand py-3 px-4 text-[11px] font-medium tracking-[0.1em] uppercase text-mahogany"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Filtrai
          {(selectedCategory !== "all" || selectedBrand !== "all") && (
            <span className="bg-tobacco text-vanilla text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {(selectedCategory !== "all" ? 1 : 0) +
                (selectedBrand !== "all" ? 1 : 0)}
            </span>
          )}
        </button>

        {/* Sidebar Filters */}
        <aside
          className={cn(
            "lg:w-64 flex-shrink-0",
            mobileFiltersOpen ? "block" : "hidden lg:block"
          )}
        >
          <div className="sticky top-32 space-y-10">
            {/* Categories */}
            <div>
              <h3 className="font-serif italic font-semibold text-xl mb-4 text-mahogany">
                Kategorijos
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className={cn(
                      "text-sm w-full text-left py-2 px-3 transition-colors duration-400 rounded-sm",
                      selectedCategory === "all"
                        ? "bg-tobacco/10 text-tobacco font-medium"
                        : "text-mahogany/60 hover:text-tobacco hover:bg-vanilla/40"
                    )}
                  >
                    Visos kategorijos
                    <span className="text-mountain ml-1">
                      ({products.length})
                    </span>
                  </button>
                </li>
                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.category === cat
                  ).length;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={cn(
                          "text-sm w-full text-left py-2 px-3 transition-colors duration-400 rounded-sm",
                          selectedCategory === cat
                            ? "bg-tobacco/10 text-tobacco font-medium"
                            : "text-mahogany/60 hover:text-tobacco hover:bg-vanilla/40"
                        )}
                      >
                        {categoryLabels[cat] || cat}
                        <span className="text-mountain ml-1">({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-8 h-[1px] bg-sand" />

            {/* Brands */}
            <div>
              <h3 className="font-serif italic font-semibold text-xl mb-4 text-mahogany">
                Gamintojai
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleBrandChange("all")}
                    className={cn(
                      "text-sm w-full text-left py-2 px-3 transition-colors duration-400 rounded-sm",
                      selectedBrand === "all"
                        ? "bg-tobacco/10 text-tobacco font-medium"
                        : "text-mahogany/60 hover:text-tobacco hover:bg-vanilla/40"
                    )}
                  >
                    Visi gamintojai
                  </button>
                </li>
                {brandList.map((brand) => {
                  const count = products.filter(
                    (p) => p.brand === brand
                  ).length;
                  return (
                    <li key={brand}>
                      <button
                        onClick={() => handleBrandChange(brand)}
                        className={cn(
                          "text-sm w-full text-left py-2 px-3 transition-colors duration-400 rounded-sm",
                          selectedBrand === brand
                            ? "bg-tobacco/10 text-tobacco font-medium"
                            : "text-mahogany/60 hover:text-tobacco hover:bg-vanilla/40"
                        )}
                      >
                        {brand}
                        <span className="text-mountain ml-1">({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Reset */}
            {(selectedCategory !== "all" || selectedBrand !== "all") && (
              <button
                onClick={resetFilters}
                className="text-[11px] font-medium tracking-[0.1em] uppercase text-tobacco hover:text-mahogany transition-colors duration-400 link-underline"
              >
                Išvalyti filtrus
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand/30">
            <p className="text-[11px] tracking-wider uppercase text-mountain">
              Rodoma <span className="font-medium text-mahogany">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "prekė" : "prekių"}
            </p>
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as SortOption);
                setPage(1);
              }}
              className="text-sm border border-sand bg-vanilla/20 px-4 py-2 focus:outline-none focus:border-tobacco text-mahogany transition-colors"
            >
              {Object.entries(sortLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Product Grid */}
          {paged.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {paged.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-vanilla/10 border border-sand/20">
              <p className="text-mountain text-sm md:text-base mb-6">
                Prekių nerasta pagal pasirinktus filtrus.
              </p>
              <button
                onClick={resetFilters}
                className="text-[11px] font-medium tracking-[0.1em] uppercase text-tobacco hover:text-mahogany transition-colors duration-400 link-underline"
              >
                Išvalyti filtrus
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-16 pt-8 border-t border-sand/30">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 flex items-center justify-center border border-sand text-mahogany disabled:opacity-30 disabled:cursor-not-allowed hover:border-tobacco hover:text-tobacco transition-colors duration-400"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors duration-400",
                    p === page
                      ? "bg-tobacco text-vanilla border border-tobacco"
                      : "border border-sand text-mahogany hover:border-tobacco hover:text-tobacco"
                  )}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-sand text-mahogany disabled:opacity-30 disabled:cursor-not-allowed hover:border-tobacco hover:text-tobacco transition-colors duration-400"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
