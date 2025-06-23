import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">SarkariResult.com</h1>
              <span className="text-sm bg-red-500 px-2 py-1 rounded">LIVE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center py-2 text-sm">
            <Link href="/" className="px-3 py-2 hover:bg-blue-600 rounded">
              Home
            </Link>
            <Link href="/latest-jobs" className="px-3 py-2 hover:bg-blue-600 rounded">
              Latest Jobs
            </Link>
            <Link href="/results" className="px-3 py-2 hover:bg-blue-600 rounded">
              Results
            </Link>
            <Link href="/admit-card" className="px-3 py-2 hover:bg-blue-600 rounded">
              Admit Card
            </Link>
            <Link href="/answer-key" className="px-3 py-2 hover:bg-blue-600 rounded">
              Answer Key
            </Link>
            <Link href="/syllabus" className="px-3 py-2 hover:bg-blue-600 rounded">
              Syllabus
            </Link>
            <Link href="/contact" className="px-3 py-2 bg-blue-600 rounded">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">Contact Us</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
          <p className="text-gray-600">
            Get in touch with us for any queries, suggestions, or feedback regarding government jobs and exam updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input id="subject" placeholder="Enter the subject of your message" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea id="message" placeholder="Enter your message here..." rows={6} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-sm text-gray-600">info@sarkariresult.com</p>
                    <p className="text-sm text-gray-600">support@sarkariresult.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Phone</h4>
                    <p className="text-sm text-gray-600">+91-11-XXXXXXXX</p>
                    <p className="text-sm text-gray-600">+91-11-XXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Address</h4>
                    <p className="text-sm text-gray-600">
                      123, Government Job Portal Building,
                      <br />
                      Connaught Place, New Delhi - 110001
                      <br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Office Hours</h4>
                    <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1">How often is the website updated?</h4>
                  <p className="text-sm text-gray-600">
                    We update our website daily with the latest job notifications, results, and admit cards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Can I get job alerts via email?</h4>
                  <p className="text-sm text-gray-600">
                    Yes, you can subscribe to our newsletter to receive job alerts directly in your inbox.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Is the information on this website authentic?</h4>
                  <p className="text-sm text-gray-600">
                    Yes, we source all information from official government websites and notifications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">How can I report incorrect information?</h4>
                  <p className="text-sm text-gray-600">
                    Please use the contact form above or email us directly with the details of the incorrect
                    information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    YouTube
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    Telegram
                  </Button>
                </div>
                <div className="mt-4">
                  <Badge variant="secondary" className="w-full justify-center">
                    Join 50,000+ followers for daily updates
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
