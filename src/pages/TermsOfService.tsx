import { Helmet } from 'react-helmet-async'

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms of Service | FXRDP</title>
        <meta name="description" content="FXRDP Terms of Service - Legal agreement between you and FXRDP" />
      </Helmet>
      
      <div className="prose prose-lg prose-blue max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing or using the FXRDP services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
        <p>FXRDP provides virtual private server (VPS) hosting services optimized for forex trading platforms. Our services include but are not limited to server hosting, maintenance, and technical support.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Obligations</h2>
        <p>As a user of our services, you agree:</p>
        <ul>
          <li>To provide accurate and complete registration information</li>
          <li>To maintain the confidentiality of your account credentials</li>
          <li>Not to use our services for any illegal or unauthorized purpose</li>
          <li>Not to interfere with or disrupt the service or servers</li>
          <li>To comply with all applicable laws and regulations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
        <p>All services are billed on a monthly basis. Payment is due at the beginning of each service period. We accept various payment methods including credit cards and PayPal. All payments are non-refundable.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Service Availability</h2>
        <p>We strive to maintain 99.9% uptime for our services. However, we do not guarantee that the service will be uninterrupted or error-free. Scheduled maintenance may be performed without prior notice.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
        <p>FXRDP shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction where FXRDP is registered, without regard to its conflict of law provisions.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the updated terms on our website and updating the "Last Updated" date.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
        <p>For any questions about these Terms, please contact us at <a href="mailto:legal@fxrdp.com" className="text-primary hover:underline">legal@fxrdp.com</a>.</p>
      </div>
    </div>
  )
}
