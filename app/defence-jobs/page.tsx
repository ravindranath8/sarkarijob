import Link from "next/link"
import { ArrowLeft, Calendar, Users, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DefenceJobsPage() {
  const defenceJobs = [
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
      description: "Agniveer General Duty, Technical, Clerk/Store Keeper Technical in Indian Army",
    },
    {
      title: "Indian Navy Agniveer SSR Recruitment 2024",
      posts: "3,000",
      organization: "Indian Navy",
      qualification: "12th Pass (PCM)",
      ageLimit: "17-20 years",
      salary: "₹30,000 - ₹40,000",
      lastDate: "30/07/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Agniveer Senior Secondary Recruit in Indian Navy",
    },
    {
      title: "Indian Air Force Agniveer Recruitment 2024",
      posts: "3,265",
      organization: "Indian Air Force",
      qualification: "10th/12th Pass",
      ageLimit: "17.5-21 years",
      salary: "₹30,000 - ₹40,000",
      lastDate: "15/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Agniveer Vayu in Indian Air Force",
    },
    {
      title: "UPSC NDA (National Defence Academy) 2024",
      posts: "400",
      organization: "UPSC",
      qualification: "12th Pass",
      ageLimit: "16.5-19.5 years",
      salary: "₹15,600 - ₹39,100",
      lastDate: "20/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Training for Army, Navy and Air Force Officers",
    },
    {
      title: "UPSC CDS (Combined Defence Services) 2024",
      posts: "341",
      organization: "UPSC",
      qualification: "Graduate",
      ageLimit: "19-24 years",
      salary: "₹56,100 - ₹1,77,500",
      lastDate: "10/08/2024",
      examDate: "October 2024",
      status: "Active",
      description: "Officers in Indian Army, Navy and Air Force",
    },
    {
      title: "Coast Guard Navik Recruitment 2024",
      posts: "260",
      organization: "Indian Coast Guard",
      qualification: "12th Pass",
      ageLimit: "18-22 years",
      salary: "₹21,700 - ₹69,100",
      lastDate: "05/08/2024",
      examDate: "September 2024",
      status: "Active",
      description: "Navik (General Duty) and Navik (Domestic Branch) in Coast Guard",
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
          <span className="font-semibold">Defence Jobs</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            Defence Jobs 2024
          </h1>
          <p className="text-gray-600">
            Latest defence recruitment notifications from Indian Army, Navy, Air Force, Coast Guard and other defence
            organizations.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              123 Active Jobs
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Updated Today
            </Badge>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {defenceJobs.map((job, index) => (
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
            Load More Defence Jobs
          </Button>
        </div>
      </div>
    </div>
  )
}
