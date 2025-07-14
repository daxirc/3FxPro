import { Helmet } from 'react-helmet-async'

export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Refund Policy | FXRDP</title>
        <meta name="description" content="FXRDP Refund Policy - Information about our non-refundable services" />
      </Helmet>
      
      <div className="prose prose-lg prose-blue max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Important Notice</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>All FXRDP services are <strong>non-refundable</strong>. By purchasing our services, you acknowledge and agree to this policy.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. General Policy</h2>
        <p>Due to the nature of our services, all payments made to FXRDP are final and non-refundable. This includes but is not limited to:</p>
        <ul>
          <li>Monthly or annual subscription fees</li>
          <li>Setup fees</li>
          <li>Additional service fees</li>
          <li>Upgrades or downgrades between plans</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Service Cancellation</h2>
        <p>You may cancel your service at any time, but no refunds will be provided for any unused portion of your service period. Upon cancellation, your service will remain active until the end of your current billing cycle.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Service Issues</h2>
        <p>If you experience technical issues with our service, we will make every reasonable effort to resolve the issue. Service credits may be issued at our sole discretion for significant downtime that exceeds our SLA guarantees.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Billing Disputes</h2>
        <p>If you believe there has been an error in billing, you must contact us within 30 days of the charge appearing on your statement. We will investigate the claim and make any necessary adjustments.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Changes to This Policy</h2>
        <p>We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting to our website.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
        <p>For any questions regarding this refund policy, please contact us at <a href="mailto:billing@fxrdp.com" className="text-primary hover:underline">billing@fxrdp.com</a>.</p>
      </div>
    </div>
  )
}
