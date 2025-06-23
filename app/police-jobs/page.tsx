import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PoliceJobsPage() {
  const policeJobs = [
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
      description: "Police Constable (Executive) Male & Female in Delhi Police",
    },
    {
      title: "UP Police Constable 2024",
      posts: "60,244",
      organization: "UP Police",
      qualification: "12th Pass",
      ageLimit: "18-22 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "30/07/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Police Constable in Uttar Pradesh Police",
    },
    {
      title: "SSC CPO (Central Police Organisation) 2024",
      posts: "4,223",
      organization: "SSC",
      qualification: "Graduate",
      ageLimit: "20-25 years",
      salary: "₹35,400 - ₹1,12,400",
      lastDate: "15/08/2024",
      examDate: "October 2024",
      status: "Active",
      description: "Sub Inspector in Delhi Police, CAPF and Assistant Sub Inspector in CISF",
    },
    {
      title: "Railway Protection Force (RPF) 2024",
      posts: "9,739",
      organization: "Railway",
      qualification: "12th Pass",
      ageLimit: "18-25 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "20/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Constable and Sub-Inspector in Railway Protection Force",
    },
    {
      title: "CISF Constable Recruitment 2024",
      posts: "3,678",
      organization: "CISF",
      qualification: "10th Pass",
      ageLimit: "18-23 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "10/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Constable (Fire) in Central Industrial Security Force",
    },
    {
      title: "BSF Constable 2024",
      posts: "1,312",
      organization: "BSF",
      qualification: "10th Pass",
      ageLimit: "18-23 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "05/08/2024",
      examDate: "October 2024",
      status: "Active",
      description: "Constable (General Duty) in Border Security Force",
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
          <span className="font-semibold">Police Jobs</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            Police Jobs 2024
          </h1>
          <p className="text-gray-600">
            Latest police recruitment notifications from central and state police forces including constable,
            sub-inspector and other positions.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              167 Active Jobs
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Today
            </Badge>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {policeJobs.map((job, index) => (
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
                        <Shield className="w-3 h-3" />
                        {job.organization}
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
            Load More Police Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
