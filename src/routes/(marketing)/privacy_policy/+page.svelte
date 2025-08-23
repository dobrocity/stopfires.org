<script lang="ts">
  import { WebsiteName } from "../../../config"

  const lastUpdated = "August 2025"
</script>

<svelte:head>
  <title>Privacy Policy - {WebsiteName}</title>
  <meta
    name="description"
    content="Privacy Policy for StopFires - Learn how we protect your data and handle location sharing between users."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p class="text-lg text-gray-600">Last updated: {lastUpdated}</p>
      <div class="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
    </div>

    <!-- Introduction -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
      <p class="text-gray-700 mb-4">
        Welcome to {WebsiteName} ("we," "our," or "us"). We are committed to protecting
        your privacy and ensuring the security of your personal information. This
        Privacy Policy explains how we collect, use, disclose, and safeguard your
        information when you use our wildfire detection and emergency response application.
      </p>
      <p class="text-gray-700">
        By using our application, you consent to the data practices described in
        this policy. If you do not agree with our policies and practices, please
        do not use our application.
      </p>
    </div>

    <!-- Information We Collect -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Information We Collect
      </h2>

      <h3 class="text-xl font-medium text-gray-800 mb-3">
        Personal Information
      </h3>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Name and contact information (email address, phone number)</li>
        <li>Account credentials and profile information</li>
        <li>Emergency contact information</li>
        <li>Location data and GPS coordinates</li>
        <li>Device information and identifiers</li>
        <li>Usage data and app interactions</li>
      </ul>

      <h3 class="text-xl font-medium text-gray-800 mb-3">Location Data</h3>
      <p class="text-gray-700 mb-4">
        Our application requires access to your location to provide critical
        wildfire detection and emergency response services. This includes:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Real-time GPS coordinates for emergency response</li>
        <li>Location history for risk assessment and evacuation planning</li>
        <li>Geographic data for wildfire spread prediction</li>
        <li>Location sharing with other users for community safety</li>
      </ul>

      <div class="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-orange-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-orange-700">
              <strong>Important:</strong> Location sharing is essential for the app's
              emergency response functionality. By using StopFires, you agree to
              share your location with other users to enable community safety features.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- How We Use Your Information -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        How We Use Your Information
      </h2>

      <h3 class="text-xl font-medium text-gray-800 mb-3">Primary Uses</h3>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Providing real-time wildfire detection and alerts</li>
        <li>Coordinating emergency response and evacuation efforts</li>
        <li>Sharing location data with other users for community safety</li>
        <li>Analyzing wildfire patterns and risk assessment</li>
        <li>Improving our services and user experience</li>
        <li>Communicating important safety information</li>
      </ul>

      <h3 class="text-xl font-medium text-gray-800 mb-3">
        Location Sharing Between Users
      </h3>
      <p class="text-gray-700 mb-4">
        To maximize community safety during wildfire emergencies, our
        application shares location data between users in the following ways:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          <strong>Emergency Situations:</strong> Your location is shared with all
          users during active wildfire threats
        </li>
        <li>
          <strong>Evacuation Coordination:</strong> Location data helps coordinate
          safe evacuation routes
        </li>
        <li>
          <strong>Resource Deployment:</strong> Emergency responders can see user
          locations for rescue operations
        </li>
        <li>
          <strong>Community Alerts:</strong> Location-based notifications to nearby
          users
        </li>
      </ul>
    </div>

    <!-- Information Sharing and Disclosure -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Information Sharing and Disclosure
      </h2>

      <h3 class="text-xl font-medium text-gray-800 mb-3">With Other Users</h3>
      <p class="text-gray-700 mb-4">
        Your location information is shared with other StopFires users to enable
        community safety features. This sharing is essential for:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Coordinating evacuation efforts during wildfires</li>
        <li>Providing location-based emergency alerts</li>
        <li>Enabling emergency responders to locate users in danger</li>
        <li>Facilitating community-based wildfire monitoring</li>
      </ul>

      <h3 class="text-xl font-medium text-gray-800 mb-3">
        With Emergency Services
      </h3>
      <p class="text-gray-700 mb-4">
        We may share your information with emergency services, fire departments,
        and government agencies when:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Required by law or emergency situations</li>
        <li>Necessary to protect public safety</li>
        <li>Coordinating emergency response efforts</li>
        <li>Providing critical location data for rescue operations</li>
      </ul>

      <h3 class="text-xl font-medium text-gray-800 mb-3">
        Third-Party Services
      </h3>
      <p class="text-gray-700 mb-4">
        We may share information with trusted third-party service providers who
        assist us in:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Data storage and security</li>
        <li>Analytics and service improvement</li>
        <li>Emergency communication systems</li>
        <li>Weather and environmental data services</li>
      </ul>
    </div>

    <!-- Data Security -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
      <p class="text-gray-700 mb-4">
        We implement comprehensive security measures to protect your
        information:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>End-to-end encryption for sensitive data transmission</li>
        <li>Secure data storage with industry-standard protocols</li>
        <li>Regular security audits and vulnerability assessments</li>
        <li>Access controls and authentication measures</li>
        <li>Data backup and disaster recovery procedures</li>
      </ul>

      <div class="bg-green-50 border-l-4 border-green-400 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-green-700">
              <strong>Security Commitment:</strong> We prioritize the security of
              your location data and personal information, especially during emergency
              situations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Your Rights and Choices -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Your Rights and Choices
      </h2>

      <h3 class="text-xl font-medium text-gray-800 mb-3">
        Location Permissions
      </h3>
      <p class="text-gray-700 mb-4">
        You can control location sharing through your device settings and app
        preferences:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Enable/disable location services for the app</li>
        <li>Choose when to share location (always, while using, or never)</li>
        <li>Opt out of non-emergency location sharing</li>
        <li>Delete location history from your account</li>
      </ul>

      <h3 class="text-xl font-medium text-gray-800 mb-3">Account Controls</h3>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Access and review your personal information</li>
        <li>Update or correct inaccurate information</li>
        <li>Request deletion of your account and data</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-blue-700">
              <strong>Note:</strong> Disabling location services may limit the app's
              emergency response capabilities and community safety features.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Retention -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
      <p class="text-gray-700 mb-4">
        We retain your information for as long as necessary to provide our
        services and comply with legal obligations:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          <strong>Active Account:</strong> Data is retained while your account is
          active
        </li>
        <li>
          <strong>Emergency Data:</strong> Location data during emergencies may be
          retained longer for safety analysis
        </li>
        <li>
          <strong>Account Deletion:</strong> Data is deleted within 30 days of account
          deletion request
        </li>
        <li>
          <strong>Legal Requirements:</strong> Some data may be retained longer if
          required by law
        </li>
      </ul>
    </div>

    <!-- Children's Privacy -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Children's Privacy
      </h2>
      <p class="text-gray-700 mb-4">
        Our application is not intended for children under 13 years of age. We
        do not knowingly collect personal information from children under 13. If
        you are a parent or guardian and believe your child has provided us with
        personal information, please contact us immediately.
      </p>
    </div>

    <!-- Changes to This Policy -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Changes to This Policy
      </h2>
      <p class="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Posting the new Privacy Policy on this page</li>
        <li>Sending you an email notification</li>
        <li>Displaying an in-app notification</li>
      </ul>
      <p class="text-gray-700">
        Your continued use of the application after any changes constitutes
        acceptance of the updated policy.
      </p>
    </div>

    <!-- Contact Information -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
      <p class="text-gray-700 mb-4">
        If you have any questions about this Privacy Policy or our data
        practices, please contact us:
      </p>
      <div class="bg-gray-50 rounded-lg p-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">Email</h4>
            <a
              href="mailto:privacy@stopfires.org"
              class="text-orange-600 hover:text-orange-700"
              >contact@dobro.city</a
            >
          </div>
          <div>
            <h4 class="font-medium text-gray-900 mb-2">Contact Form</h4>
            <a href="/contact_us" class="text-orange-600 hover:text-orange-700"
              >Contact Us Page</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
