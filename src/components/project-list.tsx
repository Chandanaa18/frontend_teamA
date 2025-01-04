import { Users, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function ProjectList() {
  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      <h2 className="text-lg font-semibold">Active Projects</h2>
      
      <div className="space-y-4">
        <div className="bg-[#F8F9FF] p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">Project A: Website Redesign</h3>
              <p className="text-sm text-gray-600">3 tasks pending, 2 completed</p>
            </div>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              In Progress(60%)
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Due: Oct 25
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              4 members
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FF] p-4 rounded-lg">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">Project B: Content Strategy</h3>
              <p className="text-sm text-gray-600">5 tasks pending, 1 completed</p>
            </div>
            <Badge variant="destructive">2 Overdue tasks</Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Due: Oct 30
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              3 members
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

