import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | PRP Services Worcestershire",
  description:
    "Read what our customers say about PRP Services property maintenance work in Worcestershire.",
};

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
  {
    name: "Sarah",
    stars: 5,
    text: "Had a new patio laid and I couldn't be happier with the results. The team were professional, tidy and finished ahead of schedule. Would definitely recommend.",
  },
  {
    name: "James",
    stars: 5,
    text: "Used PRP Services for a full garden makeover. From the initial quote to the final result, the service was excellent. Very professional and great value for money.",
  },
  {
    name: "Karen",
    stars: 5,
    text: "Brilliant job on our driveway. The team were friendly, hardworking and left the site spotless. The driveway looks fantastic — so much better than before.",
  },
  {
    name: "Mike",
    stars: 5,
    text: "Called them for an emergency roof repair after a storm. They came out the same day, assessed the damage and fixed it quickly. Great service and fair pricing.",
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

export default function ReviewsPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,24,37,0.72) 0%, rgba(30,53,96,0.64) 100%), url('/home-hero-1.jpg') center/cover no-repeat",
          backgroundColor: "#0d1825",
        }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">CUSTOMER FEEDBACK</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            What Our Customers Say
          </h1>
          <p className="text-sm mb-6" style={{ color: "#b0c4d8" }}>
            We&apos;re proud of the work we do and the feedback we receive from customers across
            Worcestershire.
          </p>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Reviews</span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((review, i) => (
              <div key={i} className="border border-gray-100 rounded-sm p-6 shadow-sm">
                <Stars count={review.stars} />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-sm font-bold" style={{ color: "#1e3560" }}>
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review */}
      <section className="py-12 px-4 text-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#1e3560" }}>
            Had work done by us?
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            We&apos;d love to hear your feedback — leave us a review on Google.
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy">
            Leave a Google Review
          </a>
        </div>
      </section>
    </>
  );
}
