/**
 * シリーズ・ハブのカタログ。
 *
 * 院ごとに領域を分ける。
 * 衆議院: 公開 URL は election-shugiin-{slug}.visualizing.jp、ローカル作業ディレクトリは ../shugiin-{slug}/。
 */

export type CategoryId = "shugiin";

export type ProjectStatus = "published" | "pending";

export type CatalogEntry = {
  slug: string;
  title: string;
  source: string;
  period: string;
  category: CategoryId;
  status: ProjectStatus;
  url: string | null;
  art: string;
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "shugiin", label: "衆議院" },
];

export const CATALOG: CatalogEntry[] = [
  // —— 衆議院 ——
  {
    slug: "turnout",
    title: "衆議院選挙で、どれだけの人が投票したか",
    source: "総務省 結果調ほか",
    period: "1946–2026",
    category: "shugiin",
    status: "published",
    url: "https://election-shugiin-turnout.visualizing.jp/",
    art: "/art/turnout.svg",
  },
  {
    slug: "timeseries",
    title: "衆議院選挙で、どの党がどれだけ票を得てきたか",
    source: "総務省 結果調",
    period: "1996–2026",
    category: "shugiin",
    status: "published",
    url: "https://election-shugiin-timeseries.visualizing.jp/",
    art: "/art/timeseries.svg",
  },
  {
    slug: "candidates",
    title: "衆議院選挙で、誰が立候補し、誰が当選したか",
    source: "総務省 結果調",
    period: "2005–2026",
    category: "shugiin",
    status: "published",
    url: "https://election-shugiin-candidates.visualizing.jp/",
    art: "/art/candidates.svg",
  },
  {
    slug: "seats",
    title: "衆議院選挙で、得た票はどれだけ議席になったか",
    source: "総務省 結果調",
    period: "1996–2026",
    category: "shugiin",
    status: "published",
    url: "https://election-shugiin-seats.visualizing.jp/",
    art: "/art/seats.svg",
  },
];
