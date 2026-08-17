export default function FounderSection() {
  return (
    <section data-section="founder" style={{ background: "#fff", padding: "36px 40px 0", maxWidth: 1024, margin: "0 auto" }}>

      {/* ===== HERO: 写真 + プロフィール ===== */}
      <div style={{ display: "grid", gridTemplateColumns: "490px 1fr", gap: 0, marginBottom: 18 }}>
        {/* 左: 写真 */}
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: 8, height: "100%", background: "#e8b828", zIndex: 2 }} />
          <img
            src="/img/aoki.png"
            alt="青木 一平"
            style={{ width: "100%", height: 450, objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>
        {/* 右: プロフィール */}
        <div style={{ background: "#f5f5f5", padding: "24px 30px 20px" }}>
          <h2 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 8px", fontFamily: '"M PLUS 1p", "Noto Sans JP", sans-serif' }}>
            TELEMO<br />をつくったひと。
          </h2>
          <p style={{ fontSize: 12, color: "#888", letterSpacing: "0.1em", margin: "0 0 2px" }}>アオキ イッペイ</p>
          <p style={{ fontSize: 34, fontWeight: 900, margin: "0 0 3px", fontFamily: '"M PLUS 1p", sans-serif' }}>青木 一平</p>
          <p style={{ fontSize: 12, fontWeight: 800, color: "#c08030", margin: "0 0 12px" }}>出身：神奈川県横浜市</p>
          <p style={{ fontSize: 13, color: "#444", lineHeight: 1.85, margin: 0 }}>
            玉川学園中学部・高等部を卒業後、<br />
            自由奔放に、遊び呆ける。<br />
            気づけば、あっという間に25歳。<br />
            <span style={{ background: "#fff3b0", fontWeight: 800, color: "#111", padding: "1px 2px" }}>「このままでは人生終わる！」</span><br />
            と突然焦りはじめ、株式会社光通信へ中途入社。<br />
            そこでなぜか、営業マンとして強烈に開花。
          </p>
        </div>
      </div>

      {/* ===== 2列: 開花 + 実績 ===== */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>

        {/* 左カラム: 開花 */}
        <div style={{ borderLeft: "4px solid #222", background: "#f5f5f5", padding: "16px 20px 14px" }}>
          <h3 style={{ fontSize: 19, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.3 }}>営業マンとして、強烈に開花。</h3>
          <p style={{ fontSize: 13, color: "#444", lineHeight: 1.9, margin: "0 0 8px" }}>
            個人営業として実績を残し、<br />
            責任者としても営業組織を率い、<br />
            最終的には統括部長へ昇進。
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
            <span style={{ background: "#fff3b0", fontWeight: 700, color: "#111", padding: "1px 2px" }}>数字も鋭さも、当時はかなり尖ってました。</span><br />
            <span style={{ background: "#fff3b0", fontWeight: 700, color: "#111", padding: "1px 2px" }}>当時の&quot;光戦士&quot;で、</span><br />
            <span style={{ background: "#fff3b0", fontWeight: 700, color: "#111", padding: "1px 2px" }}>僕を知らない人は、たぶんあんまりいないと思いますw</span><br />
            <span style={{ color: "#555" }}>……たぶん。</span>
          </p>
        </div>

        {/* 右カラム: 実績 */}
        <div style={{ borderLeft: "4px solid #222", background: "#f5f5f5", padding: "16px 20px 14px" }}>
          <h3 style={{ fontSize: 19, fontWeight: 900, margin: "0 0 8px", lineHeight: 1.3 }}>とにかく、電話でめちゃくちゃ売ってきました。</h3>
          <p style={{ fontSize: 12, color: "#444", lineHeight: 1.8, margin: "0 0 10px" }}>
            営業マンとしてだけではなく、コールセンターの責任者として、<br />さまざまな営業手法・商材を経験。
          </p>

          {/* 実績カード4枚 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginBottom: 10 }}>
            {[
              { type: "電子電話帳営業", product: "フレッツ光", num: "1,500" },
              { type: "アライアンス営業", product: "フレッツ光", num: "2,000" },
              { type: "CRM営業", product: "U-NEXT", num: "1,500" },
              { type: "CRM営業", product: "WiMAX", num: "2,000" },
            ].map((c, i) => (
              <div key={i} style={{ border: "1px solid #ddd", background: "#fff", textAlign: "center" }}>
                <div style={{ background: "#222", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 0", letterSpacing: "0.05em" }}>{c.type}</div>
                <div style={{ padding: "6px 4px 5px" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, margin: "0 0 1px" }}>{c.product}</p>
                  <p style={{ margin: "0 0 0px" }}>
                    <span style={{ fontSize: 11, color: "#555" }}>単月</span>
                  </p>
                  <p style={{ fontSize: 26, fontWeight: 900, color: "#41ac86", lineHeight: 1, margin: "2px 0 0", fontFamily: '"M PLUS 1p", sans-serif' }}>
                    {c.num}<span style={{ fontSize: 11, color: "#555", fontWeight: 700 }}>件</span>
                  </p>
                  <p style={{ fontSize: 10, color: "#888", margin: "2px 0 0" }}>販売</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 12, color: "#444", lineHeight: 1.85, margin: "0 0 6px" }}>
            電話帳も、アライアンスも、CRMも、<br />
            全部、実際にやってきました。<br />
            その後、株式会社Everエフォートを設立。<br />
            現在も自社でコールセンターを運営し、法人回線・電気などのtoB商材を、<br />
            全国の企業様へ販売しています。
          </p>
          <p style={{ fontSize: 12, fontWeight: 800, color: "#111", lineHeight: 1.85, margin: 0 }}>
            つまり、昔の実績だけを語っているわけではありません。今も、現場で売っています。
          </p>
        </div>
      </div>

      {/* ===== TELEMOが生まれた ===== */}
      <div style={{ borderLeft: "4px solid #222", background: "#f5f5f5", padding: "16px 20px 14px", marginBottom: 12 }}>
        <h3 style={{ fontSize: 20, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.3 }}>そして、TELEMOが生まれました。</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <p style={{ fontSize: 12, color: "#444", lineHeight: 1.9, margin: "0 0 8px" }}>
              TELEMOは、<br />
              「AIが流行っているから、AIサービスをつくろう！」<br />
              と始めたものではありません。<br />
              これだけ電話営業をやってきた私たちが、<br />
              今も実際に営業現場を運営する中で、
            </p>
            <p style={{ fontSize: 12, fontWeight: 800, color: "#111", lineHeight: 1.9, margin: "0 0 6px" }}>
              「もっと営業を効率化できないか？」<br />
              「人だけに頼らず、営業を仕組みにできないか？」
            </p>
            <p style={{ fontSize: 12, color: "#444", lineHeight: 1.9, margin: 0 }}>
              と考え、<br />自分たちのコールセンターで使うためにつくったシステムが始まりです。
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 12, color: "#444", lineHeight: 1.9, margin: "0 0 6px" }}>
              実際の現場で使い、<br />
              営業マンたちと試行錯誤しながら改善を繰り返す。<br />
              その中で、
            </p>
            <p style={{ fontSize: 13, fontWeight: 800, color: "#41ac86", lineHeight: 1.7, margin: "0 0 6px" }}>
              「あれ？これ、他の業種でも使えるんじゃない？」
            </p>
            {/* ヘッドセットアイコン */}
            <svg style={{ position: "absolute", right: 0, top: 50, color: "#999" }} width="44" height="44" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14 18 C14 12 17 9 22 9 C27 9 30 12 30 18" stroke="currentColor" strokeWidth="1.5" />
              <rect x="9" y="15" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <rect x="31" y="15" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M35 23 C35 23 35 28 30 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="27" cy="33" r="3.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="27" cy="33" r="1.2" fill="currentColor" />
            </svg>
            <p style={{ fontSize: 12, color: "#444", lineHeight: 1.9, margin: 0 }}>
              となり、サービスとして本格的に開発。<br />
              2026年4月、TELEMOとして販売を開始しました。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 締めメッセージ ===== */}
      <div style={{ borderLeft: "4px solid #222", background: "#f5f5f5", padding: "16px 20px 14px", marginBottom: 16 }}>
        <h3 style={{ fontSize: 19, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.3 }}>「AIを知っている」だけでは、営業AIはつくれない。</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
          <div>
            <p style={{ fontSize: 12, color: "#444", lineHeight: 1.9, margin: 0 }}>
              電話帳営業。アライアンス営業。CRM営業。<br />
              そして現在のtoB営業。<br />
              さまざまな営業手法で、実際に何千件という販売を経験してきました。<br />
              そして今も、自分たちのコールセンターで<br />
              <span style={{ color: "#41ac86", fontWeight: 800 }}>&quot;現場で販売を知る&quot;</span>私たちだからこそ、提供できるサービスがある。
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: 4, padding: "14px 16px" }}>
            <p style={{ fontSize: 12, color: "#888", lineHeight: 1.8, margin: "0 0 6px" }}>
              TELEMOは、<br />人をなくすためのAIではありません。
            </p>
            <p style={{ fontSize: 14, fontWeight: 900, color: "#111", lineHeight: 1.7, margin: 0 }}>
              営業マンが、営業現場のためにつくった。<br />
              営業を、もっと強くするための仕組みです。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div style={{ borderTop: "1px solid #ddd", padding: "14px 0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: 14, margin: 0 }}>
          <span style={{ color: "#41ac86", fontWeight: 700, fontStyle: "italic" }}>TELEMO</span>
          <span style={{ color: "#888", fontSize: 12 }}>をつくったひと</span>
          {"　"}
          <span style={{ fontWeight: 900, fontSize: 20, color: "#111" }}>アオキ イッペイ</span>
        </p>
        <img src="/img/logo.png" alt="TELEMO" style={{ height: 24 }} />
      </div>

    </section>
  );
}
