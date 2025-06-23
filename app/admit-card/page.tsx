import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, FileText, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdmitCardPage() {
  const admitCards = [
    {
      title: "SSC CGL 2024 Admit Card",
      organization: "Staff Selection Commission",
      examDate: "14/09/2024 to 26/09/2024",
      releaseDate: "10/09/2024",
      category: "SSC",
      status: "Available",
      examType: "Computer Based Test",
      isNew: true,
      description: "Combined Graduate Level Examination 2024 Tier-I Admit Card",
      instructions: "Download admit card 7 days before exam date",
    },
    {
      title: "IBPS PO 2024 Call Letter",
      organization: "Institute of Banking Personnel Selection",
      examDate: "19/10/2024 to 20/10/2024",
      releaseDate: "15/10/2024",
      category: "Banking",
      status: "Available",
      examType: "Preliminary Examination",
      isNew: true,
      description: "IBPS PO CRP XIV Preliminary Examination Call Letter",
      instructions: "Carry original photo ID proof along with call letter",
    },
    {
      title: "Railway Group D 2024 Admit Card",
      organization: "Railway Recruitment Board",
      examDate: "17/09/2024 to 18/10/2024",
      releaseDate: "12/09/2024",
      category: "Railway",
      status: "Available",
      examType: "Computer Based Test",
      isNew: false,
      description: "RRB Group D Computer Based Test Admit Card 2024",
      instructions: "Report to exam center 90 minutes before exam time",
    },
    {
      title: "UPSC CAPF 2024 e-Admit Card",
      organization: "Union Public Service Commission",
      examDate: "18/08/2024",
      releaseDate: "05/08/2024",
      category: "UPSC",
      status: "Available",
      examType: "Written Examination",
      isNew: false,
      description: "Central Armed Police Forces (ACs) Examination 2024 Admit Card",
      instructions: "Download and take printout of e-admit card",
    },
    {
      title: "CTET 2024 Admit Card",
      organization: "Central Board of Secondary Education",
      examDate: "21/01/2024",
      releaseDate: "10/01/2024",
      category: "Teaching",
      status: "Available",
      examType: "Computer Based Test",
      isNew: false,
      description: "Central Teacher Eligibility Test January 2024 Admit Card",
      instructions: "Carry admit card and valid photo ID to exam center",
    },
    {
      title: "Delhi Police Constable 2024 Admit Card",
      organization: "Delhi Police",
      examDate: "27/11/2024 to 15/12/2024",
      releaseDate: "20/11/2024",
      category: "Police",
      status: "Available",
      examType: "Computer Based Test",
      isNew: false,
      description: "Delhi Police Constable (Executive) Admit Card 2024",
      instructions: "Physical Standards Test after written exam",
    },
    {
      title: "Indian Navy Agniveer SSR 2024 Admit Card",
      organization: "Indian Navy",
      examDate: "15/09/2024 to 29/09/2024",
      releaseDate: "10/09/2024",
      category: "Defence",
      status: "Available",
      examType: "Computer Based Test",
      isNew: false,
      description: "Indian Navy Agniveer Senior Secondary Recruit Admit Card",
      instructions: "Medical examination after written test",
    },
  ]

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
            <Link href="/admit-card" className="px-3 py-2 bg-blue-600 rounded">
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

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">Admit Card</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <FileText className="w-8 h-8 text-purple-600" />
            Admit Cards 2024
          </h1>
          <p className="text-gray-600">
            Download admit cards and call letters for various government exams. Check exam dates, reporting time and
            important instructions.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              200+ Admit Cards
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Daily
            </Badge>
          </div>
        </div>

        {/* Search Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Admit Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Search by exam name..." className="col-span-1 md:col-span-2" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ssc">SSC</SelectItem>
                  <SelectItem value="railway">Railway</SelectItem>
                  <SelectItem value="banking">Banking</SelectItem>
                  <SelectItem value="upsc">UPSC</SelectItem>
                  <SelectItem value="police">Police</SelectItem>
                  <SelectItem value="teaching">Teaching</SelectItem>
                  <SelectItem value="defence">Defence</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Admit Cards List */}
        <div className="space-y-6">
          {admitCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-blue-600">
                        <Link href="#" className="hover:underline">
                          {card.title}
                        </Link>
                      </CardTitle>
                      {card.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{card.organization}</Badge>
                      <Badge variant="secondary">{card.category}</Badge>
                      <Badge variant="default">{card.status}</Badge>
                      <Badge variant="outline">{card.examType}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">Released: {card.releaseDate}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Exam Date</h4>
                    <p className="text-sm">{card.examDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Important Instructions</h4>
                    <p className="text-sm text-orange-600">{card.instructions}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Status: {card.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Admit Cards
          </Button>
        </div>
      </div>
    </div>
  )
}
