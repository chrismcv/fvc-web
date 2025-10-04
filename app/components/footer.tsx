import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-primary text-white px-12 py-8">

      <div className="flex items-center gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=61581604685673"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:border-white hover:bg-white/10"
        >
          <Facebook className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Faith Vineyard Church on Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/faithvineyardcomber"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:border-white hover:bg-white/10"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Faith Vineyard Church on Instagram</span>
        </a>
      </div>

      <div className="mt-8 grid gap-4">
        <p className="text-white/60 text-sm">
          © 2025 Faith Vineyard Church</p>
        <p className=" text-white/60 text-sm">
          Faith Vineyard Church is a supported church plant of Belfast City Vineyard. Belfast City Vineyard is a company limited by guarantee NI060526 and a registered charity 103520.
        </p>
        <p>
          <Image
            className="w-96 mt-8"
            src="/images/vcuk.png"
            alt="Vineyard Affiliation Logo"
            width={1650}
            height={200}
          />
        </p>
        <p className=" text-white/60 text-sm">
          'VINEYARD' is a United Kingdom and European Union trademark registered to Vineyard Churches UK & Ireland No. 004771143. The 'VINEYARD CHURCHES' Logo, Vineyard 'grapes' device and 'VINEYARD' with 'grapes' device Logo' are all registered trade marks of Vineyard Churches UK & Ireland. Used here under license. All rights reserved.

        </p>
      </div>
    </footer>
  )
}
