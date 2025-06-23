import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LatestJobsPage() {
  const latestJobs = [
    {
      title: "SSC CGL (Combined Graduate Level) 2024",
      posts: "17,727",
      organization: "Staff Selection Commission",
      qualification: "Graduate",
      ageLimit: "18-32 years",
      salary: "₹25,500 - ₹81,100",
      lastDate: "25/07/2024",
      examDate: "September 2024",
      status: "Active",
      category: "SSC",
      postedDate: "20/06/2024",
      isNew: true,
      description: "Combined Graduate Level Examination for various Group B and Group C posts in Government of India",
    },
    {
      title: "Railway Group D Recruitment 2024",
      posts: "32,438",
      organization: "Railway Recruitment Board",
      qualification: "10th Pass",
      ageLimit: "18-33 years",
      salary: "₹18,000 - ₹56,900",
      lastDate: "30/07/2024",
      examDate: "August 2024",
      status: "Active",
      category: "Railway",
      postedDate: "19/06/2024",
      isNew: true,
      description: "Track Maintainer Grade-IV, Helper/Assistant, Porter/Hamal in various Railway zones",
    },
    {
      title: "IBPS PO (Probationary Officer) 2024",
      posts: "3,955",
      organization: "Institute of Banking Personnel Selection",
      qualification: "Graduate",
      ageLimit: "20-30 years",
      salary: "₹23,700 - ₹42,020",
      lastDate: "25/07/2024",
      examDate: "August 2024",
      status: "Active",
      category: "Banking",
      postedDate: "18/06/2024",
      isNew: false,
      description: "Probationary Officer in Public Sector Banks across India",
    },
    {
      title: "Delhi Police Constable Recruitment 2024",
      posts: "25,271",
      organization: "Delhi Police",
      qualification: "12th Pass",
      ageLimit: "18-25 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "25/07/2024",
      examDate: "August 2024",
      status: "Active",
      category: "Police",
      postedDate: "17/06/2024",
      isNew: false,
      description: "Police Constable (Executive) Male & Female in Delhi Police",
    },
    {
      title: "UPSC CAPF (Central Armed Police Forces) 2024",
      posts: "506",
      organization: "Union Public Service Commission",
      qualification: "Graduate",
      ageLimit: "20-25 years",
      salary: "₹35,400 - ₹1,12,400",
      lastDate: "15/07/2024",
      examDate: "August 2024",
      status: "Active",
      category: "UPSC",
      postedDate: "16/06/2024",
      isNew: false,
      description: "Assistant Commandant in BSF, CRPF, CISF, ITBP, SSB",
    },
    {
      title: "CTET (Central Teacher Eligibility Test) 2024",
      posts: "Eligibility Test",
      organization: "Central Board of Secondary Education",
      qualification: "12th + D.El.Ed/B.Ed",
      ageLimit: "18-35 years",
      salary: "₹9,300 - ₹34,800",
      lastDate: "25/07/2024",
      examDate: "August 2024",
      status: "Active",
      category: "Teaching",
      postedDate: "15/06/2024",
      isNew: false,
      description: "Central Teacher Eligibility Test for Primary and Upper Primary Teachers",
    },
    {
      title: "Indian Army Agniveer Recruitment 2024",
      posts: "45,000",
      organization: "Indian Army",
      qualification: "10th/12th Pass",
      ageLimit: "17.5-21 years",
      salary: "₹30,000 - ₹40,000",
      lastDate: "25/07/2024",
      examDate: "August 2024",
      status: "Active",
      category: "Defence",
      postedDate: "14/06/2024",
      isNew: false,
      description: "Agniveer General Duty, Technical, Clerk/Store Keeper Technical in Indian Army",
    },
    {
      title: "UP Police Constable 2024",
      posts: "60,244",
      organization: "Uttar Pradesh Police",
      qualification: "12th Pass",
      ageLimit: "18-22 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "30/07/2024",
      examDate: "September 2024",
      status: "Active",
      category: "Police",
      postedDate: "13/06/2024",
      isNew: false,
      description: "Police Constable in Uttar Pradesh Police",
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
            <Link href="/latest-jobs" className="px-3 py-2 bg-blue-600 rounded">
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

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">Latest Jobs</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Latest Government Jobs 2024</h1>
          <p className="text-gray-600">
            Find the most recent government job notifications from various organizations including SSC, Railway,
            Banking, UPSC, and more.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              500+ Active Jobs
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Daily
            </Badge>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search & Filter Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="Search jobs..." className="col-span-1 md:col-span-2" />
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
              <Button className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Jobs List */}
        <div className="space-y-6">
          {latestJobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-blue-600">
                        <Link href="#" className="hover:underline">
                          {job.title}
                        </Link>
                      </CardTitle>
                      {job.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{job.organization}</Badge>
                      <Badge variant="secondary">{job.category}</Badge>
                      <Badge variant="outline">{job.posts} Posts</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">Posted: {job.postedDate}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Qualification</h4>
                    <p className="text-sm">{job.qualification}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Age Limit</h4>
                    <p className="text-sm">{job.ageLimit}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Salary</h4>
                    <p className="text-sm font-medium text-green-600">{job.salary}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Last Date</h4>
                    <p className="text-sm text-red-600 font-medium">{job.lastDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-1">Exam Date</h4>
                    <p className="text-sm">{job.examDate}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Status: {job.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm">Apply Online</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
