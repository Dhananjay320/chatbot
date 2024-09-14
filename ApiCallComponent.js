import React, { useState } from 'react';
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: 'api key', // Replace with your OpenAI API key
});

const ApiCallComponent = ({ userInput, setResponse, setLoading }) => {
  const handleApiRequest = async () => {
    try {
      setLoading(true);
      const completion = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userInput },
        ],
      });
      setResponse(completion.choices[0].message.content);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setResponse('Failed to fetch response from API.');
    } finally {
      setLoading(false);
    }
  };

  return { handleApiRequest };
};

export default ApiCallComponent;