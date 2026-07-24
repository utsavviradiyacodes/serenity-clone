const prayerTimes = [
  {
    name: "Lauds",
    time: "6:30 AM",
  },
  {
    name: "Midday Prayer",
    time: "12:00 PM",
  },
  {
    name: "Vespers",
    time: "5:30 PM",
  },
  {
    name: "Compline",
    time: "8:30 PM",
  },
];

const footerColumns = [
  {
    title: "Experience",
    links: [
      {
        label: "Retreats",
        href: "/retreats",
      },
      {
        label: "Spiritual Direction",
        href: "/direction",
      },
      {
        label: "Day Visits",
        href: "/retreats#day",
      },
      {
        label: "Group Bookings",
        href: "/connect",
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        label: "Sacred Spaces",
        href: "/spaces",
      },
      {
        label: "Daily Office",
        href: "/#rhythm",
      },
      {
        label: "Our Story",
        href: "/#about",
      },
      {
        label: "Resources",
        href: "/resources",
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "Contact Us",
        href: "/connect",
      },
      {
        label: "Newsletter",
        href: "/connect#newsletter",
      },
      {
        label: "Donate",
        href: "/connect#support",
      },
      {
        label: "Volunteer",
        href: "/connect#volunteer",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/stillwaterretreat",
    Icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@stillwaterretreat",
    Icon: YouTubeIcon,
  },
];

function LeafIcon() {
  return (
    <svg
      className="h-5 w-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18m0-18c-4 3-6 6-6 9a6 6 0 0012 0c0-3-2-6-6-9z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="h-8 w-8 text-primary-600/50"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="border-b border-stone-800 bg-stone-950/50">
        <div className="mx-auto max-w-7xl px-8 py-8">
          <div className="text-center">
            <h3 className="mb-4 font-serif text-lg font-medium text-stone-100">
              Join Us in Prayer
            </h3>

            <div className="flex items-center justify-center gap-12 text-sm">
              {prayerTimes.map((prayer) => (
                <div key={prayer.name} className="flex items-center gap-2">
                  <span className="font-medium text-primary-400">
                    {prayer.name}
                  </span>

                  <span className="text-stone-500">·</span>

                  <span>{prayer.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <a href="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600">
                <LeafIcon />
              </div>

              <span className="font-serif text-xl font-semibold text-white">
                Stillwater Retreat
              </span>
            </a>

            <p className="mb-8 max-w-sm leading-relaxed text-stone-400">
              A contemplative retreat center offering silent retreats, spiritual
              direction, and sacred spaces for rest and renewal.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="mailto:welcome@stillwaterretreat.org"
                className="flex items-center gap-3 text-stone-400 transition-colors hover:text-primary-400"
              >
                <MailIcon />
                welcome@stillwaterretreat.org
              </a>

              <a
                href="tel:5552345678"
                className="flex items-center gap-3 text-stone-400 transition-colors hover:text-primary-400"
              >
                <PhoneIcon />
                (555) 234-5678
              </a>

              <div className="flex items-start gap-3 text-stone-400">
                <LocationIcon />

                <span>
                  1247 Monastery Road
                  <br />
                  Cedar Valley, OR 97330
                </span>
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="col-span-2">
              <h4 className="mb-6 font-serif text-sm font-semibold tracking-wider text-stone-100 uppercase">
                {column.title}
              </h4>

              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2">
            <div className="rounded-xl border border-stone-800 bg-stone-950/50 p-6">
              <QuoteIcon />

              <p className="mt-3 mb-3 font-serif text-sm leading-relaxed text-stone-300 italic">
                "Come to me, all you who are weary and burdened, and I will give
                you rest."
              </p>

              <span className="text-xs text-stone-500">Matthew 11:28</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <p className="text-sm text-stone-500">
            © 2025 Stillwater Retreat. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.Icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-stone-500 transition-colors hover:text-primary-400"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
