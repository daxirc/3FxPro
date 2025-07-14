import { MessageSquare, BookOpen, Mail } from 'lucide-react'

export default function Support() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Support Channels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated support team is available 24/7 to assist with your trading infrastructure needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Live Chat Card */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Instant Live Chat</h3>
            <p className="text-gray-600 mb-6">
              Connect instantly with our support specialists for real-time assistance with your VPS setup and configuration.
            </p>
            <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all">
              Start Live Chat
            </button>
          </div>

          {/* Knowledge Base Card - Updated to blue */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Knowledge Base</h3>
            <p className="text-gray-600 mb-6">
              Access our comprehensive library of guides, tutorials, and troubleshooting articles for self-service support.
            </p>
            <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all">
              Browse Knowledge Base
            </button>
          </div>

          {/* Submit Ticket Card */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Submit Ticket</h3>
            <p className="text-gray-600 mb-6">
              For complex technical issues, submit a detailed ticket and our experts will respond within 1 hour.
            </p>
            <button className="w-full py-3 px-6 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker text-white font-medium rounded-lg transition-all">
              Create Support Ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
