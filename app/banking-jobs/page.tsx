import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BankingJobsPage() {
  const bankingJobs = [
    {
      title: "IBPS PO (Probationary Officer) 2024",
      posts: "3,955",
      qualification: "Graduate",
      ageLimit: "20-30 years",
      salary: "₹23,700 - ₹42,020",
      lastDate: "25/07/2024",
      examDate: "August 2024",
      status: "Active",
      description: "Probationary Officer in Public Sector Banks",
    },
    {
      title: "IBPS Clerk 2024",
      posts: "7,855",
      qualification: "Graduate",
      ageLimit: "20-28 years",
      salary: "₹11,765 - ₹31,540",
      lastDate: "30/07/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Clerical Cadre in Public Sector Banks",
    },
    {
      title: "SBI PO (Probationary Officer) 2024",
      posts: "2,000",
      qualification: "Graduate",
      ageLimit: "21-30 years",
      salary: "₹27,620 - ₹46,680",
      lastDate: "15/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Probationary Officer in State Bank of India",
    },
    {
      title: "SBI Clerk 2024",
      posts: "8,773",
      qualification: "Graduate",
      ageLimit: "20-28 years",
      salary: "₹17,900 - ₹63,200",
      lastDate: "20/08/2024",
      examDate: "October 2024",
      status: "Active",
      description: "Junior Associate (Customer Support & Sales) in SBI",
    },
    {
      title: "IBPS RRB Officer Scale I 2024",
      posts: "4,861",
      qualification: "Graduate",
      ageLimit: "18-30 years",
      salary: "₹7,200 - ₹19,300",
      lastDate: "10/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Officer Scale I in Regional Rural Banks",
    },
    {
      title: "RBI Assistant 2024",
      posts: "950",
      qualification: "Graduate",
      ageLimit: "20-28 years",
      salary: "₹14,650 - ₹25,750",
      lastDate: "05/08/2024",
      examDate: "October 2024",
      status: "Active",
      description: "Assistant in Reserve Bank of India",
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
          <span className="font-semibold">Banking Jobs</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Banking Jobs 2024</h1>
          <p className="text-gray-600">
            Banking sector jobs including IBPS, SBI, RBI and other public and private sector banks offering excellent
            career opportunities.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              156 Active Jobs
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Today
            </Badge>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {bankingJobs.map((job, index) => (
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
            Load More Banking Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
