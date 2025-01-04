import { FileText, Image } from 'lucide-react'

export function RecentFiles() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Files</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
            <FileText className="h-4 w-4 text-red-600" />
          </div>
          <div>
            <p className="font-medium">Project_Brief_v2.pdf</p>
            <p className="text-sm text-gray-600">2.4 MB</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <Image className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <p className="font-medium">Homepage_Mockup.png</p>
            <p className="text-sm text-gray-600">4.8 MB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

