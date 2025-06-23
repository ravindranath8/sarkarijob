import Link from "next/link"
import { Search, Calendar, FileText, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
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
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm">Today: {new Date().toLocaleDateString("en-IN")}</span>
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
            <Link href="/contact" className="px-3 py-2 hover:bg-blue-600 rounded">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold mr-4">BREAKING</span>
            <div className="overflow-hidden">
              <div className="animate-pulse">
                <span className="text-sm">
                  🔥 SSC CGL 2024 Notification Released | Railway Group D Result Declared | UPSC CSE 2024 Final Result
                  Out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Section */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Jobs & Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Search for jobs, results, admit cards..." className="flex-1" />
                  <Button>Search</Button>
                </div>
              </CardContent>
            </Card>

            {/* Latest Jobs Section */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <FileText className="w-5 h-5" />
                  Latest Jobs 2024
                  <Badge variant="destructive" className="ml-2">
                    NEW
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      title: "SSC CGL 2024 Notification - 17727 Posts",
                      date: "20/06/2024",
                      category: "SSC",
                      isNew: true,
                    },
                    {
                      title: "Railway Group D Recruitment 2024 - 32438 Posts",
                      date: "19/06/2024",
                      category: "Railway",
                      isNew: true,
                    },
                    {
                      title: "IBPS PO 2024 Notification - 3955 Posts",
                      date: "18/06/2024",
                      category: "Banking",
                      isNew: false,
                    },
                    { title: "UPSC CAPF 2024 - 506 Posts", date: "17/06/2024", category: "UPSC", isNew: false },
                    {
                      title: "Delhi Police Constable 2024 - 25271 Posts",
                      date: "16/06/2024",
                      category: "Police",
                      isNew: false,
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Link href="/jobs/ssc-cgl-2024" className="text-blue-600 hover:underline font-medium">
                            {job.title}
                          </Link>
                          {job.isNew && (
                            <Badge variant="destructive" className="text-xs">
                              NEW
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {job.date}
                          </span>
                          <Badge variant="outline">{job.category}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Latest Jobs</Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Award className="w-5 h-5" />
                  Latest Results 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "UPSC CSE 2023 Final Result", date: "20/06/2024", status: "Declared" },
                    { title: "SSC CHSL 2023 Final Result", date: "19/06/2024", status: "Declared" },
                    { title: "Railway Group D 2024 Result", date: "18/06/2024", status: "Declared" },
                    { title: "IBPS Clerk 2023 Final Result", date: "17/06/2024", status: "Declared" },
                    { title: "CTET 2024 Result", date: "16/06/2024", status: "Declared" },
                  ].map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <Link href="/results/upsc-cse-2023-final" className="text-blue-600 hover:underline font-medium">
                          {result.title}
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {result.date}
                          </span>
                          <Badge variant="secondary">{result.status}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Results</Button>
                </div>
              </CardContent>
            </Card>

            {/* Admit Cards Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <FileText className="w-5 h-5" />
                  Admit Cards 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "SSC CGL 2024 Admit Card", date: "Available", status: "Download" },
                    { title: "IBPS PO 2024 Call Letter", date: "Available", status: "Download" },
                    { title: "Railway Group D 2024 Admit Card", date: "Available", status: "Download" },
                    { title: "UPSC CAPF 2024 e-Admit Card", date: "Available", status: "Download" },
                  ].map((card, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <Link href="/admit-cards/ssc-cgl-2024" className="text-blue-600 hover:underline font-medium">
                          {card.title}
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>{card.date}</span>
                          <Badge variant="default">{card.status}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Links */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "SSC Jobs", href: "/ssc-jobs" },
                    { name: "Railway Jobs", href: "/railway-jobs" },
                    { name: "Banking Jobs", href: "/banking-jobs" },
                    { name: "UPSC Jobs", href: "/upsc-jobs" },
                    { name: "State Govt Jobs", href: "/state-govt-jobs" },
                    { name: "Police Jobs", href: "/police-jobs" },
                    { name: "Teaching Jobs", href: "/teaching-jobs" },
                    { name: "Defence Jobs", href: "/defence-jobs" },
                  ].map((link, index) => (
                    <Link key={index} href={link.href} className="block text-blue-600 hover:underline text-sm py-1">
                      • {link.name}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Job Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: "SSC", count: "245", href: "/ssc-jobs" },
                    { name: "Railway", count: "189", href: "/railway-jobs" },
                    { name: "Banking", count: "156", href: "/banking-jobs" },
                    { name: "UPSC", count: "89", href: "/upsc-jobs" },
                    { name: "State Govt", count: "234", href: "/state-govt-jobs" },
                    { name: "Police", count: "167", href: "/police-jobs" },
                    { name: "Teaching", count: "198", href: "/teaching-jobs" },
                    { name: "Defence", count: "123", href: "/defence-jobs" },
                  ].map((cat, index) => (
                    <Link key={index} href={cat.href} className="text-center p-2 border rounded hover:bg-blue-50">
                      <div className="font-semibold text-blue-600">{cat.count}</div>
                      <div className="text-xs text-gray-600">{cat.name}</div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advertisement Space */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500">
                  Advertisement Space
                  <br />
                  300x250
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Facebook
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Twitter
                  </Button>
                </div>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    YouTube
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-4">SarkariResult.com</h3>
              <p className="text-sm text-gray-300">
                Your trusted source for government job notifications, results, and career guidance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block hover:text-blue-400">
                  Latest Jobs
                </Link>
                <Link href="#" className="block hover:text-blue-400">
                  Results
                </Link>
                <Link href="#" className="block hover:text-blue-400">
                  Admit Cards
                </Link>
                <Link href="#" className="block hover:text-blue-400">
                  Answer Keys
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block hover:text-blue-400">
                  SSC Jobs
                </Link>
                <Link href="#" className="block hover:text-blue-400">
                  Railway Jobs
                </Link>
                <Link href="#" className="block hover:text-blue-400">
                  Banking Jobs
                </Link>
                <Link href="#" className="block hover:text-blue-400">
                  UPSC Jobs
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Email: info@sarkariresult.com</p>
                <p>Phone: +91-XXXXXXXXXX</p>
                <p>Address: New Delhi, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
            <p>&copy; 2024 SarkariResult.com. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
