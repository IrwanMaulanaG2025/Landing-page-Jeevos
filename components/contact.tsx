import { MessageCircle, Mail, MapPin } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "+62 896-6626-9658",
      href: "https://wa.me/6285156355964",
      cta: "Chat Sekarang",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "alamijayaorganik@gmail.com",
      href: "mailto:alamijayaorganik@gmail.com",
      cta: "Kirim Email",
    },
    {
      icon: MapPin,
      title: "Alamat",
      detail: "Purwokerto, Jawa Tengah",
      href: "https://maps.app.goo.gl/ZdFTWsWZqqjjJASf9",
      cta: "Lihat Peta",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal animation="fadeInUp" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
              Mari Terhubung
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Pilih cara yang paling nyaman untuk Anda menghubungi tim kami.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <ScrollReveal
              key={method.title}
              animation="fadeInUp"
              delay={200 * (index + 1)}
            >
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-stone-50 rounded-2xl border border-gray-200 text-center h-full hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
                  <method.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {method.title}
                </h3>
                <p className="mt-1 text-gray-600">{method.detail}</p>
                <p className="mt-4 font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {method.cta} &rarr;
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
