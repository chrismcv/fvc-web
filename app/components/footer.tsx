import Link from "next/link"
import { LogoIcon } from "./logo"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-primary text-white px-12 py-8">
     
        <div className="mt-8 grid gap-4">
        <p className="text-white/60 text-sm">
        © 2025 Faith Vineyard Church</p>
          <p className=" text-white/60 text-sm">
            Faith Vineyard Church is a supported church plant of Belfast City Vineyard. Belfast City Vineyard is a company limited by guarantee NI060526 and a registered charity 103520.
</p>
          <p className=" text-white/60 text-sm">
'VINEYARD' is a United Kingdom and European Union trademark registered to Vineyard Churches UK & Ireland No. 004771143. The 'VINEYARD CHURCHES' Logo, Vineyard 'grapes' device and 'VINEYARD' with 'grapes' device Logo' are all registered trade marks of Vineyard Churches UK & Ireland. Used here under license. All rights reserved.
          </p>
        </div>
    </footer>
  )
}
