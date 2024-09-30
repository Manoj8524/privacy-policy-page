import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import ss from "../assets/splash_image.png";

const PrivacyPolicy = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#3B82F6', padding: '4rem' }}> {/* Increased padding */}
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>Privacy Policy</h1>
          <div style={{ marginTop: '1rem' }}>
            <img
              src={ss}
              alt="Logo"
              style={{ margin: '0 auto', height: '60px', width: 'auto' }}
            />
          </div>
        </div>

        <Card sx={{ boxShadow: 3, marginBottom: '2rem', borderRadius: 2 }}> {/* Added borderRadius to Card */}
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'left' }}>
              Privacy Policy for [App Name]
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              Last Updated: [Date]
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              [App Name] ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you provide through our mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our app, which is designed to collect minimal personal information from users. By using our app, you agree to the terms outlined in this Privacy Policy.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              1. Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              We collect the following types of information when you interact with our app:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Mobile Number: To contact you for account-related purposes, such as notifications or updates about the app." />
              </ListItem>
              <ListItem>
                <ListItemText primary="First Name and Last Name: To personalize your experience and identify your account." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address: To provide location-based services (if applicable) or maintain records related to customer management." />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              The personal information you provide is used for the following purposes:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Account Management: We use your name, mobile number, and address to manage customer records and provide support." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Personalization: We may use your name to personalize your experience within the app." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Communication: We use your mobile number to send important notifications, updates, or other relevant information related to the app." />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              3. How We Share Your Information
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              We do not sell, trade, or rent your personal information to third parties. We only share your data under the following circumstances:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Service Providers: We may share your data with trusted third-party service providers who assist us in running the app, such as cloud storage providers or IT support." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Legal Requirements: We may disclose your personal information to comply with legal obligations or requests from government authorities if required by law." />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              4. Data Security
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              We take the protection of your personal information seriously and use commercially acceptable methods to safeguard the data you provide. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              5. Your Data Rights
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              You have certain rights regarding your personal information, including:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Access and Correction: You can request access to your personal data at any time, and you may also correct or update any inaccuracies." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Deletion: If you wish to delete your personal data from our systems, you may contact us, and we will take appropriate action, subject to legal obligations." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Opt-Out: You can opt-out of receiving notifications by contacting our support or adjusting your app settings." />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              6. Children's Privacy
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              Our app is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected data from a child under 13, we will take steps to delete such data.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              7. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify users of any significant changes by posting the new Privacy Policy within the app or via email.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 2, textAlign: 'left' }}>
              8. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'left' }}>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Email: [Your Contact Email]" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address: [Your Contact Address]" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
