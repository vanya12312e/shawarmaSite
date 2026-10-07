import { cn } from "@/shared/lib/utils"
import { SmoothScroll } from "@/shared/ui/SmoothScroll"
import Footer from '@/widgets/Footer/footer'
import { Header } from '@/widgets/header'
import type { Metadata } from "next"
import { Lora, Manrope } from "next/font/google"
import "./globals.css"

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Шаурма в місті Київ | Замовити онлайн або відвідати нас особисто",
  description: "Shawarma site for the best shawarma in town. Order online or visit us in person.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-screen", "antialiased", lora.variable, manrope.variable)}
    >
      <body className="min-h-full">
        <script
          data-plerdy_code="1"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d){
                if(w.__plerdyCode)return;
                w.__plerdyCode=1;
                w._protocol=w.location.protocol=="https:"?"https://":"http://";
                w._site_hash_code="6429abea339051f7cc2f490314f1a642";
                w._suid=81721;
                var s=d.createElement("script");
                s.async=true;
                s.referrerPolicy="strict-origin-when-cross-origin";
                s.src="https://a.plerdy.com/public/js/click/main.js?v="+Math.random();
                d.head.appendChild(s);
              })(window,document);
            `,
          }}
        />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
