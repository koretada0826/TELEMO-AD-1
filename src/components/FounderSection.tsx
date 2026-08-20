export default function FounderSection() {
  return (
    <section data-section="founder" className="bg-white px-4 sm:px-8 lg:px-10 py-8 sm:py-10 max-w-[1024px] mx-auto">

      {/* ===== HERO: 写真 + プロフィール ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-4 sm:mb-5">
        {/* 左: 写真 */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-[6px] sm:w-[8px] h-full bg-[#e8b828] z-10" />
          <img
            src="/img/aoki.png"
            alt="青木 一平"
            className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover object-top block"
          />
        </div>
        {/* 右: プロフィール */}
        <div className="bg-[#f5f5f5] p-5 sm:p-6 md:p-8">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black leading-[1.15] tracking-[-0.02em] mb-2 sm:mb-3" style={{fontFamily: '"M PLUS 1p", "Noto Sans JP", sans-serif'}}>
            TELEMOを<br />つくったひと。
          </h2>
          <p className="text-[11px] sm:text-[12px] text-[#888] tracking-[0.1em] mb-0.5">アオキ イッペイ</p>
          <p className="text-[24px] sm:text-[28px] md:text-[34px] font-black mb-1" style={{fontFamily: '"M PLUS 1p", sans-serif'}}>青木 一平</p>
          <p className="text-[11px] sm:text-[12px] font-bold text-[#c08030] mb-3 sm:mb-4">出身：神奈川県横浜市</p>
          <p className="text-[12px] sm:text-[13px] text-[#444] leading-[1.85]">
            玉川学園中学部・高等部を卒業後、自由奔放に、遊び呆ける。気づけば、あっという間に25歳。
            <br /><span className="bg-[#fff3b0] font-bold text-[#111] px-0.5">「このままでは人生終わる！」</span>
            <br />と突然焦りはじめ、株式会社光通信へ中途入社。そこでなぜか、営業マンとして強烈に開花。
          </p>
        </div>
      </div>

      {/* ===== 2列: 開花 + 実績 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* 左カラム: 開花 */}
        <div className="border-l-4 border-[#222] bg-[#f5f5f5] p-4 sm:p-5">
          <h3 className="text-[16px] sm:text-[19px] font-black mb-2 sm:mb-3 leading-[1.3]">営業マンとして、強烈に開花。</h3>
          <p className="text-[12px] sm:text-[13px] text-[#444] leading-[1.9] mb-2">
            個人営業として実績を残し、責任者としても営業組織を率い、最終的には統括部長へ昇進。
          </p>
          <p className="text-[12px] sm:text-[13px] leading-[1.9]">
            <span className="bg-[#fff3b0] font-bold text-[#111] px-0.5">数字も鋭さも、当時はかなり尖ってました。</span><br />
            <span className="bg-[#fff3b0] font-bold text-[#111] px-0.5">当時の&quot;光戦士&quot;で、</span><br />
            <span className="bg-[#fff3b0] font-bold text-[#111] px-0.5">僕を知らない人は、たぶんあんまりいないと思いますw</span><br />
            <span className="text-[#555]">……たぶん。</span>
          </p>
        </div>

        {/* 右カラム: 実績 */}
        <div className="border-l-4 border-[#222] bg-[#f5f5f5] p-4 sm:p-5">
          <h3 className="text-[16px] sm:text-[19px] font-black mb-2 sm:mb-3 leading-[1.3]">とにかく、電話でめちゃくちゃ売ってきました。</h3>
          <p className="text-[11px] sm:text-[12px] text-[#444] leading-[1.8] mb-3">
            営業マンとしてだけではなく、コールセンターの責任者として、さまざまな営業手法・商材を経験。
          </p>

          {/* 実績カード4枚 */}
          <div className="grid grid-cols-4 gap-1 sm:gap-1.5 mb-3">
            {[
              { type: "電子電話帳営業", product: "フレッツ光", num: "1,500" },
              { type: "アライアンス営業", product: "フレッツ光", num: "2,000" },
              { type: "CRM営業", product: "U-NEXT", num: "1,500" },
              { type: "CRM営業", product: "WiMAX", num: "2,000" },
            ].map((c, i) => (
              <div key={i} className="border border-[#ddd] bg-white text-center">
                <div className="bg-[#222] text-white text-[7px] sm:text-[9px] font-bold py-0.5 sm:py-1 tracking-[0.03em]">{c.type}</div>
                <div className="py-1 sm:py-1.5 px-0.5">
                  <p className="text-[9px] sm:text-[11px] font-bold mb-0">{c.product}</p>
                  <p className="text-[8px] sm:text-[11px] text-[#555]">単月</p>
                  <p className="text-[18px] sm:text-[26px] font-black text-[#41ac86] leading-none" style={{fontFamily: '"M PLUS 1p", sans-serif'}}>
                    {c.num}<span className="text-[8px] sm:text-[11px] text-[#555] font-bold">件</span>
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-[#888]">販売</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] sm:text-[12px] text-[#444] leading-[1.85] mb-1.5">
            電話帳も、アライアンスも、CRMも、全部、実際にやってきました。その後、株式会社Everエフォートを設立。現在も自社でコールセンターを運営し、法人回線・電気などのtoB商材を、全国の企業様へ販売しています。
          </p>
          <p className="text-[11px] sm:text-[12px] font-bold text-[#111] leading-[1.85]">
            つまり、昔の実績だけを語っているわけではありません。今も、現場で売っています。
          </p>
        </div>
      </div>

      {/* ===== TELEMOが生まれた ===== */}
      <div className="border-l-4 border-[#222] bg-[#f5f5f5] p-4 sm:p-5 mb-3 sm:mb-4">
        <h3 className="text-[16px] sm:text-[20px] font-black mb-2 sm:mb-3 leading-[1.3]">そして、TELEMOが生まれました。</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <p className="text-[12px] sm:text-[12px] text-[#444] leading-[1.9] mb-2">
              TELEMOは、「AIが流行っているから、AIサービスをつくろう！」と始めたものではありません。これだけ電話営業をやってきた私たちが、今も実際に営業現場を運営する中で、
            </p>
            <p className="text-[12px] sm:text-[12px] font-bold text-[#111] leading-[1.9] mb-2">
              「もっと営業を効率化できないか？」<br />
              「人だけに頼らず、営業を仕組みにできないか？」
            </p>
            <p className="text-[12px] sm:text-[12px] text-[#444] leading-[1.9]">
              と考え、自分たちのコールセンターで使うためにつくったシステムが始まりです。
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#444] leading-[1.9] mb-1.5">
              実際の現場で使い、営業マンたちと試行錯誤しながら改善を繰り返す。その中で、
            </p>
            <p className="text-[13px] font-bold text-[#41ac86] leading-[1.7] mb-1.5">
              「あれ？これ、他の業種でも使えるんじゃない？」
            </p>
            <p className="text-[12px] text-[#444] leading-[1.9]">
              となり、サービスとして本格的に開発。2026年4月、TELEMOとして販売を開始しました。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 締めメッセージ ===== */}
      <div className="border border-[#e5e5e5] bg-[#f5f5f5] rounded-[8px] sm:rounded-[16px] p-4 sm:p-5 mb-4 sm:mb-5">
        <h3 className="text-[15px] sm:text-[19px] font-black mb-2 sm:mb-3 leading-[1.3]">「AIを知っている」だけでは、営業AIはつくれない。</h3>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-3 sm:gap-5">
          <p className="text-[12px] text-[#444] leading-[1.9]">
            電話帳営業。アライアンス営業。CRM営業。そして現在のtoB営業。さまざまな営業手法で、実際に何千件という販売を経験してきました。そして今も、自分たちのコールセンターで
            <span className="text-[#41ac86] font-bold">&quot;現場で販売を知る&quot;</span>私たちだからこそ、提供できるサービスがある。
          </p>
          <div className="bg-white border border-[#ddd] rounded-[4px] p-3 sm:p-4">
            <p className="text-[11px] sm:text-[12px] text-[#888] leading-[1.8] mb-1.5">
              TELEMOは、人をなくすためのAIではありません。
            </p>
            <p className="text-[13px] sm:text-[14px] font-black text-[#111] leading-[1.7]">
              営業マンが、営業現場のためにつくった。営業を、もっと強くするための仕組みです。
            </p>
          </div>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div className="border-t border-[#ddd] pt-3 sm:pt-4 pb-2 flex items-center justify-between">
        <p className="text-[12px] sm:text-[14px]">
          <span className="text-[#41ac86] font-bold italic">TELEMO</span>
          <span className="text-[#888] text-[10px] sm:text-[12px]">をつくったひと</span>
          {"　"}
          <span className="font-black text-[16px] sm:text-[20px] text-[#111]">アオキ イッペイ</span>
        </p>
        <img src="/img/logo.png" alt="TELEMO" className="h-[18px] sm:h-[24px] w-auto" />
      </div>

    </section>
  );
}
