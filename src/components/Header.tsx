export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[64px] sm:h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center no-underline">
          <img src="/img/logo.png" alt="TELEMO｜AI SALES AUTOMATION" className="h-[42px] sm:h-[50px] w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#experienced" className="text-[13px] lg:text-[14px] font-bold text-[#1a1a1a] no-underline hover:text-[#41ac86] transition-colors">経験者の方</a>
          <a href="#newcomer" className="text-[13px] lg:text-[14px] font-bold text-[#1a1a1a] no-underline hover:text-[#41ac86] transition-colors">初めての方</a>
          <a href="#pricing" className="text-[13px] lg:text-[14px] font-bold text-[#1a1a1a] no-underline hover:text-[#41ac86] transition-colors">料金</a>
          <a href="#flow" className="text-[13px] lg:text-[14px] font-bold text-[#1a1a1a] no-underline hover:text-[#41ac86] transition-colors">ご利用の流れ</a>
          <a href="#faq" className="text-[13px] lg:text-[14px] font-bold text-[#1a1a1a] no-underline hover:text-[#41ac86] transition-colors">FAQ</a>
          <a href="#contact-form" className="inline-flex items-center justify-center bg-[#41ac86] hover:bg-[#2f8063] text-white text-[13px] lg:text-[14px] font-bold px-5 py-2.5 rounded-[96px] no-underline transition-colors">お問い合わせ</a>
        </nav>
      </div>
    </header>
  )
}
