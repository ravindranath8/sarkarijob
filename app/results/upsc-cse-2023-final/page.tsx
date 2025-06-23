import Link from "next/link"
import { ArrowLeft, Calendar, Download, ExternalLink, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function UPSCCSEResultPage() {
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
          <Link href="/results" className="text-blue-600 hover:underline">
            Results
          </Link>
          <span className="text-gray-500">/</span>
          <span className="font-semibold">UPSC CSE 2023 Final Result</span>
        </div>

        {/* Result Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-2xl text-blue-600">UPSC CSE 2023 Final Result</CardTitle>
                  <Badge variant="default">Declared</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Union Public Service Commission has declared the final result of Civil Services Examination 2023. The
                  result includes the list of recommended candidates for IAS, IPS, IFS and other Central Services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    1,105 Selected
                  </Badge>
                  <Badge variant="secondary">UPSC</Badge>
                  <Badge variant="default">Final Result</Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Result Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Result Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">933,329</div>
                    <div className="text-sm text-gray-600">Total Appeared</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1,105</div>
                    <div className="text-sm text-gray-600">Finally Selected</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">0.12%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">900</div>
                    <div className="text-sm text-gray-600">Cut-off Marks</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service-wise Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Service-wise Selection Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Vacancies</th>
                        <th className="text-left py-2">Selected</th>
                        <th className="text-left py-2">Cut-off Marks</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2">Indian Administrative Service (IAS)</td>
                        <td>180</td>
                        <td>180</td>
                        <td>900</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Indian Police Service (IPS)</td>
                        <td>150</td>
                        <td>150</td>
                        <td>885</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Indian Foreign Service (IFS)</td>
                        <td>50</td>
                        <td>50</td>
                        <td>920</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Indian Revenue Service (IRS)</td>
                        <td>120</td>
                        <td>120</td>
                        <td>870</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Other Central Services</td>
                        <td>605</td>
                        <td>605</td>
                        <td>850</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Category-wise Cut-off */}
            <Card>
              <CardHeader>
                <CardTitle>Category-wise Cut-off Marks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">General Category:</span>
                    <span className="text-blue-600 font-semibold">900/2025</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">EWS Category:</span>
                    <span className="text-blue-600 font-semibold">885/2025</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">OBC Category:</span>
                    <span className="text-blue-600 font-semibold">870/2025</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">SC Category:</span>
                    <span className="text-blue-600 font-semibold">820/2025</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">ST Category:</span>
                    <span className="text-blue-600 font-semibold">800/2025</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-medium">PwD Category:</span>
                    <span className="text-blue-600 font-semibold">780/2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Rankers */}
            <Card>
              <CardHeader>
                <CardTitle>Top 10 Rankers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Aditya Srivastava", service: "IAS", marks: "1,058" },
                    { rank: 2, name: "Animesh Pradhan", service: "IAS", marks: "1,052" },
                    { rank: 3, name: "Donuru Ananya Reddy", service: "IAS", marks: "1,045" },
                    { rank: 4, name: "Divyanshi Jain", service: "IAS", marks: "1,038" },
                    { rank: 5, name: "Utkarsh Dwivedi", service: "IAS", marks: "1,032" },
                  ].map((ranker, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                          {ranker.rank}
                        </div>
                        <div>
                          <h4 className="font-semibold">{ranker.name}</h4>
                          <p className="text-sm text-gray-600">{ranker.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{ranker.marks}</div>
                        <div className="text-xs text-gray-500">Total Marks</div>
                      </div>
                    </div>
                  ))}
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
                  Check Result
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Result PDF
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Cut-off List
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Official Website
                </Button>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Preliminary Exam:</span>
                    <span>28/05/2023</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Main Exam:</span>
                    <span>15/09/2023</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Interview:</span>
                    <span>Jan-Apr 2024</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Final Result:</span>
                    <span className="text-green-600 font-semibold">20/06/2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Results */}
            <Card>
              <CardHeader>
                <CardTitle>Related Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/results/upsc-capf-2023" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">UPSC CAPF 2023 Result</h4>
                  <p className="text-xs text-gray-600">506 Selected</p>
                </Link>
                <Link href="/results/upsc-cds-2023" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">UPSC CDS 2023 Result</h4>
                  <p className="text-xs text-gray-600">341 Selected</p>
                </Link>
                <Link href="/results/upsc-nda-2023" className="block p-2 border rounded hover:bg-gray-50">
                  <h4 className="font-medium text-sm text-blue-600">UPSC NDA 2023 Result</h4>
                  <p className="text-xs text-gray-600">400 Selected</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
