import React from "react";

// Don't forget to
// // download the CSS file too OR 
// // remove the following line if you're already using Tailwind 
import "./style.css";
import ss from "../assets/splash_image.png";


export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
    	<div className="w-[100%] min-h-[100vh] bg-primary p-16 shadow-lg rounded-lg">
    	  <div className="flex justify-center">
    	    <div className="w-[600px] text-center mb-8">
    	      <h1 className="text-4xl font-bold text-white mb-4 font-title">Privacy Policy</h1>
    	      <img
    	        className="object-cover m-auto h-[60px] w-auto"
    	        src={ss}
              alt="Logo"
    	      />
    	    </div>
    	  </div>
    	
    	  <div className="bg-neutral-50 p-8 rounded-lg">
    	    <h6 className="text-lg font-bold mb-4 text-left">Privacy Policy for [App Name]</h6>
    	    <p className="mb-4 text-left">Last Updated: [Date]</p>
    	    <p className="text-left mb-4">
    	      [App Name] ("we," "our," or "us") respects your privacy and is committed to
    	      protecting the personal information you provide through our mobile application.
    	      This Privacy Policy explains how we collect, use, disclose, and safeguard your data
    	      when you use our app, which is designed to collect minimal personal information from
    	      users. By using our app, you agree to the terms outlined in this Privacy Policy.
    	    </p>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">1. Information We Collect</summary>
    	      <ul className="list-disc ml-6">
    	        <li className="mb-2">Mobile Number: To contact you for account-related purposes.</li>
    	        <li className="mb-2">First Name and Last Name: To personalize your experience.</li>
    	        <li>Address: For location-based services or customer management records.</li>
    	      </ul>
    	    </details>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">2. How We Use Your Information</summary>
    	      <ul className="list-disc ml-6">
    	        <li className="mb-2">Account Management: To manage customer records.</li>
    	        <li className="mb-2">Personalization: To personalize your experience.</li>
    	        <li>Communication: For sending notifications and updates.</li>
    	      </ul>
    	    </details>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">3. How We Share Your Information</summary>
    	      <ul className="list-disc ml-6">
    	        <li className="mb-2">Service Providers: Trusted third-party service providers.</li>
    	        <li>Legal Requirements: To comply with legal obligations or authority requests.</li>
    	      </ul>
    	    </details>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">4. Data Security</summary>
    	      <p className="mb-2">
    	        We take protecting your personal information seriously; however, no method of
    	        transmission over the internet or electronic storage is 100% secure.
    	      </p>
    	    </details>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">5. Your Data Rights</summary>
    	      <ul className="list-disc ml-6">
    	        <li className="mb-2">Access and Correction: You can access and update your data.</li>
    	        <li className="mb-2">Deletion: Request to delete personal data, subject to legal obligations.</li>
    	        <li>Opt-Out: Opt-out of notifications by contacting support or adjusting settings.</li>
    	      </ul>
    	    </details>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">6. Children's Privacy</summary>
    	      <p className="mb-2">
    	        We do not knowingly collect personal information of children under 13. If discovered,
    	        data will be deleted.
    	      </p>
    	    </details>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">7. Changes to This Privacy Policy</summary>
    	      <p className="mb-2">
    	        We may update this policy to reflect changes in practices or legal requirements.
    	      </p>
    	    </details>
    	
    	    <details className="mb-4">
    	      <summary className="font-bold mb-2">8. Contact Us</summary>
    	      <ul className="list-disc ml-6">
    	        <li className="mb-2">Email: [Your Contact Email]</li>
    	        <li>Address: [Your Contact Address]</li>
    	      </ul>
    	    </details>
    	  </div>
    	</div> 
    </div>
  )
}

