import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function StateGovtJobsPage() {
  const stateJobs = [
    {
      title: "UP Police Constable Recruitment 2024",
      posts: "60,244",
      state: "Uttar Pradesh",
      qualification: "12th Pass",
      ageLimit: "18-22 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "25/07/2024",
      examDate: "August 2024",
      status: "Active",
      description: "Police Constable in Uttar Pradesh Police",
    },
    {
      title: "Maharashtra State Service Examination 2024",
      posts: "761",
      state: "Maharashtra",
      qualification: "Graduate",
      ageLimit: "19-38 years",
      salary: "₹25,500 - ₹81,100",
      lastDate: "30/07/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Various Group A and Group B services in Maharashtra",
    },
    {
      title: "Tamil Nadu TRB Teacher Recruitment 2024",
      posts: "4,660",
      state: "Tamil Nadu",
      qualification: "B.Ed + Graduate",
      ageLimit: "18-57 years",
      salary: "₹23,700 - ₹75,100",
      lastDate: "15/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Post Graduate Teachers in Government Schools",
    },
    {
      title: "Rajasthan PTET 2024",
      posts: "37,000",
      state: "Rajasthan",
      qualification: "12th Pass",
      ageLimit: "18-28 years",
      salary: "₹23,700 - ₹75,100",
      lastDate: "20/08/2024",
      examDate: "October 2024",
      status: "Active",
      description: "Pre-Teacher Education Test for B.Ed admission",
    },
    {
      title: "West Bengal Police SI Recruitment 2024",
      posts: "330",
      state: "West Bengal",
      qualification: "Graduate",
      ageLimit: "20-27 years",
      salary: "₹22,200 - ₹87,000",
      lastDate: "10/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Sub Inspector in West Bengal Police",
    },
    {
      title: "Karnataka KAS (Karnataka Administrative Service) 2024",
      posts: "545",
      state: "Karnataka",
      qualification: "Graduate",
      ageLimit: "21-35 years",
      salary: "₹15,600 - ₹39,100",
      lastDate: "05/08/2024",
      examDate: "October 2024",
      status: "Active",
      description: "Group A and Group B services in Karnataka",
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

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">State Government Jobs</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">State Government Jobs 2024</h1>
          <p className="text-gray-600">
            Latest state government job notifications from various states including police, teaching, administrative
            services and more.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              234 Active Jobs
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Today
            </Badge>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {stateJobs.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-blue-600 mb-2">
                      <Link href="#" className="hover:underline">
                        {job.title}
                      </Link>
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="destructive">{job.status}</Badge>
                      <Badge variant="outline">{job.posts} Posts</Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.state}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Exam: {job.examDate}
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
            Load More State Government Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
