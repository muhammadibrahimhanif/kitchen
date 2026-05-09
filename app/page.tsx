"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  CakeSlice,
  Clock3,
  Coffee,
  Heart,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Sparkles,
  Star,
  Utensils
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const whatsappNumber = "6281385802185";
const orderText = encodeURIComponent(
  "Halo RASME KITCHAN, saya ingin pesan menu homemade cake/dessert premium."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${orderText}`;
const mapsUrl =
  "https://www.google.com/maps/place/RASME+KITCHAN/@-6.2932465,106.8411768,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3000c6600bb:0x83844ae21c9a7204!8m2!3d-6.2932465!4d106.8411768!16s%2Fg%2F11ykd90x26";

const menuItems = [
  {
    name: "Banana Cake",
    price: "Rp45.000",
    desc: "Lembut, wangi pisang matang, cocok untuk teman kopi dan camilan keluarga.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Brownies",
    price: "Rp55.000",
    desc: "Rich chocolate brownies dengan tekstur fudgy dan rasa premium yang jadi favorit.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Matilda Cake",
    price: "Rp125.000",
    desc: "Chocolate cake decadent dengan lapisan lembut ala dessert shop modern.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Dessert Box",
    price: "Rp35.000",
    desc: "Creamy, dingin, dan cantik untuk hadiah kecil atau self reward.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Cheese Cake",
    price: "Rp75.000",
    desc: "Cheesy smooth dengan balance manis yang elegan dan tidak berlebihan.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Minuman Signature",
    price: "Rp25.000",
    desc: "Minuman creamy dan segar untuk melengkapi cake favorit RASME KITCHAN.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85"
  }
];

const reviews = [
  {
    name: "Nadya A.",
    role: "Pelanggan keluarga",
    review:
      "Aku sudah langganan dari 4 tahun lalu, selalu suka semuanya. Produknya premium dan brownies selalu jadi favorit keluarga."
  },
  {
    name: "Rani M.",
    role: "Cake lover",
    review: "Matilda cake favorit banget, rasanya seperti cake dari toko mahal."
  },
  {
    name: "Dewi S.",
    role: "Regular customer",
    review: "Banana cake dan browniesnya beda dari tempat lain. Nagih banget."
  }
];

const gallery = [
  {
    title: "Cake premium",
    h: "h-80",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Brownies fudgy",
    h: "h-64",
    image: "https://images.unsplash.com/photo-1590841609987-4ac211afdde1?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Dessert box",
    h: "h-96",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Minuman cafe",
    h: "h-72",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Packaging gift",
    h: "h-80",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=85"
  },
  {
    title: "Homemade table",
    h: "h-64",
    image: "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=900&q=85"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function Stars({ animated = false }: { animated?: boolean }) {
  return (
    <div className="flex items-center gap-1 text-[#c89a5a]" aria-label="Rating 5 dari 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.span
          key={index}
          initial={animated ? { opacity: 0, scale: 0.5 } : false}
          whileInView={animated ? { opacity: 1, scale: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, type: "spring", stiffness: 240 }}
        >
          <Star className="h-4 w-4 fill-current" />
        </motion.span>
      ))}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-2xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9b6f3d]">{eyebrow}</p>
      <h2 className="font-display text-4xl leading-tight text-[#2a1711] text-balance md:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-[#70513e] md:text-lg">{text}</p>
    </motion.div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 1.08]);

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "RASME KITCHAN",
            address:
              "Jl. Bambu Suling I no. A2, RT.5/RW.RE 006, Pasar Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520",
            telephone: "+62 813-8580-2185",
            priceRange: "Rp25.000 - Rp125.000",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "29" },
            sameAs: ["https://www.instagram.com/rasme_kitchan/"]
          })
        }}
      />

      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-[#fff9ef]/70 px-4 py-3 shadow-[0_16px_60px_rgba(74,43,27,0.12)] backdrop-blur-2xl md:px-6">
          <Link href="#" className="font-display text-xl font-semibold text-[#2a1711]" aria-label="RASME KITCHAN">
            RASME KITCHAN
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#70513e] md:flex">
            <Link href="#menu" className="transition hover:text-[#2a1711]">
              Menu
            </Link>
            <Link href="#review" className="transition hover:text-[#2a1711]">
              Review
            </Link>
            <Link href="#lokasi" className="transition hover:text-[#2a1711]">
              Lokasi
            </Link>
          </div>
          <a
            href={whatsappUrl}
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "h-10 px-4")}
            aria-label="Pesan RASME KITCHAN via WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Pesan</span>
          </a>
        </div>
      </nav>

      <section className="relative min-h-[92svh] overflow-hidden pt-28 text-[#fff9ef]">
        <motion.div style={{ y: heroY, scale: imageScale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=90"
            alt="Chocolate cake premium RASME KITCHAN"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,23,17,0.88),rgba(42,23,17,0.5),rgba(42,23,17,0.18))]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#fbf3e7] to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-end px-5 pb-16 md:px-8 md:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.11 } }
            }}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 text-[#f3c981]" />
              Premium Ingredients
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-6xl leading-[0.92] text-balance md:text-8xl lg:text-9xl"
            >
              Homemade Cake & Dessert Premium
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-[#fff1dd] md:text-xl">
              Dibuat dari bahan berkualitas dengan rasa yang bikin nagih.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className={cn(buttonVariants({ variant: "gold", size: "lg" }), "glow-button")}>
                <MessageCircle className="h-5 w-5" />
                Pesan Sekarang
              </a>
              <Link href="#menu" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                <Utensils className="h-5 w-5" />
                Lihat Menu
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <div className="glass flex items-center gap-3 rounded-full px-4 py-3 text-[#2a1711]">
                <Stars />
                <span className="text-sm font-bold">5.0 / 5.0</span>
              </div>
              <div className="glass rounded-full px-4 py-3 text-sm font-semibold text-[#2a1711]">29 ulasan</div>
              <div className="glass rounded-full px-4 py-3 text-sm font-semibold text-[#2a1711]">
                Rp25.000 - Rp125.000
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_34px_110px_rgba(82,49,31,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1100&q=88"
                alt="Homemade bakery process with fresh pastry"
                width={1100}
                height={1375}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -bottom-6 right-3 max-w-[15rem] rounded-3xl p-5 text-[#2a1711] md:right-8"
            >
              <PackageCheck className="mb-3 h-6 w-6 text-[#c89a5a]" />
              <p className="text-sm font-bold leading-6">Fresh dibuat dengan sentuhan homemade dan kualitas premium.</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9b6f3d]">
              About RASME
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl leading-tight text-balance md:text-6xl">
              Bakery homemade premium yang terasa dekat, hangat, dan terpercaya.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-9 text-[#70513e]">
              RASME KITCHAN menghadirkan cake, brownies, banana cake, dessert, dan minuman yang dibuat fresh untuk
              keluarga, hadiah, dan momen kecil yang ingin terasa lebih spesial. Setiap produk diracik dengan bahan
              berkualitas, rasa premium, dan karakter homemade yang ramah untuk semua usia.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Bahan berkualitas", Sparkles],
                ["Favorit keluarga", Heart],
                ["Cake favorit anak", CakeSlice],
                ["Fresh homemade", Coffee]
              ].map(([label, Icon]) => (
                <div key={String(label)} className="rounded-3xl border border-[#2a1711]/8 bg-white/42 p-5 backdrop-blur">
                  <Icon className="mb-4 h-6 w-6 text-[#c89a5a]" />
                  <p className="font-semibold text-[#2a1711]">{String(label)}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="menu" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Best seller"
            title="Menu premium untuk setiap mood manis."
            text="Pilihan favorit pelanggan RASME KITCHAN, dari brownies fudgy sampai cake aesthetic untuk momen spesial."
          />
          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {menuItems.map((item) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.75rem] border border-white/60 bg-[#fff9ef]/70 shadow-[0_24px_80px_rgba(82,49,31,0.1)] backdrop-blur-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1711]/55 to-transparent" />
                  <p className="absolute bottom-4 left-4 rounded-full bg-[#fff9ef]/86 px-3 py-1 text-sm font-bold text-[#2a1711] backdrop-blur">
                    {item.price}
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl font-semibold text-[#2a1711]">{item.name}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-[#70513e]">{item.desc}</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo RASME KITCHAN, saya ingin order ${item.name}.`)}`}
                    className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "mt-5 w-full")}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Order WhatsApp
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="review" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Customer love"
            title="Dipercaya pelanggan dengan rating sempurna."
            text="Review hangat dari pelanggan yang kembali lagi untuk rasa premium homemade RASME KITCHAN."
          />
          <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.65 }}
                className="glass min-w-[82vw] snap-center rounded-[1.75rem] p-6 sm:min-w-[28rem]"
              >
                <Stars animated />
                <p className="mt-6 text-lg leading-9 text-[#2a1711]">&ldquo;{review.review}&rdquo;</p>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d8a29a] to-[#c89a5a] font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#2a1711]">{review.name}</p>
                    <p className="text-sm text-[#70513e]">{review.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Gallery"
            title="Visual dessert yang social media friendly."
            text="Masonry gallery dengan vibe cake, brownies, minuman, packaging, dan suasana homemade bakery yang aesthetic."
          />
          <div className="masonry mt-12">
            {gallery.map((item) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className={cn("masonry-item group relative overflow-hidden rounded-[1.75rem]", item.h)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1711]/55 via-transparent to-transparent opacity-85" />
                <figcaption className="absolute bottom-5 left-5 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-[#2a1711] backdrop-blur-xl">
                  {item.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="lokasi" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(82,49,31,0.16)]"
          >
            <iframe
              title="Lokasi RASME KITCHAN di Google Maps"
              src="https://www.google.com/maps?q=RASME%20KITCHAN%20Pasar%20Minggu%20Jakarta%20Selatan&output=embed"
              className="h-[26rem] w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="rounded-[2rem] bg-[#2a1711] p-7 text-[#fff9ef] shadow-[0_28px_90px_rgba(42,23,17,0.22)] md:p-10"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#f3c981]">
              Visit & order
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Pesan fresh dari Pasar Minggu.
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 space-y-5 text-[#fff1dd]">
              <p className="flex gap-3 leading-7">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#f3c981]" />
                Jl. Bambu Suling I no. A2, RT.5/RW.RE 006, Pasar Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota
                Jakarta 12520
              </p>
              <p className="flex gap-3">
                <Clock3 className="h-5 w-5 shrink-0 text-[#f3c981]" />
                Senin - Minggu, 09:00 - selesai
              </p>
              <p className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#f3c981]" />
                0813-8580-2185
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} className={cn(buttonVariants({ variant: "gold", size: "lg" }), "glow-button")}>
                <MessageCircle className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                <MapPin className="h-5 w-5" />
                Buka Maps
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="instagram" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9b6f3d]">Instagram</p>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">Follow cerita manis harian kami.</h2>
              <p className="mt-5 text-lg leading-8 text-[#70513e]">
                Preview feed aesthetic untuk menu baru, cake ready, packaging, dan inspirasi dessert dari dapur RASME
                KITCHAN.
              </p>
              <a
                href="https://www.instagram.com/rasme_kitchan/"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8")}
              >
                <Camera className="h-5 w-5" />
                Follow @rasme_kitchan
              </a>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {gallery.slice(0, 6).map((item, index) => (
                <motion.a
                  key={item.title}
                  href="https://www.instagram.com/rasme_kitchan/"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl"
                  aria-label={`Buka Instagram RASME KITCHAN: ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={`Instagram preview ${item.title}`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 16vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#2a1711]/0 transition group-hover:bg-[#2a1711]/35">
                    <ArrowUpRight className="h-6 w-6 translate-y-2 text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#2a1711]/10 bg-[#fff9ef]/70 p-7 backdrop-blur-xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <h2 className="font-display text-3xl text-[#2a1711]">RASME KITCHAN</h2>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[#70513e]">
                Homemade cake, brownies, banana cake, dessert, dan minuman premium dari Jakarta Selatan.
              </p>
            </div>
            <div className="text-sm leading-7 text-[#70513e]">
              <p className="font-bold text-[#2a1711]">Alamat</p>
              <p>Jl. Bambu Suling I no. A2, Pasar Minggu, Jakarta Selatan 12520</p>
            </div>
            <div className="text-sm leading-7 text-[#70513e]">
              <p className="font-bold text-[#2a1711]">Kontak</p>
              <a href={whatsappUrl} className="block transition hover:text-[#2a1711]">
                WhatsApp 0813-8580-2185
              </a>
              <a href="https://www.instagram.com/rasme_kitchan/" className="block transition hover:text-[#2a1711]">
                Instagram @rasme_kitchan
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-[#2a1711]/10 pt-6 text-sm text-[#70513e] sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 RASME KITCHAN. All rights reserved.</p>
            <p>Premium homemade bakery aesthetic.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
