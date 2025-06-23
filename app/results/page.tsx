import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, Award, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ResultsPage() {
  const results = [
    {
      title: "UPSC CSE 2023 Final Result",
      organization: "Union Public Service Commission",
      examDate: "16/10/2023",
      resultDate: "20/06/2024",
      category: "UPSC",
      status: "Declared",
      totalCandidates: "933,329",
      selectedCandidates: "1,105",
      cutoffMarks: "900/2025",
      isNew: true,
      description: "Civil Services Examination 2023 Final Result for IAS, IPS, IFS and other services",
    },
    {
      title: "SSC CHSL 2023 Final Result",
      organization: "Staff Selection Commission",
      examDate: "02/08/2023",
      resultDate: "19/06/2024",
      category: "SSC",
      status: "Declared",
      totalCandidates: "2,26,000",
      selectedCandidates: "3,712",
      cutoffMarks: "145/200",
      isNew: true,
      description: "Combined Higher Secondary Level Examination 2023 Final Result",
    },
    {
      title: "Railway Group D 2024 Result",
      organization: "Railway Recruitment Board",
      examDate: "17/09/2024",
      resultDate: "18/06/2024",
      category: "Railway",
      status: "Declared",
      totalCandidates: "1,03,769",
      selectedCandidates: "32,438",
      cutoffMarks: "40.23/100",
      isNew: false,
      description: "RRB Group D Computer Based Test Result 2024",
    },
    {
      title: "IBPS Clerk 2023 Final Result",
      organization: "Institute of Banking Personnel Selection",
      examDate: "26/08/2023",
      resultDate: "17/06/2024",
      category: "Banking",
      status: "Declared",
      totalCandidates: "89,552",
      selectedCandidates: "7,855",
      cutoffMarks: "78.25/100",
      isNew: false,
      description: "IBPS Clerk CRP XIII Final Result 2023",
    },
    {
      title: "CTET 2024 Result",
      organization: "Central Board of Secondary Education",
      examDate: "21/01/2024",
      resultDate: "16/06/2024",
      category: "Teaching",
      status: "Declared",
      totalCandidates: "32,45,000",
      selectedCandidates: "Qualified",
      cutoffMarks: "90/150",
      isNew: false,
      description: "Central Teacher Eligibility Test January 2024 Result",
    },
    {
      title: "Delhi Police Constable 2023 Result",
      organization: "Delhi Police",
      examDate: "27/11/2023",
      resultDate: "15/06/2024",
      category: "Police",
      status: "Declared",
      totalCandidates: "12,64,000",
      selectedCandidates: "25,271",
      cutoffMarks: "72.5/100",
      isNew: false,
      description: "Delhi Police Constable (Executive) Male & Female Result 2023",
    },
    {
      title: "Indian Army Agniveer Result 2024",
      organization: "Indian Army",
      examDate: "16/07/2024",
      resultDate: "14/06/2024",
      category: "Defence",
      status: "Declared",
      totalCandidates: "8,97,000",
      selectedCandidates: "45,000",
      cutoffMarks: "42/100",
      isNew: false,
      description: "Indian Army Agniveer General Duty Result 2024",
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
            <Link href="/results" className="px-3 py-2 bg-blue-600 rounded">
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

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">Results</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Award className="w-8 h-8 text-orange-600" />
            Latest Results 2024
          </h1>
          <p className="text-gray-600">
            Check the latest government exam results from SSC, Railway, Banking, UPSC, Police, Teaching and Defence
            organizations.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              300+ Results
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
            <CardTitle>Search Results</CardTitle>
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

        {/* Results List */}
        <div className="space-y-6">
          {results.map((result, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-blue-600">
                        <Link href="#" className="hover:underline">
                          {result.title}
                        </Link>
                      </CardTitle>
                      {result.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{result.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{result.organization}</Badge>
                      <Badge variant="secondary">{result.category}</Badge>
                      <Badge variant="default">{result.status}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">Result Date: {result.resultDate}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Exam Date</h4>
                    <p className="text-sm">{result.examDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Total Candidates</h4>
                    <p className="text-sm">{result.totalCandidates}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Selected</h4>
                    <p className="text-sm font-medium text-green-600">{result.selectedCandidates}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Cut-off Marks</h4>
                    <p className="text-sm text-orange-600 font-medium">{result.cutoffMarks}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Status: {result.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download Result
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Check Result
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
            Load More Results
          </Button>
        </div>
      </div>
    </div>
  )
}
