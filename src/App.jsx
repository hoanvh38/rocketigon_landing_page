import { useState } from 'react'
import './App.css'

const NAV = [
  ['Dịch vụ', '#services'],
  ['Ứng dụng', '#app'],
  ['Cách hoạt động', '#how'],
  ['Tính năng', '#features'],
  ['Món ngon', '#menu'],
  ['Đánh giá', '#reviews'],
  ['Hỏi đáp', '#faq'],
]

const SERVICES = [
  {
    icon: '🍜', name: 'Đặt đồ ăn', tag: 'Giao tận nơi', main: true,
    desc: 'Hàng nghìn quán ngon quanh bạn, đồ ăn nóng hổi đến tận cửa trong 20 phút.',
  },
  {
    icon: '📦', name: 'Giao hàng', tag: 'Nhanh như chớp',
    desc: 'Gửi hàng trong khu vực Hà Tĩnh nhanh chóng, theo dõi hành trình theo thời gian thực.',
  },
  {
    icon: '🚗', name: 'Thuê xe', tag: 'Tự lái dễ dàng',
    desc: 'Nhiều dòng xe đời mới, thủ tục gọn nhẹ, nhận xe và thanh toán ngay trên app.',
  },
  {
    icon: '🛡️', name: 'Lái xe hộ', tag: 'Về nhà an toàn',
    desc: 'Tài xế chuyên nghiệp lái xe của bạn về nhà an toàn sau những cuộc vui.',
  },
]

const STATS = [
  ['20 phút', 'Thời gian giao trung bình'],
  ['4 dịch vụ', 'Trong 1 ứng dụng'],
  ['Hà Tĩnh', 'Khu vực phục vụ'],
  ['24/7', 'Hỗ trợ khách hàng'],
]

const STEPS = [
  ['📍', 'Chọn địa chỉ', 'Nhập nơi bạn muốn nhận đồ ăn, Rocketigo gợi ý ngay các quán gần bạn.'],
  ['🍜', 'Chọn món yêu thích', 'Hàng nghìn món từ cơm, bún, trà sữa đến đồ ăn vặt, lọc nhanh theo nhu cầu.'],
  ['🚀', 'Nhận hàng siêu tốc', 'Theo dõi tài xế theo thời gian thực, đồ ăn đến nóng hổi tận cửa.'],
]

const FEATURES = [
  ['⚡', 'Giao hàng siêu tốc', 'Mạng lưới tài xế dày đặc giúp đơn của bạn đến nhanh nhất có thể.'],
  ['🗺️', 'Theo dõi thời gian thực', 'Biết chính xác tài xế đang ở đâu và bao lâu nữa đồ ăn tới.'],
  ['🎁', 'Ưu đãi mỗi ngày', 'Mã giảm giá, freeship và tích điểm đổi quà cho mọi đơn hàng.'],
  ['💳', 'Thanh toán linh hoạt', 'Tiền mặt, thẻ, ví điện tử, QR - chọn cách bạn thích.'],
  ['🛡️', 'Đồ ăn an toàn', 'Quán đối tác được kiểm duyệt, đóng gói kín và giữ nhiệt.'],
  ['💬', 'Hỗ trợ 24/7', 'Có vấn đề? Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ.'],
]

const DISHES = [
  ['🍚', 'Cơm tấm sườn', 'từ 35.000đ', '#ffe8d6'],
  ['🍜', 'Phở bò tái', 'từ 45.000đ', '#fff3cc'],
  ['🍔', 'Burger & Gà rán', 'từ 39.000đ', '#ffdede'],
  ['🥤', 'Trà sữa trân châu', 'từ 25.000đ', '#e9f6e3'],
  ['🍕', 'Pizza', 'từ 69.000đ', '#fde7f1'],
  ['🥗', 'Salad & Healthy', 'từ 49.000đ', '#e3f2fd'],
]

const REVIEWS = [
  ['Minh Anh', 'Nhân viên văn phòng', 'Giờ nghỉ trưa chỉ có 1 tiếng, có Rocketigo là yên tâm. Đồ ăn luôn đến trong 20 phút và còn nóng.'],
  ['Quốc Bảo', 'Sinh viên', 'Mã giảm giá nhiều, freeship thường xuyên. Mình đặt trà sữa gần như mỗi ngày!'],
  ['Thu Hà', 'Mẹ bỉm sữa', 'Theo dõi được tài xế trên bản đồ nên rất an tâm. Giao diện dễ dùng, đặt món chỉ vài chạm.'],
]

const FAQ = [
  ['Rocketigo giao hàng trong khu vực nào?', 'Hiện Rocketigo đang phục vụ tại Hà Tĩnh và sẽ mở rộng dần sang các khu vực khác. Nhập địa chỉ trong ứng dụng để kiểm tra khu vực của bạn.'],
  ['Phí giao hàng được tính thế nào?', 'Phí dựa trên khoảng cách từ quán đến bạn. Nhiều đơn được miễn phí giao hàng nhờ mã ưu đãi và gói thành viên.'],
  ['Tôi có thể hủy đơn không?', 'Bạn có thể hủy đơn miễn phí trước khi quán xác nhận. Sau đó, vui lòng liên hệ hỗ trợ để được giúp đỡ.'],
  ['Làm sao để đăng ký bán hàng cùng Rocketigo?', 'Chỉ cần điền biểu mẫu ở phần "Trở thành đối tác", đội ngũ sẽ liên hệ trong vòng 24 giờ.'],
]

function Logo({ full = false }) {
  if (full) {
    return (
      <a href="#top" className="logo" aria-label="Rocketigo">
        <img src="/logo-full.png" alt="Rocketigo" className="logo-full" />
      </a>
    )
  }
  return (
    <a href="#top" className="logo" aria-label="Rocketigo">
      <img src="/logo-footer.png" alt="" className="logo-img" />
      <span>Rocketigo</span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Logo full />
        <nav className={`nav ${open ? 'open' : ''}`}>
          {NAV.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#download" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Tải ứng dụng
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const [addr, setAddr] = useState('')
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="pill">🔥 Freeship cho đơn đầu tiên</span>
          <h1>
            Đói bụng? <span className="hl">Rocketigo</span> phóng đồ ăn tới ngay!
          </h1>
          <p>
            Đặt món từ hàng nghìn quán ngon quanh bạn và nhận hàng nóng hổi chỉ trong
            20 phút. Cùng Rocketigo còn có giao hàng, thuê xe và lái xe hộ - tất cả
            trong một ứng dụng.
          </p>
          <form
            className="search"
            onSubmit={(e) => {
              e.preventDefault()
              document.getElementById('download').scrollIntoView()
            }}
          >
            <span aria-hidden="true">📍</span>
            <input
              value={addr}
              onChange={(e) => setAddr(e.target.value)}
              placeholder="Nhập địa chỉ giao hàng tại Hà Tĩnh"
              aria-label="Địa chỉ giao hàng"
            />
            <button className="btn btn-primary" type="submit">Tìm quán</button>
          </form>
          <div className="trust">
            <span>📍 Đang phục vụ tại Hà Tĩnh</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="blob" />
          <img src="/logo.png" alt="" className="hero-logo" />
          <div className="float f1">🍔</div>
          <div className="float f2">🍕</div>
          <div className="float f3">🥤</div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {STATS.map(([n, l]) => (
          <div key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHead({ kicker, title, sub }) {
  return (
    <div className="section-head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          kicker="4 dịch vụ trong 1 ứng dụng"
          title="Mọi nhu cầu di chuyển và ăn uống, Rocketigo lo hết"
        />
        <div className="services">
          {SERVICES.map((s) => (
            <a href="#download" className={`card service ${s.main ? 'main' : ''}`} key={s.name}>
              {s.main && <span className="badge">Dịch vụ số 1</span>}
              <div className="icon">{s.icon}</div>
              <small>{s.tag}</small>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const SCREENS = [
  ['/screens/home.png', 'Đặt đồ ăn & mọi dịch vụ', 'Từ quán ăn gần bạn đến giao hàng, thuê xe, ngay trên màn hình chính.'],
  ['/screens/delivery.png', 'Giao hàng nhanh như chớp', 'Nhập kích thước, loại hàng - tài xế sắp xếp và bảo quản đúng cách.'],
  ['/screens/rent.png', 'Thuê xe tự lái dễ dàng', 'Chọn địa điểm, ngày nhận trả, xem giá và đánh giá từng xe.'],
  ['/screens/map.png', 'Theo dõi đơn hàng', 'Xem vị trí tài xế và lộ trình trên bản đồ theo thời gian thực, biết chính xác khi nào hàng tới.', 'track'],
]

function TrackCard() {
  return (
    <div className="track">
      <i className="grab" />
      <div className="track-row">
        <span className="track-ava">🛵</span>
        <div>
          <strong>Tài xế đang trên đường tới</strong>
          <small>Cách bạn 1,2 km · dự kiến 5 phút</small>
        </div>
      </div>
      <div className="bar"><b /></div>
      <div className="track-steps"><span>Đã nhận đơn</span><span>Đang giao</span><span>Hoàn tất</span></div>
    </div>
  )
}

function Screens() {
  return (
    <section className="section alt" id="app">
      <div className="container">
        <SectionHead
          kicker="Trải nghiệm ứng dụng"
          title="Đơn giản, rõ ràng, chỉ vài chạm"
          sub="Giao diện thân thiện, dễ dùng cho mọi lứa tuổi."
        />
        <div className="screens">
          {SCREENS.map(([src, t, d, overlay]) => (
            <figure key={src}>
              <div className="shot">
                <img src={src} alt={t} loading="lazy" width="328" height="679" />
                {overlay === 'track' && <TrackCard />}
              </div>
              <figcaption>
                <strong>{t}</strong>
                <span>{d}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Area() {
  return (
    <section className="area" id="area">
      <div className="container">
        <div className="area-banner">
          <img src="/hatinh-banner.svg" alt="Rocketigo giao hàng tại Hà Tĩnh: núi Hồng Lĩnh, biển Thiên Cầm, cánh đồng lúa" loading="lazy" />
          <div className="area-text">
            <span className="pill">📍 Khu vực phục vụ</span>
            <h2>Rocketigo đã có mặt tại Hà Tĩnh</h2>
            <p>Từ phố thị đến những miền quê, đồ ăn và đơn hàng của bạn được giao tận nơi, nhanh như chớp.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function How() {
  return (
    <section className="section" id="how">
      <div className="container">
        <SectionHead kicker="Cách hoạt động" title="Đặt món chỉ với 3 bước" />
        <div className="grid grid-3">
          {STEPS.map(([icon, t, d], i) => (
            <div className="card step" key={t}>
              <span className="step-num">{i + 1}</span>
              <div className="icon">{icon}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="section alt" id="features">
      <div className="container">
        <SectionHead
          kicker="Tại sao chọn Rocketigo"
          title="Mọi thứ bạn cần cho bữa ăn hoàn hảo"
          sub="Chúng tôi lo phần giao hàng, bạn chỉ việc thưởng thức."
        />
        <div className="grid grid-3">
          {FEATURES.map(([icon, t, d]) => (
            <div className="card" key={t}>
              <div className="icon">{icon}</div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Menu() {
  return (
    <section className="section" id="menu">
      <div className="container">
        <SectionHead kicker="Món ngon" title="Hôm nay bạn muốn ăn gì?" />
        <div className="dishes">
          {DISHES.map(([emoji, name, price, bg]) => (
            <a href="#download" className="dish" key={name} style={{ background: bg }}>
              <span className="dish-emoji">{emoji}</span>
              <strong>{name}</strong>
              <small>{price}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Download() {
  return (
    <section className="download" id="download">
      <div className="container download-inner">
        <div>
          <h2>Tải Rocketigo - nhận ngay voucher 50.000đ cho đơn đồ ăn đầu tiên</h2>
          <p>
            Quét mã hoặc tải ứng dụng để đặt món nhanh hơn, nhận thông báo ưu đãi
            độc quyền mỗi ngày.
          </p>
          <div className="stores">
            <a href="#" className="store">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg>
              <span><small>Tải trên</small><strong>App Store</strong></span>
            </a>
            <a href="#" className="store">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" /></svg>
              <span><small>Tải trên</small><strong>Google Play</strong></span>
            </a>
          </div>
        </div>
        <div className="qr" aria-hidden="true">
          <div className="qr-box">
            {Array.from({ length: 49 }).map((_, i) => (
              <i key={i} className={(i * 7 + (i >> 2)) % 3 === 0 ? 'on' : ''} />
            ))}
          </div>
          <small>Quét để tải app</small>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="section alt" id="reviews">
      <div className="container">
        <SectionHead kicker="Đánh giá" title="Khách hàng nói gì về Rocketigo" />
        <div className="grid grid-3">
          {REVIEWS.map(([name, role, text]) => (
            <figure className="card review" key={name}>
              <div className="stars" aria-label="5 sao">★★★★★</div>
              <blockquote>“{text}”</blockquote>
              <figcaption>
                <span className="avatar">{name[0]}</span>
                <div>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Partner() {
  const [sent, setSent] = useState(false)
  return (
    <section className="section" id="partner">
      <div className="container partner">
        <div>
          <span className="kicker">Dành cho nhà hàng</span>
          <h2>Trở thành đối tác Rocketigo</h2>
          <p>
            Tiếp cận hàng triệu khách hàng mới, tăng doanh thu mà không cần đầu tư hạ
            tầng giao hàng. Đăng ký miễn phí, lên sóng chỉ trong 48 giờ.
          </p>
          <ul className="ticks">
            <li>Không phí đăng ký, không phí duy trì</li>
            <li>Công cụ quản lý đơn hàng dễ dùng</li>
            <li>Đối soát thanh toán nhanh, minh bạch</li>
          </ul>
        </div>
        <form
          className="card form"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          {sent ? (
            <p className="thanks">🎉 Cảm ơn bạn! Rocketigo sẽ liên hệ trong vòng 24 giờ.</p>
          ) : (
            <>
              <label>Tên quán<input required placeholder="VD: Cơm tấm Sài Gòn" /></label>
              <label>Số điện thoại<input required type="tel" placeholder="09xx xxx xxx" /></label>
              <label>Địa chỉ quán<input required placeholder="Số nhà, đường, xã/phường, huyện/thành phố" /></label>
              <button className="btn btn-primary" type="submit">Đăng ký ngay</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section alt" id="faq">
      <div className="container narrow">
        <SectionHead kicker="Hỏi đáp" title="Câu hỏi thường gặp" />
        {FAQ.map(([q, a], i) => (
          <div className={`faq ${open === i ? 'open' : ''}`} key={q}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {q}
              <span>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Logo />
          <p>Giao đồ ăn siêu tốc - nóng hổi trong 20 phút. Đang phục vụ tại Hà Tĩnh.</p>
        </div>
        <div>
          <strong>Khám phá</strong>
          {NAV.slice(0, 3).map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </div>
        <div>
          <strong>Liên hệ</strong>
          <a href="mailto:rocketigo.38@gmail.com">rocketigo.38@gmail.com</a>
          <a href="tel:0378425435">Hotline: 037 8425435</a>
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} Rocketigo. Bảo lưu mọi quyền.</div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Screens />
        <Area />
        <How />
        <Features />
        <Menu />
        <Download />
        <Reviews />
        <Partner />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
