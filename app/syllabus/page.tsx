import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, BookOpen, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SyllabusPage() {
  const syllabi = [
    {
      title: "SSC CGL 2024 Syllabus",
      organization: "Staff Selection Commission",
      examType: "Combined Graduate Level",
      category: "SSC",
      lastUpdated: "15/06/2024",
      isNew: true,
      description: "Complete syllabus for SSC CGL Tier-I, Tier-II, Tier-III and Tier-IV examinations",
      subjects: [
        "General Intelligence & Reasoning",
        "General Awareness",
        "Quantitative Aptitude",
        "English Comprehension",
        "Statistics",
        "General Studies (Finance & Economics)",
      ],
      examPattern: "Tier-I: 100 questions, 2 hours | Tier-II: 4 papers, 2 hours each",
    },
    {
      title: "IBPS PO 2024 Syllabus",
      organization: "Institute of Banking Personnel Selection",
      examType: "Probationary Officer",
      category: "Banking",
      lastUpdated: "10/06/2024",
      isNew: true,
      description: "Detailed syllabus for IBPS PO Preliminary and Main examinations",
      subjects: [
        "English Language",
        "Quantitative Aptitude",
        "Reasoning Ability",
        "General Awareness",
        "Computer Knowledge",
        "Data Analysis & Interpretation",
      ],
      examPattern: "Prelims: 100 questions, 1 hour | Mains: 200 questions, 3 hours",
    },
    {
      title: "Railway Group D 2024 Syllabus",
      organization: "Railway Recruitment Board",
      examType: "Group D",
      category: "Railway",
      lastUpdated: "05/06/2024",
      isNew: false,
      description: "Complete syllabus for RRB Group D Computer Based Test",
      subjects: [
        "Mathematics",
        "General Intelligence & Reasoning",
        "General Science",
        "General Awareness on Current Affairs",
      ],
      examPattern: "100 questions, 90 minutes, Negative marking: -1/3 for wrong answers",
    },
    {
      title: "UPSC CSE 2024 Syllabus",
      organization: "Union Public Service Commission",
      examType: "Civil Services Examination",
      category: "UPSC",
      lastUpdated: "01/02/2024",
      isNew: false,
      description: "Comprehensive syllabus for UPSC Preliminary and Main examinations",
      subjects: [
        "History of India & Indian National Movement",
        "Indian & World Geography",
        "Indian Polity & Governance",
        "Economic & Social Development",
        "Environmental Ecology & Climate Change",
        "General Science",
      ],
      examPattern: "Prelims: 2 papers, 2 hours each | Mains: 9 papers including Essay, GS and Optional",
    },
    {
      title: "CTET 2024 Syllabus",
      organization: "Central Board of Secondary Education",
      examType: "Teacher Eligibility Test",
      category: "Teaching",
      lastUpdated: "20/05/2024",
      isNew: false,
      description: "Syllabus for CTET Paper I (Classes I-V) and Paper II (Classes VI-VIII)",
      subjects: [
        "Child Development & Pedagogy",
        "Language I (Hindi/English/Urdu/Bengali etc.)",
        "Language II (English/Hindi/Urdu/Sanskrit etc.)",
        "Mathematics",
        "Environmental Studies",
        "Social Studies/Science",
      ],
      examPattern: "Paper I: 150 questions, 2.5 hours | Paper II: 150 questions, 2.5 hours",
    },
    {
      title: "Delhi Police Constable 2024 Syllabus",
      organization: "Delhi Police",
      examType: "Constable (Executive)",
      category: "Police",
      lastUpdated: "25/05/2024",
      isNew: false,
      description: "Complete syllabus for Delhi Police Constable written examination",
      subjects: ["General Knowledge & Current Affairs", "Reasoning", "Numerical Ability", "Computer Fundamentals"],
      examPattern: "100 questions, 90 minutes, Negative marking: 0.25 marks for wrong answers",
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
            <Link href="/answer-key" className="px-3 py-2 hover:bg-blue-600 rounded">
              Answer Key
            </Link>
            <Link href="/syllabus" className="px-3 py-2 bg-blue-600 rounded">
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
          <span className="font-semibold">Syllabus</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            Exam Syllabus 2024
          </h1>
          <p className="text-gray-600">
            Download detailed syllabus and exam patterns for various government examinations. Plan your preparation
            effectively.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              100+ Syllabi
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Regularly
            </Badge>
          </div>
        </div>

        {/* Search Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Search Syllabus</CardTitle>
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

        {/* Syllabus List */}
        <div className="space-y-6">
          {syllabi.map((syllabus, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-blue-600">
                        <Link href="#" className="hover:underline">
                          {syllabus.title}
                        </Link>
                      </CardTitle>
                      {syllabus.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{syllabus.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{syllabus.organization}</Badge>
                      <Badge variant="secondary">{syllabus.category}</Badge>
                      <Badge variant="outline">{syllabus.examType}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">Updated: {syllabus.lastUpdated}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Subjects Covered</h4>
                  <div className="flex flex-wrap gap-1">
                    {syllabus.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-1">Exam Pattern</h4>
                  <p className="text-sm text-gray-600">{syllabus.examPattern}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Last Updated: {syllabus.lastUpdated}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                    <Button size="sm" className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      Download PDF
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
            Load More Syllabus
          </Button>
        </div>
      </div>
    </div>
  )
}
