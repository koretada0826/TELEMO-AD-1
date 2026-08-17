import DiagnosisQuiz from "./DiagnosisQuiz";
import AudioPlayer from "./AudioPlayer";
import FAQ from "./FAQ";
import DocumentRequestForm from "./DocumentRequestForm";
import FounderSection from "./FounderSection";

export default function Section1() {
  return (
      <main>
      <section className="relative bg-white pt-[90px] sm:pt-[110px] lg:pt-[130px] pb-16 sm:pb-24 overflow-hidden">
      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
      <div className="text-left">
      <h1 className="fade-in text-black visible" style={{"fontFamily": "\"M PLUS 1p\", \"Noto Sans JP\", sans-serif", "fontWeight": "900", "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontSize": "clamp(28px, 5vw, 56px)"}}>営業会社がつくった<br /><span className="relative inline-block">AI営業システム<span className="absolute bottom-[2px] left-0 w-full h-[6px] sm:h-[8px] bg-[#41ac86]/30"></span></span></h1>
      <p className="fade-in mt-8 sm:mt-10 text-[17px] sm:text-[22px] lg:text-[26px] font-bold text-[#333] leading-[1.6] visible">光通信で営業組織を率いた男が、<br className="hidden sm:inline" />15年の現場経験をAIに詰め込んだ営業代行</p>
      {/* 青木さんプロフィール帯 */}
      <div className="fade-in mt-10 bg-[#f7f7f7] rounded-[16px] p-5 sm:p-6 visible">
      <div className="flex items-start gap-5">
      <img src="/img/aoki.png" alt="青木一平" className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-full object-cover shrink-0 border-2 border-[#41ac86]" />
      <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
      <p className="text-[18px] sm:text-[22px] font-black text-black">青木 一平</p>
      <span className="text-[11px] sm:text-[12px] font-bold text-white bg-[#41ac86] px-2 py-0.5 rounded">開発者</span>
      </div>
      <p className="text-[13px] sm:text-[15px] font-bold text-[#41ac86] mb-2">元・株式会社光通信 統括部長</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] sm:text-[13px] text-[#555]">
      <span className="flex items-center gap-1"><span className="text-[#41ac86] font-black">&#10003;</span> 光通信で営業組織を統括</span>
      <span className="flex items-center gap-1"><span className="text-[#41ac86] font-black">&#10003;</span> 単月2,000件の販売実績</span>
      <span className="flex items-center gap-1"><span className="text-[#41ac86] font-black">&#10003;</span> 電話帳・アライアンス・CRM全て経験</span>
      <span className="flex items-center gap-1"><span className="text-[#41ac86] font-black">&#10003;</span> 現在も自社コールセンター運営中</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="flex flex-col justify-center">
      {/* 音声プレイヤー（大きく目立つデザイン） */}
      <div className="bg-[#41ac86] rounded-[20px] p-6 sm:p-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 rounded-[20px] animate-pulse" style={{"boxShadow": "0 0 30px rgba(65, 172, 134, 0.5), 0 0 60px rgba(65, 172, 134, 0.3)", "animation": "pulse-glow 2s ease-in-out infinite"}}></div>
      <style dangerouslySetInnerHTML={{"__html": "@keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(65,172,134,0.3); } 50% { box-shadow: 0 0 40px rgba(65,172,134,0.6), 0 0 80px rgba(65,172,134,0.3); } }"}} />
      <div className="flex items-center gap-3 mb-2">
      <span className="inline-flex items-center justify-center w-[12px] h-[12px] rounded-full bg-white animate-pulse"></span>
      <p className="text-[18px] sm:text-[22px] font-black">実際の受注コールを聴く</p>
      </div>
      <p className="text-[13px] sm:text-[14px] text-white/80 mb-4">AIが営業したらどうなる？実際の音声をお聴きください</p>
      <div className="bg-white rounded-[12px] p-3 sm:p-4">
      <AudioPlayer src="/demo-call.m4a" autoPlay />
      </div>
      <p className="mt-3 text-[11px] text-white/60">※ 光通信出身のプロが設計した営業トークによる実際の受注コール</p>
      </div>
      </div>
      </div>

      <div className="flex justify-center mt-4">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#41ac86] hover:bg-[#2f8063] text-white font-bold text-[16px] sm:text-[18px] w-full sm:w-[400px] h-[60px] sm:h-[72px] rounded-full no-underline transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(65,172,134,0.3)] hover:shadow-[0_10px_28px_rgba(65,172,134,0.4)]">営業のプロに相談する</a>
      </div>

      <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 max-w-[960px] mx-auto">
      <div className="bg-[#f7f7f7] rounded-[16px] py-8 sm:py-10 px-4 text-center flex flex-col items-center justify-center">
      <div className="flex items-baseline justify-center"><span className="text-[44px] sm:text-[64px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>100</span><span className="text-[18px] sm:text-[24px] font-black text-[#41ac86]">%</span></div>
      <p className="text-[13px] sm:text-[16px] font-bold text-[#555] mt-3">全通話開示</p>
      <p className="text-[11px] sm:text-[12px] text-[#999] mt-1">誰に・何を話したか、全部見える</p>
      </div>
      <div className="bg-[#f7f7f7] rounded-[16px] py-8 sm:py-10 px-4 text-center flex flex-col items-center justify-center">
      <div className="flex items-baseline justify-center"><span className="text-[36px] sm:text-[56px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>13,200</span></div>
      <p className="text-[13px] sm:text-[16px] font-bold text-[#555] mt-3">コール/月</p>
      <p className="text-[11px] sm:text-[12px] text-[#999] mt-1">人を雇うと月50万円以上かかる量</p>
      </div>
      <div className="bg-[#f7f7f7] rounded-[16px] py-8 sm:py-10 px-4 text-center flex flex-col items-center justify-center">
      <div className="flex items-baseline justify-center"><span className="text-[44px] sm:text-[64px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>24</span><span className="text-[16px] sm:text-[22px] font-black text-[#41ac86]">時間</span></div>
      <p className="text-[13px] sm:text-[16px] font-bold text-[#555] mt-3">365日稼働</p>
      <p className="text-[11px] sm:text-[12px] text-[#999] mt-1">土日も深夜も。辞めない営業マン</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-14 sm:mt-20 mb-0">
      <a href="#service-intro" className="fade-in group relative block overflow-hidden transition-all duration-500 bg-white text-black border-2 border-black hover:border-[#41ac86] visible" style={{"transitionDelay": "0s"}}>
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-[0.04]" style={{"backgroundImage": "radial-gradient(circle at 80% 10%, rgb(65, 172, 134) 0%, transparent 50%)"}}>
      </div>
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#41ac86] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden={true}>
      </div>
      <div className="relative h-full flex flex-col p-5 sm:p-7 lg:p-8">
      <div className="flex items-center gap-3 mb-3 sm:mb-4"><span className="text-[11px] sm:text-[12px] font-black tracking-[0.25em] text-[#41ac86]">NEWCOMER</span><span className="flex-1 h-[1px] bg-black/15"></span><span className="text-[11px] font-black text-black/50">01</span>
      </div>
      <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.05em] mb-2 text-[#666]">初めての方
      </p>
      <h2 className="text-[18px] sm:text-[22px] lg:text-[24px] font-black leading-[1.3] mb-3 whitespace-nowrap" style={{"fontFamily": "\"M PLUS 1p\", \"Noto Sans JP\", sans-serif"}}>そもそも営業代行って何？
      </h2>
      <p className="text-[14px] sm:text-[15px] leading-[1.8] mb-4 text-[#4d4d4d] flex-1">月13,200コールの営業力をリスクゼロで。</p>
      <div className="flex items-center justify-between pt-3 border-t border-black/15"><span className="text-[13px] sm:text-[15px] font-black">初めての方向けに見る</span><span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full transition-all duration-300 bg-black text-white group-hover:bg-[#41ac86] group-hover:scale-110"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden={true}><path d="M3 9 H14 M10 5 L14 9 L10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
      </div>
      </div>
      </a>
      <a href="#pain-points" className="fade-in group relative block overflow-hidden transition-all duration-500 bg-black text-white hover:bg-[#111] visible" style={{"transitionDelay": "0.12s"}}>
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-[0.08]" style={{"backgroundImage": "radial-gradient(circle at 80% 10%, rgb(65, 172, 134) 0%, transparent 50%)"}}>
      </div>
      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#41ac86] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden={true}>
      </div>
      <div className="relative h-full flex flex-col p-5 sm:p-7 lg:p-8">
      <div className="flex items-center gap-3 mb-3 sm:mb-4"><span className="text-[11px] sm:text-[12px] font-black tracking-[0.25em] text-[#41ac86]">EXPERIENCED</span><span className="flex-1 h-[1px] bg-white/20"></span><span className="text-[11px] font-black text-white/50">02</span>
      </div>
      <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.05em] mb-2 text-white/70">利用経験がある方
      </p>
      <h2 className="text-[18px] sm:text-[22px] lg:text-[24px] font-black leading-[1.3] mb-3 whitespace-nowrap" style={{"fontFamily": "\"M PLUS 1p\", \"Noto Sans JP\", sans-serif"}}>「成果ゼロ」で悩んでいませんか
      </h2>
      <p className="text-[14px] sm:text-[15px] leading-[1.8] mb-4 text-white/75 flex-1">全コール開示・月額35万円。失敗経験がある方ほど違いがわかります。</p>
      <div className="flex items-center justify-between pt-3 border-t border-white/15"><span className="text-[13px] sm:text-[15px] font-black">経験者向けに見る</span><span className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-full transition-all duration-300 bg-[#41ac86] text-white group-hover:scale-110"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden={true}><path d="M3 9 H14 M10 5 L14 9 L10 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
      </div>
      </div>
      </a>
      </div>
      <div className="fade-in flex justify-center mt-10 sm:mt-12 visible">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#41ac86] hover:bg-[#2f8063] text-white font-bold text-[15px] sm:text-[17px] px-10 sm:px-14 py-4 sm:py-5 rounded-full no-underline transition-colors shadow-[0_4px_16px_rgba(65,172,134,0.3)] hover:shadow-[0_10px_28px_rgba(65,172,134,0.4)] hover:-translate-y-0.5 transition-all">営業のプロに相談する</a>

      </div>
      </div>
      </section>
      <section className="py-10 sm:py-14 px-5 sm:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto text-center">
      <p className="text-[13px] sm:text-[15px] tracking-[0.2em] font-black text-[#41ac86] mb-3">INDUSTRIES</p>
      <h2 className="text-[22px] sm:text-[30px] lg:text-[36px] font-black text-black leading-[1.3] mb-8">幅広い業種に対応しています</h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {["IT・SaaS", "人材", "不動産", "製造業", "建設", "金融・保険", "通信", "EC・小売", "飲食", "医療・介護", "教育", "物流", "エネルギー", "士業", "広告・メディア", "その他BtoB全般"].map((industry, i) => (
      <span key={i} className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#f7f7f7] text-[13px] sm:text-[14px] font-bold text-[#333] border border-[#e5e5e5]">{industry}</span>
      ))}
      </div>
      </div>
      </section>
      <section className="py-8 sm:py-12 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1100px] mx-auto">
      <div id="pain-points" className="scroll-mt-[80px]">
      <div className="fade-in text-center mb-6 sm:mb-8 visible">
      <h2 className="text-[22px] sm:text-[30px] lg:text-[36px] font-black text-black leading-[1.3]">こんなお悩み、ありませんか？</h2>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
      <div className="bg-white rounded-[12px] p-5 sm:p-7 text-center">
      <svg className="mx-auto mb-3 text-[#999]" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="24" cy="10" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="24" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" /></svg>
      <p className="text-[14px] sm:text-[17px] font-bold text-black leading-[1.6]">成果が出ないのに<br /><span className="font-black underline decoration-[#41ac86] decoration-2 underline-offset-4">高額な費用</span>だけ取られる</p>
      </div>
      <div className="bg-white rounded-[12px] p-5 sm:p-7 text-center">
      <svg className="mx-auto mb-3 text-[#999]" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="8" y="5" width="20" height="26" rx="2" stroke="currentColor" strokeWidth="2" /><line x1="13" y1="13" x2="23" y2="13" stroke="currentColor" strokeWidth="1.5" /><line x1="13" y1="18" x2="23" y2="18" stroke="currentColor" strokeWidth="1.5" /><line x1="13" y1="23" x2="19" y2="23" stroke="currentColor" strokeWidth="1.5" /></svg>
      <p className="text-[14px] sm:text-[17px] font-bold text-black leading-[1.6]">何をしているか<br />営業<span className="font-black underline decoration-[#41ac86] decoration-2 underline-offset-4">内容が見えない</span></p>
      </div>
      <div className="bg-white rounded-[12px] p-5 sm:p-7 text-center">
      <svg className="mx-auto mb-3 text-[#999]" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 28 L12 16 L18 22 L24 10 L30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <p className="text-[14px] sm:text-[17px] font-bold text-black leading-[1.6]">中々 <span className="font-black underline decoration-[#41ac86] decoration-2 underline-offset-4">成果</span> が<br />上がらない</p>
      </div>
      </div>
      <div className="flex justify-center mt-4 sm:mt-6">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 14 L20 24 L30 14" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 22 L20 32 L30 22" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" /></svg>
      </div>
      </div>
      </div>
      </section>
      <section className="py-10 sm:py-14 px-5 sm:px-10 bg-[#41ac86]">
      <div className="max-w-[1100px] mx-auto">
      <div className="text-center mb-6 sm:mb-8">
      <p className="text-[16px] sm:text-[20px] font-bold text-white/80 mb-2">TELEMOは、</p>
      <h3 className="text-[22px] sm:text-[32px] lg:text-[40px] font-black text-white leading-[1.3]">そんな営業課題を<span className="relative inline-block"><span className="relative z-10">早く</span><span className="absolute bottom-[3px] left-0 w-full h-[4px] bg-white/40"></span></span>・<span className="relative inline-block"><span className="relative z-10">着実に</span><span className="absolute bottom-[3px] left-0 w-full h-[4px] bg-white/40"></span></span>解決します。</h3>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
      <div className="bg-white rounded-[12px] p-5 sm:p-7 text-center">
      <svg className="mx-auto mb-2 text-[#41ac86]" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14 L11 21 L24 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <p className="text-[16px] sm:text-[20px] font-black text-black mb-1"><span className="relative inline-block"><span className="relative z-10">全通話100%開示</span><span className="absolute bottom-[2px] left-0 w-full h-[4px] bg-[#41ac86]/20"></span></span></p>
      <p className="text-[12px] sm:text-[14px] text-[#555]">誰に何を話したか即確認可</p>
      </div>
      <div className="bg-white rounded-[12px] p-5 sm:p-7 text-center">
      <svg className="mx-auto mb-2 text-[#41ac86]" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14 L11 21 L24 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <p className="text-[16px] sm:text-[20px] font-black text-black mb-1"><span className="relative inline-block"><span className="relative z-10">プロが設計</span><span className="absolute bottom-[2px] left-0 w-full h-[4px] bg-[#41ac86]/20"></span></span></p>
      <p className="text-[12px] sm:text-[14px] text-[#555]">営業歴15年のプロがトーク設計</p>
      </div>
      <div className="bg-white rounded-[12px] p-5 sm:p-7 text-center">
      <svg className="mx-auto mb-2 text-[#41ac86]" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14 L11 21 L24 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <p className="text-[16px] sm:text-[20px] font-black text-black mb-1"><span className="relative inline-block"><span className="relative z-10">月額35万円</span><span className="absolute bottom-[2px] left-0 w-full h-[4px] bg-[#41ac86]/20"></span></span></p>
      <p className="text-[12px] sm:text-[14px] text-[#555]">採用1人分でリスクゼロの営業力</p>
      </div>
      </div>
      </div>
      </section>
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-14 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
<div className="flex flex-col gap-3 sm:gap-4">
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0s", "boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#41ac86] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">01</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#41ac86] tracking-[0.2em] mb-1">契約の縛り
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>契約は6ヶ月・自動更新。<br className="sm:hidden" /></span><span>合理的な改善サイクル。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>6ヶ月契約</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>自動更新</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>解約料ゼロ</span>
      </div>
      </div>
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0.06s", "boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#41ac86] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">02</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#41ac86] tracking-[0.2em] mb-1">ブラックボックス
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>全録音を100%開示。<br className="sm:hidden" /></span><span>誰に何を話したか即確認可。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>全録音開示</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>コール一覧</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>ダッシュボード</span>
      </div>
      </div>
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0.12s", "boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#41ac86] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">03</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#41ac86] tracking-[0.2em] mb-1">ブランド毀損
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>15年のプロが営業トーク設計。<br className="sm:hidden" /></span><span>毎日の録音で品質管理。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>プロ設計</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>毎日レビュー</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>ブランド保全</span>
      </div>
      </div>
      <div className="fade-in flex items-center gap-4 sm:gap-6 bg-white border-2 border-black p-4 sm:p-6 visible" style={{"transitionDelay": "0.18s", "boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px"}}><span className="shrink-0 inline-flex w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#41ac86] items-center justify-center text-white text-[16px] sm:text-[20px] font-black">04</span>
      <div className="flex-1 min-w-0">
      <p className="text-[11px] sm:text-[12px] font-black text-[#41ac86] tracking-[0.2em] mb-1">営業知見ゼロ
      </p>
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.45]"><span>15年のプロが設計から実行。<br className="sm:hidden" /></span><span>現場を知る人間が動かす。</span>
      </p>
      </div>
      <div className="hidden md:flex shrink-0 flex-col gap-1 pl-6 border-l border-[#eee] min-w-[180px]"><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>プロが運営</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>15年の現場経験</span><span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-[#333] font-bold"><svg className="w-3 h-3 text-[#41ac86]" viewBox="0 0 12 12" fill="none" aria-hidden={true}><path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>人による実行</span>
      </div>
      </div>
      </div>
      <div className="fade-in flex justify-center mt-12 sm:mt-16 visible">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#41ac86] hover:bg-[#2f8063] text-white font-bold text-[15px] sm:text-[17px] px-10 sm:px-14 py-4 sm:py-5 rounded-full no-underline transition-colors shadow-[0_4px_16px_rgba(65,172,134,0.3)]">営業のプロに相談する</a>

      </div>
      <div className="fade-in mt-14 sm:mt-20 bg-white text-black overflow-hidden relative border border-[#eee] visible">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{"background": "radial-gradient(circle at 85% 20%, rgb(65, 172, 134) 0%, transparent 50%)"}}>
      </div>
      <div className="relative p-6 sm:p-10 lg:p-14">
      <div className="text-center mb-5 sm:mb-10">
      <div id="service-intro" className="fade-in text-center mb-2 scroll-mt-[80px] visible">
      <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-black text-[#41ac86] leading-[1.3] mb-3">TELEMOは
      </p>
      <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold text-black leading-[1.6]"><span className="inline-block bg-[#41ac86] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mr-1">営業トーク設計</span>から<span className="inline-block bg-[#41ac86] text-white px-3 py-1 rounded-[6px] text-[16px] sm:text-[20px] font-bold mx-1">13,200コール実行</span>まで行う
      </p>
      <p className="text-[26px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mt-2">「営業代行サービス」
      </p>
      <p className="text-[14px] sm:text-[16px] text-[#888] mt-2">※人で換算すると約3人分<br />（人の場合：200コール/日 × 22日 = 約4,400コール）
      </p>
      </div>
      <section className="bg-white pt-4 pb-10 px-4 overflow-hidden relative"><svg width="0" height="0" aria-hidden={true} style={{"position": "absolute"}}><defs><filter id="knockout-black" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      1 1 1 0 0"></feColorMatrix></filter></defs></svg>
      <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 lg:gap-4">
      <div className="fade-in fade-up relative w-full max-w-[360px] flex flex-col items-center justify-center visible" style={{"transitionDelay": "0s"}}>
      <div className="relative w-full aspect-square md:aspect-auto md:h-[360px] pointer-events-none"><img alt="Award Wreath" className="w-full h-full object-contain" src="https://telemo-xeb3.onrender.com/images/golden_laurel_award.png" style={{"filter": "url(\"#knockout-black\")"}} />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{"top": "46%", "width": "62%", "height": "58%", "background": "radial-gradient(circle, rgba(255, 251, 238, 0.95) 0%, rgba(255, 248, 228, 0.7) 50%, rgba(255, 248, 228, 0) 78%)"}}>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pb-[18%]">
      <div className="flex items-baseline justify-center leading-none" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif"}}><span className="text-[96px] lg:text-[124px] font-bold tracking-tight text-black" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.85) 0px 2px 10px, rgb(255, 255, 255) 0px 0px 3px"}}>100</span><span className="text-[38px] lg:text-[48px] font-bold ml-1 text-[#41ac86]" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.9) 0px 0px 6px"}}>%</span>
      </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full" style={{"bottom": "27%", "width": "62%", "height": "40px", "background": "radial-gradient(rgba(30, 18, 4, 0.55) 0%, rgba(30, 18, 4, 0.25) 55%, transparent 82%)"}}>
      </div>
      <div className="absolute left-0 right-0 flex justify-center" style={{"bottom": "29%"}}><span className="text-[18px] lg:text-[24px] font-black tracking-[0.1em] text-white" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif", "textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 2px, rgba(0, 0, 0, 0.7) 0px 0px 8px, rgb(0, 0, 0) 0px 0px 1px", "WebkitTextStroke": "0.4px rgba(0, 0, 0, 0.85)"}}>全通話開示</span>
      </div>
      </div>
      </div>
      <div className="fade-in fade-up relative w-full max-w-[360px] flex flex-col items-center justify-center visible" style={{"transitionDelay": "0.15s"}}>
      <div className="relative w-full aspect-square md:aspect-auto md:h-[360px] pointer-events-none"><img alt="Award Wreath" className="w-full h-full object-contain" src="https://telemo-xeb3.onrender.com/images/golden_laurel_award.png" style={{"filter": "url(\"#knockout-black\")"}} />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{"top": "46%", "width": "62%", "height": "58%", "background": "radial-gradient(circle, rgba(255, 251, 238, 0.95) 0%, rgba(255, 248, 228, 0.7) 50%, rgba(255, 248, 228, 0) 78%)"}}>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pb-[18%]">
      <div className="flex items-baseline justify-center leading-none" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif"}}><span className="text-[96px] lg:text-[124px] font-bold tracking-tight text-black" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.85) 0px 2px 10px, rgb(255, 255, 255) 0px 0px 3px"}}>24</span><span className="text-[30px] lg:text-[40px] font-bold ml-1 text-[#41ac86]" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.9) 0px 0px 6px"}}>時間</span>
      </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full" style={{"bottom": "27%", "width": "62%", "height": "40px", "background": "radial-gradient(rgba(30, 18, 4, 0.55) 0%, rgba(30, 18, 4, 0.25) 55%, transparent 82%)"}}>
      </div>
      <div className="absolute left-0 right-0 flex justify-center" style={{"bottom": "29%"}}><span className="text-[18px] lg:text-[24px] font-black tracking-[0.1em] text-white" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif", "textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 2px, rgba(0, 0, 0, 0.7) 0px 0px 8px, rgb(0, 0, 0) 0px 0px 1px", "WebkitTextStroke": "0.4px rgba(0, 0, 0, 0.85)"}}>365日稼働</span>
      </div>
      </div>
      </div>
      <div className="fade-in fade-up relative w-full max-w-[360px] flex flex-col items-center justify-center visible" style={{"transitionDelay": "0.3s"}}>
      <div className="relative w-full aspect-square md:aspect-auto md:h-[360px] pointer-events-none"><img alt="Award Wreath" className="w-full h-full object-contain" src="https://telemo-xeb3.onrender.com/images/golden_laurel_award.png" style={{"filter": "url(\"#knockout-black\")"}} />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{"top": "46%", "width": "62%", "height": "58%", "background": "radial-gradient(circle, rgba(255, 251, 238, 0.95) 0%, rgba(255, 248, 228, 0.7) 50%, rgba(255, 248, 228, 0) 78%)"}}>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pb-[18%]">
      <div className="flex items-baseline justify-center leading-none" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif"}}><span className="text-[96px] lg:text-[124px] font-bold tracking-tight text-black" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.85) 0px 2px 10px, rgb(255, 255, 255) 0px 0px 3px"}}>3</span><span className="text-[30px] lg:text-[40px] font-bold ml-1 text-[#41ac86]" style={{"textShadow": "rgba(255, 255, 255, 0.95) 0px 1px 0px, rgba(255, 250, 235, 0.9) 0px 0px 6px"}}>人分</span>
      </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full" style={{"bottom": "27%", "width": "62%", "height": "40px", "background": "radial-gradient(rgba(30, 18, 4, 0.55) 0%, rgba(30, 18, 4, 0.25) 55%, transparent 82%)"}}>
      </div>
      <div className="absolute left-0 right-0 flex justify-center" style={{"bottom": "29%"}}><span className="text-[18px] lg:text-[24px] font-black tracking-[0.1em] text-white" style={{"fontFamily": "\"Noto Serif JP\", \"Times New Roman\", serif", "textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 2px, rgba(0, 0, 0, 0.7) 0px 0px 8px, rgb(0, 0, 0) 0px 0px 1px", "WebkitTextStroke": "0.4px rgba(0, 0, 0, 0.85)"}}>月13,200コール</span>
      </div>
      </div>
      </div>
      </div>
      <div className="text-center mt-6 text-[#999] text-xs tracking-widest">※TELEMOの提供仕様（保証内容）
      </div>
      </div>
      </section>
      <div className="fade-in max-w-[960px] mx-auto my-14 sm:my-20 bg-white border-2 border-black p-6 sm:p-10 lg:p-12 visible" style={{"boxShadow": "rgb(65, 172, 134) 8px 8px 0px 0px"}}>
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-4"><span className="w-8 h-[2px] bg-[#41ac86]"></span>WHAT IS SALES OUTSOURCING
      </p>
      <h3 className="text-[24px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3] mb-6 sm:mb-8">そもそも、<span className="text-[#41ac86]">営業代行サービス</span>って？
      </h3>
      <p className="text-[15px] sm:text-[18px] lg:text-[20px] text-[#333] leading-[1.95] font-medium mb-5">営業代行とは、<span className="font-black text-black">貴社の代わりに新規開拓の営業活動を行うサービス</span>のことです。
      </p>
      <p className="text-[14px] sm:text-[17px] text-[#333] leading-[1.95] font-medium mb-6 sm:mb-8">営業先リストの作成、営業トークの設計から電話営業・商談の打診までをまるごと代行。<br className="hidden sm:inline" />「営業人員を雇う余裕はないが、売上は伸ばしたい」企業の <span className="font-black text-[#41ac86]">最短の解</span> として、多くの会社が導入しています。
      </p>
      <div className="pt-5 sm:pt-6 border-t border-[#eee]">
      <p className="text-[14px] sm:text-[17px] lg:text-[18px] font-bold text-[#333] leading-[1.8]">ただし、営業代行なら何でも良いわけではありません。<br className="hidden sm:inline" /><span className="font-black text-black">選び方を間違えると、高額な費用だけ取られて成果が出ないことも。</span>
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] font-bold text-[#333] leading-[1.8]">次のセクションでは、そんな「失敗する営業代行」の典型例をお見せします。
      </p>
      </div>
      </div>
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#41ac86]"></span>HUMAN × AI<span className="w-8 h-[2px] bg-[#41ac86]"></span>
      </p>
      <h3 className="text-[24px] sm:text-[36px] lg:text-[46px] font-black leading-[1.25] tracking-[-0.01em] text-black">営業歴<span className="text-[#41ac86]">15年</span>のプロが、<br className="hidden sm:inline" /><span className="text-[#41ac86]">AI</span>と融合したらどうなるか。
      </h3>
      <p className="mt-4 sm:mt-5 text-[14px] sm:text-[17px] text-[#555] leading-[1.8] max-w-[720px] mx-auto">プロの現場知見で設計し、AIで実行量・データ・品質を底上げ。<br className="hidden sm:inline" />「人がやる営業」の限界を、TELEMOはひとつずつ外しました。
      </p>
      </div>
      <div className="overflow-hidden border border-[#e5e5e5]">
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch bg-[#fafafa] border-b border-[#e5e5e5]">
      <div className="px-3 sm:px-6 py-2 sm:py-5 text-[#999] text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase flex items-center justify-center">Item
      </div>
      <div className="px-3 sm:px-6 py-2 sm:py-5 text-center border-l border-[#e5e5e5] bg-white">
      <p className="text-[9px] sm:text-[11px] tracking-[0.2em] font-bold text-[#bbb] mb-0.5 sm:mb-1">HUMAN
      </p>
      <p className="text-[13px] sm:text-[18px] lg:text-[20px] font-black text-[#555]">人の営業
      </p>
      </div>
      <div className="px-3 sm:px-6 py-2 sm:py-5 text-center bg-[#41ac86] border-l border-[#41ac86]">
      <p className="text-[9px] sm:text-[11px] tracking-[0.2em] font-bold text-white/80 mb-0.5 sm:mb-1">TELEMO
      </p>
      <p className="text-[14px] sm:text-[20px] lg:text-[22px] font-black text-white">プロ × AI
      </p>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">稼働時間</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">平日8時間</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfeadd] bg-[#eaf7f1] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#41ac86]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#41ac86] leading-[1.3]">24時間365日稼働</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">コール量</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">月500〜1,000件</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfeadd] bg-[#eaf7f1] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#41ac86]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#41ac86] leading-[1.3]">月13,200コール（約3人分）</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">通話ログ</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">担当メモのみ</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfeadd] bg-[#eaf7f1] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#41ac86]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#41ac86] leading-[1.3]">全通話を100%記録</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">会話分析</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">担当の感覚</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfeadd] bg-[#eaf7f1] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#41ac86]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#41ac86] leading-[1.3]">AIが数値で検出</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch border-b border-[#eee]">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">改善サイクル</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">個人の経験則</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfeadd] bg-[#eaf7f1] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#41ac86]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#41ac86] leading-[1.3]">全データから自動学習</span>
      </div>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_1.3fr] items-stretch ">
      <div className="px-2 sm:px-6 py-2 sm:py-5 flex items-center justify-center text-center bg-[#fafafa]"><span className="text-[11px] sm:text-[15px] lg:text-[16px] font-black text-black leading-[1.3]">品質のムラ</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#eee] flex items-center justify-center text-center bg-white"><span className="text-[11px] sm:text-[15px] text-[#888] leading-[1.3]">体調・気分で変動</span>
      </div>
      <div className="px-2 sm:px-6 py-2 sm:py-5 border-l border-[#cfeadd] bg-[#eaf7f1] flex items-center justify-center text-center gap-1 sm:gap-2"><svg className="shrink-0 w-3 h-3 sm:w-4 sm:h-4 text-[#41ac86]" viewBox="0 0 16 16" fill="none" aria-hidden={true}><path d="M3 8 L7 12 L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg><span className="text-[11px] sm:text-[15px] lg:text-[17px] font-black text-[#41ac86] leading-[1.3]">常に一定・再現性あり</span>
      </div>
      </div>
      </div>
      <p className="mt-10 sm:mt-14 text-center text-[22px] sm:text-[32px] lg:text-[40px] font-black leading-[1.4] tracking-[-0.01em]"><span className="text-black">営業のプロ</span><span className="inline-block mx-2 sm:mx-3 text-[#41ac86]">×</span><span className="text-black">AIの実行力</span><br className="sm:hidden" /><span className="inline-block mx-2 sm:mx-3 text-[#41ac86]">＝</span><span className="text-[#41ac86]">TELEMO</span>
      </p>
      </div>
      </div>
      <div className="fade-in mt-12 sm:mt-16 bg-[#eaf7f1] border-l-[6px] border-[#41ac86] p-6 sm:p-10 lg:p-12 visible">
      <p className="inline-flex items-center gap-2 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-4"><span className="w-6 h-[2px] bg-[#41ac86]"></span>VS. OTHER AI SALES
      </p>
      <h4 className="text-[22px] sm:text-[30px] lg:text-[38px] font-black text-black leading-[1.3] mb-8">他のAI営業代行と<span className="text-[#41ac86]">一緒にしないでください</span>
      </h4>
      <div className="mb-7 sm:mb-9">
      <p className="text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">一般的なAI営業は、<span className="font-black text-black">エンジニアが作っている</span>。<br className="sm:hidden" />技術は優れていても、<span className="font-black text-black">営業を知らない</span>。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">どれだけ精度が高くても、「何を話すか」「どこで引くか」「どう刺すか」—— この判断こそが<span className="font-black text-[#41ac86]">営業の急所</span>。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">営業を知らない人間が設計した仕組みでは、結局<span className="font-black">成果に繋がらない</span>のです。
      </p>
      </div>
      <div className="flex items-center gap-3 my-6 sm:my-8"><span className="h-[2px] flex-1 bg-[#41ac86]/30"></span><span className="text-[11px] sm:text-[12px] font-black text-[#41ac86] tracking-[0.3em]">TELEMO</span><span className="h-[2px] flex-1 bg-[#41ac86]/30"></span>
      </div>
      <div className="mb-7 sm:mb-9">
      <p className="text-[15px] sm:text-[18px] lg:text-[20px] font-black text-black leading-[1.7] mb-3">TELEMOは、違います。
      </p>
      <p className="text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium"><span className="font-black text-black">15年以上の営業実績を持つチームが、現場ベースでトーク設計</span>しています。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">現場で鍛え上げた営業トーク・目標数値・改善の仕組みに、AIの実行力と分析力を乗せる。<br />月間13,200コール——人で換算すると約3人分。
      </p>
      <p className="mt-3 text-[14px] sm:text-[17px] lg:text-[18px] text-[#333] leading-[1.95] font-medium">「人が設計し、AIが動かし、人が磨く」—— この順番でしか、売れる営業は再現できません。
      </p>
      </div>
      <div className="pt-5 sm:pt-6 border-t-2 border-[#41ac86]/30">
      <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-black text-black leading-[1.6]">他のAI営業代行と、<span className="text-[#41ac86]">TELEMOを同じ土俵で比べないでください。</span>
      </p>
      <p className="mt-2 text-[13px] sm:text-[16px] text-[#555] font-bold">設計の起点が、そもそも違います。
      </p>
      </div>
      </div>
      <div className="fade-in mt-16 sm:mt-24 visible">
      <div className="text-center mb-8 sm:mb-10">
      <h4 className="text-[26px] sm:text-[36px] lg:text-[44px] font-black text-black leading-[1.3]">TELEMOが選ばれる <span className="text-[#41ac86] text-[40px] sm:text-[56px] lg:text-[64px]" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>4</span><span className="text-black">つの理由</span></h4>
      </div>
      <div className="flex flex-col gap-0">
      <div className="fade-in bg-[#f7f7f7] border-l-4 border-[#41ac86] p-8 sm:p-10 lg:p-12 visible">
      <div className="flex items-start gap-5 sm:gap-8">
      <span className="text-[36px] sm:text-[48px] font-black text-[#41ac86] leading-none shrink-0" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>1.</span>
      <div>
      <h5 className="text-[20px] sm:text-[26px] font-black text-black leading-[1.4] mb-3"><span className="relative inline-block"><span className="relative z-10">プロが設計した</span><span className="absolute bottom-[2px] left-0 w-full h-[6px] bg-[#41ac86]/20"></span></span> 営業トーク</h5>
      <p className="text-[14px] sm:text-[17px] text-[#555] leading-[1.9]">営業歴15年のプロが、無駄のない会話構成を設計。余計な前置き・曖昧な質問は一切排除。トップ営業マンの"間・語尾・テンション"を徹底研究し、自然で説得力のある会話を実現します。</p>
      </div>
      </div>
      </div>
      <div className="fade-in bg-white border-l-4 border-[#41ac86] p-8 sm:p-10 lg:p-12 visible">
      <div className="flex items-start gap-5 sm:gap-8">
      <span className="text-[36px] sm:text-[48px] font-black text-[#41ac86] leading-none shrink-0" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>2.</span>
      <div>
      <h5 className="text-[20px] sm:text-[26px] font-black text-black leading-[1.4] mb-3"><span className="relative inline-block"><span className="relative z-10">YESを積み重ねる</span><span className="absolute bottom-[2px] left-0 w-full h-[6px] bg-[#41ac86]/20"></span></span> 会話設計</h5>
      <p className="text-[14px] sm:text-[17px] text-[#555] leading-[1.9]">相手が「はい」と言いやすい質問を設計。小さなYESを積み重ねて商談へ導きます。目的のない雑談・回りくどい説明はゼロ。必要な情報だけを、必要な順番で。</p>
      </div>
      </div>
      </div>
      <div className="fade-in bg-[#f7f7f7] border-l-4 border-[#41ac86] p-8 sm:p-10 lg:p-12 visible">
      <div className="flex items-start gap-5 sm:gap-8">
      <span className="text-[36px] sm:text-[48px] font-black text-[#41ac86] leading-none shrink-0" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>3.</span>
      <div>
      <h5 className="text-[20px] sm:text-[26px] font-black text-black leading-[1.4] mb-3"><span className="relative inline-block"><span className="relative z-10">温度感を見極め</span><span className="absolute bottom-[2px] left-0 w-full h-[6px] bg-[#41ac86]/20"></span></span> リソースを集中</h5>
      <p className="text-[14px] sm:text-[17px] text-[#555] leading-[1.9]">相手の反応から興味度を即座に判定。見込みのある先だけにリソースを集中させ、効率的にアポイントを獲得します。</p>
      </div>
      </div>
      </div>
      <div className="fade-in bg-white border-l-4 border-[#41ac86] p-8 sm:p-10 lg:p-12 visible">
      <div className="flex items-start gap-5 sm:gap-8">
      <span className="text-[36px] sm:text-[48px] font-black text-[#41ac86] leading-none shrink-0" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>4.</span>
      <div>
      <h5 className="text-[20px] sm:text-[26px] font-black text-black leading-[1.4] mb-3"><span className="relative inline-block"><span className="relative z-10">トスまでの最短導線</span><span className="absolute bottom-[2px] left-0 w-full h-[6px] bg-[#41ac86]/20"></span></span></h5>
      <p className="text-[14px] sm:text-[17px] text-[#555] leading-[1.9]">アポイント獲得までの無駄なステップを排除。最短ルートで商談の場を作ります。誰でも成果に近づく会話を仕組み化しました。</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="newcomer" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[1240px] mx-auto">
      <p className="fade-in text-[12px] text-[#41ac86] tracking-[0.15em] font-bold mb-3 visible">営業代行を使ったことがない方へ
      </p>
      <h2 className="fade-in font-black text-black leading-[1.3] tracking-[0.02em] mb-10 whitespace-nowrap visible" style={{"fontSize": "clamp(22px, 6.2vw, 44px)"}}>営業の課題、<span className="text-[#41ac86]">こう解決</span>します
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-14">
      <div className="fade-in relative bg-white rounded-[16px] border border-[#e8e8e8] p-6 sm:p-7 overflow-hidden flex flex-col visible" style={{"transitionDelay": "0s"}}><span className="absolute top-5 right-5 z-10 text-[10px] font-black text-white bg-black tracking-[0.25em] px-2.5 py-[4px]">コスト</span>
      <div className="relative mb-5 leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span className="block text-[32px] sm:text-[38px] font-black tracking-[0.02em] text-transparent" style={{"WebkitTextStroke": "1.5px rgb(17, 17, 17)"}}>STEP</span>
      <div className="flex items-end gap-2 -mt-1"><span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#41ac86]">01</span><span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3"></span><span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#41ac86] -skew-x-[20deg] mb-3"></span>
      </div>
      <div className="flex items-center gap-2 mt-2"><span className="h-[3px] flex-1 bg-black"></span><span className="h-[3px] w-[20%] bg-[#41ac86]"></span>
      </div>
      </div>
      <h3 className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4 whitespace-normal sm:whitespace-pre-line">人件費の実態を
      知っていますか
      </h3>
      <p className="relative text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9] mb-5 flex-1">給与だけじゃない。社会保険（約15%）・交通費（約1万円/月）・残業/有給（約10%増）・教育コスト・管理コスト。そして最大のリスクは離職。採用→教育→戦力化→離職→再採用のループ。
      </p>
      <div className="relative border-t border-[#eee] pt-4">
      <div className="flex items-baseline gap-2 mb-1"><span className="text-[11px] text-[#999] font-bold tracking-[0.1em]">隠れコスト合計</span>
      </div>
      <p className="text-[26px] sm:text-[30px] font-black text-[#41ac86] leading-none mb-1" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>月50万〜
      </p>
      <p className="text-[11px] text-[#888] leading-[1.6]">給与+社保+交通費+教育+管理+離職リスク
      </p>
      </div>
      </div>
      <div className="fade-in relative bg-white rounded-[16px] border border-[#e8e8e8] p-6 sm:p-7 overflow-hidden flex flex-col visible" style={{"transitionDelay": "0.1s"}}><span className="absolute top-5 right-5 z-10 text-[10px] font-black text-white bg-black tracking-[0.25em] px-2.5 py-[4px]">TELEMO</span>
      <div className="relative mb-5 leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span className="block text-[32px] sm:text-[38px] font-black tracking-[0.02em] text-transparent" style={{"WebkitTextStroke": "1.5px rgb(17, 17, 17)"}}>STEP</span>
      <div className="flex items-end gap-2 -mt-1"><span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#41ac86]">02</span><span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3"></span><span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#41ac86] -skew-x-[20deg] mb-3"></span>
      </div>
      <div className="flex items-center gap-2 mt-2"><span className="h-[3px] flex-1 bg-black"></span><span className="h-[3px] w-[20%] bg-[#41ac86]"></span>
      </div>
      </div>
      <h3 className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4 whitespace-normal sm:whitespace-pre-line">離職なし
      感情ブレなし
      </h3>
      <p className="relative text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9] mb-5 flex-1">離職なし・教育不要・感情ブレなし・パフォーマンス一定。止まらず、忠実に、∞に稼働し続けます。月間13,200コール、人で換算すると約3人分。
      </p>
      <div className="relative border-t border-[#eee] pt-4">
      <div className="flex items-baseline gap-2 mb-1"><span className="text-[11px] text-[#999] font-bold tracking-[0.1em]">TELEMOの稼働量</span>
      </div>
      <p className="text-[26px] sm:text-[30px] font-black text-[#41ac86] leading-none mb-1" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>13,200コール/月
      </p>
      <p className="text-[11px] text-[#888] leading-[1.6]">※人の場合：200コール/日 × 22日 = 約4,400コール
      </p>
      </div>
      </div>
      <div className="fade-in relative bg-white rounded-[16px] border border-[#e8e8e8] p-6 sm:p-7 overflow-hidden flex flex-col visible" style={{"transitionDelay": "0.2s"}}><span className="absolute top-5 right-5 z-10 text-[10px] font-black text-white bg-black tracking-[0.25em] px-2.5 py-[4px]">集中</span>
      <div className="relative mb-5 leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span className="block text-[32px] sm:text-[38px] font-black tracking-[0.02em] text-transparent" style={{"WebkitTextStroke": "1.5px rgb(17, 17, 17)"}}>STEP</span>
      <div className="flex items-end gap-2 -mt-1"><span className="text-[96px] sm:text-[120px] font-black leading-[0.85] text-[#41ac86]">03</span><span className="block w-[10px] h-[60px] sm:h-[72px] bg-black -skew-x-[20deg] mb-3"></span><span className="block w-[4px] h-[60px] sm:h-[72px] bg-[#41ac86] -skew-x-[20deg] mb-3"></span>
      </div>
      <div className="flex items-center gap-2 mt-2"><span className="h-[3px] flex-1 bg-black"></span><span className="h-[3px] w-[20%] bg-[#41ac86]"></span>
      </div>
      </div>
      <h3 className="relative text-[22px] sm:text-[26px] lg:text-[28px] font-black text-black leading-[1.3] mb-4 whitespace-normal sm:whitespace-pre-line">本業に
      集中できる
      </h3>
      <p className="relative text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9] mb-5 flex-1">新規開拓をプロに任せれば、自社は商品開発や顧客フォローなどコア業務に専念できます。
      </p>
      <div className="relative border-t border-[#eee] pt-4">
      <div className="flex items-baseline gap-2 mb-1"><span className="text-[11px] text-[#999] font-bold tracking-[0.1em]">営業工数</span>
      </div>
      <p className="text-[26px] sm:text-[30px] font-black text-[#41ac86] leading-none mb-1" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>実質 0
      </p>
      <p className="text-[11px] text-[#888] leading-[1.6]">自社の強みに時間を使える
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in text-center mt-4 visible">
      <a href="#contact-form" className="btn-accent text-center text-[14px]">営業のプロに相談する
      </a>
      </div>
      </div>
      </section>
      <section className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
      <div className="fade-in text-center mb-10 sm:mb-14 visible">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#41ac86]"></span>PERFORMANCE DATA<span className="w-8 h-[2px] bg-[#41ac86]"></span>
      </p>
      <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4">机上の空論では<span className="text-[#41ac86]">ありません</span>
      </h2>
      <p className="text-[15px] sm:text-[17px] text-[#555] leading-[1.8] max-w-[680px] mx-auto">実際の稼働データを公開します。<br />誇張なし。<br className="sm:hidden" />日次実績に基づく数値のみ。
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
      <div className="fade-in relative bg-white border-2 border-black overflow-hidden visible" style={{"boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px", "transitionDelay": "0s"}}>
      <div className="bg-black px-5 py-4 flex items-center justify-between"><span className="text-[18px] sm:text-[20px] font-black text-white">法人回線</span><span className="text-[10px] font-black text-[#41ac86] tracking-[0.2em] bg-[#41ac86]/15 px-2.5 py-1 rounded-full">BtoB</span>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">受注率</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.6</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">%</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">日次成約</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.96</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">売上見込</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>7</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">万円/日</span>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in relative bg-white border-2 border-black overflow-hidden visible" style={{"boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px", "transitionDelay": "0.1s"}}>
      <div className="bg-black px-5 py-4 flex items-center justify-between"><span className="text-[18px] sm:text-[20px] font-black text-white">法人でんき</span><span className="text-[10px] font-black text-[#41ac86] tracking-[0.2em] bg-[#41ac86]/15 px-2.5 py-1 rounded-full">BtoB</span>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">受注率</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.5</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">%</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">日次成約</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>0.72</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">売上見込</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>6</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">万円/日</span>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in relative bg-white border-2 border-black overflow-hidden visible" style={{"boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px", "transitionDelay": "0.2s"}}>
      <div className="bg-black px-5 py-4 flex items-center justify-between"><span className="text-[18px] sm:text-[20px] font-black text-white">個人中古車</span><span className="text-[10px] font-black text-[#41ac86] tracking-[0.2em] bg-[#41ac86]/15 px-2.5 py-1 rounded-full">BtoC</span>
      </div>
      <div className="p-5 sm:p-6 space-y-4">
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">月間審査</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>5</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">月間通過</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>1</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">件</span>
      </div>
      </div>
      <div className="flex items-end justify-center sm:justify-between gap-8 sm:gap-3 border-b border-[#eee] pb-3 last:border-0 last:pb-0"><span className="text-[15px] sm:text-[17px] font-black text-[#333]">粗利</span>
      <div className="text-right"><span className="text-[36px] sm:text-[44px] font-black text-[#41ac86] leading-none" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}><span>75</span></span><span className="text-[14px] sm:text-[15px] font-black text-[#555] ml-1">万円/件</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="fade-in text-center bg-[#eaf7f1] border-l-[6px] border-[#41ac86] py-6 sm:py-8 px-6 sm:px-10 visible">
      <p className="text-[22px] sm:text-[30px] lg:text-[36px] font-black text-black leading-[1.4]">業種を選ばない<span className="text-[#41ac86]">再現性</span>。<br />営業は<span className="text-[#41ac86]">「確率」</span>で作れる。
      </p>
      <p className="mt-4 text-[16px] sm:text-[19px] text-[#555] font-bold">コール数（母数）× 有効率（接触）× 受注率（可能性）＝ 売上
      </p>
      </div>
      <p className="text-[12px] text-[#999] mt-4 text-center">※ 特定企業情報は非開示。日次実績に基づく数値のみ提示。
      </p>
      </div>
      </section>
      <section id="pricing" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7] scroll-mt-[80px]">
      <div className="max-w-[1240px] mx-auto">
      <div className="fade-in text-center mb-10 sm:mb-14 visible">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#41ac86]"></span>COST COMPARISON<span className="w-8 h-[2px] bg-[#41ac86]"></span>
      </p>
      <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4">人を雇うより、<span className="text-[#41ac86]">安く・多く・止まらない。</span><br className="hidden sm:inline" />それが、リスクゼロの営業力。
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
      <div className="fade-in bg-white border border-[#e5e5e5] overflow-hidden visible">
      <div className="bg-[#fafafa] px-6 py-5 border-b border-[#e5e5e5] text-center">
      <p className="text-[10px] tracking-[0.2em] font-bold text-[#bbb] mb-1">HUMAN
      </p>
      <p className="text-[20px] sm:text-[24px] font-black text-[#555]">人の採用（新卒）
      </p>
      </div>
      <div className="p-5 sm:p-6 space-y-3">
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">給与</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">28万円/月</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">社会保険</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">約4.2万円（15%）</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">交通費</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">約1万円/月</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">残業・有給</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#333]">約2.8万円（10%）</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">離職リスク</span><span className="text-[21px] sm:text-[25px] font-black text-left text-red-500">⚠ あり</span>
      </div>
      </div>
      <div className="bg-[#fafafa] px-6 py-4 border-t border-[#e5e5e5] text-center"><span className="text-[14px] font-bold text-[#888]">月額総コスト：</span><span className="text-[28px] sm:text-[32px] font-black text-[#333] ml-2" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>約35万円</span>
      </div>
      </div>
      <div className="fade-in bg-white border-2 border-[#41ac86] overflow-hidden shadow-[0_12px_30px_rgba(65,172,134,0.15)] visible" style={{"transitionDelay": "0.1s"}}>
      <div className="bg-[#41ac86] px-6 py-5 text-center">
      <p className="text-[10px] tracking-[0.2em] font-bold text-white/70 mb-1">TELEMO
      </p>
      <p className="text-[20px] sm:text-[24px] font-black text-white">TELEMO
      </p>
      </div>
      <div className="p-5 sm:p-6 space-y-3">
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">専任担当</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#41ac86]">配置</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">通信費</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#41ac86]">込み</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">録音・ログ</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#41ac86]">込み</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">文字起こし</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#41ac86]">込み</span>
      </div>
      <div className="grid grid-cols-2 gap-20 sm:gap-32 items-center py-3 border-b border-[#f0f0f0] last:border-0"><span className="text-[20px] sm:text-[24px] font-bold text-[#888] text-right">離職リスク</span><span className="text-[21px] sm:text-[25px] font-black text-left text-[#41ac86]">✓ なし</span>
      </div>
      </div>
      <div className="bg-[#eaf7f1] px-6 py-4 border-t border-[#cfeadd] text-center"><span className="text-[14px] font-bold text-[#888]">月額</span><span className="text-[28px] sm:text-[32px] font-black text-[#41ac86] ml-2" style={{"fontFamily": "\"M PLUS 1p\", sans-serif"}}>35万円</span>
      </div>
      </div>
      </div>
      <div className="fade-in text-center bg-white border-2 border-black px-4 py-6 sm:p-8 mb-6 sm:mb-10 visible" style={{"boxShadow": "rgb(65, 172, 134) 6px 6px 0px 0px"}}>
      <p className="font-black text-black leading-[1.4] whitespace-nowrap" style={{"fontSize": "clamp(15px, 4.4vw, 32px)"}}>同じコストで、<span className="text-[#41ac86]">リスクがゼロ</span>になる。
      </p>
      <p className="mt-2 text-[14px] sm:text-[16px] text-[#555] font-bold">しかもコール数は人の2倍。教育不要。離職なし。
      </p>
      </div>
      <div className="fade-in mb-10 sm:mb-14 visible">
      <div className="text-center mb-8 sm:mb-10">
      <p className="inline-flex items-center gap-3 text-[11px] sm:text-[13px] text-[#41ac86] tracking-[0.3em] font-black mb-3"><span className="w-8 h-[2px] bg-[#41ac86]"></span>EMOTIONAL RISK<span className="w-8 h-[2px] bg-[#41ac86]"></span>
      </p>
      <h3 className="text-[24px] sm:text-[34px] lg:text-[40px] font-black text-black leading-[1.3]">人の営業には<span className="text-[#41ac86]">「感情」</span>がある
      </h3>
      <p className="mt-3 text-[15px] sm:text-[17px] text-[#555] font-bold">どんなに優秀でも、人間には感情がある。それが最大のリスクです。
      </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#41ac86] text-[14px] sm:text-[15px] font-black mb-3">01</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">残業したくない
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">定時後の稼働を嫌がる<br />ワークライフバランス重視
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.06s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#41ac86] text-[14px] sm:text-[15px] font-black mb-3">02</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">電話がしんどい
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">電話営業のストレス<br />断られることへの恐怖心
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.12s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#41ac86] text-[14px] sm:text-[15px] font-black mb-3">03</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">人間関係の摩擦
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">チーム内の衝突<br />上司とのコミュ不全
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.18s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#41ac86] text-[14px] sm:text-[15px] font-black mb-3">04</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">モチベの波
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">やる気の浮き沈みが激しく<br />安定した成果が出ない
      </p>
      </div>
      <div className="fade-in bg-white border-2 border-black p-5 sm:p-6 text-center visible" style={{"boxShadow": "rgba(0, 0, 0, 0.1) 4px 4px 0px 0px", "transitionDelay": "0.24s"}}><span className="inline-flex w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-black items-center justify-center text-[#41ac86] text-[14px] sm:text-[15px] font-black mb-3">05</span>
      <p className="text-[26px] sm:text-[20px] font-black text-black mb-3">突然の離職
      </p>
      <p className="text-[15px] sm:text-[15px] text-[#888] leading-[1.7] font-medium">予告なしの退職<br />採用・教育コストが無駄に
      </p>
      </div>
      </div>
      <div className="fade-in bg-[#eaf7f1] p-8 sm:p-12 text-center visible">
      <p className="font-black text-black leading-[1.5]" style={{"fontSize": "clamp(18px, 5.2vw, 40px)"}}><span className="sm:hidden">TELEMOは<br /><span className="text-[#41ac86] whitespace-nowrap">辞めない。飽きない。ブレない。</span></span><span className="hidden sm:inline">TELEMOは、<span className="text-[#41ac86]">辞めない。飽きない。ブレない。</span></span>
      </p>
      <p className="mt-4 text-[16px] sm:text-[20px] text-[#555] leading-[1.8]">感情に左右されない。24時間365日、<br className="sm:hidden" />同じ品質で稼働し続けます。
      </p>
      </div>
      </div>
      <div className="fade-in text-center visible">
      <a href="#contact-form" className="btn-accent text-center">営業のプロに相談する
      </a>
      </div>
      </div>
      </section>
      <section id="flow" className="py-16 sm:py-24 px-5 sm:px-10 bg-white" style={{"fontFamily": "\"Noto Sans JP\", sans-serif"}}>
      <div className="max-w-[1240px] mx-auto text-center">
      <p className="fade-in text-[15px] sm:text-[16px] text-[#41ac86] tracking-[0.1em] font-bold mb-3 visible">ご利用の流れ
      </p>
      <h2 className="fade-in font-bold text-[#333] tracking-[0.03em] mb-16 sm:mb-20 whitespace-nowrap visible" style={{"fontSize": "clamp(22px, 6.2vw, 44px)"}}>最短5営業日でコール開始
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 lg:gap-0 items-stretch">
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0s", "transform": "scale(1)", "boxShadow": "rgba(0, 0, 0, 0.03) 0px 2px 8px", "zIndex": "1", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(65, 172, 134)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">01</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f2fbf7] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">営業のプロに相談
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">現状の営業体制や課題をヒアリング。
      TELEMOが合うかどうか正直にお伝えします。
      </p>
      </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-2"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="flex lg:hidden items-center justify-center py-2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6V22M14 22L8 16M14 22L20 16" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0.15s", "transform": "scale(1)", "boxShadow": "rgba(0, 0, 0, 0.03) 0px 2px 8px", "zIndex": "1", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(65, 172, 134)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">02</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f2fbf7] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">ご提案・お見積り
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">営業先リスト・営業トーク・目標数値を設計。
      ご納得いただけた場合のみ契約へ。
      </p>
      </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-2"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="flex lg:hidden items-center justify-center py-2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6V22M14 22L8 16M14 22L20 16" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0.3s", "transform": "scale(1)", "boxShadow": "rgba(0, 0, 0, 0.03) 0px 2px 8px", "zIndex": "1", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(65, 172, 134)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">03</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f2fbf7] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">コール開始
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">契約後最短5営業日でコール開始。
      専任チームが月間13,200コールを実行します。
      </p>
      </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-2"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="flex lg:hidden items-center justify-center py-2"><svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6V22M14 22L8 16M14 22L20 16" stroke="#41ac86" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
      </div>
      <div className="fade-in text-left flex flex-col transition-all duration-300 visible" style={{"transitionDelay": "0.45s", "transform": "scale(1)", "boxShadow": "rgba(0, 0, 0, 0.03) 0px 2px 8px", "zIndex": "1", "position": "relative"}}>
      <div className="px-6 py-4 flex items-center gap-3 transition-all duration-300" style={{"background": "rgb(65, 172, 134)"}}><span className="text-[36px] sm:text-[42px] font-bold text-white leading-none">04</span><span className="text-[14px] sm:text-[15px] font-bold text-white/80 tracking-[0.1em]">STEP</span>
      </div>
      <div className="bg-[#f2fbf7] border border-[#e5e0d8] border-t-0 px-6 py-6 sm:py-8 flex-1">
      <h3 className="text-[19px] sm:text-[22px] font-bold text-[#333] mb-4 leading-[1.4]">レポート・改善
      </h3>
      <p className="text-[14px] sm:text-[16px] text-[#666] leading-[1.8] m-0 whitespace-pre-line">全コールログをリアルタイム共有。
      データをもとに営業トークやリストを継続改善。
      </p>
      </div>
      </div>
      </div>
      <div className="fade-in mt-14 sm:mt-16 visible">
      <a href="#contact-form" className="inline-block px-6 py-4 sm:px-14 sm:py-5 text-white font-bold text-[15px] sm:text-[20px] rounded-full no-underline hover:scale-[1.05] whitespace-nowrap" style={{"background": "rgb(65, 172, 134)", "boxShadow": "rgba(65, 172, 134, 0.3) 0px 8px 20px", "animation": "2s ease-in-out 0s infinite normal none running flow-cta-pulse"}}>営業のプロに相談する
      </a>
      </div>
      </div><style dangerouslySetInnerHTML={{ __html: `
      @keyframes flow-cta-pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 8px 20px rgba(65, 172, 134, 0.3); }
      50% { transform: scale(1.05); box-shadow: 0 12px 32px rgba(65, 172, 134, 0.5); }
        }
      ` }} />
      <div className="fade-in text-center mt-14 sm:mt-16 visible">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#41ac86] hover:bg-[#2f8063] text-white font-bold text-[15px] sm:text-[17px] px-10 sm:px-14 py-4 sm:py-5 rounded-full no-underline transition-colors shadow-[0_4px_16px_rgba(65,172,134,0.3)]">営業のプロに相談する</a>
      </div>
      </section>
      <FounderSection />
      <section id="faq" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[1240px] mx-auto">
      <p className="fade-in text-[13px] sm:text-[14px] text-[#41ac86] tracking-[0.2em] font-bold mb-3 text-center visible">FAQ
      </p>
      <h2 className="fade-in text-[28px] sm:text-[40px] lg:text-[44px] font-black text-black leading-[1.3] tracking-[0.02em] mb-4 text-center visible">よくある<span className="text-[#41ac86]">ご質問</span>
      </h2>
      <p className="fade-in text-[#4d4d4d] text-center mb-12 whitespace-nowrap visible" style={{"fontSize": "clamp(12px, 3.6vw, 16px)"}}>TELEMOについて、よくいただくご質問をまとめました。
      </p>
      <FAQ />
      <div className="fade-in text-center mt-12 visible">
      <p className="text-[14px] text-[#999] mb-4">その他のご質問は、お気軽にお問い合わせください。
      </p>
      <a href="#contact-form" className="btn-accent text-center text-[14px]">お問い合わせはこちら
      </a>
      </div>
      </div>
      </section>
      <section className="py-16 sm:py-24 px-5 sm:px-10 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10" style={{"background": "radial-gradient(at 80% 30%, rgb(65, 172, 134) 0%, transparent 60%)"}}>
      </div>
      <div className="relative z-10 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div>
      <p className="fade-in text-[13px] text-[#41ac86] tracking-[0.2em] font-bold mb-4 visible">無料相談
      </p>
      <h2 className="fade-in font-black text-white leading-[1.3] mb-5 visible" style={{"fontSize": "clamp(18px, 5.2vw, 42px)"}}><span className="whitespace-nowrap">現状の営業コストと比較した</span><br /><span className="whitespace-nowrap"><span className="text-[#41ac86]">"削減インパクト"</span>をその場で算出</span>
      </h2>
      <p className="fade-in text-[15px] sm:text-[17px] text-white/70 leading-[1.8] mb-8 visible">採用コスト・離職リスク・教育コスト——<br className="hidden sm:inline" />これらを数字で可視化し、TELEMO導入の効果を正直にお伝えします。<br className="hidden sm:inline" />合わなければ、それでOKです。
      </p>
      <div className="fade-in flex flex-col sm:flex-row gap-4 visible">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#41ac86] text-white text-[16px] sm:text-[18px] font-bold h-[60px] sm:h-[68px] px-10 sm:px-14 rounded-[96px] no-underline hover:bg-[#2f8063] transition-colors">営業のプロに相談する
      </a>
      <a href="#document-request" className="inline-flex items-center justify-center border-2 border-white/30 text-white text-[14px] sm:text-[16px] font-bold h-[60px] sm:h-[68px] px-8 sm:px-12 rounded-[96px] no-underline hover:bg-white/10 transition-colors">営業のプロに相談する
      </a>
      </div>
      </div>
      <div className="fade-in visible">
      <div className="bg-white/[0.06] border border-white/10 rounded-none p-6 sm:p-8">
      <p className="text-[18px] sm:text-[20px] text-white font-black mb-8">無料相談でわかること
      </p>
      <div className="space-y-0">
      <div className="flex gap-5 items-start py-5 sm:py-6 border-b border-white/10"><span className="text-[18px] sm:text-[20px] font-black text-[#41ac86] mt-0.5 shrink-0">01</span>
      <div>
      <p className="text-[18px] sm:text-[20px] text-white font-bold mb-2">採用コストの可視化
      </p>
      <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.8]">現状の営業人件費とTELEMOのコスト差を算出します。
      </p>
      </div>
      </div>
      <div className="flex gap-5 items-start py-5 sm:py-6 border-b border-white/10"><span className="text-[18px] sm:text-[20px] font-black text-[#41ac86] mt-0.5 shrink-0">02</span>
      <div>
      <p className="text-[18px] sm:text-[20px] text-white font-bold mb-2">離職リスクの試算
      </p>
      <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.8]">離職で発生する再採用・再教育コストを試算します。
      </p>
      </div>
      </div>
      <div className="flex gap-5 items-start py-5 sm:py-6 "><span className="text-[18px] sm:text-[20px] font-black text-[#41ac86] mt-0.5 shrink-0">03</span>
      <div>
      <p className="text-[18px] sm:text-[20px] text-white font-bold mb-2">削減インパクトの提示
      </p>
      <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.8]">削減コストと稼働量を具体的な数字でお伝えします。
      </p>
      </div>
      </div>
      </div>
      <div className="mt-6 pt-5 border-t border-white/10">
      <div className="flex flex-wrap gap-5 text-[15px] sm:text-[16px] text-white/50"><span>所要時間：10〜15分</span><span>費用：無料</span><span>売り込み：なし</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="contact-form" className="py-16 sm:py-24 px-5 sm:px-10 bg-white">
      <div className="max-w-[520px] mx-auto">
      <div className="fade-in text-center mb-8 visible">
      <p className="text-[12px] text-[#41ac86] tracking-[0.15em] font-bold mb-2">お問い合わせ
      </p>
      <h2 className="text-[24px] sm:text-[28px] font-bold text-black leading-[1.4] tracking-[0.04em]">まずは状況を教えてください
      </h2>
      </div>
      <DiagnosisQuiz />
      </div>
      </section>
      <section id="document-request" className="py-16 sm:py-24 px-5 sm:px-10 bg-[#f7f7f7]">
      <div className="max-w-[720px] mx-auto">
      <div className="fade-in text-center mb-8 visible">
      <p className="text-[12px] text-[#41ac86] tracking-[0.25em] font-bold mb-3">CONTACT
      </p>
      <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-black text-black leading-[1.3] tracking-[0.02em] mb-3">無料相談・お問い合わせ
      </h2>
      <p className="text-[14px] sm:text-[15px] text-[#4d4d4d] leading-[1.9]">サービス内容・料金・導入について、お気軽にご相談ください。<br className="hidden sm:block" />下記フォームにご入力ください（所要1分）。
      </p>
      </div>
      <DocumentRequestForm />
      </div>
      </section>
      <section className="py-16 sm:py-24 px-5 sm:px-10 relative overflow-hidden" style={{"background": "linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(26, 37, 55) 50%, rgb(26, 46, 70) 100%)"}}>
      <div className="absolute top-0 left-0 w-full h-full opacity-25" style={{"background": "radial-gradient(at 30% 50%, rgb(65, 172, 134) 0%, transparent 60%)"}}>
      </div>
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
      <p className="fade-in text-[18px] sm:text-[22px] text-[#41ac86] tracking-[0.15em] font-black mb-5 visible">TELEMO
      </p>
      <h2 className="fade-in text-[32px] sm:text-[44px] lg:text-[52px] font-black text-white leading-[1.3] tracking-[0.04em] mb-6 visible" style={{"textShadow": "rgba(0, 0, 0, 0.9) 0px 2px 12px, rgba(0, 0, 0, 0.6) 0px 0px 24px"}}>営業のプロが作った<br />ぜんぶ見せる営業代行
      </h2>
      <p className="fade-in text-[20px] sm:text-[24px] text-white font-bold mb-4 visible" style={{"textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 8px"}}>かけた分だけ、全部見える。<br className="sm:hidden" />それがTELEMOです。
      </p>
      <p className="fade-in text-[#41ac86] font-black mb-10 visible" style={{"textShadow": "rgba(0, 0, 0, 0.9) 0px 1px 8px", "fontSize": "clamp(13px, 4vw, 20px)"}}><span className="whitespace-nowrap">現状の営業コストと比較した</span><br className="sm:hidden" /><span className="whitespace-nowrap">"削減インパクト"をその場で算出します</span>
      </p>
      <div className="fade-in flex justify-center visible">
      <a href="#contact-form" className="inline-flex items-center justify-center bg-[#41ac86] hover:bg-[#2f8063] text-white font-bold text-[15px] sm:text-[17px] px-8 sm:px-10 py-4 sm:py-5 rounded-full no-underline transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.5)]">営業のプロに相談する
      </a>

      </div>
      </div>
      </section></main>
  );
}
