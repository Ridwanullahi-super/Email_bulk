import React, { useState } from 'react';
import { Button, Card, Label, Textarea, Progress } from 'flowbite-react';
import { CheckCircle2, XCircle, Mail, AlertCircle } from 'lucide-react';

interface EmailResult {
  email: string;
  isValid: boolean;
  reason?: string;
}

export default function EmailVerifier() {
  const [emails, setEmails] = useState<string>('');
  const [results, setResults] = useState<EmailResult[]>([]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [progress, setProgress] = useState(0);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleVerification = async () => {
    setIsVerifying(true);
    setProgress(0);
    
    const emailList = emails.split('\n').filter(email => email.trim());
    const results: EmailResult[] = [];
    
    for (let i = 0; i < emailList.length; i++) {
      const email = emailList[i].trim();
      const isValid = validateEmail(email);
      
      results.push({
        email,
        isValid,
        reason: isValid ? undefined : 'Invalid email format'
      });
      
      setProgress(((i + 1) / emailList.length) * 100);
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulate API call
    }
    
    setResults(results);
    setIsVerifying(false);
  };

  const validCount = results.filter(r => r.isValid).length;
  const invalidCount = results.length - validCount;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Mail className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Bulk Email Verifier</h2>
          </div>
          
          <div>
            <div className="mb-2 block">
              <Label htmlFor="emails" value="Enter emails (one per line)" />
            </div>
            <Textarea
              id="emails"
              rows={8}
              className="font-mono"
              placeholder="john@example.com&#10;jane@example.com&#10;..."
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
            />
          </div>

          <Button
            gradientDuoTone="purpleToBlue"
            size="lg"
            onClick={handleVerification}
            disabled={isVerifying || !emails.trim()}
            className="w-full"
          >
            {isVerifying ? 'Verifying...' : 'Verify Emails'}
          </Button>

          {isVerifying && (
            <Progress
              progress={progress}
              size="lg"
              color="blue"
              labelProgress
              labelText
            />
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-green-50">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-lg font-semibold">Valid: {validCount}</span>
                  </div>
                </Card>
                <Card className="bg-red-50">
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="text-lg font-semibold">Invalid: {invalidCount}</span>
                  </div>
                </Card>
              </div>

              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 p-3 rounded-lg ${
                      result.isValid ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    {result.isValid ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    )}
                    <span className="font-mono">{result.email}</span>
                    {!result.isValid && (
                      <span className="text-red-600 text-sm">{result.reason}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}