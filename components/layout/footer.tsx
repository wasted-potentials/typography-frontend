import Link from 'next/link'
import { Printer, Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Printer className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">PrintPro</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Качественные полиграфические услуги для удовлетворения любых ваших деловых и личных потребностей. Мы обеспечиваем превосходное качество каждого отпечатка.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              {[
                { name: 'Услуги', href: '/services' },
                { name: 'О нас', href: '/about' },
                { name: 'Портфолио', href: '/portfolio' },
                { name: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Связаться с нами</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Print Street, Design District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">+7 908 893 5547</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-muted-foreground">info@printpro.com</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}