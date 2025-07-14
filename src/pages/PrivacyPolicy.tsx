import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | FXRDP</title>
        <meta name="description" content="FXRDP Privacy Policy - How we collect, use, and protect your personal information" />
      </Helmet>
      
      <div className="prose prose-lg prose-blue max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, payment information when you register for our services.</li>
          <li><strong>Usage Data:</strong> Information about how you use our services, including IP addresses, device information, and log data.</li>
          <li><strong>Cookies:</strong> We use cookies to track activity on our service and hold certain information to improve user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the information we collect for various purposes:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To allow you to participate in interactive features of our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our service</li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Protection</h2>
        <p>We implement appropriate technical and organizational measures to protect the security of your personal data. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
        <p>We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@fxrdp.com" className="text-primary hover:underline">privacy@fxrdp.com</a>.</p>
      </div>
    </div>
  )
}
