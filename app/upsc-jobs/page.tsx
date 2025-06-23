import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UPSCJobsPage() {
  const upscJobs = [
    {
      title: "UPSC Civil Services Examination (CSE) 2024",
      posts: "1,105",
      qualification: "Graduate",
      ageLimit: "21-32 years",
      salary: "₹56,100 - ₹2,50,000",
      lastDate: "30/05/2024",
      examDate: "June 2024",
      status: "Ongoing",
      description: "IAS, IPS, IFS and other Central Services",
    },
    {
      title: "UPSC CAPF (Central Armed Police Forces) 2024",
      posts: "506",
      qualification: "Graduate",
      ageLimit: "20-25 years",
      salary: "₹35,400 - ₹1,12,400",
      lastDate: "15/07/2024",
      examDate: "August 2024",
      status: "Active",
      description: "Assistant Commandant in BSF, CRPF, CISF, ITBP, SSB",
    },
    {
      title: "UPSC CDS (Combined Defence Services) 2024",
      posts: "341",
      qualification: "Graduate",
      ageLimit: "19-24 years",
      salary: "₹56,100 - ₹1,77,500",
      lastDate: "25/07/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Officers in Indian Army, Navy and Air Force",
    },
    {
      title: "UPSC NDA (National Defence Academy) 2024",
      posts: "400",
      qualification: "12th Pass",
      ageLimit: "16.5-19.5 years",
      salary: "₹15,600 - ₹39,100",
      lastDate: "10/07/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Training for Army, Navy and Air Force",
    },
    {
      title: "UPSC Engineering Services Examination (ESE) 2024",
      posts: "327",
      qualification: "B.Tech/B.E.",
      ageLimit: "21-30 years",
      salary: "₹35,400 - ₹1,12,400",
      lastDate: "20/10/2024",
      examDate: "June 2025",
      status: "Active",
      description: "Class I Officer posts in various engineering services",
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
          <span className="font-semibold">UPSC Jobs</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">UPSC Jobs 2024</h1>
          <p className="text-gray-600">
            Union Public Service Commission conducts examinations for recruitment to various prestigious services under
            Government of India.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              89 Active Jobs
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Today
            </Badge>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {upscJobs.map((job, index) => (
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
                      <Badge variant={job.status === "Ongoing" ? "default" : "destructive"}>{job.status}</Badge>
                      <Badge variant="outline">{job.posts} Posts</Badge>
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
            Load More UPSC Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
