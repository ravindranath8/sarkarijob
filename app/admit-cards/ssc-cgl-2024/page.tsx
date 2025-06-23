import Link from "next/link"
import { ArrowLeft, Calendar, ExternalLink, AlertCircle, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function SSCCGLAdmitCardPage() {
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
          <Link href="/admit-card" className="text-blue-600 hover:underline">
            Admit Card
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">SSC CGL 2024 Admit Card</span>
        </div>

        {/* Admit Card Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-2xl text-blue-600">SSC CGL 2024 Tier-I Admit Card</CardTitle>
                  <Badge variant="default">Available</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Staff Selection Commission has released the admit card for Combined Graduate Level Examination 2024
                  Tier-I. Candidates can download their admit card from the official website using registration number
                  and password.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Tier-I CBT
                  </Badge>
                  <Badge variant="secondary">SSC</Badge>
                  <Badge variant="default">Download Available</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Exam Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Exam Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Admit Card Release Date:</span>
                    <span className="text-green-600">10/09/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Exam Date:</span>
                    <span className="text-blue-600 font-semibold">14/09/2024 to 26/09/2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Exam Duration:</span>
                    <span>2 Hours (120 Minutes)</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Reporting Time:</span>
                    <span className="text-orange-600">90 minutes before exam</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Questions:</span>
                    <span>100 Questions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exam Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>Exam Pattern - Tier I</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Subject</th>
                        <th className="text-left py-2">Questions</th>
                        <th className="text-left py-2">Marks</th>
                        <th className="text-left py-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2">General Intelligence & Reasoning</td>
                        <td>25</td>
                        <td>50</td>
                        <td rowSpan={4} className="text-center">
                          2 Hours
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">General Awareness</td>
                        <td>25</td>
                        <td>50</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Quantitative Aptitude</td>
                        <td>25</td>
                        <td>50</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">English Comprehension</td>
                        <td>25</td>
                        <td>50</td>
                      </tr>
                      <tr className="border-b font-semibold">
                        <td className="py-2">Total</td>
                        <td>100</td>
                        <td>200</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> There will be negative marking of 0.50 marks for each wrong answer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Documents Required */}
            <Card>
              <CardHeader>
                <CardTitle>Documents Required on Exam Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Admit Card</h4>
                      <p className="text-sm text-gray-600">
                        Printed copy of admit card with clear photograph and signature
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Photo Identity Proof</h4>
                      <p className="text-sm text-gray-600">
                        Aadhaar Card, Voter ID, Driving License, PAN Card, or Passport (Original + Photocopy)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Additional Photographs</h4>
                      <p className="text-sm text-gray-600">2 recent passport size photographs (same as uploaded)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Blue/Black Ball Point Pen</h4>
                      <p className="text-sm text-gray-600">For signature and other formalities</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Important Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Candidates must reach the exam center 90 minutes before the exam start time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Entry to the exam hall will be closed 30 minutes before the exam start time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Mobile phones, calculators, and electronic devices are strictly prohibited</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Candidates should wear light-colored clothes (avoid dark colors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Biometric verification will be conducted at the exam center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Rough work should be done only on the sheets provided by the invigilator</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Section */}
            <Card>
              <CardHeader>
                <CardTitle>Download Admit Card</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="lg">
                  Download Admit Card
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Official Website
                </Button>
                <div className="text-xs text-gray-600 mt-2">
                  <p>You will need:</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>Registration Number</li>
                    <li>Password/Date of Birth</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Exam Centers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Exam Timing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Morning Shift:</span>
                    <span className="font-semibold">9:00 AM - 11:00 AM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Afternoon Shift:</span>
                    <span className="font-semibold">2:30 PM - 4:30 PM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Evening Shift:</span>
                    <span className="font-semibold">6:00 PM - 8:00 PM</span>
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
                  <li>• Download admit card before exam date</li>
                  <li>• Check exam center location in advance</li>
                  <li>• Carry original photo ID proof</li>
                  <li>• No electronic devices allowed</li>
                </ul>
              </CardContent>
            </Card>

            {/* Related Admit Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Related Admit Cards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/admit-cards/ssc-chsl-2024" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">SSC CHSL 2024</h4>
                  <p className="text-xs text-gray-600">Available</p>
                </Link>
                <Link href="/admit-cards/ssc-mts-2024" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">SSC MTS 2024</h4>
                  <p className="text-xs text-gray-600">Expected Soon</p>
                </Link>
                <Link href="/admit-cards/ssc-je-2024" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">SSC JE 2024</h4>
                  <p className="text-xs text-gray-600">Expected Soon</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
