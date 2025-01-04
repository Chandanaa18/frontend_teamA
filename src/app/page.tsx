import { Header } from '@/components/header'
import { FileUpload } from '@/components/file-upload'
import { ProjectList } from '@/components/project-list'
import { RecentFiles } from '@/components/recent-files'
import { WelcomeMessage } from '@/components/welcome-message'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,350px] gap-6">
          <main className="space-y-6">
            <FileUpload />
            <WelcomeMessage />
          </main>
          <aside className="space-y-8">
            <ProjectList />
            <RecentFiles />
          </aside>
        </div>
      </div>
    </div>
  )
}

