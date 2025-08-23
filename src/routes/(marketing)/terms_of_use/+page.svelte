<script lang="ts">
  import { WebsiteName } from "../../../config"

  const lastUpdated = "August 2025"
</script>

<svelte:head>
  <title>Terms of Use - {WebsiteName}</title>
  <meta
    name="description"
    content="Terms of Use for StopFires - Important legal information about using our wildfire detection and emergency response application."
  />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
      <p class="text-lg text-gray-600">Last updated: {lastUpdated}</p>
      <div class="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
    </div>

    <!-- Introduction -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
      <p class="text-gray-700 mb-4">
        Welcome to {WebsiteName} ("we," "our," or "us"). These Terms of Use ("Terms")
        govern your use of our wildfire detection and emergency response application,
        website, and related services (collectively, the "Service").
      </p>
      <p class="text-gray-700">
        By accessing or using our Service, you agree to be bound by these Terms.
        If you disagree with any part of these terms, then you may not access
        the Service.
      </p>
    </div>

    <!-- Critical Disclaimer -->
    <div class="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="h-6 w-6 text-red-400"
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
          <h3 class="text-lg font-medium text-red-800 mb-2">
            Critical Disclaimer
          </h3>
          <p class="text-sm text-red-700">
            <strong>EMERGENCY USE DISCLAIMER:</strong> This application is designed
            to assist with wildfire detection and emergency response, but it is NOT
            a substitute for professional emergency services. Always call 911 or
            your local emergency number in life-threatening situations.
          </p>
        </div>
      </div>
    </div>

    <!-- Acceptance of Terms -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Acceptance of Terms
      </h2>
      <p class="text-gray-700 mb-4">
        By using our Service, you acknowledge that you have read, understood,
        and agree to be bound by these Terms. You also acknowledge that:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>You are at least 18 years old or have parental/guardian consent</li>
        <li>You have the legal capacity to enter into these Terms</li>
        <li>You will use the Service in compliance with all applicable laws</li>
        <li>
          You understand the risks associated with emergency response
          applications
        </li>
      </ul>
    </div>

    <!-- Description of Service -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Description of Service
      </h2>
      <p class="text-gray-700 mb-4">
        {WebsiteName} provides a platform for:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Wildfire detection and monitoring</li>
        <li>Emergency alert systems</li>
        <li>Community safety coordination</li>
        <li>Location-based emergency notifications</li>
        <li>Emergency response resource management</li>
      </ul>
      <p class="text-gray-700">
        The Service relies on various data sources, user inputs, and external
        systems that may not always be accurate or available.
      </p>
    </div>

    <!-- User Responsibilities -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        User Responsibilities
      </h2>
      <p class="text-gray-700 mb-4">As a user of our Service, you agree to:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Provide accurate and truthful information</li>
        <li>Use the Service responsibly and safely</li>
        <li>Not interfere with the Service's operation</li>
        <li>Respect the privacy and safety of other users</li>
        <li>Report emergencies through official channels (911, etc.)</li>
        <li>
          Follow evacuation orders and safety instructions from authorities
        </li>
      </ul>
    </div>

    <!-- NO WARRANTY POLICY -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8 border-2 border-red-200">
      <h2 class="text-2xl font-semibold text-red-800 mb-4">
        NO WARRANTY POLICY
      </h2>

      <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-bold text-red-800 mb-3">
          DISCLAIMER OF WARRANTIES
        </h3>
        <p class="text-red-700 mb-4">
          <strong
            >THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong
          >
        </p>
        <p class="text-red-700 mb-4">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE EXPLICITLY
          DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul class="list-disc list-inside text-red-700 space-y-2">
          <li>WARRANTIES OF MERCHANTABILITY</li>
          <li>WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE</li>
          <li>WARRANTIES OF NON-INFRINGEMENT</li>
          <li>WARRANTIES OF ACCURACY OR RELIABILITY</li>
          <li>WARRANTIES OF UNINTERRUPTED OR ERROR-FREE OPERATION</li>
          <li>WARRANTIES THAT THE SERVICE WILL MEET YOUR REQUIREMENTS</li>
        </ul>
      </div>

      <h3 class="text-xl font-medium text-gray-800 mb-3">
        Emergency Response Limitations
      </h3>
      <p class="text-gray-700 mb-4">
        We specifically disclaim any warranty that:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>The Service will detect all wildfires or emergencies</li>
        <li>Emergency alerts will be delivered in a timely manner</li>
        <li>Location data will be accurate or up-to-date</li>
        <li>
          The Service will function during power outages or network failures
        </li>
        <li>Emergency response coordination will be successful</li>
      </ul>

      <h3 class="text-xl font-medium text-gray-800 mb-3">
        Data and Information Accuracy
      </h3>
      <p class="text-gray-700 mb-4">We do not warrant that:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          Information provided through the Service is accurate or complete
        </li>
        <li>
          Weather data, fire predictions, or risk assessments are reliable
        </li>
        <li>Evacuation routes or safety instructions are appropriate</li>
        <li>Third-party data sources are accurate or current</li>
      </ul>
    </div>

    <!-- LIMITATION OF LIABILITY -->
    <div
      class="bg-white rounded-lg shadow-lg p-8 mb-8 border-2 border-orange-200"
    >
      <h2 class="text-2xl font-semibold text-orange-800 mb-4">
        LIMITATION OF LIABILITY
      </h2>

      <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
        <h3 class="text-xl font-bold text-orange-800 mb-3">
          NO LIABILITY FOR CONSEQUENCES
        </h3>
        <p class="text-orange-700 mb-4">
          <strong
            >WE ARE NOT RESPONSIBLE FOR ANY CONSEQUENCES OF APP USAGE, INCLUDING
            BUT NOT LIMITED TO:</strong
          >
        </p>
        <ul class="list-disc list-inside text-orange-700 space-y-2">
          <li>Personal injury or death</li>
          <li>Property damage or loss</li>
          <li>Financial losses or damages</li>
          <li>Emotional distress or trauma</li>
          <li>Missed emergency notifications</li>
          <li>Delayed emergency response</li>
          <li>Incorrect evacuation decisions</li>
          <li>Reliance on inaccurate information</li>
        </ul>
      </div>

      <h3 class="text-xl font-medium text-gray-800 mb-3">Maximum Liability</h3>
      <p class="text-gray-700 mb-4">
        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE
        BE LIABLE FOR:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          Any indirect, incidental, special, consequential, or punitive damages
        </li>
        <li>Loss of profits, revenue, data, or business opportunities</li>
        <li>Damages resulting from the use or inability to use the Service</li>
        <li>
          Damages resulting from emergency situations or natural disasters
        </li>
        <li>Damages resulting from third-party actions or inactions</li>
      </ul>

      <h3 class="text-xl font-medium text-gray-800 mb-3">Liability Cap</h3>
      <p class="text-gray-700">
        Our total liability to you for any claims arising from or related to the
        Service shall not exceed the amount you paid us, if any, in the twelve
        months preceding the claim, or $100, whichever is greater.
      </p>
    </div>

    <!-- Emergency Use Acknowledgment -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Emergency Use Acknowledgment
      </h2>
      <p class="text-gray-700 mb-4">
        By using this Service, you acknowledge and agree that:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          Wildfires and other emergencies are inherently dangerous and
          unpredictable
        </li>
        <li>
          Technology can fail, malfunction, or provide inaccurate information
        </li>
        <li>Emergency response systems may not always work as intended</li>
        <li>Your safety is ultimately your responsibility</li>
        <li>
          You should always follow official emergency instructions from
          authorities
        </li>
        <li>
          The Service is a tool to assist, not replace, professional emergency
          services
        </li>
      </ul>

      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg
              class="h-5 w-5 text-yellow-400"
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
            <p class="text-sm text-yellow-700">
              <strong>Important:</strong> Never rely solely on this application for
              emergency decisions. Always use multiple sources of information and
              follow official emergency guidance.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Third-Party Services -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Third-Party Services
      </h2>
      <p class="text-gray-700 mb-4">
        Our Service may integrate with or rely on third-party services,
        including:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Weather data providers</li>
        <li>Emergency services and government agencies</li>
        <li>Mapping and location services</li>
        <li>Communication platforms</li>
        <li>Data storage and hosting services</li>
      </ul>
      <p class="text-gray-700">
        We are not responsible for the accuracy, reliability, or availability of
        these third-party services. Any issues with third-party services are
        beyond our control and responsibility.
      </p>
    </div>

    <!-- User Indemnification -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        User Indemnification
      </h2>
      <p class="text-gray-700 mb-4">
        You agree to indemnify, defend, and hold harmless {WebsiteName}, its
        officers, directors, employees, agents, and affiliates from and against
        any claims, damages, losses, costs, or expenses (including reasonable
        attorneys' fees) arising from:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Your use of the Service</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any applicable laws or regulations</li>
        <li>Any consequences resulting from your reliance on the Service</li>
        <li>Any actions you take based on information from the Service</li>
      </ul>
    </div>

    <!-- Service Availability -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Service Availability
      </h2>
      <p class="text-gray-700 mb-4">
        We strive to maintain the Service's availability, but we do not
        guarantee:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Uninterrupted or continuous service</li>
        <li>Service availability during emergencies or disasters</li>
        <li>Compatibility with all devices or operating systems</li>
        <li>Service functionality during network outages</li>
        <li>Backup or alternative service options</li>
      </ul>
      <p class="text-gray-700">
        The Service may be temporarily unavailable due to maintenance, updates,
        technical issues, or other factors beyond our control.
      </p>
    </div>

    <!-- Termination -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
      <p class="text-gray-700 mb-4">
        We may terminate or suspend your access to the Service immediately,
        without prior notice or liability, for any reason whatsoever, including
        without limitation if you breach these Terms.
      </p>
      <p class="text-gray-700">
        Upon termination, your right to use the Service will cease immediately.
        All provisions of these Terms which by their nature should survive
        termination shall survive termination.
      </p>
    </div>

    <!-- Governing Law -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
      <p class="text-gray-700 mb-4">
        These Terms shall be governed by and construed in accordance with the
        laws of the jurisdiction in which {WebsiteName} operates, without regard
        to its conflict of law provisions.
      </p>
      <p class="text-gray-700">
        Any disputes arising from these Terms or your use of the Service shall
        be resolved in the courts of competent jurisdiction in that area.
      </p>
    </div>

    <!-- Changes to Terms -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Changes to Terms
      </h2>
      <p class="text-gray-700 mb-4">
        We reserve the right to modify or replace these Terms at any time. If a
        revision is material, we will provide at least 30 days notice prior to
        any new terms taking effect.
      </p>
      <p class="text-gray-700">
        What constitutes a material change will be determined at our sole
        discretion. Your continued use of the Service after any changes
        constitutes acceptance of the new Terms.
      </p>
    </div>

    <!-- Contact Information -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold text-gray-900 mb-4">
        Contact Information
      </h2>
      <p class="text-gray-700 mb-4">
        If you have any questions about these Terms of Use, please contact us:
      </p>
      <div class="bg-gray-50 rounded-lg p-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">Email</h4>
            <a
              href="mailto:contact@dobro.city"
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

    <!-- Final Acknowledgment -->
    <div class="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
      <h3 class="text-xl font-bold text-red-800 mb-3">Final Acknowledgment</h3>
      <p class="text-red-700 mb-4">
        By using the {WebsiteName} Service, you acknowledge that you have read, understood,
        and agree to these Terms of Use, including the critical disclaimers about
        warranties and liability limitations.
      </p>
      <p class="text-red-700">
        You understand that using this Service involves inherent risks and that
        we are not responsible for any consequences that may result from your
        use of the Service.
      </p>
    </div>
  </div>
</div>
