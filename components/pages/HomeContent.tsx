import Link from "next/link";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  Stagger,
  StaggerItem,
  HeroFadeUp,
} from "@/components/animations/Motion";
import GallerySlider from "@/components/GallerySlider";

const SERVICES = [
  {
    name: "Fencing",
    slug: "fencing-services",
    image: "/001.jpg",
    gradient: "linear-gradient(160deg, #2a3d1e 0%, #3d5e2d 100%)",
  },
  {
    name: "Roofing & Repairs",
    slug: "roofing-services",
    image: "/005.jpg",
    gradient: "linear-gradient(160deg, #1e1e3d 0%, #2d2d5e 100%)",
  },
  {
    name: "Patios & Driveways",
    slug: "driveways-patios-worcester",
    image: "/004.jpg",
    gradient: "linear-gradient(160deg, #3d2a1a 0%, #5e4a2d 100%)",
  },
  {
    name: "Landscaping & Tree Surgery",
    slug: "landscaping-services",
    image: "/007.jpg",
    gradient: "linear-gradient(160deg, #1a3d1a 0%, #2a5e2a 100%)",
  },
];

const REVIEWS = [
  {
    name: "Lisa",
    stars: 5,
    text: "Callum and the lads did an amazing job fitting my new fence and gate. They also removed two large trees for me. The job was done very quickly and to a high standard. Thank you so much ❤",
  },
  {
    name: "Brandon",
    stars: 5,
    text: "Great work done by the lads. On time and finished everything quickly. Fence looks really nice and they cleaned away everything after. Great service 🙂",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="stars flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomeContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "85vh", backgroundColor: "#0f1e3d" }}>
        {/* Ken Burns background */}
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/home-hero-1.jpg')" }}
        />
        <div className="hero-overlay" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-xl">
            <HeroFadeUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                Complete Property Care
                <br />
                in Worcestershire
              </h1>
            </HeroFadeUp>
            <HeroFadeUp delay={0.3}>
              <p
                className="border-l-4 pl-4 text-gray-300 mb-8 text-base leading-relaxed max-w-md"
                style={{ borderColor: "#f4b942" }}>
                From fencing to roofing and everything in between &mdash; we keep your property
                looking its best, year-round.
              </p>
            </HeroFadeUp>
            <HeroFadeUp delay={0.5}>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Get a Quote
                </Link>
                <Link href="#services" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </HeroFadeUp>
          </div>
        </div>
      </section>

      {/* ── Phone Banner ─────────────────────────────────────── */}
      <div className="phone-banner py-4 px-4 text-center" style={{ backgroundColor: "#1a3a6e" }}>
        <p className="text-white text-sm md:text-base font-medium relative z-10">
          Call us today on{" "}
          <a href="tel:07593728481" className="font-extrabold hover:underline">
            07593 728 481
          </a>
        </p>
      </div>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <FadeInLeft>
              <span className="section-label">OUR SERVICES</span>
              <h2 className="section-heading">What we do</h2>
            </FadeInLeft>
            <FadeInRight>
              <div className="flex items-center h-full">
                <p className="text-gray-600 text-sm leading-relaxed">
                  We offer a full range of exterior property maintenance services for both
                  domestic and commercial properties.
                </p>
              </div>
            </FadeInRight>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.12}>
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="service-card block overflow-hidden border border-gray-100 cursor-pointer h-full">
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="service-card-image absolute inset-0"
                      style={{
                        background: `url('${service.image}') center/cover no-repeat, ${service.gradient}`,
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.72) 100%)",
                      }}
                    />
                    <div className="relative h-full flex items-end p-4">
                      <h3 className="text-white font-bold text-base">{service.name}</h3>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <span
                      className="service-learn-more text-sm font-semibold"
                      style={{ color: "#2d5486" }}>
                      Learn more →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(rgba(8,18,38,0.66), rgba(8,18,38,0.66)), url('/bg-image-2.jpg') center/cover no-repeat",
          backgroundColor: "#0d1e38",
          backgroundAttachment: "fixed",
        }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          <FadeInLeft>
            <span className="section-label">WHO WE ARE</span>
            <h2 className="section-heading white mb-6">About us</h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#b0c4d8" }}>
              <p>
                At PRP Services, we&apos;re proud to deliver high-quality property maintenance with a
                personal touch.
              </p>
              <p>
                Based in Worcester and working across Worcestershire, we&apos;ve built a strong
                reputation for reliable service, excellent workmanship, and honest pricing &mdash; all
                backed by over 10 years of hands-on experience.
              </p>
              <p>
                Whether you&apos;re transforming your garden with new landscaping, upgrading your
                driveway, or in need of urgent roofing repairs, our skilled team is here to help.
              </p>
              <p>
                We work with care, attention to detail, and a commitment to getting the job done
                right &mdash; the first time, every time.
              </p>
            </div>
          </FadeInLeft>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <FadeInLeft>
              <span className="section-label">VIEW OUR GALLERY</span>
              <h2 className="section-heading">Our Latest Work</h2>
            </FadeInLeft>
            <FadeInRight>
              <div className="flex items-center h-full">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have a look at some of our recently completed jobs from around Worcester and the
                  surrounding areas in Worcestershire.
                </p>
              </div>
            </FadeInRight>
          </div>

          <FadeInUp>
            <div className="mb-8">
              <GallerySlider />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="text-center">
              <Link href="/gallery" className="btn-navy">
                View Gallery
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── Areas We Cover ───────────────────────────────────── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1e38" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <FadeInLeft>
              <span className="section-label">WHERE WE WORK</span>
              <h2 className="section-heading white">Areas we cover</h2>
            </FadeInLeft>
            <FadeInRight>
              <div className="flex items-center h-full">
                <p className="text-sm leading-relaxed" style={{ color: "#b0c4d8" }}>
                  We&apos;re based in Worcester and work throughout the surrounding areas in
                  Worcestershire. If you&apos;re unsure if we cover your location, please{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-white transition-colors"
                    style={{ color: "#7ab2d8" }}>
                    get in touch.
                  </Link>
                </p>
              </div>
            </FadeInRight>
          </div>

          <FadeInUp>
            <div className="rounded overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-2.7%2C51.9%2C-1.7%2C52.5&layer=mapnik&marker=52.1920%2C-2.2200"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                title="Areas we cover — Worcestershire"
              />
              <p
                className="text-right text-xs px-3 py-1.5"
                style={{ backgroundColor: "#f5f5f5", color: "#666" }}>
                Map data © Leaflet &amp; OpenStreetMap contributors
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <FadeInLeft>
              <span className="section-label">OUR REVIEWS</span>
              <h2 className="section-heading">What our customers say</h2>
            </FadeInLeft>
            <FadeInRight>
              <div className="flex items-center h-full">
                <p className="text-gray-600 text-sm leading-relaxed">
                  We take great pride in our work and providing exceptional service. Here&apos;s a
                  small sample of the great feedback we&apos;ve received from our customers:
                </p>
              </div>
            </FadeInRight>
          </div>

          <Stagger className="grid md:grid-cols-2 gap-5 mb-8" staggerDelay={0.15}>
            {REVIEWS.map((review) => (
              <StaggerItem key={review.name}>
                <div className="review-card border border-gray-100 rounded-sm p-6 shadow-sm h-full">
                  <Stars count={review.stars} />
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-sm font-bold" style={{ color: "#1e3560" }}>
                    — {review.name}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeInUp delay={0.1}>
            <div className="text-center">
              <Link href="/reviews" className="btn-navy">
                Read All Reviews
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <section
        className="py-20 px-4 relative"
        style={{
          background:
            "linear-gradient(rgba(8,18,38,0.72), rgba(8,18,38,0.72)), url('/bg-image-2.jpg') center/cover no-repeat",
          backgroundColor: "#0d1e38",
          backgroundAttachment: "fixed",
        }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <FadeInLeft>
            <span className="section-label">GET IN TOUCH TODAY</span>
            <h2 className="section-heading white mb-4">
              Let&apos;s transform your property
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#b0c4d8" }}>
              Please don&apos;t hesitate to get in touch for any property maintenance work. No job
              is too big or small and we welcome all enquiries.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Get a Quote
              </Link>
              <a href="tel:07593728481" className="btn-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                  />
                </svg>
                Call Us
              </a>
            </div>
          </FadeInLeft>
        </div>
      </section>
    </>
  );
}
