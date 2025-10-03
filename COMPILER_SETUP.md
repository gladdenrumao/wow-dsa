# Online Compiler Configuration

The online compiler feature uses the Judge0 CE API for executing code in multiple languages.

## Setup Instructions

### For Local Development

1. Sign up for a free RapidAPI account at https://rapidapi.com/
2. Subscribe to the Judge0 CE API: https://rapidapi.com/judge0-official/api/judge0-ce
3. Get your API key from the RapidAPI dashboard
4. Create a `.env.local` file in the root directory:
   ```
   RAPIDAPI_KEY=your_api_key_here
   ```
5. Restart the development server

### For Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add a new variable:
   - Name: `RAPIDAPI_KEY`
   - Value: Your RapidAPI key
4. Redeploy your application

## Features

- **Supported Languages**: Python, C++, Java, JavaScript
- **Code Execution**: Real-time code execution with input/output support
- **Fallback Mode**: Works in simulation mode without API key (for testing)

## API Limits

The free tier of Judge0 CE API includes:
- 50 requests per day
- Basic rate limiting

For production use, consider upgrading to a paid plan.

## Troubleshooting

If you encounter issues:
1. Verify your API key is correct
2. Check that the environment variable is set
3. Ensure you haven't exceeded your API limits
4. Review the console logs for detailed error messages
