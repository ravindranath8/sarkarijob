import Link from "next/link"
import { ArrowLeft, Calendar, Users, FileText, Download, ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function RailwayGroupDJobPage() {
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
          <span className="font-semibold">Railway Group D 2024</span>
        </div>

        {/* Job Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-2xl text-blue-600">Railway Group D Recruitment 2024</CardTitle>
                  <Badge variant="destructive">NEW</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Railway Recruitment Board (RRB) has released notification for Group D recruitment 2024 for various
                  posts including Track Maintainer Grade-IV, Helper/Assistant, Porter/Hamal across all Railway zones.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    32,438 Posts
                  </Badge>
                  <Badge variant="secondary">Railway</Badge>
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
                    <span className="text-green-600">19/06/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Online Application Start Date:</span>
                    <span>26/06/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Last Date for Online Application:</span>
                    <span className="text-red-600 font-semibold">30/07/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Last Date for Fee Payment:</span>
                    <span className="text-red-600 font-semibold">31/07/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">CBT Examination Date:</span>
                    <span>17/09/2024 to 18/10/2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Zone-wise Vacancy */}
            <Card>
              <CardHeader>
                <CardTitle>Zone-wise Vacancy Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Railway Zone</th>
                        <th className="text-left py-2">Track Maintainer</th>
                        <th className="text-left py-2">Helper/Assistant</th>
                        <th className="text-left py-2">Porter/Hamal</th>
                        <th className="text-left py-2">Total</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2">Northern Railway</td>
                        <td>2,156</td>
                        <td>1,234</td>
                        <td>567</td>
                        <td>3,957</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Western Railway</td>
                        <td>1,987</td>
                        <td>1,123</td>
                        <td>445</td>
                        <td>3,555</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Eastern Railway</td>
                        <td>1,765</td>
                        <td>998</td>
                        <td>389</td>
                        <td>3,152</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Southern Railway</td>
                        <td>1,654</td>
                        <td>876</td>
                        <td>334</td>
                        <td>2,864</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Other Zones</td>
                        <td>12,456</td>
                        <td>4,567</td>
                        <td>1,887</td>
                        <td>18,910</td>
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
                    10th Pass (Matriculation) from recognized Board or equivalent with minimum 50% marks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Age Limit:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Minimum Age: 18 years</li>
                    <li>• Maximum Age: 33 years</li>
                    <li>• Age relaxation: SC/ST - 5 years, OBC - 3 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Physical Standards:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Height: Male - 157.5 cm, Female - 152 cm</li>
                    <li>• Chest: Male - 81 cm (unexpanded), 85 cm (expanded)</li>
                    <li>• Vision: 6/12 or 6/9 (with or without glasses)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Application Fee:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• General/OBC/EWS: ₹500/-</li>
                    <li>• SC/ST/PwD/Ex-Servicemen/Women: ₹250/-</li>
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
                      <h4 className="font-semibold">Computer Based Test (CBT)</h4>
                      <p className="text-sm text-gray-600">100 questions, 90 minutes, Objective type</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Physical Efficiency Test (PET)</h4>
                      <p className="text-sm text-gray-600">Physical standards verification</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Document Verification</h4>
                      <p className="text-sm text-gray-600">Original documents verification</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Medical Examination</h4>
                      <p className="text-sm text-gray-600">Medical fitness test</p>
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

            {/* Salary Details */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">Salary Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Pay Level:</span>
                    <span className="font-semibold">Level 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Basic Pay:</span>
                    <span className="font-semibold">₹18,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gross Salary:</span>
                    <span className="font-semibold text-green-700">₹35,000 - ₹40,000</span>
                  </div>
                </div>
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
                  <li>• Last date to apply: 30/07/2024</li>
                  <li>• Medical fitness mandatory</li>
                  <li>• PET is qualifying in nature</li>
                  <li>• Negative marking: -1/3 for wrong answers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
