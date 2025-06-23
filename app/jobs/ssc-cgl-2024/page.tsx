import Link from "next/link"
import { ArrowLeft, Calendar, Users, FileText, Download, ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function SSCCGLJobPage() {
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
          <Link href="/latest-jobs" className="text-blue-600 hover:underline">
            Latest Jobs
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">SSC CGL 2024</span>
        </div>

        {/* Job Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-2xl text-blue-600">
                    SSC CGL (Combined Graduate Level) 2024 Notification
                  </CardTitle>
                  <Badge variant="destructive">NEW</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Staff Selection Commission has released notification for Combined Graduate Level Examination 2024 for
                  recruitment to various Group B and Group C posts in Government of India Ministries/Departments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    17,727 Posts
                  </Badge>
                  <Badge variant="secondary">SSC</Badge>
                  <Badge variant="default">Active</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Notification Release Date:</span>
                    <span className="text-green-600">20/06/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Online Application Start Date:</span>
                    <span>24/06/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Last Date for Online Application:</span>
                    <span className="text-red-600 font-semibold">25/07/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Last Date for Fee Payment:</span>
                    <span className="text-red-600 font-semibold">27/07/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tier-I Examination Date:</span>
                    <span>14/09/2024 to 26/09/2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vacancy Details */}
            <Card>
              <CardHeader>
                <CardTitle>Vacancy Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Post Name</th>
                        <th className="text-left py-2">Group</th>
                        <th className="text-left py-2">Pay Scale</th>
                        <th className="text-left py-2">Vacancies</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2">Assistant Audit Officer</td>
                        <td>Group B</td>
                        <td>₹35,400-1,12,400</td>
                        <td>1,323</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Assistant Section Officer</td>
                        <td>Group B</td>
                        <td>₹35,400-1,12,400</td>
                        <td>3,261</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Inspector (Examiner)</td>
                        <td>Group B</td>
                        <td>₹35,400-1,12,400</td>
                        <td>564</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Assistant</td>
                        <td>Group C</td>
                        <td>₹25,500-81,100</td>
                        <td>11,271</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Senior Secretariat Assistant</td>
                        <td>Group C</td>
                        <td>₹25,500-81,100</td>
                        <td>1,308</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Educational Qualification:</h4>
                  <p className="text-sm text-gray-600">
                    Bachelor's degree from a recognized University or equivalent qualification recognized by the
                    Government.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Age Limit:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Group B Posts: 18-30 years</li>
                    <li>• Group C Posts: 18-27 years</li>
                    <li>• Age relaxation as per Government rules</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Application Fee:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• General/OBC/EWS: ₹100/-</li>
                    <li>• SC/ST/PwD/Ex-Servicemen: Exempted</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Selection Process */}
            <Card>
              <CardHeader>
                <CardTitle>Selection Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Tier-I (Computer Based Examination)</h4>
                      <p className="text-sm text-gray-600">100 questions, 2 hours, Objective type</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Tier-II (Computer Based Examination)</h4>
                      <p className="text-sm text-gray-600">4 Papers, 2 hours each, Objective type</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Tier-III (Descriptive Paper)</h4>
                      <p className="text-sm text-gray-600">Essay/Letter/Application Writing, 1 hour</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Tier-IV (Skill Test/Computer Proficiency Test)</h4>
                      <p className="text-sm text-gray-600">As applicable for specific posts</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg">
                  Apply Online
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Notification
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  View Syllabus
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Official Website
                </Button>
              </CardContent>
            </Card>

            {/* Important Notice */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertCircle className="w-5 h-5" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li>• Last date to apply: 25/07/2024</li>
                  <li>• Only online applications accepted</li>
                  <li>• Keep all documents ready before applying</li>
                  <li>• Take printout of application form</li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Related Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/jobs/ssc-chsl-2024" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">SSC CHSL 2024</h4>
                  <p className="text-xs text-gray-600">3,712 Posts</p>
                </Link>
                <Link href="/jobs/ssc-mts-2024" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">SSC MTS 2024</h4>
                  <p className="text-xs text-gray-600">9,583 Posts</p>
                </Link>
                <Link href="/jobs/ssc-je-2024" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">SSC JE 2024</h4>
                  <p className="text-xs text-gray-600">1,676 Posts</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
