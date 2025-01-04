import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F8F9FF] rounded flex items-center justify-center">
            <div className="w-6 h-6 text-blue-600">🔄</div>
          </div>
          <span className="font-semibold">Project Assistant</span>
        </div>
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          <Star className="mr-2 h-4 w-4" />
          Label
        </Button>
      </div>
    </header>
  )
}

