import Hero from "@/components/Hero"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "400 000+", label: "тонн меди в год" },
  { value: "1935", label: "год основания завода" },
  { value: "60+", label: "стран-потребителей" },
  { value: "99,99%", label: "чистота катодной меди" },
]

const products = [
  {
    icon: "Layers",
    title: "Катодная медь",
    grade: "Марка М00к / М0к",
    description:
      "Рафинированная медь высшей чистоты 99,99%. Используется в электротехнике, кабельной промышленности и производстве сплавов. Соответствует стандартам ГОСТ 859 и LME Grade A.",
    tags: ["ГОСТ 859", "LME Grade A", "99,99% Cu"],
  },
  {
    icon: "Cable",
    title: "Медная катанка",
    grade: "Диаметр 8–16 мм",
    description:
      "Непрерывнолитая катанка для кабельно-проводниковой отрасли. Производится методом непрерывного литья и прокатки на линии Contirod. Минимальное содержание кислорода.",
    tags: ["Contirod", "НЛК", "Бескислородная"],
  },
  {
    icon: "Beaker",
    title: "Медные сплавы",
    grade: "Латунь / Бронза",
    description:
      "Сплавы меди с цинком, оловом и другими металлами для машиностроения, судостроения и приборостроения. Изготавливаются по индивидуальным техническим условиям.",
    tags: ["Латунь", "Бронза", "ТУ под заказ"],
  },
]

const advantages = [
  {
    icon: "Thermometer",
    title: "Арктическое производство",
    text: "Завод работает при температурах до −50°C. Технологии и инфраструктура полностью адаптированы к условиям Крайнего Севера.",
  },
  {
    icon: "Repeat",
    title: "Замкнутый цикл",
    text: "От руды до готовой продукции — всё производство сосредоточено на одной площадке. Переработка конвертерного шлака возвращает медь обратно в цикл.",
  },
  {
    icon: "ShieldCheck",
    title: "Контроль качества",
    text: "Каждая партия проходит спектральный анализ в собственной аккредитованной лаборатории. Сертификаты качества прилагаются к каждой поставке.",
  },
  {
    icon: "Train",
    title: "Логистика Норильска",
    text: "Отгрузка по Северному морскому пути, а также авиа- и железнодорожным транспортом через Красноярск. Складской запас — до 10 000 тонн.",
  },
]

const process = [
  { step: "01", title: "Флотационное обогащение", text: "Медно-никелевая руда дробится и обогащается методом флотации до концентрата с содержанием меди 15–25%." },
  { step: "02", title: "Плавка и конвертирование", text: "Концентрат плавится в отражательных и электрических печах. Черновая медь получается в конвертерах при температуре 1200°C." },
  { step: "03", title: "Огневое рафинирование", text: "Черновая медь очищается от примесей кислородно-восстановительным рафинированием. Чистота достигает 99,5–99,7%." },
  { step: "04", title: "Электролитическое рафинирование", text: "Финальная очистка методом электролиза. На катодах осаждается медь чистотой 99,99% — марка М00к." },
]

const Index = () => {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Hero />

      {/* Stats */}
      <section className="bg-[#0D0D0D] py-16 sm:py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-4xl sm:text-5xl font-light text-[#D4722A] tracking-tight mb-2">{s.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#111111] py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4722A] mb-3">Продукция</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Что мы производим
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white/5 border border-white/8 p-6 flex flex-col gap-4 hover:bg-white/8 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#B84A0F]/20 flex items-center justify-center">
                  <Icon name={p.icon} size={20} className="text-[#D4722A]" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-1">{p.grade}</div>
                  <h3 className="text-xl font-medium text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-[#B84A0F]/15 text-[#D4722A] border border-[#B84A0F]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0D0D0D] py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4722A] mb-3">Технология</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Полный цикл производства
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {process.map((p) => (
              <div key={p.step} className="flex gap-5">
                <div className="text-4xl font-light text-[#B84A0F]/30 leading-none w-12 flex-shrink-0">{p.step}</div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-[#111111] py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4722A] mb-3">Почему мы</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Наши преимущества
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#B84A0F]/20 flex items-center justify-center">
                  <Icon name={a.icon} size={20} className="text-[#D4722A]" />
                </div>
                <h3 className="text-base font-medium text-white">{a.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="bg-[#0D0D0D] py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <div className="flex-1">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4722A] mb-3">Контакты</p>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-6">
              Обсудим поставку
            </h2>
            <p className="text-white/55 leading-relaxed mb-8">
              Отдел продаж работает в будние дни с 9:00 до 18:00 (МСК+7). Для крупных и долгосрочных контрактов — персональный менеджер.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={18} className="text-[#D4722A] flex-shrink-0" />
                <span className="text-white/70 text-sm">г. Норильск, Красноярский край, Россия</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-[#D4722A] flex-shrink-0" />
                <span className="text-white/70 text-sm">+7 (3919) 000-000</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={18} className="text-[#D4722A] flex-shrink-0" />
                <span className="text-white/70 text-sm">sales@norilsk-copper.ru</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl bg-white/5 border border-white/8 p-6 text-center">
              <p className="text-white/60 text-sm mb-4">Хотите получить коммерческое предложение?</p>
              <button
                onClick={() => {
                  const el = document.querySelector<HTMLButtonElement>(".cta-button")
                  el?.click()
                }}
                className="w-full px-8 py-3 rounded-full bg-[#B84A0F] text-white font-medium hover:bg-[#C85A18] transition-colors tracking-tight"
              >
                Отправить заявку
              </button>
              <p className="text-white/30 text-xs mt-3">Ответим в течение одного рабочего дня</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-sm">© 2024 Норильский медный завод</p>
          <p className="text-white/20 text-xs">Производство меди полного цикла с 1935 года</p>
        </div>
      </footer>
    </main>
  )
}

export default Index