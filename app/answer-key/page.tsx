import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, Key, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AnswerKeyPage() {
  const answerKeys = [
    {
      title: "SSC CGL 2024 Answer Key",
      organization: "Staff Selection Commission",
      examDate: "14/09/2024 to 26/09/2024",
      releaseDate: "30/09/2024",
      category: "SSC",
      status: "Released",
      examType: "Tier-I CBT",
      objectionDeadline: "05/10/2024",
      isNew: true,
      description: "Combined Graduate Level Examination 2024 Tier-I Official Answer Key",
      subjects: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English Comprehension"],
    },
    {
      title: "IBPS PO 2024 Answer Key",
      organization: "Institute of Banking Personnel Selection",
      examDate: "19/10/2024 to 20/10/2024",
      releaseDate: "25/10/2024",
      category: "Banking",
      status: "Released",
      examType: "Preliminary Exam",
      objectionDeadline: "30/10/2024",
      isNew: true,
      description: "IBPS PO CRP XIV Preliminary Examination Official Answer Key",
      subjects: ["English Language", "Quantitative Aptitude", "Reasoning Ability"],
    },
    {
      title: "Railway Group D 2024 Answer Key",
      organization: "Railway Recruitment Board",
      examDate: "17/09/2024 to 18/10/2024",
      releaseDate: "22/10/2024",
      category: "Railway",
      status: "Released",
      examType: "Computer Based Test",
      objectionDeadline: "27/10/2024",
      isNew: false,
      description: "RRB Group D Computer Based Test Official Answer Key 2024",
      subjects: ["Mathematics", "General Intelligence", "General Science", "General Awareness"],
    },
    {
      title: "UPSC CAPF 2024 Answer Key",
      organization: "Union Public Service Commission",
      examDate: "18/08/2024",
      releaseDate: "25/08/2024",
      category: "UPSC",
      status: "Released",
      examType: "Written Examination",
      objectionDeadline: "01/09/2024",
      isNew: false,
      description: "Central Armed Police Forces (ACs) Examination 2024 Answer Key",
      subjects: ["General Ability & Intelligence", "General Studies", "Essay"],
    },
    {
      title: "CTET 2024 Answer Key",
      organization: "Central Board of Secondary Education",
      examDate: "21/01/2024",
      releaseDate: "25/01/2024",
      category: "Teaching",
      status: "Released",
      examType: "Computer Based Test",
      objectionDeadline: "30/01/2024",
      isNew: false,
      description: "Central Teacher Eligibility Test January 2024 Official Answer Key",
      subjects: ["Child Development", "Language I", "Language II", "Mathematics", "Environmental Studies"],
    },
    {
      title: "Delhi Police Constable 2024 Answer Key",
      organization: "Delhi Police",
      examDate: "27/11/2024 to 15/12/2024",
      releaseDate: "20/12/2024",
      category: "Police",
      status: "Expected",
      examType: "Computer Based Test",
      objectionDeadline: "25/12/2024",
      isNew: false,
      description: "Delhi Police Constable (Executive) Official Answer Key 2024",
      subjects: ["General Knowledge", "Reasoning", "Numerical Ability", "Computer Fundamentals"],
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
            <Link href="/admit-card" className="px-3 py-2 hover:bg-blue-600 rounded">
              Admit Card
            </Link>
            <Link href="/answer-key" className="px-3 py-2 bg-blue-600 rounded">
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
          <span className="font-semibold">Answer Key</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Key className="w-8 h-8 text-green-600" />
            Answer Keys 2024
          </h1>
          <p className="text-gray-600">
            Download official answer keys for government exams. Check your answers and raise objections within the
            deadline.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              150+ Answer Keys
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
            <CardTitle>Search Answer Keys</CardTitle>
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

        {/* Answer Keys List */}
        <div className="space-y-6">
          {answerKeys.map((key, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-blue-600">
                        <Link href="#" className="hover:underline">
                          {key.title}
                        </Link>
                      </CardTitle>
                      {key.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{key.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{key.organization}</Badge>
                      <Badge variant="secondary">{key.category}</Badge>
                      <Badge variant={key.status === "Released" ? "default" : "secondary"}>{key.status}</Badge>
                      <Badge variant="outline">{key.examType}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">Released: {key.releaseDate}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Exam Date</h4>
                    <p className="text-sm">{key.examDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Objection Deadline</h4>
                    <p className="text-sm text-red-600 font-medium">{key.objectionDeadline}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Subjects Covered</h4>
                  <div className="flex flex-wrap gap-1">
                    {key.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Status: {key.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Raise Objection
                    </Button>
                    <Button size="sm" className="flex items-center gap-1" disabled={key.status === "Expected"}>
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
            Load More Answer Keys
          </Button>
        </div>
      </div>
    </div>
  )
}
